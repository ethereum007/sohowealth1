from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "output" / "pdf" / "soho-wealth-rsu-tax-diversification-guide.pdf"
PUBLIC_PATH = ROOT / "public" / "guides" / "soho-wealth-rsu-tax-diversification-guide.pdf"

PAGE_WIDTH, PAGE_HEIGHT = A4
NAVY = colors.HexColor("#0B1F3A")
DEEP_NAVY = colors.HexColor("#07192F")
GOLD = colors.HexColor("#C9A84C")
DARK_GOLD = colors.HexColor("#8B6815")
CREAM = colors.HexColor("#FDF9EF")
SLATE = colors.HexColor("#475569")
LIGHT_SLATE = colors.HexColor("#64748B")
PALE = colors.HexColor("#F7F8FA")
BORDER = colors.HexColor("#DCE3EA")
WHITE = colors.white


def register_fonts():
    font_dir = ROOT / "scripts" / "assets" / "fonts"
    paths = {
        "body": font_dir / "Inter-Regular.ttf",
        "body_bold": font_dir / "Inter-SemiBold.ttf",
        "display": font_dir / "PlayfairDisplay-Regular.ttf",
        "display_bold": font_dir / "PlayfairDisplay-SemiBold.ttf",
    }
    if all(path.exists() for path in paths.values()):
        pdfmetrics.registerFont(TTFont("SoHoInter", str(paths["body"])))
        pdfmetrics.registerFont(TTFont("SoHoInter-SemiBold", str(paths["body_bold"])))
        pdfmetrics.registerFont(TTFont("SoHoPlayfair", str(paths["display"])))
        pdfmetrics.registerFont(
            TTFont("SoHoPlayfair-SemiBold", str(paths["display_bold"]))
        )
        pdfmetrics.registerFontFamily(
            "SoHoInter",
            normal="SoHoInter",
            bold="SoHoInter-SemiBold",
            italic="SoHoInter",
            boldItalic="SoHoInter-SemiBold",
        )
        pdfmetrics.registerFontFamily(
            "SoHoPlayfair",
            normal="SoHoPlayfair",
            bold="SoHoPlayfair-SemiBold",
            italic="SoHoPlayfair",
            boldItalic="SoHoPlayfair-SemiBold",
        )
        return (
            "SoHoInter",
            "SoHoInter-SemiBold",
            "SoHoPlayfair",
            "SoHoPlayfair-SemiBold",
        )
    return "Helvetica", "Helvetica-Bold", "Times-Roman", "Times-Bold"


FONT, FONT_BOLD, DISPLAY_FONT, DISPLAY_FONT_BOLD = register_fonts()


def pstyle(name, **kwargs):
    defaults = dict(
        fontName=FONT,
        fontSize=9.2,
        leading=13.2,
        textColor=SLATE,
        spaceAfter=0,
    )
    defaults.update(kwargs)
    return ParagraphStyle(name, **defaults)


