export const personal = {
  name: "Nivedhitha A",
  firstName: "Nivedhitha",
  designation: "Cloud & DevOps Engineer",
  tagline:
    "AWS infrastructure, Linux administration, and production support for enterprise applications.",
  email: "nivedhithapraba@gmail.com",
  location: "Chennai, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/nivedhitha-praba-07925913a",
  portfolio: "https://nivedhitha-portfolio.vercel.app",
  yearsOfExperience: "7+",
  resume: "/Nivedhitha_Professional_Resume.pdf",
  resumeLabel: "Nivedhitha_Professional_Resume.pdf",
};

export const summary =
  "Cloud & DevOps Engineer with 7+ years of overall IT experience, including 3+ years of hands-on experience in AWS cloud infrastructure, Linux administration, application deployment, and production support. Experienced in AWS EC2, Lightsail, Route 53, CloudFront, Load Balancer, WAF, ACM, Nginx, PM2, SSL, DNS, and server configuration. Strong experience in deploying and maintaining production applications, troubleshooting server and application issues, and supporting enterprise environments. Currently focused on building a career in Cloud & DevOps, with an emphasis on AWS infrastructure, automation, CI/CD, containerization, and scalable cloud environments.";

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type ExperienceRole = {
  id: string;
  company: string;
  role: string;
  roleSubtitle?: string;
  period: string;
  location: string;
  highlights: string[];
  keyProjects?: string[];
  skills: string[];
};

