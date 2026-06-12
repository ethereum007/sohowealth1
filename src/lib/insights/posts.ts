export type InsightSource = {
  title: string;
  url: string;
};

export type InsightSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  table?: {
    columns: string[];
    rows: string[][];
  };
};

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  audience: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  keywords: string[];
  heroKicker: string;
  keyTakeaways: string[];
  sections: InsightSection[];
  faqs: Array<{ q: string; a: string }>;
  relatedSlugs: string[];
  sources: InsightSource[];
};

const rbiAccountsSource = {
  title: "RBI FAQ: Accounts in India by Non-residents",
  url: "https://www.rbi.org.in/commonman/English/Scripts/FAQs.aspx?Id=3",
};

const rbiRemittanceSource = {
  title: "RBI FAQ: Remittance of Assets",
  url: "https://www.rbi.org.in/commonperson/english/scripts/FAQs.aspx?Id=17",
};

const budgetSpeechSource = {
  title: "India Budget 2026-2027 Speech",
  url: "https://www.indiabudget.gov.in/doc/budget_speech.pdf",
};

const incomeTaxActSource = {
  title: "Income Tax Department: Objective and Scope of the Income-tax Act, 2025",
  url: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act",
};

const ifscaNriSource = {
  title: "IFSCA: NRIs and OCIs in GIFT IFSC",
  url: "https://ifsca.gov.in/Pages/Contents/NRIs%20section",
};

const ifscaHomeSource = {
  title: "IFSCA: GIFT IFSC Key Highlights",
  url: "https://www.ifsca.gov.in/",
};

const sebiSifSource = {
  title: "SEBI Circular: Regulatory Framework for Specialized Investment Funds",
  url: "https://www.sebi.gov.in/legal/circulars/feb-2025/regulatory-framework-for-specialized-investment-funds-sif-_92299.html",
};

const mfuUsCanadaSource = {
  title: "MFU: Requirements for USA and Canada Residents Investing in Indian Mutual Funds",
  url: "https://www.mfuindia.com/for-investors/usa-canada-residents",
};