BODY = pstyle("Body")
BODY_SMALL = pstyle("BodySmall", fontSize=8, leading=11.5)
BODY_TINY = pstyle("BodyTiny", fontSize=7.2, leading=10.2, textColor=LIGHT_SLATE)
BODY_WHITE = pstyle("BodyWhite", fontSize=10.5, leading=15.5, textColor=colors.HexColor("#D9E2EB"))
TITLE = pstyle(
    "Title",
    fontName=DISPLAY_FONT_BOLD,
    fontSize=27,
    leading=31,
    textColor=NAVY,
    spaceAfter=7,
)
TITLE_WHITE = pstyle(
    "TitleWhite",
    fontName=DISPLAY_FONT_BOLD,
    fontSize=31,
    leading=35,
    textColor=WHITE,
)
SUBTITLE_WHITE = pstyle(
    "SubtitleWhite",
    fontSize=13,
    leading=18,
    textColor=colors.HexColor("#D9E2EB"),
)
EYEBROW = pstyle(
    "Eyebrow",
    fontName=FONT_BOLD,
    fontSize=7.5,
    leading=10,
    textColor=DARK_GOLD,
    spaceAfter=5,
)
EYEBROW_WHITE = pstyle(
    "EyebrowWhite",
    fontName=FONT_BOLD,
    fontSize=8,
    leading=11,
    textColor=GOLD,
)
H2 = pstyle(
    "H2",
    fontName=DISPLAY_FONT_BOLD,
    fontSize=13,
    leading=16,
    textColor=NAVY,
    spaceAfter=4,
)
H3 = pstyle(
    "H3",
    fontName=DISPLAY_FONT_BOLD,
    fontSize=10,
    leading=13,
    textColor=NAVY,
    spaceAfter=3,
)
NUMBER = pstyle(
    "Number",
    fontName=DISPLAY_FONT_BOLD,
    fontSize=18,
    leading=20,
    textColor=DARK_GOLD,
    alignment=TA_CENTER,
)
CENTER_SMALL = pstyle(
    "CenterSmall",
    fontSize=7.6,
    leading=10.5,
    textColor=LIGHT_SLATE,
    alignment=TA_CENTER,
)
COVER_METRIC = pstyle(
    "CoverMetric",
    fontSize=8,
    leading=11,
    textColor=colors.HexColor("#D9E2EB"),
    alignment=TA_CENTER,
)
LINK = pstyle(
    "Link",
    fontSize=7.5,
    leading=10.5,
    textColor=NAVY,
)


def paragraph(text, style=BODY):
    return Paragraph(text, style)


def draw_later_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, PAGE_HEIGHT - 18 * mm, PAGE_WIDTH, 18 * mm, fill=1, stroke=0)
    canvas.setFont(DISPLAY_FONT_BOLD, 10)
    canvas.setFillColor(WHITE)
    canvas.drawString(18 * mm, PAGE_HEIGHT - 11.5 * mm, "SoHo Wealth")
    canvas.setFont(FONT, 7.5)
    canvas.setFillColor(GOLD)
    canvas.drawRightString(
        PAGE_WIDTH - 18 * mm,
        PAGE_HEIGHT - 11.5 * mm,
        "RSU TAX & DIVERSIFICATION GUIDE",
    )
    canvas.setStrokeColor(BORDER)
    canvas.line(18 * mm, 14 * mm, PAGE_WIDTH - 18 * mm, 14 * mm)
    canvas.setFont(FONT, 7)
    canvas.setFillColor(LIGHT_SLATE)
    canvas.drawString(
        18 * mm,
        9 * mm,
        "Educational material only - not tax, legal, FEMA or security-specific advice.",
    )
    canvas.drawRightString(PAGE_WIDTH - 18 * mm, 9 * mm, f"{doc.page - 1}")
    canvas.restoreState()


def draw_cover(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(DEEP_NAVY)
    canvas.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.rect(0, PAGE_HEIGHT - 4 * mm, PAGE_WIDTH, 4 * mm, fill=1, stroke=0)
    canvas.setStrokeColor(colors.Color(0.79, 0.66, 0.3, alpha=0.25))
    canvas.setLineWidth(0.8)
    canvas.circle(PAGE_WIDTH - 15 * mm, PAGE_HEIGHT - 48 * mm, 48 * mm, fill=0, stroke=1)
    canvas.circle(PAGE_WIDTH - 15 * mm, PAGE_HEIGHT - 48 * mm, 35 * mm, fill=0, stroke=1)
    canvas.setFont(DISPLAY_FONT_BOLD, 12)
    canvas.setFillColor(WHITE)
    canvas.drawString(18 * mm, PAGE_HEIGHT - 20 * mm, "SoHo Wealth")
    canvas.setFont(FONT, 7)
    canvas.setFillColor(GOLD)
    canvas.drawRightString(PAGE_WIDTH - 18 * mm, PAGE_HEIGHT - 20 * mm, "IT PROFESSIONALS")
    canvas.setFont(FONT, 7)
    canvas.setFillColor(colors.HexColor("#9FB0C0"))
    canvas.drawString(18 * mm, 15 * mm, "Prepared 28 July 2026 | www.sohowealth.in")
    canvas.restoreState()


def draw_page(canvas, doc):
    if doc.page == 1:
        draw_cover(canvas, doc)
    else:
        draw_later_page(canvas, doc)


def redraw_content_chrome(canvas, doc):
    if doc.page > 1:
        draw_later_page(canvas, doc)


def card(content, width, background=PALE, padding=5 * mm, border=BORDER):
    table = Table([[content]], colWidths=[width])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), background),
                ("BOX", (0, 0), (-1, -1), 0.6, border),
                ("LEFTPADDING", (0, 0), (-1, -1), padding),
                ("RIGHTPADDING", (0, 0), (-1, -1), padding),
                ("TOPPADDING", (0, 0), (-1, -1), padding),
                ("BOTTOMPADDING", (0, 0), (-1, -1), padding),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return table