export const experience: ExperienceRole[] = [
  {
    id: "tuskmelon",
    company: "Tuskmelon Business Solutions",
    role: "Cloud & DevOps Engineer",
    roleSubtitle: "Senior Full Stack Developer & DevOps Engineer",
    period: "Sep 2023 – Present",
    location: "Chennai",
    highlights: [
      "Provision and maintain AWS cloud infrastructure using EC2, Lightsail, Route 53, CloudFront, Elastic Load Balancing, WAF, and ACM for banking, healthcare, and enterprise clients.",
      "Administer Linux/Ubuntu servers with Nginx, PM2, SSL/TLS, DNS, and reverse-proxy configurations across production environments.",
      "Deploy and maintain production applications, troubleshoot server and application issues, and manage multi-environment configurations, logging, and production incidents.",
      "Support full-stack application delivery using React.js, Next.js, Node.js, PHP, and Strapi, with deployments across AWS, GoDaddy, cPanel, and CWP environments.",
    ],
    keyProjects: [
      "RHFL (Repco Home) — Next.js frontend and Strapi + MySQL backend deployed and maintained on AWS EC2 (Ubuntu).",
      "Equitas Gurukul — Next.js frontend/admin application with Strapi + MySQL, developed and deployed on AWS EC2 (Ubuntu).",
      "Medall Healthcare — Next.js frontend and Node.js backend deployed and maintained on AWS EC2 (Ubuntu).",
      "City Union Bank (GMB) — React.js + Node.js + MySQL application deployed on AWS EC2, with domain configuration through GoDaddy.",
      "Equitas Locate — Next.js + Strapi + MySQL application deployed on AWS EC2 (Ubuntu) with WAF, Elastic Load Balancer, ACM, Security Groups, Nginx, and PM2.",
      "Repco Bank (Website) — PHP + MySQL website deployed and managed using cPanel.",
      "Repco Bank (GMB) — React.js + Node.js application developed and deployed on AWS EC2 (Ubuntu).",
      "Internal Platforms — Workforce, Workspace, TuskQR, Tusk Cloud, and Social Media Manager applications using Next.js/React/Node.js + MySQL, deployed on AWS EC2 and Lightsail.",
      "Uniscan — Admin panel and website forms developed and deployed on AWS EC2 (Ubuntu), with ongoing production support for Unico, RHFL, Equitas, CUB, and Repco applications.",
      "Aptus India Locate — Next.js + Strapi + MySQL application deployed and maintained on AWS EC2 (Ubuntu).",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "PHP",
      "Strapi",
      "MySQL",
      "Tailwind CSS",
      "Ubuntu",
      "AWS EC2",
      "Amazon Lightsail",
      "Amazon CloudFront",
      "Amazon S3",
      "Amazon Route 53",
      "Elastic Load Balancer (ELB)",
      "Nginx",
      "PM2",
      "GoDaddy",
      "cPanel",
      "CWP",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Cursor",
      "DBeaver",
      "Adminer",
      "MobaXterm",
      "Electerm",
      "Asana",
      "Workforce",
      "workspace",
    ],
  },
  {
    id: "creditmantri",
    company: "CreditMantri",
    role: "Full Stack Developer",
    period: "Sep 2022 – Mar 2023",
    location: "Chennai",
    highlights: [
      "Led API development for HDFC Fintech Personal Loan and Credit Card processing, customer onboarding, and KYC document uploads.",
      "Implemented webhook integrations for SMS, Email, and WhatsApp using WebEngage.",
      "Developed custom SMS APIs with bulk and single-message processing capabilities.",
      "Delivered mission-critical SBI modules (LDB, EDB, and Emudhra) in coordination with QA and DevOps teams.",
      "Managed end-to-end API delivery, Postman testing, database schema design, deployment support, and production issue resolution.",
    ],
    skills: [
      "Java",
      "J2EE",
      "Spring Boot",
      "JSP",
      "AJAX",
      "HTML",
      "JSON",
      "MySQL",
      "PostgreSQL",
      "Git",
      "Postman",
      "IntelliJ IDEA",
      "STS",
      "VS Code",
      "SonarQube",
    ],
  },
  {
    id: "htc",
    company: "HTC Global Services",
    role: "L2 Engineer",
    period: "Feb 2022 – Sep 2022",
    location: "Chennai",
    highlights: [
      "Completed structured training in Java Full Stack Development, Spring Boot, REST APIs, and relational databases.",
      "Developed applications using Java, Spring Boot, JSP, MySQL and PostgreSQL.",
      "Gained practical experience with Git, Linux fundamentals, application deployment, and cross-platform deployment practices.",
    ],
    skills: [
      "Java",
      "J2EE",
      "Spring Boot",
      "Hibernate",
      "JSP",
      "AJAX",
      "HTML",
      "JSON",
      "MySQL",
      "PostgreSQL",
      "Git",
      "Postman",
      "OpenProject",
      "STS",
      "DBeaver",
    ],
  },
  {
    id: "softmedia",
    company: "Soft Media ERP",
    role: "Full Stack Developer",
    period: "Jun 2019 – Feb 2022",
    location: "Chennai",
    highlights: [
      "Developed and maintained the Daily Thanthi Media ERP, covering Advertisement, Circulation, Accounts, HR, and Purchase modules.",
      "Implemented DAO design patterns to support application architecture and data integrity.",
      "Developed dynamic PDF and text reporting modules for business stakeholders.",
      "Automated payroll and procurement workflows with role-based access controls.",
    ],
    skills: [
      "Java",
      "J2EE",
      "Struts",
      "Hibernate",
      "JSP",
      "AJAX",
      "HTML",
      "JavaScript",
      "JDBC",
      "MySQL",
      "MyEclipse",
      "Postman",
    ],
  },
];