export const insightPosts: InsightPost[] = [
  {
    slug: "nri-investing-india-2026-checklist",
    title: "NRI Investing in India in 2026: A Practical Checklist Before You Move Money",
    description:
      "A SoHo Wealth checklist for NRIs who want India exposure across NRE, NRO, mutual funds, PMS, SIF, AIF, GIFT City and property-linked wealth.",
    category: "NRI Wealth",
    audience: "NRIs investing in India",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "7 min read",
    keywords: [
      "NRI investing in India 2026",
      "NRI investment checklist",
      "NRE NRO investment planning",
      "NRI wealth management India",
      "NRI investment advisor Hyderabad",
    ],
    heroKicker: "Hot Topic",
    keyTakeaways: [
      "The first decision is structure: residency, source of funds, account route and repatriation need to be clear.",
      "Product selection should come after KYC, FATCA/CRS, tax country and liquidity needs are mapped.",
      "NRE, NRO, PMS, SIF, AIF, GIFT City and property proceeds should not be treated as one generic India bucket.",
      "A written investment checklist prevents tax-time and remittance-time surprises.",
    ],
    sections: [
      {
        heading: "Start With the Money Trail",
        body: [
          "Most NRI investment mistakes begin before the first transaction. The investor chooses a fund, PMS or private deal without first asking a more basic question: what kind of money is this? Foreign salary, India rent, inherited assets, property sale proceeds and old resident investments each carry a different paper trail.",
          "A clean India portfolio begins with labels. Mark each pool as foreign-earned, India-earned, already taxed, inherited, property-linked, repatriable or India-use-only. Once the money trail is clean, product choice becomes far more sensible.",
          "This matters even more in 2026 because cross-border reporting, account status and tax-year treatment are no longer back-office details. They shape whether the portfolio can be operated smoothly.",
        ],
      },
      {
        heading: "The SoHo Wealth NRI Sequence",
        bullets: [
          "Confirm tax residency and FEMA status before changing accounts or investing.",
          "Update bank, demat, mutual fund and KYC records from resident to NRI where needed.",
          "Separate NRE, NRO and foreign-currency money instead of mixing all India exposure in one view.",
          "Write down where the goal will be funded: India, US, UAE, UK, Singapore, Australia or Canada.",
          "Check product eligibility for your country of residence before transferring money.",
          "Review home-country tax, especially for US and Canada residents.",
          "Decide the review rhythm: quarterly for large portfolios, semi-annual for simpler portfolios.",
        ],
      },
      {
        heading: "Product Fit, Not Product Collection",
        table: {
          columns: ["Need", "Possible Route", "SoHo Wealth Check"],
          rows: [
            ["Core India equity exposure", "Mutual funds", "Avoid duplicate funds and unmanaged risk"],
            ["Higher-risk strategy allocation", "SIF", "Use only after core allocation is stable"],
            ["Large concentrated equity mandate", "PMS", "Assess drawdown, tax churn and manager style"],
            ["Alternative or private market access", "AIF", "Size allocation around lock-in and opacity"],
            ["Dollar-linked India access", "GIFT City", "Check tax country and liquidity first"],
            ["India property sale proceeds", "NRO and remittance process", "Plan tax documents before the sale closes"],
          ],
        },
      },
      {
        heading: "Where NRIs Usually Get Stuck",
        body: [
          "The common problem is not lack of options. It is disconnected decision-making. One account holds old resident mutual funds, another holds NRO rent, a PMS starts from a bank relationship, property proceeds sit idle, and employer stock overseas remains outside the India plan.",
          "The portfolio then looks diversified because it has many products. In reality, it may be concentrated in India equity, one currency, one employer, one property or one family decision. A proper review converts a product pile into a plan.",
        ],
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "The best NRI portfolios are boring in the foundation and thoughtful in the allocation. First clean the structure. Then choose products.",
          "Before investing fresh money, every NRI should be able to answer four questions: where did the money come from, where will it be used, how is it taxed, and how does it leave India if required?",
        ],
      },
    ],
    faqs: [
      {
        q: "Can NRIs invest in India in 2026?",
        a: "Yes. NRIs can invest in several Indian products subject to account route, KYC, FEMA, tax and provider-level rules.",
      },
      {
        q: "What should an NRI do before selecting investments?",
        a: "Confirm residency, account status, source of funds, repatriation need, KYC/FATCA details and home-country tax impact.",
      },
      {
        q: "Does every NRI need PMS or AIF exposure?",
        a: "No. Many portfolios are better served by a cleaner mutual fund and debt allocation before adding PMS, SIF or AIF products.",
      },
    ],
    relatedSlugs: [
      "gift-city-for-nris-guide",
      "nre-vs-nro-repatriation",
      "us-canada-nris-mutual-funds-fatca",
    ],
    sources: [
      rbiAccountsSource,
      rbiRemittanceSource,
      incomeTaxActSource,
      budgetSpeechSource,
      ifscaNriSource,
      mfuUsCanadaSource,
    ],
  },
  {
    slug: "gift-city-for-nris-guide",
    title: "GIFT City for NRIs: What It Solves, What It Does Not, and Who Should Explore It",
    description:
      "A practical SoHo Wealth guide to GIFT City for NRIs considering foreign-currency accounts, IFSC funds, global access and India-linked investing.",
    category: "GIFT City",
    audience: "Global Indians and NRIs",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "6 min read",
    keywords: [
      "GIFT City for NRIs",
      "NRI GIFT IFSC investments",
      "IFSC funds for NRIs",
      "GIFT City wealth management",
      "NRI dollar investments India",
    ],
    heroKicker: "Global Gateway",
    keyTakeaways: [
      "GIFT City can be useful when the investor needs a cross-border or foreign-currency structure.",
      "It should be compared with domestic mutual funds, PMS, AIFs and global portfolios, not viewed in isolation.",
      "Tax residence still matters, especially for US and Canada NRIs.",
      "The right question is not 'Can I access GIFT City?' but 'What role will it play?'",
    ],
    sections: [
      {
        heading: "Why GIFT City Is on the NRI Radar",
        body: [
          "GIFT City has become a serious conversation for global Indians because it gives India a more international financial-services doorway. NRIs can look at banking, fund management, exchange access and alternative structures without treating everything as a domestic rupee-only decision.",
          "That does not make it a magic solution. It simply creates a different route. For the right investor, that route may improve currency alignment, access or operational convenience. For another investor, it may add complexity without much benefit.",
        ],
      },
      {
        heading: "Where It Can Help",
        bullets: [
          "Foreign-currency banking relationships through IFSC banking units.",
          "Internationally structured fund access for eligible investors.",
          "Potentially cleaner separation between overseas surplus and India family wealth.",
          "A route for sophisticated investors who want India exposure without immediately converting every dollar to rupees.",
          "Access to specific IFSC products that may not be available through a normal domestic wealth account.",
        ],
      },
      {
        heading: "Where It Does Not Help",
        body: [
          "GIFT City does not remove investment risk. An IFSC fund can still be illiquid, expensive, concentrated or unsuitable. The wrapper may be international; the investment still needs due diligence.",
          "It also does not erase your tax residence. A US taxpayer, a UAE resident and a UK resident can have very different outcomes even if the product is the same. Tax should be checked before money moves.",
        ],
      },
      {
        heading: "Who Should Explore It",
        table: {
          columns: ["Profile", "Why It May Be Relevant", "First Filter"],
          rows: [
            ["NRI with USD savings", "May want India or global exposure without immediate INR conversion", "Will the goal be spent in INR or foreign currency?"],
            ["Family with assets in two countries", "May help keep cross-border pools organized", "Which assets are for India and which are not?"],
            ["HNI seeking alternatives", "IFSC fund structures may open new choices", "Can the investor handle lock-in and complexity?"],
            ["Returning Indian", "May support transition planning", "What changes after Indian residency resumes?"],
          ],
        },
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "GIFT City should earn its place in the portfolio. It is attractive when it solves a real problem around currency, access, structure or global mobility.",
          "For a simple long-term India goal, a domestic mutual fund portfolio may still be cleaner. For larger, cross-border families, GIFT City can become part of the toolkit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can NRIs use GIFT City for investing?",
        a: "Yes, subject to product, intermediary and regulatory eligibility. NRIs should evaluate the route with tax and suitability checks.",
      },
      {
        q: "Is GIFT City only for very wealthy NRIs?",
        a: "Not always, but many IFSC products are designed for sophisticated investors. Ticket size, lock-in and risk should be checked.",
      },
      {
        q: "Is GIFT City a replacement for domestic India investments?",
        a: "Usually it is a complement, not a default replacement. The right mix depends on goals, currency and tax residence.",
      },
    ],
    relatedSlugs: [
      "nri-investing-india-2026-checklist",
      "budget-2026-nri-tax-investment-changes",
      "nri-portfolio-review-products",
    ],
    sources: [ifscaNriSource, ifscaHomeSource, budgetSpeechSource],
  },
  {
    slug: "sif-for-nris-vs-pms-mutual-funds",
    title: "SIFs for NRIs: The Rs. 10 Lakh Bridge Between Mutual Funds and PMS",
    description:
      "A SoHo Wealth explainer on how Specialized Investment Funds may fit NRI portfolios, and how to compare SIFs with mutual funds and PMS.",
    category: "SIF",
    audience: "NRIs and emerging HNIs",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "6 min read",
    keywords: [
      "SIF for NRI",
      "Specialized Investment Fund NRI",
      "SIF vs PMS",
      "SIF vs mutual fund",
      "NRI SIF investment India",
    ],
    heroKicker: "New Product Category",
    keyTakeaways: [
      "SIFs are designed for investors who need more flexibility than regular mutual funds but may not be ready for PMS.",
      "NRIs should treat SIFs as specialist allocations, not default core holdings.",
      "Eligibility, liquidity, strategy risk and tax treatment need to be checked before investing.",
      "A SIF makes sense only when it has a defined role in the total portfolio.",
    ],
    sections: [
      {
        heading: "Why SIFs Are Getting Attention",
        body: [
          "Specialized Investment Funds have created a new middle lane in Indian wealth. For years, the choice was simple but limiting: mutual funds for most investors, PMS for larger accounts, and AIFs for more sophisticated capital. SIFs sit between these worlds.",
          "For NRIs, that middle lane can be useful. Many investors have enough India exposure to think beyond plain mutual funds, but not enough reason to allocate Rs. 50 lakh to one PMS manager. A SIF can help if the strategy is understood and sized carefully.",
        ],
      },
      {
        heading: "The Comparison That Matters",
        table: {
          columns: ["Feature", "Mutual Fund", "SIF", "PMS"],
          rows: [
            ["Role", "Core portfolio building", "Specialist strategy allocation", "Large concentrated mandate"],
            ["Investor experience", "Simple and familiar", "More advanced", "More customized"],
            ["Minimum scale", "Low entry barrier", "Higher minimum framework", "Rs. 50 lakh minimum"],
            ["Transparency", "Fund-level", "Strategy-level", "Security-level in demat"],
            ["Best fit", "Most long-term investors", "Emerging HNIs with risk appetite", "HNIs seeking direct managed portfolios"],
          ],
        },
      },
      {
        heading: "When an NRI Can Consider SIF",
        bullets: [
          "The core mutual fund allocation is already organized.",
          "The investor understands the strategy and can tolerate volatility.",
          "The SIF does something meaningfully different from existing holdings.",
          "The allocation size is limited enough that a bad outcome will not damage the plan.",
          "Country-of-residence and AMC/platform eligibility are confirmed before transaction.",
        ],
      },
      {
        heading: "When to Avoid It",
        body: [
          "Do not use SIFs just because the category is new. If the current portfolio is messy, full of overlapping equity funds or short of emergency liquidity, a SIF may add one more layer of confusion.",
          "A SIF should not be bought as a status product. It should be bought only if the investor can explain what risk it adds, what diversification it offers and when it will be reviewed.",
        ],
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "SIFs are promising, but they need discipline. For NRIs, the best use case is often a controlled satellite allocation after the main India portfolio is already healthy.",
          "If the product cannot be explained in a five-minute conversation, it probably should not enter the portfolio yet.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can NRIs invest in SIFs?",
        a: "They may be able to, subject to AMC, platform, FEMA, KYC, FATCA/CRS and country-specific rules.",
      },
      {
        q: "Is a SIF better than PMS?",
        a: "Not universally. SIF and PMS solve different problems and suit different portfolio sizes, risk profiles and tax situations.",
      },
      {
        q: "Should SIF be part of the core portfolio?",
        a: "Usually no. For many investors it is better treated as a satellite allocation after core funds and liquidity are in place.",
      },
    ],
    relatedSlugs: [
      "nri-portfolio-review-products",
      "nri-investing-india-2026-checklist",
      "gift-city-for-nris-guide",
    ],
    sources: [sebiSifSource, rbiAccountsSource],
  },
  {
    slug: "nre-vs-nro-repatriation",
    title: "NRE vs NRO in 2026: Repatriation Mistakes NRIs Should Avoid",
    description:
      "A SoHo Wealth guide to NRE, NRO and FCNR account planning, with a focus on repatriation, tax documents and India investment hygiene.",
    category: "NRI Banking",
    audience: "NRIs with India accounts",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "6 min read",
    keywords: [
      "NRE vs NRO",
      "NRI repatriation rules",
      "NRO USD 1 million limit",
      "NRI account planning",
      "FEMA NRI wealth",
    ],
    heroKicker: "FEMA Basics",
    keyTakeaways: [
      "NRE and NRO are not interchangeable account labels; they define source, tax and remittance treatment.",
      "NRO balances can usually be moved abroad only after documentation and applicable compliance.",
      "Old resident accounts and old KYC are common sources of friction for NRIs.",
      "Repatriation planning should happen before an investment or property sale, not after.",
    ],
    sections: [
      {
        heading: "Why Account Choice Comes Before Fund Choice",
        body: [
          "A fund can be switched. A bad paper trail is harder to fix. That is why NRIs should treat NRE and NRO planning as the first layer of investment planning.",
          "Foreign salary sent to India, rent received in India, dividends, pension, inherited assets and property sale proceeds do not all belong to the same operational bucket. Mixing them can create avoidable questions when the money is later redeemed or remitted.",
        ],
      },
      {
        heading: "Account Map in Plain English",
        table: {
          columns: ["Account", "Typical Use", "Planning Lens"],
          rows: [
            ["NRE", "Foreign income brought into India", "Useful when overseas remittance flexibility is important"],
            ["NRO", "India income and India asset proceeds", "Documentation and tax compliance matter"],
            ["FCNR(B)", "Foreign-currency bank deposits", "Useful when deposit money should stay in foreign currency"],
          ],
        },
      },
      {
        heading: "Repatriation Is Not Just a Bank Button",
        body: [
          "When money is in NRO, banks generally need evidence. That can include source papers, tax documents, forms and declarations. The exact package depends on the asset and the bank handling the remittance.",
          "For property, inheritance or large accumulated balances, plan the remittance path before the event. Waiting until after the sale or redemption can leave capital idle while paperwork is reconstructed.",
        ],
      },
      {
        heading: "Practical Mistakes to Avoid",
        bullets: [
          "Continuing with resident savings and investment accounts after becoming an NRI.",
          "Crediting India rent or sale proceeds into the wrong account.",
          "Assuming NRO money behaves like NRE money for outward remittance.",
          "Redeeming old resident mutual funds without updating KYC and bank details.",
          "Selling property before tax and remittance documents are organized.",
          "Ignoring currency needs for future expenses outside India.",
        ],
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "Every NRI portfolio review should include an account-route review. It is the quiet work that prevents visible trouble later.",
          "Once money is tagged correctly, investment decisions become cleaner: NRE for repatriable foreign savings, NRO for India-sourced capital, and a separate global bucket for non-India goals.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is NRE better than NRO?",
        a: "Neither is better. NRE and NRO serve different purposes. The right account depends on the source of funds and future use.",
      },
      {
        q: "Can NRO funds be remitted abroad?",
        a: "Yes, subject to RBI rules, tax compliance, bank documentation and applicable limits.",
      },
      {
        q: "Should old resident mutual fund folios be updated after becoming NRI?",
        a: "Yes. KYC, bank mandate, tax status and FATCA/CRS details should be updated to avoid transaction issues.",
      },
    ],
    relatedSlugs: [
      "nri-investing-india-2026-checklist",
      "nri-property-sale-tds-budget-2026",
      "returning-to-india-wealth-checklist",
    ],
    sources: [rbiAccountsSource, rbiRemittanceSource],
  },
  {
    slug: "us-canada-nris-mutual-funds-fatca",
    title: "US and Canada NRIs: How to Approach Indian Mutual Funds Without Getting Stuck",
    description:
      "A SoHo Wealth note for US and Canada NRIs investing in Indian mutual funds, covering AMC restrictions, FATCA/CRS, KYC and portfolio design.",
    category: "Mutual Funds",
    audience: "US and Canada NRIs",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "6 min read",
    keywords: [
      "US NRI mutual funds India",
      "Canada NRI mutual funds India",
      "FATCA Indian mutual funds",
      "NRI KYC mutual funds",
      "USA Canada NRI investing India",
    ],
    heroKicker: "Country-Specific",
    keyTakeaways: [
      "US and Canada NRIs need an AMC eligibility check before building an Indian mutual fund portfolio.",
      "A fund house may be excellent but still not operationally convenient for a US or Canada resident.",
      "FATCA/CRS, declarations and updated KYC are part of the investment process, not optional paperwork.",
      "Home-country tax reporting can change the after-tax result of Indian fund investing.",
    ],
    sections: [
      {
        heading: "The Issue Is Operational, Not Just Investment-Related",
        body: [
          "US and Canada NRIs often hear conflicting answers about Indian mutual funds. One platform says yes, another says no, and a third asks for extra declarations. The confusion usually comes from fund-house and platform-level compliance requirements.",
          "The sensible approach is to build an investable universe first. Confirm which AMCs accept your country of residence, which transaction mode is allowed, and what declarations are required. Only then shortlist funds.",
        ],
      },
      {
        heading: "Pre-Investment Checklist",
        bullets: [
          "Check whether the AMC accepts residents of the US or Canada.",
          "Confirm whether online transactions are accepted or special documentation is needed.",
          "Update KYC from resident to NRI status if required.",
          "Submit FATCA and CRS details carefully.",
          "Use the correct NRE or NRO bank account for the source of funds.",
          "Discuss home-country reporting with a qualified tax professional.",
        ],
      },
      {
        heading: "Do Not Let Restrictions Distort the Portfolio",
        body: [
          "A restricted AMC list should not lead to a restricted investment plan. If only some fund houses are operationally easy, the allocation still needs balance across large cap, flexi cap, hybrid, debt or international exposure as appropriate.",
          "For US taxpayers, Indian mutual funds can raise tax-reporting questions in the US. That does not automatically make them unsuitable, but it does mean the decision should be coordinated with a cross-border tax view.",
        ],
      },
      {
        heading: "A Better Portfolio Design Process",
        table: {
          columns: ["Step", "Question", "Outcome"],
          rows: [
            ["Eligibility", "Which AMCs/platforms can I use?", "Approved investment universe"],
            ["Tax screen", "What does my tax country require?", "Avoid reporting surprises"],
            ["Allocation", "How much India exposure is needed?", "Target India weight"],
            ["Implementation", "Which products fit inside that weight?", "Fund shortlist"],
          ],
        },
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "For US and Canada NRIs, the best fund is the best fund that can actually be owned, serviced and reported properly.",
          "Execution quality matters. Build the compliant lane first, then drive the portfolio through it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can US NRIs invest in Indian mutual funds?",
        a: "Some AMCs and platforms allow it with additional conditions. Eligibility should be checked before investing.",
      },
      {
        q: "Can Canada NRIs invest in Indian mutual funds?",
        a: "Yes in some cases, but AMC and platform rules vary. Documentation should be confirmed upfront.",
      },
      {
        q: "Is FATCA enough to complete the process?",
        a: "No. FATCA/CRS is one part. KYC, country acceptance, bank route, declarations and tax reporting also matter.",
      },
    ],
    relatedSlugs: [
      "nri-investing-india-2026-checklist",
      "nre-vs-nro-repatriation",
      "nri-portfolio-review-products",
    ],
    sources: [mfuUsCanadaSource, rbiAccountsSource],
  },
  {
    slug: "nri-property-sale-tds-budget-2026",
    title: "Selling Indian Property as an NRI: Budget 2026 TDS Change and Planning Checklist",
    description:
      "A SoHo Wealth checklist for NRIs selling Indian property, covering TDS process, tax documents, NRO routing and repatriation planning.",
    category: "NRI Tax",
    audience: "NRIs selling Indian property",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "6 min read",
    keywords: [
      "NRI property sale TDS 2026",
      "NRI selling property India",
      "NRI property repatriation",
      "Budget 2026 NRI property TDS",
      "NRO property sale proceeds",
    ],
    heroKicker: "Budget 2026",
    keyTakeaways: [
      "Budget 2026 proposed a buyer-side process simplification for TDS deposit in certain NRI property transactions.",
      "The change is procedural; it does not remove tax computation, documentation or seller planning.",
      "NRI sellers should prepare cost papers, tax estimates and remittance documents before signing.",
      "Sale proceeds and reinvestment should be treated as part of the overall wealth plan.",
    ],
    sections: [
      {
        heading: "A Property Sale Is More Than a Deal Closing",
        body: [
          "For an NRI, selling Indian property is a tax event, a banking event, a family event and an investment event. The buyer may focus on registration. The seller must focus on clean receipt, correct withholding, capital gains, documentation and future use of money.",
          "Budget 2026 proposed easing the buyer-side deposit process for TDS in specified non-resident property purchases. That can reduce operational friction, but it does not turn an NRI sale into a simple resident-to-resident transaction.",
        ],
      },
      {
        heading: "Documents to Assemble Early",
        bullets: [
          "Purchase deed, allotment letter or inheritance papers.",
          "Payment proofs, improvement bills and stamp duty records.",
          "PAN, passport, overseas address and NRI status documents.",
          "Capital gains estimate prepared before negotiation is finalized.",
          "Lower deduction certificate evaluation, if relevant.",
          "NRO bank details and future remittance plan.",
        ],
      },
      {
        heading: "TDS Is Not the Same as Final Tax",
        body: [
          "Withholding is a collection mechanism. Your actual tax outcome depends on holding period, cost, improvements, exemptions, treaty position and personal facts. If withholding is too high, refund may be possible but cash gets blocked. If it is too low, compliance risk appears.",
          "That is why the tax conversation should happen before the sale agreement, not after the buyer asks what to deduct.",
        ],
      },
      {
        heading: "After the Money Arrives",
        table: {
          columns: ["Decision", "Why It Matters", "Planning Action"],
          rows: [
            ["Keep in India", "May fund family, retirement or reinvestment", "Build allocation across debt and equity"],
            ["Send abroad", "Needs remittance documentation", "Prepare bank and tax paperwork"],
            ["Buy another property", "Can create fresh concentration", "Compare with financial assets"],
            ["Invest gradually", "Reduces timing risk", "Use a staged deployment plan"],
          ],
        },
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "The biggest risk in an NRI property sale is not only tax. It is leaving a large lump sum unplanned after the sale.",
          "Before the transaction closes, decide what portion stays liquid, what portion is reinvested in India, and what portion needs to move overseas.",
        ],
      },
    ],
    faqs: [
      {
        q: "Did Budget 2026 remove TDS for NRI property sales?",
        a: "No. The proposal discussed a process simplification for depositing TDS. Tax calculation and compliance still matter.",
      },
      {
        q: "Should NRI property proceeds go to NRE or NRO?",
        a: "Indian property sale proceeds commonly route through NRO because they are India-sourced. Confirm the exact process with your bank and tax advisor.",
      },
      {
        q: "Can NRI property sale money be remitted abroad?",
        a: "It may be possible subject to RBI rules, tax compliance, bank documentation and applicable limits.",
      },
    ],
    relatedSlugs: [
      "budget-2026-nri-tax-investment-changes",
      "nre-vs-nro-repatriation",
      "nri-investing-india-2026-checklist",
    ],
    sources: [budgetSpeechSource, rbiRemittanceSource, incomeTaxActSource],
  },
  {
    slug: "returning-to-india-wealth-checklist",
    title: "Returning to India in 2026: A Wealth Checklist Before You Move Back",
    description:
      "A SoHo Wealth checklist for NRIs returning to India, covering residency, bank accounts, foreign assets, RSUs, insurance and portfolio transition.",
    category: "Return Planning",
    audience: "NRIs moving back to India",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "7 min read",
    keywords: [
      "returning to India wealth checklist",
      "NRI returning to India investments",
      "RNOR wealth planning",
      "NRI account conversion",
      "foreign assets India tax",
    ],
    heroKicker: "Life Event",
    keyTakeaways: [
      "Return planning should begin before relocation, not after the first Indian salary credit.",
      "Tax residency, FEMA status and bank account classification need separate review.",
      "Foreign assets and employer stock should be mapped before the move year begins.",
      "The transition plan should preserve flexibility while India residency settles.",
    ],
    sections: [
      {
        heading: "The Move Back Changes the Rules Around You",
        body: [
          "Returning to India is emotional and operational at the same time. Schools, housing, parents, work and lifestyle take priority. Wealth paperwork often gets pushed down the list until something breaks.",
          "The better approach is to prepare a return file six to twelve months before moving. That file should include assets, accounts, tax years, vesting dates, insurance, nominations and expected cash needs in India.",
        ],
      },
      {
        heading: "The Pre-Move Checklist",
        bullets: [
          "Map expected travel days and tax residency for both countries.",
          "Review when NRE, NRO and resident account conversion may be required.",
          "List all overseas bank, brokerage, retirement, crypto and private assets.",
          "Document RSUs, ESOPs, ESPP, options, vesting dates and sale restrictions.",
          "Check whether overseas insurance continues after relocation.",
          "Update nominees, joint holders and estate documents across jurisdictions.",
        ],
      },
      {
        heading: "Why FY 2026-27 Needs Extra Attention",
        body: [
          "The Income-tax Act, 2025 applies from 1 April 2026 for FY 2026-27 income onward. Returnees should be careful about which tax year captures salary, bonus, RSU vesting, capital gains, rent and foreign income.",
          "The move year is rarely clean. Income may be split across employers, countries and currencies. A timeline helps the CA, wealth advisor and family make decisions from the same facts.",
        ],
      },
      {
        heading: "Do Not Merge Everything Immediately",
        body: [
          "A returning Indian often has three pools: overseas wealth, existing India wealth and new India income. These should not be blended blindly.",
          "Keep each pool connected to its goal. A US brokerage account for future dollar expenses has a different job from an Indian mutual fund portfolio for retirement in Hyderabad.",
        ],
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "The strongest return plans are not clever. They are organized. A residency timeline, account conversion plan and asset inventory can save months of confusion.",
          "Once structure is settled, then comes the real investment work: deciding how much stays global, how much moves to India, and how the rupee portfolio should be built.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should return-to-India wealth planning start?",
        a: "Ideally six to twelve months before relocation, especially if foreign assets, RSUs or property are involved.",
      },
      {
        q: "Should all overseas assets be sold before returning?",
        a: "Not automatically. The decision depends on tax, reporting, future currency needs and investment quality.",
      },
      {
        q: "Can NRE accounts continue after returning?",
        a: "Account status should be reviewed once residency changes. Confirm the timeline with your bank and advisor.",
      },
    ],
    relatedSlugs: [
      "nre-vs-nro-repatriation",
      "rsu-esop-diversification-nri",
      "budget-2026-nri-tax-investment-changes",
    ],
    sources: [incomeTaxActSource, rbiAccountsSource, budgetSpeechSource],
  },
  {
    slug: "rsu-esop-diversification-nri",
    title: "RSUs and ESOPs for NRIs: How to Diversify Without Breaking the Plan",
    description:
      "A SoHo Wealth framework for NRIs and tech professionals managing employer stock, India goals, currency risk and cross-border taxation.",
    category: "RSU & ESOPs",
    audience: "NRI tech professionals",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "6 min read",
    keywords: [
      "NRI RSU planning",
      "ESOP diversification NRI",
      "RSU tax India NRI",
      "tech professionals wealth India",
      "employer stock diversification",
    ],
    heroKicker: "Tech Wealth",
    keyTakeaways: [
      "RSUs can quietly make one company responsible for both income and net worth.",
      "Diversification should be rule-based, not driven by market mood after every vest.",
      "India goals need currency planning when employer stock vests overseas.",
      "Tax timing, blackout windows and residency changes should be reviewed before large sales.",
    ],
    sections: [
      {
        heading: "Employer Stock Is Not Just Another Investment",
        body: [
          "RSUs and ESOPs often create wealth faster than a normal savings plan. They also create a special kind of concentration. Your job, bonus, career path and portfolio may all depend on the same company or sector.",
          "That concentration can feel good while the stock is rising. It feels very different when markets fall, a layoff cycle begins or a visa/job situation changes. The goal is not to panic-sell. The goal is to create a rule before emotions take over.",
        ],
      },
      {
        heading: "Measure the Real Exposure",
        bullets: [
          "Employer stock as a percentage of total net worth.",
          "Technology or company-sector exposure across ETFs and mutual funds.",
          "Currency exposure versus future India goals.",
          "Unvested RSUs that may create future concentration.",
          "Tax cost of selling now versus later.",
          "Liquidity needs for home purchase, parents, children or return-to-India plans.",
        ],
      },
      {
        heading: "A Decision Framework",
        table: {
          columns: ["Question", "Signal", "Possible Action"],
          rows: [
            ["Would I buy this stock today?", "Separates loyalty from allocation", "Sell part if answer is no"],
            ["Is employer stock above my limit?", "Reveals concentration", "Trim after vesting"],
            ["Do I need INR for India goals?", "Connects stock proceeds to life plans", "Convert in tranches"],
            ["Is a relocation coming?", "Changes tax and reporting context", "Review before the move year"],
          ],
        },
      },
      {
        heading: "Where India Fits",
        body: [
          "For many NRIs, RSUs can fund India goals: a Hyderabad home, parent support, children-related planning, retirement in India or an eventual return. But the transfer should be intentional.",
          "Do not remit randomly after every vest. Decide an annual India allocation target, choose the right account route and deploy through a portfolio that matches the time horizon.",
        ],
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "A good RSU policy removes drama. Sell a defined percentage at vesting, cap employer-stock exposure, and review the plan when tax residency or goals change.",
          "That turns volatile compensation into long-term family wealth.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should NRIs sell RSUs immediately after vesting?",
        a: "Not always. A rule-based approach tied to concentration, tax and goals is usually better than a blanket rule.",
      },
      {
        q: "Can RSU proceeds be invested in India?",
        a: "Yes, subject to bank route, remittance, KYC, FEMA and tax considerations.",
      },
      {
        q: "Should employer stock count as equity exposure?",
        a: "Yes. It is equity exposure and usually concentrated equity exposure.",
      },
    ],
    relatedSlugs: [
      "returning-to-india-wealth-checklist",
      "nri-investing-india-2026-checklist",
      "nri-portfolio-review-products",
    ],
    sources: [incomeTaxActSource, rbiAccountsSource, ifscaNriSource],
  },
  {
    slug: "nri-portfolio-review-products",
    title: "NRI Portfolio Review: When to Use Mutual Funds, SIF, PMS, AIF, Pre-IPO and GIFT City",
    description:
      "A SoHo Wealth product-fit framework for NRIs reviewing India exposure across mutual funds, SIFs, PMS, AIFs, pre-IPO, GIFT City and property.",
    category: "Portfolio Review",
    audience: "NRI HNIs and families",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "7 min read",
    keywords: [
      "NRI portfolio review",
      "NRI PMS SIF AIF",
      "NRI wealth management India",
      "NRI investment products India",
      "SoHo Wealth NRI advisory",
    ],
    heroKicker: "Product Fit",
    keyTakeaways: [
      "NRIs should assign every product a role: core, satellite, income, liquidity, alternative or legacy asset.",
      "Adding products without reviewing overlap usually increases complexity, not quality.",
      "Private and alternative products need explicit size limits and exit assumptions.",
      "A good review connects product choice to tax status, account route and goal currency.",
    ],
    sections: [
      {
        heading: "The Product Menu Is Bigger Than the Plan",
        body: [
          "NRI investors now see everything: mutual funds, PMS, SIF, AIF, pre-IPO, property, bonds, GIFT City funds and global platforms. The temptation is to collect access.",
          "Access is not advice. A strong portfolio uses fewer moving parts than the product menu suggests. Each holding should answer a simple question: what job are you doing here?",
        ],
      },
      {
        heading: "Product Role Map",
        table: {
          columns: ["Product", "Useful Role", "Watch Point"],
          rows: [
            ["Mutual funds", "Core diversified India exposure", "Overlap and category drift"],
            ["SIF", "Advanced satellite strategy", "Complexity and limited track record"],
            ["PMS", "Concentrated manager-led portfolio", "Drawdown, churn and tax impact"],
            ["AIF", "Alternative or private market exposure", "Lock-in, fees and transparency"],
            ["Pre-IPO", "High-risk opportunity allocation", "Valuation and exit uncertainty"],
            ["GIFT City", "Cross-border or foreign-currency route", "Tax residence and product suitability"],
            ["Real estate", "Use, income or family asset", "Liquidity and concentration"],
          ],
        },
      },
      {
        heading: "The Review Order",
        bullets: [
          "List all India and overseas assets in one household balance sheet.",
          "Mark each holding as core, satellite, legacy, income, liquidity or speculative.",
          "Measure equity, debt, real estate, employer stock and currency exposure.",
          "Identify duplicate funds and unmanaged concentration.",
          "Check account route and repatriation for each India asset.",
          "Set allocation limits before evaluating PMS, SIF, AIF or pre-IPO deals.",
        ],
      },
      {
        heading: "When Products Become a Problem",
        body: [
          "A portfolio with ten products can still be under-diversified. It may own the same India growth stocks through mutual funds, PMS and pre-IPO deals. It may also have too much illiquidity through property and private investments.",
          "The review should uncover hidden concentration, not just count holdings.",
        ],
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "For NRI HNIs, the objective is not to own every sophisticated product. The objective is to know why each product exists.",
          "The cleanest portfolios have a purpose, a size limit, a tax route, a review date and an exit thought for every allocation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best India investment product for NRIs?",
        a: "There is no universal best product. The right choice depends on goals, ticket size, account route, tax residence and risk profile.",
      },
      {
        q: "When should an NRI consider PMS?",
        a: "PMS may be relevant for investors who can allocate Rs. 50 lakh or more and accept concentrated manager risk.",
      },
      {
        q: "Should NRIs invest in pre-IPO opportunities?",
        a: "Only with small allocation sizing, due diligence and clear understanding of liquidity and valuation risk.",
      },
    ],
    relatedSlugs: [
      "sif-for-nris-vs-pms-mutual-funds",
      "gift-city-for-nris-guide",
      "rsu-esop-diversification-nri",
    ],
    sources: [sebiSifSource, ifscaNriSource, rbiAccountsSource],
  },
  {
    slug: "budget-2026-nri-tax-investment-changes",
    title: "Budget 2026 for NRIs: Tax, Property, PIS and Foreign Asset Changes to Track",
    description:
      "A SoHo Wealth reading of Budget 2026 for NRIs, covering property TDS process, foreign asset disclosure, listed equity access and return planning.",
    category: "Budget 2026",
    audience: "NRIs and global Indian families",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "7 min read",
    keywords: [
      "Budget 2026 NRI",
      "Budget 2026 NRI tax changes",
      "NRI property TDS PAN challan",
      "PROI Portfolio Investment Scheme",
      "Income Tax Act 2025 NRI",
    ],
    heroKicker: "Policy Watch",
    keyTakeaways: [
      "Budget 2026 has several NRI-relevant signals around compliance, property, foreign assets and listed equity access.",
      "The Income-tax Act, 2025 applies from 1 April 2026 for FY 2026-27 income onward.",
      "Property-sale TDS process relief does not remove the need for seller-side tax planning.",
      "NRIs should use policy changes as a trigger to clean records, not to chase products.",
    ],
    sections: [
      {
        heading: "Read the Budget Like an NRI, Not Like a Headline Reader",
        body: [
          "Most Budget commentary focuses on tax slabs, sectors and market reaction. NRIs need a different filter. The important questions are practical: will property transactions get easier, will foreign asset reporting get stricter, will listed equity access change, and how should the move year be handled?",
          "Budget 2026 points toward a more formal, documented and cross-border-aware system. That is good for serious investors, but casual paperwork will become harder to defend.",
        ],
      },
      {
        heading: "Property TDS Process Relief",
        body: [
          "One useful Budget proposal relates to the way TDS is deposited when a resident buyer purchases immovable property from a non-resident seller. The intent is to reduce process friction for the buyer.",
          "For the NRI seller, the core work remains unchanged: compute gains, prepare documents, evaluate withholding, route proceeds correctly and plan remittance or reinvestment.",
        ],
      },
      {
        heading: "Foreign Asset Clean-Up",
        body: [
          "Budget 2026 also highlighted a one-time disclosure window for certain small taxpayers with specified foreign assets. This is especially relevant for globally mobile Indians who opened accounts overseas and later returned or changed residency.",
          "Even when an investor does not use such a window, the message is clear: foreign accounts, stock plans and offshore holdings need an inventory.",
        ],
      },
      {
        heading: "Listed Equity Access and FEMA Direction",
        body: [
          "The Budget speech also discussed changes around individual Persons Resident Outside India and listed equity access through the Portfolio Investment Scheme framework. Operational details matter, so investors should wait for implemented rules before acting.",
          "The broader direction is worth noting. India wants global Indian capital to use cleaner, better-defined channels.",
        ],
      },
      {
        heading: "SoHo Wealth View",
        body: [
          "Budget 2026 is a good excuse to clean the NRI wealth file: KYC, bank status, property records, foreign asset list, tax residency timeline and portfolio structure.",
          "Do that before adding the next product. A compliant foundation has more value than a clever transaction.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Budget 2026 change NRI property-sale planning?",
        a: "It may reduce buyer-side process friction for TDS deposit, but NRI sellers still need tax computation and documentation.",
      },
      {
        q: "When does the Income-tax Act, 2025 apply?",
        a: "The Income Tax Department states that it applies from 1 April 2026 for income earned during FY 2026-27 onward.",
      },
      {
        q: "Should NRIs change investments because of Budget 2026?",
        a: "Budget changes should first trigger a compliance and structure review. Investment changes should follow only if the plan requires them.",
      },
    ],
    relatedSlugs: [
      "nri-property-sale-tds-budget-2026",
      "returning-to-india-wealth-checklist",
      "gift-city-for-nris-guide",
    ],
    sources: [budgetSpeechSource, incomeTaxActSource, rbiAccountsSource],
  },
];

export function getInsightPost(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}

export function getRelatedInsightPosts(post: InsightPost) {
  return post.relatedSlugs
    .map((slug) => getInsightPost(slug))
    .filter((related): related is InsightPost => Boolean(related));
}
