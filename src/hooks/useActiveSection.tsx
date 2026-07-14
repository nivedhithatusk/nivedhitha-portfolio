"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLenis } from "lenis/react";
import { navLinks } from "@/data/resume";

export const HEADER_OFFSET = 96;

type ActiveSectionContextValue = {
  activeId: string;
  navigateTo: (href: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue | null>(null);

function getActiveSectionFromViewport() {
  const ids = navLinks.map((link) => link.href.replace("#", ""));
  let current = ids[0];

  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= HEADER_OFFSET + 12) {
      current = id;
    }
  }

  return current;
}

function useActiveSectionLogic(): ActiveSectionContextValue {
  const lenis = useLenis();
  const [activeId, setActiveId] = useState("about");
  const isNavigating = useRef(false);
  const activeRef = useRef(activeId);

  const setActive = useCallback((id: string) => {
    if (id === activeRef.current) return;
    activeRef.current = id;
    setActiveId(id);
  }, []);

  const navigateTo = useCallback(
    (href: string) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      isNavigating.current = true;
      setActive(id);

      if (lenis) {
        lenis.scrollTo(el, {
          offset: -HEADER_OFFSET,
          duration: 0.85,
          onComplete: () => {
            window.setTimeout(() => {
              isNavigating.current = false;
              setActive(getActiveSectionFromViewport());
            }, 50);
          },
        });
        return;
      }

      window.scrollTo({ top: el.offsetTop - HEADER_OFFSET, behavior: "smooth" });
      window.setTimeout(() => {
        isNavigating.current = false;
      }, 500);
    },
    [lenis, setActive]
  );

  useLenis(() => {
    if (isNavigating.current) return;
    setActive(getActiveSectionFromViewport());
  });

  return { activeId, navigateTo };
}

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const value = useActiveSectionLogic();
  return (
    <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) {
    throw new Error("useActiveSection must be used within ActiveSectionProvider");
  }
  return ctx;
}
