"""Build the public printable RSU planning pack. Run from any directory."""
from pathlib import Path
from shutil import copyfile
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "public/guides/soho-wealth-annual-rsu-planning-pack.pdf"
OUTPUT = ROOT / "output/pdf/soho-wealth-annual-rsu-planning-pack.pdf"
NAVY, GOLD = colors.HexColor("#0B1F3A"), colors.HexColor("#C9A84C")
PALE, BORDER = colors.HexColor("#F7F8FA"), colors.HexColor("#DCE3EA")
for name, filename in [("Inter", "Inter-Regular.ttf"), ("InterBold", "Inter-SemiBold.ttf"), ("Display", "PlayfairDisplay-SemiBold.ttf")]:
    pdfmetrics.registerFont(TTFont(name, str(ROOT / "scripts/assets/fonts" / filename)))
STYLES = {
    "title": ParagraphStyle("title", fontName="Display", fontSize=25, leading=31, textColor=NAVY, spaceAfter=12),
    "h2": ParagraphStyle("h2", fontName="InterBold", fontSize=13, leading=18, textColor=NAVY, spaceBefore=16, spaceAfter=9),
    "body": ParagraphStyle("body", fontName="Inter", fontSize=9, leading=14, textColor=NAVY, spaceAfter=8),
    "small": ParagraphStyle("small", fontName="Inter", fontSize=7.5, leading=11, textColor=colors.HexColor("#475569"), spaceAfter=7),
}

def p(text, style="body"):
    return Paragraph(text, STYLES[style])

def table(rows, widths, heights=None):
    t = Table([[p(str(cell), "small") for cell in row] for row in rows], colWidths=widths, rowHeights=heights)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PALE),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    return t

def footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setStrokeColor(GOLD)
    canvas.line(20*mm, h-17*mm, w-20*mm, h-17*mm)
    canvas.setFont("InterBold", 9)
    canvas.setFillColor(NAVY)
    canvas.drawString(20*mm, h-13*mm, "SOHO WEALTH")
    canvas.setFont("Inter", 7)
    canvas.drawString(20*mm, 14*mm, "sohowealth.in  |  Annual RSU planning pack  |  October 2026")
    canvas.drawRightString(w-20*mm, 14*mm, str(doc.page))
    canvas.restoreState()

story = [
    p("Your annual RSU planning pack", "title"),
    p("A private worksheet for Indian professionals and globally connected families. Review vested shares, future awards, goals and specialist questions before the next vest or trading window."),
    p("1. Build the current picture", "h2"),
    p("Use approximate values in one currency and one valuation date. Keep account numbers, passwords and confidential employer documents out of this worksheet."),
    table([
        ["Review date / currency", "Your notes"],
        ["Employer / employment location", ""],
        ["Current and expected tax-residence countries", ""],
        ["Vested employer shares: current market value", ""],
        ["Other liquid investments, excluding same-sector holdings below", ""],
        ["Same-sector investments outside employer shares", ""],
        ["Unvested awards: approximate value and vest dates", ""],
        ["Annual salary and bonus (record separately)", ""],
    ], [92*mm, 78*mm], [None]+[31]*7),
    p("2. Measure concentration", "h2"),
    p("Vested concentration = vested employer shares / (vested employer shares + other liquid investments + same-sector investments). Do not include the same holding twice."),
    p("Broader equity dependency = (employer shares + same-sector investments + unvested awards) / (liquid portfolio + unvested awards). This is a scenario measure: unvested awards can lapse and their value changes."),
    p("Salary is income, not an investment asset, so it stays outside both percentages. Review career and investment dependency together. These measures do not establish a safe concentration limit.", "small"),
    PageBreak(),
    p("Connect shares with real decisions", "title"),
    p("3. Map goals and cash needs", "h2"),
    table([
        ["Goal / cash need", "Target date", "Amount / currency", "Depends on these shares?"],
        ["", "", "", ""], ["", "", "", ""], ["", "", "", ""],
    ], [54*mm, 34*mm, 42*mm, 40*mm], [None, 48, 48, 48]),
    p("4. Write the questions before choosing a rule", "h2"),
    p("If this value arrived as cash today, would you buy the same amount of employer stock? What happens to your family plan if the share price falls materially while employment income is also interrupted?"),
    p("Discuss alternatives such as selling a fixed portion at vest, using a target range, or staging reductions. First confirm trading restrictions, tax consequences, transaction costs and liquidity needs. This pack does not recommend a sale or a specific allocation."),
    table([
        ["Decision to evaluate", "Your discussion notes"],
        ["Candidate vest-sale or target-range rule", ""],
        ["Cash reserve and near-term goals", ""],
        ["Destination for proceeds / currency needs", ""],
        ["When the rule should be reviewed", ""],
    ], [78*mm, 92*mm], [None, 43, 43, 43, 43]),
    p("Keep the completed pack private. It is a printable worksheet, not a secure document-upload channel.", "small"),
    PageBreak(),
    p("Your annual review checklist", "title"),
    p("5. Resolve specialist questions", "h2"),
    p("[ ] Confirm residency and reporting obligations with a qualified tax professional in each relevant country.<br/>[ ] Review vesting, withholding, cost-basis and sale records; do not assume withholding settles the final liability.<br/>[ ] Ask which foreign-asset, account, exchange-control or remittance requirements apply to your circumstances.<br/>[ ] Check employer trading windows, pre-clearance and restrictions before placing an order.<br/>[ ] Confirm broker fees, foreign exchange costs and transfer documentation.<br/>[ ] Review nominees, account access and family continuity with appropriate professionals."),
    p("6. Set the next review", "h2"),
    table([
        ["Action", "Owner / target date"],
        ["Reconcile holdings and vest schedule", ""],
        ["Tax / legal questions to resolve", ""],
        ["Document the policy after specialist review", ""],
        ["Next annual or event-triggered review", ""],
    ], [98*mm, 72*mm], [None, 36, 36, 36, 36]),
    p("Continue online", "h2"),
    p('<link href="https://www.sohowealth.in/tools/rsu-concentration-calculator" color="#0B1F3A">Concentration calculator: sohowealth.in/tools/rsu-concentration-calculator</link><br/><link href="https://www.sohowealth.in/tools/rsu-decision-check" color="#0B1F3A">Five-question check: sohowealth.in/tools/rsu-decision-check</link><br/><link href="https://www.sohowealth.in/rsu-esops" color="#0B1F3A">RSU portfolio review: sohowealth.in/rsu-esops</link>', "small"),
    p("Speak with SoHo Wealth: +91 90329 99466 | invest@sohowealth.in", "small"),
    p("Educational worksheet only. SoHo Wealth is an AMFI mutual fund and SIF distributor (ARN 306593) and an APMI PMS distributor (APRN01233), not a SEBI Registered Investment Adviser. Distribution compensation may come from product providers. This pack is not tax, legal, security-specific or personalized investment advice. Confirm current requirements and individual circumstances with appropriately qualified professionals.", "small"),
]

if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    DEST.parent.mkdir(parents=True, exist_ok=True)
    SimpleDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=20*mm, rightMargin=20*mm,
                      topMargin=26*mm, bottomMargin=24*mm,
                      title="SoHo Wealth Annual RSU Planning Pack", author="SoHo Wealth").build(story, onFirstPage=footer, onLaterPages=footer)
    copyfile(OUTPUT, DEST)
    print(DEST)
