import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNginx,
  SiMysql,
  SiPostgresql,
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
import { FaAws, FaJava, FaServer, FaShieldAlt, FaGlobe, FaTools } from "react-icons/fa";
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
  HiOutlineCog6Tooth,
  HiOutlineRocketLaunch,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
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
  FaAws,
  HiOutlineRocketLaunch,
  SiLinux,
  MdOutlineSecurity,
  FaGlobe,
  SiGit,
  FaTools,
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  TbApi,
  HiOutlineWrenchScrewdriver,
];

/** Brand icons + colors for every skill name in resume.ts */
export const skillBrandIcons: Record<string, BrandIcon> = {
  // Cloud & AWS
  "AWS EC2": { Icon: FaAws, color: "#FF9900" },
  Lightsail: { Icon: FaAws, color: "#FF9900" },
  S3: { Icon: FaAws, color: "#569A31" },
  CloudFront: { Icon: FaAws, color: "#8C4FFF" },
  "Route 53": { Icon: FaAws, color: "#8C4FFF" },
  "Elastic Load Balancing (ELB)": { Icon: FaAws, color: "#FF9900" },
  WAF: { Icon: MdOutlineSecurity, color: "#FF9900" },
  ACM: { Icon: FaShieldAlt, color: "#FF9900" },
  "Security Groups": { Icon: MdOutlineSecurity, color: "#F59E0B" },

  // DevOps & Deployment
  "Application Deployment": { Icon: HiOutlineRocketLaunch, color: "#0D9488" },
  "Production Support": { Icon: FaTools, color: "#F59E0B" },
  "Release Management": { Icon: HiOutlineRocketLaunch, color: "#6366F1" },
  "Server Configuration": { Icon: HiOutlineCog6Tooth, color: "#64748B" },
  "Environment Configuration": { Icon: HiOutlineCog6Tooth, color: "#0EA5E9" },

  // Linux & Servers
  Ubuntu: { Icon: SiUbuntu, color: "#E95420" },
  "Linux Administration": { Icon: SiLinux, color: "#FCC624" },
  Nginx: { Icon: SiNginx, color: "#009639" },
  PM2: { Icon: HiOutlineServerStack, color: "#2B037A" },
  "Reverse Proxy": { Icon: BiNetworkChart, color: "#8B5CF6" },
  "Server Management": { Icon: FaServer, color: "#64748B" },

  // Networking & Security
  DNS: { Icon: MdDns, color: "#3B82F6" },
  "SSL/TLS": { Icon: HiOutlineLockClosed, color: "#22C55E" },
  "Domain Configuration": { Icon: FaGlobe, color: "#1BDBDB" },
  HTTPS: { Icon: HiOutlineLockClosed, color: "#16A34A" },
  "Load Balancing": { Icon: FaAws, color: "#FF9900" },

  // Web & Hosting
  GoDaddy: { Icon: FaGlobe, color: "#1BDBDB" },
  cPanel: { Icon: FaServer, color: "#FF6C2C" },
  CWP: { Icon: FaServer, color: "#0EA5E9" },
  "Web Hosting": { Icon: HiOutlineCloud, color: "#0EA5E9" },
  "Domain & SSL Management": { Icon: HiOutlineLockClosed, color: "#0D9488" },

  // Version Control
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },

  // Monitoring & Troubleshooting
  "Application Logs": { Icon: HiOutlineDocumentText, color: "#38BDF8" },
  "Server Logs": { Icon: BsTerminal, color: "#94A3B8" },
  "Production Troubleshooting": { Icon: FaTools, color: "#F97316" },
  "Incident Support": { Icon: HiOutlineExclamationTriangle, color: "#EF4444" },

  // Frontend
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },

  // Backend
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Strapi: { Icon: SiStrapi, color: "#4945FF" },
  Java: { Icon: FaJava, color: "#007396" },
  J2EE: { Icon: FaJava, color: "#EA2D2E" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  "REST APIs": { Icon: TbApi, color: "#0EA5E9" },

  // Databases
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },

  // API & Development Tools
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  JSON: { Icon: SiJson, color: "#CBD5E1" },
  AJAX: { Icon: SiJavascript, color: "#F7DF1E" },
  JDBC: { Icon: DiDatabase, color: "#007396" },
  Hibernate: { Icon: SiHibernate, color: "#59666C" },

  // Development Tools
  "VS Code": { Icon: VscCode, color: "#007ACC" },
  "IntelliJ IDEA": { Icon: SiIntellijidea, color: "#FE315D" },
  STS: { Icon: SiSpringboot, color: "#6DB33F" },
  DBeaver: { Icon: SiDbeaver, color: "#382923" },
  Adminer: { Icon: MdOutlineStorage, color: "#E18700" },
  MobaXterm: { Icon: BsTerminal, color: "#2D5A87" },
  Electerm: { Icon: BsTerminal, color: "#22C55E" },

  // Experience / project aliases
  "Amazon Lightsail": { Icon: FaAws, color: "#FF9900" },
  "Amazon S3": { Icon: FaAws, color: "#569A31" },
  "Amazon CloudFront": { Icon: FaAws, color: "#8C4FFF" },
  "Amazon Route 53": { Icon: FaAws, color: "#8C4FFF" },
  "Amazon EC2": { Icon: FaAws, color: "#FF9900" },
  "Elastic Load Balancer (ELB)": { Icon: FaAws, color: "#FF9900" },
  "Elastic Load Balancing": { Icon: FaAws, color: "#FF9900" },
  "AWS Certificate Manager (ACM)": { Icon: FaShieldAlt, color: "#FF9900" },
  "AWS WAF": { Icon: MdOutlineSecurity, color: "#FF9900" },
  "GoDaddy Hosting": { Icon: FaGlobe, color: "#1BDBDB" },
  "Linux Server Administration": { Icon: SiLinux, color: "#FCC624" },
  "Reverse Proxy Configuration": { Icon: BiNetworkChart, color: "#8B5CF6" },
  "Domain & DNS Management": { Icon: MdDns, color: "#3B82F6" },
  "SSL Certificate Installation": { Icon: HiOutlineLockClosed, color: "#22C55E" },
  "Core Java": { Icon: FaJava, color: "#007396" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#F7DF1E" },
  JSP: { Icon: FaJava, color: "#007396" },
  Struts: { Icon: FaJava, color: "#9B2335" },
  Cursor: { Icon: HiOutlineSparkles, color: "#A78BFA" },
  "Spring Tool Suite (STS)": { Icon: SiSpringboot, color: "#6DB33F" },
  MyEclipse: { Icon: FaJava, color: "#007396" },
  SonarQube: { Icon: SiSonarqubecloud, color: "#4E9BCD" },
  OpenProject: { Icon: HiOutlineBriefcase, color: "#1A67A3" },
  Asana: { Icon: SiAsana, color: "#F06A6A" },
  Workforce: { Icon: HiOutlineBriefcase, color: "#0D9488" },
  workspace: { Icon: HiOutlineCloud, color: "#6366F1" },
  DevOps: { Icon: HiOutlineCloud, color: "#FF9900" },
  AWS: { Icon: FaAws, color: "#FF9900" },
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