def page_heading(eyebrow, title, intro):
    return [
        paragraph(eyebrow.upper(), EYEBROW),
        paragraph(title, TITLE),
        paragraph(intro, BODY),
        Spacer(1, 7 * mm),
    ]


def two_column_cards(items, cell_width, gap=4 * mm):
    rows = []
    for index in range(0, len(items), 2):
        row = [items[index]]
        if index + 1 < len(items):
            row.append(items[index + 1])
        else:
            row.append("")
        rows.append(row)
    table = Table(rows, colWidths=[cell_width, cell_width], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), gap / 2),
                ("RIGHTPADDING", (0, 0), (-1, -1), gap / 2),
                ("TOPPADDING", (0, 0), (-1, -1), gap / 2),
                ("BOTTOMPADDING", (0, 0), (-1, -1), gap / 2),
            ]
        )
    )
    return table


def build_pdf():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_PATH.parent.mkdir(parents=True, exist_ok=True)

    frame = Frame(
        18 * mm,
        17 * mm,
        PAGE_WIDTH - 36 * mm,
        PAGE_HEIGHT - 41 * mm,
        leftPadding=0,
        rightPadding=0,
        topPadding=5 * mm,
        bottomPadding=0,
        id="content",
    )
    doc = BaseDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        title="RSU Tax and Diversification Guide for IT Professionals",
        author="SoHo Wealth",
        subject="RSU records, tax touchpoints, concentration and diversification decisions",
        creator="SoHo Wealth",
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=23 * mm,
        bottomMargin=17 * mm,
    )
    doc.addPageTemplates(
        [
            PageTemplate(
                id="All",
                frames=[frame],
                onPage=draw_page,
                onPageEnd=redraw_content_chrome,
            )
        ]
    )

    content_width = PAGE_WIDTH - 36 * mm
    half_width = (content_width - 4 * mm) / 2
    third_width = (content_width - 6 * mm) / 3
    story = []

    # Cover
    story.extend(
        [
            Spacer(1, 50 * mm),
            paragraph("SOHO WEALTH FIELD GUIDE", EYEBROW_WHITE),
            Spacer(1, 4 * mm),
            paragraph("RSU tax &<br/>diversification guide", TITLE_WHITE),
            Spacer(1, 7 * mm),
            paragraph(
                "A practical decision framework for Indian IT professionals with foreign employer equity.",
                SUBTITLE_WHITE,
            ),
            Spacer(1, 15 * mm),
            Table(
                [
                    [
                        paragraph("<font color='#C9A84C' size='14'><b>3</b></font><br/>tax and reporting moments", COVER_METRIC),
                        paragraph("<font color='#C9A84C' size='14'><b>4</b></font><br/>routes to evaluate", COVER_METRIC),
                        paragraph("<font color='#C9A84C' size='14'><b>10</b></font><br/>records to organise", COVER_METRIC),
                    ]
                ],
                colWidths=[third_width] * 3,
                style=TableStyle(
                    [
                        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#122C48")),
                        ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#39516A")),
                        ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#39516A")),
                        ("TEXTCOLOR", (0, 0), (-1, -1), WHITE),
                        ("TOPPADDING", (0, 0), (-1, -1), 6 * mm),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 6 * mm),
                    ]
                ),
            ),
            Spacer(1, 15 * mm),
            paragraph(
                "A practical decision guide for Indian IT professionals with employer stock, foreign assets and cross-border portfolio questions.",
                BODY_WHITE,
            ),
            Spacer(1, 6 * mm),
            paragraph(
                "This is educational material. It is not a tax return, legal opinion, FEMA advice or recommendation to buy, hold or sell any security.",
                pstyle("CoverNote", fontSize=8, leading=12, textColor=colors.HexColor("#9FB0C0")),
            ),
            PageBreak(),
        ]
    )

    # Page 2
    story.extend(
        page_heading(
            "Start here",
            "Five decisions - in the right order",
            "Do not begin with a product or a price target. Begin by making the records reliable, separating the events and understanding what the household already depends on.",
        )
    )
    decisions = [
        (
            "01",
            "What do I own today?",
            "Separate vested shares, unvested awards, cash at the broker and sale proceeds. A grant headline is not the same as liquid wealth.",
        ),
        (
            "02",
            "What has already been taxed?",
            "Reconcile the vest or allotment statement, payslip, employer tax records and broker statement before estimating a later sale gain.",
        ),
        (
            "03",
            "What must be reported?",
            "Ask a CA familiar with foreign assets which return and schedules apply to your residential status, holdings, income and transactions.",
        ),
        (
            "04",
            "How concentrated am I?",
            "Measure vested employer shares against the liquid portfolio, then treat salary, career capital and future grants as connected exposures.",
        ),
        (
            "05",
            "What route fits the goal?",
            "Compare holding, transferring, selling and reinvesting only after liquidity, tax, FEMA, costs, access and product risks are clear.",
        ),
    ]
    decision_cards = []
    for number, title, copy in decisions:
        decision_cards.append(
            card(
                [
                    paragraph(number, NUMBER),
                    Spacer(1, 2 * mm),
                    paragraph(title, H2),
                    paragraph(copy, BODY_SMALL),
                ],
                half_width - 2 * mm,
            )
        )
    story.append(two_column_cards(decision_cards, half_width))
    story.append(Spacer(1, 5 * mm))
    story.append(
        card(
            [
                paragraph("THE CONTROL QUESTION", EYEBROW),
                paragraph(
                    "If your employer gave you the same value in cash today, would you use all of it to buy this company again?",
                    pstyle(
                        "ControlQuestion",
                        fontName=DISPLAY_FONT_BOLD,
                        fontSize=14,
                        leading=18,
                        textColor=NAVY,
                    ),
                ),
                Spacer(1, 2 * mm),
                paragraph(
                    "The answer does not create a sell instruction. It exposes whether inertia, familiarity or a deliberate portfolio decision is driving the holding.",
                    BODY_SMALL,
                ),
            ],
            content_width,
            background=CREAM,
            border=colors.HexColor("#D8C281"),
        )
    )
    story.append(PageBreak())

    # Page 3
    story.extend(
        page_heading(
            "The connected exposure",
            "Your job and your portfolio can fail together",
            "Employer-stock risk is not just the percentage on a brokerage screen. Salary, bonus, unvested compensation, career value and vested shares may all move with the same business or sector.",
        )
    )
    exposure_data = [
        [
            paragraph("INCOME", EYEBROW),
            paragraph("FUTURE PAY", EYEBROW),
            paragraph("INVESTMENTS", EYEBROW),
        ],
        [
            paragraph("<b>Salary and benefits</b><br/>Your monthly household engine.", BODY),
            paragraph("<b>Unvested awards</b><br/>Conditional compensation that may depend on time, employment and plan terms.", BODY),
            paragraph("<b>Vested employer shares</b><br/>Liquid or transferable only to the extent allowed by the market, plan and broker.", BODY),
        ],
    ]
    exposure_table = Table(exposure_data, colWidths=[third_width] * 3)
    exposure_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), NAVY),
                ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
                ("BACKGROUND", (0, 1), (-1, 1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 4 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
            ]
        )
    )
    story.append(exposure_table)
    story.append(Spacer(1, 8 * mm))
    story.append(paragraph("A concentration snapshot", H2))
    story.append(
        card(
            [
                paragraph(
                    "<b>Current concentration (%) = vested employer shares / (vested employer shares + other liquid investments) x 100</b>",
                    pstyle(
                        "Formula",
                        fontName=FONT_BOLD,
                        fontSize=12,
                        leading=16,
                        textColor=NAVY,
                        alignment=TA_CENTER,
                    ),
                ),
                Spacer(1, 3 * mm),
                paragraph(
                    "Keep unvested awards separate. Then ask how much future pay and career value depend on the same employer. This percentage is a discussion input, not a universal limit.",
                    CENTER_SMALL,
                ),
            ],
            content_width,
            background=CREAM,
            border=colors.HexColor("#D8C281"),
            padding=7 * mm,
        )
    )
    story.append(Spacer(1, 8 * mm))
    questions = [
        "Which family goals currently rely on one stock price?",
        "Could a job loss and share-price fall happen at the same time?",
        "How much of the rest of the portfolio already owns the same sector?",
        "Would a delayed vest or trading blackout disrupt a planned cash need?",
        "Is the holding deliberate, or simply the result of never setting a rule?",
        "What future grants could rebuild concentration after a sale?",
    ]
    question_cards = [
        card(
            [
                paragraph(f"{index + 1:02d}", EYEBROW),
                paragraph(question, BODY_SMALL),
            ],
            half_width - 2 * mm,
            background=WHITE,
        )
        for index, question in enumerate(questions)
    ]
    story.append(two_column_cards(question_cards, half_width))
    story.append(PageBreak())

    # Page 4
    story.extend(
        page_heading(
            "RSU tax in India",
            "Three moments, three record sets",
            "The useful question is not simply 'what is the RSU tax rate?' It is which event occurred, what value was recorded, what the employer withheld, what happened later and which disclosures apply.",
        )
    )
    moments = [
        (
            "1. VESTING OR ALLOTMENT",
            "Employer equity can create salary or perquisite taxation. The exact event, valuation and withholding depend on the award and plan records.",
            "Keep: grant notice, vest confirmation, payslip, employer tax statement, share count, fair-market-value record and FX conversion evidence.",
        ),
        (
            "2. SALE OR TRANSFER",
            "A later sale can be a separate capital-gains event. A broker-to-broker transfer may not itself be a sale, but availability and treatment depend on the brokers, plan and facts.",
            "Keep: trade confirmations, fees, acquisition value used, dates, broker ledger, bank credits and transfer confirmations.",
        ),
        (
            "3. ANNUAL RETURN AND DISCLOSURES",
            "Foreign shares, accounts and income can create Indian return-disclosure questions. Schedule FA treatment depends on residential status and facts.",
            "Keep: year-end and calendar-year statements, peak and closing values where relevant, dividend records, foreign tax documents and remittance history.",
        ),
    ]
    for label, copy, records in moments:
        story.append(
            card(
                [
                    paragraph(label, EYEBROW),
                    paragraph(copy, BODY),
                    Spacer(1, 2.5 * mm),
                    paragraph(f"<b>{records}</b>", BODY_SMALL),
                ],
                content_width,
                background=PALE,
            )
        )
        story.append(Spacer(1, 4 * mm))
    story.append(Spacer(1, 2 * mm))
    story.append(
        card(
            [
                paragraph("WHY THERE IS NO SINGLE TAX RATE ON THIS PAGE", EYEBROW),
                paragraph(
                    "Rates and holding-period treatment can change. The answer can also depend on award terms, residential status, foreign tax, dates, values and current law. Prepare the facts with this guide; use a qualified CA to determine the return.",
                    BODY,
                ),
            ],
            content_width,
            background=CREAM,
            border=colors.HexColor("#D8C281"),
        )
    )
    story.append(PageBreak())

    # Page 5
    story.extend(
        page_heading(
            "Diversification routes",
            "Four routes to evaluate - without assuming the answer",
            "Each route solves a different operational problem. Compare legal account, asset domicile, liquidity, total cost, reporting and household purpose - not only the product label.",
        )
    )
    route_items = [
        (
            "01",
            "Keep shares at the plan broker",
            "May enter the comparison after concentration, liquidity, reporting and estate questions are understood.",
            "Verify broker access, fees, residency restrictions, succession process, reporting data and the role of the holding in family goals.",
        ),
        (
            "02",
            "Transfer shares to another broker",
            "May consolidate eligible positions without first selling, where both sides support the transfer.",
            "Verify transfer method, eligible securities, fees, fractional shares, cost-basis records, blackout rules and account requirements.",
        ),
        (
            "03",
            "Sell and reinvest globally",
            "May move the portfolio from one-company exposure toward a diversified allocation after the sale and cash-use questions are resolved.",
            "Verify capital-gains calculation, currency conversion, cash location, FEMA or repatriation requirements, costs and investment risks.",
        ),
        (
            "04",
            "Evaluate an India or IFSC route",
            "May help compare locally accessible global strategies, including appropriately authorised offerings in GIFT-IFSC.",
            "Verify entity authorisation, offer documents, domicile, liquidity, minimums, total costs, taxation, reporting and goal fit.",
        ),
    ]
    route_cards = []
    for number, title, use, verify in route_items:
        route_cards.append(
            card(
                [
                    paragraph(number, NUMBER),
                    Spacer(1, 2 * mm),
                    paragraph(title, H2),
                    paragraph("<b>When it may enter the comparison</b>", BODY_TINY),
                    paragraph(use, BODY_SMALL),
                    Spacer(1, 2 * mm),
                    paragraph("<b>Verify before acting</b>", BODY_TINY),
                    paragraph(verify, BODY_SMALL),
                ],
                half_width - 2 * mm,
                background=WHITE,
            )
        )
    story.append(two_column_cards(route_cards, half_width))
    story.append(Spacer(1, 5 * mm))
    story.append(
        card(
            [
                paragraph("CROSS-BORDER CAUTION", EYEBROW),
                paragraph(
                    "Do not assume every realised cash balance can remain abroad indefinitely. RBI guidance distinguishes retained or reinvested income, realised or unused foreign exchange and the underlying route. Confirm your facts with an authorised dealer bank and a FEMA-aware professional.",
                    BODY_SMALL,
                ),
            ],
            content_width,
            background=CREAM,
            border=colors.HexColor("#D8C281"),
        )
    )
    story.append(PageBreak())

    # Page 6
    story.extend(
        page_heading(
            "Before the next vest or sale",
            "Build one specialist-ready RSU file",
            "Good advice starts with complete records. Give each specialist the facts relevant to their role - never passwords or private broker credentials.",
        )
    )
    checklist = [
        "Latest grant and vesting statements",
        "Payslips and employer tax records for vest months",
        "Broker transaction history and year-end statements",
        "Share counts, vest dates, sale dates and reported values",
        "Dividend and foreign-tax documents",
        "Bank, remittance and currency-conversion records",
        "Current value of all vested employer shares",
        "Approximate value and schedule of unvested awards",
        "Family goals that currently depend on employer stock",
        "Written questions for your CA, broker and wealth professional",
    ]
    checklist_rows = []
    for index in range(0, len(checklist), 2):
        cells = []
        for offset in [0, 1]:
            item_index = index + offset
            cells.append(
                [
                    paragraph(f"{item_index + 1:02d}", NUMBER),
                    paragraph(checklist[item_index], BODY),
                ]
            )
        checklist_rows.append(cells)
    checklist_table = Table(
        checklist_rows,
        colWidths=[half_width, half_width],
        rowHeights=[29 * mm] * len(checklist_rows),
    )
    checklist_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.6, BORDER),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 6 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 4 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4 * mm),
            ]
        )
    )
    story.append(checklist_table)
    story.append(Spacer(1, 7 * mm))
    story.append(
        card(
            [
                paragraph("WHO ANSWERS WHAT?", EYEBROW),
                paragraph(
                    "<b>CA:</b> return, tax and foreign-asset reporting. &nbsp;&nbsp; <b>Broker or plan administrator:</b> access, vesting, transfer and trading operations. &nbsp;&nbsp; <b>Lawyer or estate specialist:</b> succession and cross-border legal structure. &nbsp;&nbsp; <b>SoHo Wealth:</b> portfolio view, goals, product distribution and decision coordination within disclosed scope.",
                    BODY_SMALL,
                ),
            ],
            content_width,
            background=CREAM,
            border=colors.HexColor("#D8C281"),
        )
    )
    story.append(PageBreak())

    # Page 7
    story.extend(
        page_heading(
            "Primary-source check",
            "Official references and next step",
            "Rules and product availability change. Open the current source, verify the regulated entity and ask the specialist responsible for your decision.",
        )
    )
    sources = [
        (
            "Income Tax Department - ESOP taxation",
            "https://wmstatic-prd.incometaxindia.gov.in/web/guest/w/salary",
        ),
        (
            "Income Tax Department - Schedule FA guidance",
            "https://www.incometax.gov.in/iec/foportal/nudge/nudge-schedule-fa",
        ),
        (
            "Reserve Bank of India - LRS FAQs",
            "https://www.rbi.org.in/scripts/FAQDisplay.aspx?Id=115",
        ),
        (
            "IRS - estate tax for nonresident noncitizens",
            "https://www.irs.gov/individuals/international-taxpayers/some-nonresidents-with-us-assets-must-file-estate-tax-returns",
        ),
        (
            "IFSCA - fund management and regulated entities",
            "https://www.ifsca.gov.in/Pages/Contents/Fund_Management",
        ),
    ]
    for label, url in sources:
        story.append(
            card(
                [
                    paragraph(label, H3),
                    paragraph(f'<link href="{url}" color="#0B1F3A">{url}</link>', LINK),
                ],
                content_width,
                background=PALE,
                padding=3.5 * mm,
            )
        )
        story.append(Spacer(1, 2.5 * mm))
    story.append(Spacer(1, 3 * mm))
    story.append(
        card(
            [
                paragraph("BOOK AN RSU PORTFOLIO REVIEW", EYEBROW),
                paragraph(
                    "Bring a summary of vested shares, future awards, other investments and family goals. SoHo Wealth will map concentration and the decision sequence, then identify the questions that belong with your CA, broker or legal specialist.",
                    BODY,
                ),
                Spacer(1, 3 * mm),
                paragraph(
                    '<b>Web:</b> <link href="https://www.sohowealth.in/wealth-planning-for-it-professionals/rsu-guide" color="#0B1F3A">sohowealth.in/wealth-planning-for-it-professionals/rsu-guide</link><br/><b>WhatsApp:</b> +91 90329 99466',
                    BODY_SMALL,
                ),
            ],
            content_width,
            background=CREAM,
            border=colors.HexColor("#D8C281"),
            padding=6 * mm,
        )
    )
    story.append(Spacer(1, 5 * mm))
    story.append(
        paragraph(
            "<b>Important scope:</b> SoHo Wealth provides investment distribution, portfolio review and wealth coordination. It does not replace your chartered accountant, lawyer, FEMA specialist, broker or plan administrator. It does not provide personalised security-level or fee-based investment advice. Tax, legal, plan and regulatory treatment depends on your facts and current law.",
            BODY_TINY,
        )
    )

    doc.build(story)
    copyfile(OUTPUT_PATH, PUBLIC_PATH)


if __name__ == "__main__":
    build_pdf()
    print(f"Created: {OUTPUT_PATH}")
    print(f"Published copy: {PUBLIC_PATH}")
