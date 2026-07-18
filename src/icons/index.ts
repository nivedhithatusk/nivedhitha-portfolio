import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNginx,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSpringboot,
  SiHibernate,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiLinux,
  SiUbuntu,
  SiIntellijidea,
  SiPostman,
  SiSonarqubecloud,
  SiAsana,
  SiDbeaver,
  SiPhp,
  SiStrapi,
  SiJson,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaAws, FaJava, FaServer, FaShieldAlt, FaGlobe, FaTools, FaDatabase } from "react-icons/fa";
import {
  HiOutlineArrowRight,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineBars3,
  HiOutlineBriefcase,
  HiOutlineChevronRight,
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiOutlineComputerDesktop,
  HiOutlineEnvelope,
  HiOutlineLink,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlineServerStack,
  HiOutlineSparkles,
  HiOutlineWrenchScrewdriver,
  HiOutlineXMark,
  HiOutlineCircleStack,
  HiOutlineLockClosed,
  HiOutlineArrowPath,
  HiOutlineCog6Tooth,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";
import { DiDatabase } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import { MdDns, MdOutlineSecurity, MdOutlineStorage } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";

export type AppIcon = IconType;

export type BrandIcon = {
  Icon: AppIcon;
  color: string;
};

export const heroTechIcons: { Icon: AppIcon; color: string; label: string }[] = [
  { Icon: SiReact, color: "#61DAFB", label: "React.js" },
  { Icon: FaAws, color: "#FF9900", label: "AWS" },
  { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
  { Icon: SiNginx, color: "#009639", label: "Nginx" },
  { Icon: SiNextdotjs, color: "#111111", label: "Next.js" },
  { Icon: FaJava, color: "#007396", label: "Java" },
];

export const skillCategoryIcons: AppIcon[] = [
  HiOutlineRocketLaunch,
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  SiGit,
  SiGithub,
  HiOutlineWrenchScrewdriver,
  HiOutlineBriefcase,
];

/** Brand icons + colors for every skill name in resume.ts */
export const skillBrandIcons: Record<string, BrandIcon> = {
  // Deployment & Infrastructure
  "Application Deployment": { Icon: HiOutlineRocketLaunch, color: "#0D9488" },
  "Linux Server Administration": { Icon: SiLinux, color: "#FCC624" },
  "Production Support": { Icon: FaTools, color: "#F59E0B" },
  "Server Migration": { Icon: HiOutlineArrowPath, color: "#6366F1" },
  "Infrastructure Management": { Icon: FaServer, color: "#64748B" },
  "Domain & DNS Management": { Icon: MdDns, color: "#3B82F6" },
  "SSL Certificate Installation": { Icon: HiOutlineLockClosed, color: "#22C55E" },
  "Reverse Proxy Configuration": { Icon: BiNetworkChart, color: "#8B5CF6" },

  // Cloud & DevOps
  "AWS EC2": { Icon: FaAws, color: "#FF9900" },
  "Amazon Lightsail": { Icon: FaAws, color: "#FF9900" },
  "Amazon S3": { Icon: FaAws, color: "#569A31" },
  "Amazon CloudFront": { Icon: FaAws, color: "#8C4FFF" },
  "Amazon Route 53": { Icon: FaAws, color: "#8C4FFF" },
  "AWS Certificate Manager (ACM)": { Icon: FaShieldAlt, color: "#FF9900" },
  "Elastic Load Balancer (ELB)": { Icon: FaAws, color: "#FF9900" },
  "AWS WAF": { Icon: MdOutlineSecurity, color: "#FF9900" },
  Nginx: { Icon: SiNginx, color: "#009639" },
  PM2: { Icon: HiOutlineServerStack, color: "#2B037A" },
  Ubuntu: { Icon: SiUbuntu, color: "#E95420" },
  cPanel: { Icon: FaServer, color: "#FF6C2C" },
  CWP: { Icon: FaServer, color: "#0EA5E9" },
  "GoDaddy Hosting": { Icon: FaGlobe, color: "#1BDBDB" },

  // Frontend
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  JSP: { Icon: FaJava, color: "#007396" },
  AJAX: { Icon: SiJavascript, color: "#F7DF1E" },

  // Backend
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  Java: { Icon: FaJava, color: "#007396" },
  J2EE: { Icon: FaJava, color: "#EA2D2E" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  Hibernate: { Icon: SiHibernate, color: "#59666C" },
  Struts: { Icon: FaJava, color: "#9B2335" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Strapi: { Icon: SiStrapi, color: "#4945FF" },
  "REST APIs": { Icon: TbApi, color: "#0EA5E9" },
  JSON: { Icon: SiJson, color: "#CBD5E1" },
  JDBC: { Icon: DiDatabase, color: "#007396" },

  // Databases
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  "Oracle Database": { Icon: FaDatabase, color: "#F80000" },

  // Version Control
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },

  // Tools & IDEs
  "VS Code": { Icon: VscCode, color: "#007ACC" },
  Cursor: { Icon: HiOutlineSparkles, color: "#A78BFA" },
  "IntelliJ IDEA": { Icon: SiIntellijidea, color: "#FE315D" },
  "Spring Tool Suite (STS)": { Icon: SiSpringboot, color: "#6DB33F" },
  MyEclipse: { Icon: FaJava, color: "#007396" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  DBeaver: { Icon: SiDbeaver, color: "#382923" },
  Adminer: { Icon: MdOutlineStorage, color: "#E18700" },
  SonarQube: { Icon: SiSonarqubecloud, color: "#4E9BCD" },
  OpenProject: { Icon: HiOutlineBriefcase, color: "#1A67A3" },
  MobaXterm: { Icon: BsTerminal, color: "#2D5A87" },
  Electerm: { Icon: BsTerminal, color: "#22C55E" },

  // Project Management
  Asana: { Icon: SiAsana, color: "#F06A6A" },
  Workforce: { Icon: HiOutlineBriefcase, color: "#0D9488" },
  workspace: { Icon: HiOutlineCloud, color: "#6366F1" },

  // Experience / project aliases
  "Core Java": { Icon: FaJava, color: "#007396" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  STS: { Icon: SiSpringboot, color: "#6DB33F" },
  DevOps: { Icon: HiOutlineCloud, color: "#FF9900" },
  "Amazon EC2": { Icon: FaAws, color: "#FF9900" },
  "Elastic Load Balancing": { Icon: FaAws, color: "#FF9900" },
  GoDaddy: { Icon: FaGlobe, color: "#1BDBDB" },
  "Web Hosting": { Icon: HiOutlineCloud, color: "#0EA5E9" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  WAF: { Icon: MdOutlineSecurity, color: "#FF9900" },
  ACM: { Icon: FaShieldAlt, color: "#FF9900" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  "Admin Panel": { Icon: HiOutlineComputerDesktop, color: "#64748B" },
  "Lead Management": { Icon: HiOutlineBriefcase, color: "#0EA5E9" },
};

export function getSkillIcon(name: string): BrandIcon {
  return (
    skillBrandIcons[name] ?? {
      Icon: HiOutlineCodeBracket,
      color: "#94A3B8",
    }
  );
}

export {
  HiOutlineArrowRight,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineBars3,
  HiOutlineBriefcase,
  HiOutlineChevronRight,
  HiOutlineEnvelope,
  HiOutlineLink,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlineSparkles,
  HiOutlineXMark,
  FaLinkedin,
};