export const skillCategories = [
  {
    title: "Cloud & AWS",
    skills: [
      "AWS EC2",
      "Lightsail",
      "S3",
      "CloudFront",
      "Route 53",
      "Elastic Load Balancing (ELB)",
      "WAF",
      "ACM",
      "Security Groups",
    ],
  },
  {
    title: "DevOps & Deployment",
    skills: [
      "Application Deployment",
      "Production Support",
      "Release Management",
      "Server Configuration",
      "Environment Configuration",
    ],
  },
  {
    title: "Linux & Servers",
    skills: [
      "Ubuntu",
      "Linux Administration",
      "Nginx",
      "PM2",
      "Reverse Proxy",
      "Server Management",
    ],
  },
  {
    title: "Networking & Security",
    skills: [
      "DNS",
      "SSL/TLS",
      "Domain Configuration",
      "HTTPS",
      "Security Groups",
      "WAF",
      "Load Balancing",
    ],
  },
  {
    title: "Web & Hosting",
    skills: [
      "GoDaddy",
      "cPanel",
      "CWP",
      "Web Hosting",
      "Domain & SSL Management",
    ],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Monitoring & Troubleshooting",
    skills: [
      "Application Logs",
      "Server Logs",
      "Production Troubleshooting",
      "Incident Support",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "PHP",
      "Strapi",
      "Java",
      "J2EE",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "API & Development Tools",
    skills: ["Postman", "JSON", "AJAX", "JDBC", "Hibernate"],
  },
  {
    title: "Development Tools",
    skills: [
      "VS Code",
      "IntelliJ IDEA",
      "STS",
      "DBeaver",
      "Adminer",
      "MobaXterm",
      "Electerm",
    ],
  },
];

export const allSkills = Array.from(
  new Set(skillCategories.flatMap((cat) => cat.skills)),
).sort();

export const marqueeSkills = allSkills;

export type Project = {
  name: string;
  client: string;
  company: string;
  domain: string;
  stack: string[];
  description: string;
};

export const projects: Project[] = [
  {
    name: "Repco Home Finance",
    client: "RHFL",
    company: "Tuskmelon Business Solutions",
    domain: "Banking",
    stack: ["Next.js", "Strapi", "MySQL", "Linux"],
    description:
      "Next.js frontend and Strapi + MySQL backend deployed and maintained on AWS EC2 (Ubuntu).",
  },
  {
    name: "Equitas Gurukul",
    client: "Equitas",
    company: "Tuskmelon Business Solutions",
    domain: "Education",
    stack: ["Next.js", "Strapi", "MySQL", "Amazon EC2"],
    description:
      "Next.js frontend/admin application with Strapi + MySQL, developed and deployed on AWS EC2 (Ubuntu).",
  },
  {
    name: "Medall Healthcare",
    client: "Medall",
    company: "Tuskmelon Business Solutions",
    domain: "Healthcare",
    stack: ["Next.js", "Node.js", "Amazon EC2"],
    description:
      "Next.js frontend and Node.js backend deployed and maintained on AWS EC2 (Ubuntu).",
  },
  {
    name: "City Union Bank GMB",
    client: "CUB",
    company: "Tuskmelon Business Solutions",
    domain: "Banking",
    stack: ["React.js", "Node.js", "MySQL", "Amazon EC2", "GoDaddy"],
    description:
      "React.js + Node.js + MySQL application deployed on AWS EC2, with domain configuration through GoDaddy.",
  },
  {
    name: "Equitas Locate",
    client: "Equitas",
    company: "Tuskmelon Business Solutions",
    domain: "Banking",
    stack: [
      "Next.js",
      "Strapi",
      "MySQL",
      "AWS WAF",
      "ELB",
      "ACM",
      "Nginx",
      "PM2",
    ],
    description:
      "Next.js + Strapi + MySQL deployed on AWS EC2 (Ubuntu) with WAF, Elastic Load Balancer, ACM, Security Groups, Nginx, and PM2.",
  },
  {
    name: "Aptus India Locate",
    client: "Aptus",
    company: "Tuskmelon Business Solutions",
    domain: "Banking",
    stack: ["Next.js", "Strapi", "MySQL", "Amazon EC2"],
    description:
      "Next.js + Strapi + MySQL application deployed and maintained on AWS EC2 (Ubuntu).",
  },
  {
    name: "Social Media Manager",
    client: "Tuskmelon (Internal)",
    company: "Tuskmelon Business Solutions",
    domain: "Enterprise",
    stack: ["Next.js", "MySQL", "Amazon EC2"],
    description:
      "Internal Next.js + MySQL application deployed on AWS EC2 and Lightsail.",
  },
  {
    name: "Repco Bank",
    client: "Repco Bank",
    company: "Tuskmelon Business Solutions",
    domain: "Banking",
    stack: ["PHP", "MySQL", "cPanel"],
    description:
      "PHP + MySQL website deployed and managed using cPanel.",
  },
  {
    name: "Repco Bank GMB",
    client: "Repco Bank",
    company: "Tuskmelon Business Solutions",
    domain: "Banking",
    stack: ["React.js", "Node.js", "MySQL", "Amazon EC2"],
    description:
      "React.js + Node.js application developed and deployed on AWS EC2 (Ubuntu).",
  },
  {
    name: "Workforce Platform",
    client: "Tuskmelon",
    company: "Tuskmelon Business Solutions",
    domain: "Enterprise",
    stack: ["Next.js", "Node.js", "MySQL", "Amazon EC2", "Lightsail"],
    description:
      "End-to-end deployment and server administration on EC2 and Lightsail.",
  },
  {
    name: "Workspace Platform",
    client: "Tuskmelon",
    company: "Tuskmelon Business Solutions",
    domain: "Enterprise",
    stack: ["React.js", "Node.js", "MySQL", "Amazon EC2"],
    description: "Production deployment and infrastructure support on EC2.",
  },
  {
    name: "TuskQR",
    client: "Tuskmelon",
    company: "Tuskmelon Business Solutions",
    domain: "Enterprise",
    stack: ["Next.js", "Node.js", "PM2"],
    description: "QR platform deployment and ongoing server maintenance.",
  },
  {
    name: "Tusk Cloud",
    client: "Tuskmelon",
    company: "Tuskmelon Business Solutions",
    domain: "Enterprise",
    stack: ["AWS", "Nginx", "PM2"],
    description: "Cloud platform deployment and ongoing DevOps support.",
  },
  {
    name: "Uniscan",
    client: "Uniscan",
    company: "Tuskmelon Business Solutions",
    domain: "Healthcare",
    stack: ["Admin Panel", "Ubuntu"],
    description:
      "Admin panel and website forms developed and deployed on AWS EC2 (Ubuntu).",
  },
  {
    name: "HDFC Fintech PL & CC",
    client: "HDFC",
    company: "CreditMantri",
    domain: "Banking",
    stack: ["Java", "Spring Boot", "J2EE", "PostgreSQL", "MySQL"],
    description:
      "APIs for loan processing, customer onboarding, and KYC document uploads.",
  },
  {
    name: "SBI Banking Modules",
    client: "SBI",
    company: "CreditMantri",
    domain: "Banking",
    stack: ["Java", "Spring Boot", "JSP", "PostgreSQL"],
    description:
      "Mission-critical modules — LDB, EDB, Emudhra — with QA and DevOps coordination.",
  },
  {
    name: "Kurundhagaval SMS API",
    client: "CreditMantri",
    company: "CreditMantri",
    domain: "Fintech",
    stack: ["Java", "Spring Boot", "JSON", "WebEngage"],
    description:
      "Custom SMS APIs with bulk and single-message processing; WebEngage integration.",
  },
  {
    name: "Daily Thanthi Media ERP",
    client: "Daily Thanthi",
    company: "Soft Media ERP",
    domain: "Media",
    stack: ["Java", "JSP", "Struts", "Hibernate", "JDBC"],
    description:
      "Enterprise ERP — Advertisement, Circulation, Accounts, HR, Purchase modules.",
  },
];

export const projectCompanies = Array.from(
  new Set(projects.map((p) => p.company)),
);

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University of Madras",
    period: "2018 – 2021",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St. Anne's Arts & Science College",
    period: "2015 – 2018",
  },
];

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "3+", label: "Cloud & DevOps" },
  { value: "15+", label: "Projects Deployed" },
  { value: "4", label: "Companies" },
];
