"""Update resume DOCX: title, summary, and technical skills."""

from copy import deepcopy
from pathlib import Path

from docx import Document
from docx.oxml.ns import qn
from docx.text.paragraph import Paragraph

ROOT = Path(__file__).resolve().parents[1]
DOCX_PATH = ROOT / "Nivedhitha_Professional_Resume_Updated_v3.docx"
PUBLIC_DOCX = ROOT / "public" / "Nivedhitha_Professional_Resume.docx"

SKILL_ROWS = [
    (
        "Cloud & AWS: ",
        "AWS EC2, Lightsail, S3, CloudFront, Route 53, Elastic Load Balancing (ELB), WAF, ACM, Security Groups",
    ),
    (
        "DevOps & Deployment: ",
        "Application Deployment, Production Support, Release Management, Server Configuration, Environment Configuration",
    ),
    (
        "Linux & Servers: ",
        "Ubuntu, Linux Administration, Nginx, PM2, Reverse Proxy, Server Management",
    ),
    (
        "Networking & Security: ",
        "DNS, SSL/TLS, Domain Configuration, HTTPS, Security Groups, WAF, Load Balancing",
    ),
    (
        "Web & Hosting: ",
        "GoDaddy, cPanel, CWP, Web Hosting, Domain & SSL Management",
    ),
    (
        "Version Control: ",
        "Git, GitHub",
    ),
    (
        "Monitoring & Troubleshooting: ",
        "Application Logs, Server Logs, Production Troubleshooting, Incident Support",
    ),
    (
        "Frontend: ",
        "React.js, Next.js, JavaScript, HTML, CSS, Tailwind CSS",
    ),
    (
        "Backend: ",
        "Node.js, PHP, Strapi, Java, J2EE, Spring Boot, REST APIs",
    ),
    (
        "Databases: ",
        "MySQL, PostgreSQL",
    ),
    (
        "API & Development Tools: ",
        "Postman, JSON, AJAX, JDBC, Hibernate",
    ),
    (
        "Development Tools: ",
        "VS Code, IntelliJ IDEA, STS, DBeaver, Adminer, MobaXterm, Electerm",
    ),
]

SUMMARY = (
    "Cloud & DevOps Engineer with 7+ years of overall IT experience, including 3+ years "
    "of hands-on experience in AWS cloud infrastructure, Linux administration, application "
    "deployment, and production support. Experienced in AWS EC2, Lightsail, Route 53, "
    "CloudFront, Load Balancer, WAF, ACM, Nginx, PM2, SSL, DNS, and server configuration. "
    "Strong experience in deploying and maintaining production applications, troubleshooting "
    "server and application issues, and supporting enterprise environments. Currently focused "
    "on building a career in Cloud & DevOps, with an emphasis on AWS infrastructure, "
    "automation, CI/CD, containerization, and scalable cloud environments."
)


def set_run_text(paragraph: Paragraph, text: str, *, bold: bool | None = None) -> None:
    if not paragraph.runs:
        run = paragraph.add_run(text)
        if bold is not None:
            run.bold = bold
        return
    paragraph.runs[0].text = text
    if bold is not None:
        paragraph.runs[0].bold = bold
    for run in paragraph.runs[1:]:
        run.text = ""


def set_labeled_skill(paragraph: Paragraph, label: str, value: str) -> None:
    # Keep/reuse run formatting: bold label + normal value
    if len(paragraph.runs) >= 2:
        paragraph.runs[0].text = label
        paragraph.runs[0].bold = True
        paragraph.runs[1].text = value
        paragraph.runs[1].bold = False
        for run in paragraph.runs[2:]:
            run.text = ""
        return
    if paragraph.runs:
        paragraph.runs[0].text = ""
    label_run = paragraph.add_run(label)
    label_run.bold = True
    value_run = paragraph.add_run(value)
    value_run.bold = False


def insert_paragraph_after(paragraph: Paragraph) -> Paragraph:
    new_p = deepcopy(paragraph._element)
    paragraph._element.addnext(new_p)
    return Paragraph(new_p, paragraph._parent)


def clear_runs(paragraph: Paragraph) -> None:
    for run in paragraph.runs:
        run.text = ""


def main() -> None:
    doc = Document(str(DOCX_PATH))
    paras = doc.paragraphs

    # Title line
    set_run_text(paras[1], "Cloud & DevOps Engineer", bold=True)

    # Summary heading already correct; ensure body text
    set_run_text(paras[6], SUMMARY)

    # Skills heading
    set_run_text(paras[7], "TECHNICAL SKILLS", bold=True)

    existing_skill_paras = paras[8:15]  # currently 7 skill lines
    needed = len(SKILL_ROWS)

    # Ensure we have enough paragraphs for all skill rows
    skill_paras = list(existing_skill_paras)
    while len(skill_paras) < needed:
        skill_paras.append(insert_paragraph_after(skill_paras[-1]))

    # If somehow more exist (future), clear extras later by blanking
    for i, (label, value) in enumerate(SKILL_ROWS):
        set_labeled_skill(skill_paras[i], label, value)

    for extra in skill_paras[needed:]:
        clear_runs(extra)

    doc.save(str(DOCX_PATH))
    PUBLIC_DOCX.parent.mkdir(parents=True, exist_ok=True)
    doc.save(str(PUBLIC_DOCX))
    print(f"Updated: {DOCX_PATH}")
    print(f"Copied:  {PUBLIC_DOCX}")


if __name__ == "__main__":
    main()
