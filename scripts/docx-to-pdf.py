"""Convert Word DOCX to PDF using Microsoft Word (Windows)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DOCX = ROOT / "Nivedhitha_Professional_Resume_Updated_v3.docx"
DEFAULT_PDF = ROOT / "public" / "Nivedhitha_Professional_Resume.pdf"

# Word constants
WD_FORMAT_PDF = 17
WD_ALERTS_NONE = 0


def convert(docx_path: Path, pdf_path: Path) -> None:
    if not docx_path.is_file():
        raise FileNotFoundError(f"DOCX not found: {docx_path}")

    pdf_path.parent.mkdir(parents=True, exist_ok=True)

    try:
        import win32com.client  # type: ignore
    except ImportError as exc:
        raise SystemExit(
            "Missing dependency: pywin32. Install with: pip install pywin32"
        ) from exc

    word = win32com.client.Dispatch("Word.Application")
    word.Visible = False
    word.DisplayAlerts = WD_ALERTS_NONE

    try:
        doc = word.Documents.Open(str(docx_path.resolve()), ReadOnly=True)
        try:
            # Overwrite existing PDF
            if pdf_path.exists():
                pdf_path.unlink()
            doc.SaveAs(str(pdf_path.resolve()), FileFormat=WD_FORMAT_PDF)
        finally:
            doc.Close(False)
    finally:
        word.Quit()

    print(f"Converted: {docx_path.name} -> {pdf_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert DOCX resume to PDF")
    parser.add_argument(
        "--docx",
        type=Path,
        default=DEFAULT_DOCX,
        help="Source DOCX path",
    )
    parser.add_argument(
        "--pdf",
        type=Path,
        default=DEFAULT_PDF,
        help="Output PDF path",
    )
    args = parser.parse_args()
    convert(args.docx, args.pdf)


if __name__ == "__main__":
    try:
        main()
    except Exception as err:  # noqa: BLE001
        print(f"Error: {err}", file=sys.stderr)
        sys.exit(1)
