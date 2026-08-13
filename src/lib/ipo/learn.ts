import type { FAQ } from "@/components/seo/FAQSection";

export type IpoLearnGuide = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  faqs: FAQ[];
};

export const ipoLearnGuides: IpoLearnGuide[] = [
  {
    slug: "subscription",
    title: "IPO Subscription Explained",
    eyebrow: "Demand and bidding",
    description: "Understand IPO subscription figures across QIB, NII, retail, employee and shareholder categories—and what the numbers do not tell you.",
    intro: "Subscription data shows how many shares investors bid for relative to the shares available in each category. It is useful context, but it is not a quality score or a forecast of listing performance.",
    faqs: [
      { q: "What does IPO subscription mean?", a: "IPO subscription compares valid bids received with the shares offered. A category subscribed 2 times has received bids for roughly twice the shares available in that category. Figures can change during the day and may be adjusted after invalid or duplicate bids are removed." },
      { q: "What are QIB, NII and retail categories?", a: "QIB refers to qualified institutional buyers such as eligible mutual funds, insurers and foreign portfolio investors. NII refers to non-institutional investors and is commonly associated with HNI applications. Retail individual investors generally apply within the retail monetary limit specified for the issue." },
      { q: "What are sNII and bNII?", a: "The non-institutional category is divided into smaller and larger application buckets. sNII generally covers applications above the retail limit and up to ₹10 lakh, while bNII covers applications above ₹10 lakh, subject to current issue rules and the offer document." },
      { q: "Why do subscription numbers jump on the final day?", a: "Institutional and large non-institutional bids are often placed or finalized late in the issue period. Financing arrangements and bid updates can also concentrate demand on the closing day. Early subscription figures therefore provide an incomplete picture." },
      { q: "Does 100× subscription mean the IPO is good?", a: "No. High subscription measures demand relative to supply, not business quality or valuation. A small issue can show a very high multiple with limited absolute demand, and heavily subscribed IPOs can still list poorly or underperform later." },
      { q: "Which subscription category matters most?", a: "There is no universally decisive category. QIB participation may indicate institutional interest, while retail and NII demand reveal different parts of the market. The quality, timing and concentration of demand matter more than one headline total." },
      { q: "Can subscription numbers fall?", a: "Yes. Bids may be modified, withdrawn where permitted, rejected or reconciled by the exchange. The final validated subscription can differ from live figures displayed during bidding." },
      { q: "Where should subscription data be checked?", a: "Use the NSE or BSE issue-information pages and the offer documents as primary references. Aggregator websites can make the data easier to read, but timestamps and category definitions should be checked before relying on them." },
    ],
  },
  {
    slug: "allotment",
    title: "IPO Allotment Explained",
    eyebrow: "Allocation and probability",
    description: "Learn how IPO shares are allocated, why oversubscribed retail allotment resembles a lottery, and how to check allotment status safely.",
    intro: "Reservation determines how an issue is divided among investor categories. Allotment determines who ultimately receives shares after bidding closes and valid applications are reconciled.",
    faqs: [
      { q: "What is the difference between reservation and allotment?", a: "Reservation is the portion of the issue set aside for categories such as QIB, NII, retail, employee or eligible shareholder applicants. Allotment is the final distribution of shares among valid applicants within those categories." },
      { q: "How does retail IPO allotment work when oversubscribed?", a: "The process first seeks to give the minimum bid lot to as many valid retail applicants as possible, subject to the shares available. When valid applicants exceed the number of minimum-lot allotments possible, computerized draw-of-lots principles are used under the basis of allotment." },
      { q: "Does applying for more lots improve retail allotment chances?", a: "In a heavily oversubscribed retail category where only one minimum lot can be distributed per successful applicant, a larger bid does not necessarily improve the probability of receiving that minimum lot. Rules depend on the issue and final basis of allotment." },
      { q: "How is NII or HNI allotment calculated?", a: "NII allotment follows the applicable proportionate-allotment framework within its subcategories, subject to minimum application size, valid demand and rounding rules. It is different from the retail draw-of-lots mechanism." },
      { q: "What is the basis of allotment document?", a: "It is the exchange-approved document explaining category demand, valid applications, allocation ratios and the method used to distribute shares. It is the most useful document for understanding the final allotment outcome." },
      { q: "How can I check IPO allotment status?", a: "Use the registrar's official allotment page or the relevant exchange facility. Enter only the identifiers requested by the official site, such as PAN or application number, and avoid links from unsolicited messages." },
      { q: "Why did I receive no allotment despite applying early?", a: "IPO allotment is not generally first-come, first-served. In an oversubscribed category, applying on the first day does not give priority over an otherwise valid application submitted before the deadline." },
      { q: "When are blocked funds released after no allotment?", a: "The bank should unblock the unallotted amount according to the issue timeline after finalization of allotment. Operational delays can occur; applicants should first check the mandate and bank status, then contact the bank or intermediary using official channels." },
    ],
  },
  {
    slug: "application",
    title: "How IPO Applications Work",
    eyebrow: "ASBA, UPI and bidding",
    description: "A practical guide to IPO applications, ASBA, UPI mandates, cut-off bids, lot sizes, modifications and common failure points.",
    intro: "An IPO application is a bid, not a completed purchase. Funds are normally blocked during processing and debited only to the extent shares are allotted, subject to the application route and mandate rules.",
    faqs: [
      { q: "What is ASBA?", a: "ASBA means Application Supported by Blocked Amount. The application money remains blocked in the investor's bank account while the IPO is processed and is debited only for shares allotted. The unneeded amount is subsequently unblocked." },
      { q: "How does an IPO UPI mandate work?", a: "After an eligible application is submitted through an intermediary, a mandate request is sent to the UPI app linked to the application. The investor must verify the amount and approve it before the applicable deadline. Merely submitting the bid without a valid mandate approval can make the application invalid." },
      { q: "What is the cut-off price option?", a: "For eligible retail applications in a book-built issue, selecting cut-off indicates willingness to pay the final discovered issue price within the price band. It avoids the bid becoming invalid solely because the final price is above a specific lower bid price." },
      { q: "What is an IPO lot size?", a: "The lot size is the minimum number of shares in one bid unit. Applications must generally be made for one lot or permitted multiples, while also staying within the monetary and category limits applicable to the investor." },
      { q: "Can an IPO bid be modified or cancelled?", a: "Eligible bids can generally be revised during the issue period, subject to category rules, platform cut-offs and the stage of the issue. QIB withdrawal rules differ. Any modification should be confirmed in the final exchange-recorded bid." },
      { q: "Can I submit applications from multiple demat accounts using one PAN?", a: "Multiple applications in the same issue using the same PAN may be treated as duplicate applications and rejected, subject to permitted exceptions described in the offer document. Using several broker accounts does not create several independent PAN identities." },
      { q: "Why do IPO applications fail?", a: "Common causes include an unapproved or expired UPI mandate, mismatched PAN or demat details, insufficient available balance, duplicate applications, an invalid bid quantity or price, category errors, or submission after an intermediary's cut-off." },
      { q: "Is pre-apply the same as a successful application?", a: "No. Pre-apply stores or schedules bid instructions before the issue opens. The final bid and fund-blocking mandate must still be successfully created and accepted when bidding becomes available." },
    ],
  },
  {
    slug: "mainboard-vs-sme",
    title: "Mainboard IPO vs SME IPO",
    eyebrow: "Market structure and risk",
    description: "Compare Mainboard and SME IPOs across application size, liquidity, disclosure frequency, market making and post-listing risks.",
    intro: "Mainboard and SME IPOs both raise public equity, but their listing platforms, application economics, liquidity conditions and issuer profiles can differ materially.",
    faqs: [
      { q: "What is a Mainboard IPO?", a: "A Mainboard IPO lists equity on the main NSE or BSE platform and typically involves a larger issuer and issue size. The issuer must meet the applicable eligibility, disclosure and listing framework or use an allowed alternative route." },
      { q: "What is an SME IPO?", a: "An SME IPO lists on a dedicated platform such as NSE Emerge or BSE SME. It is designed for smaller companies and has platform-specific issue, trading, market-making and compliance provisions." },
      { q: "Why is the minimum SME IPO application much larger?", a: "SME issues generally trade and apply in larger lots under the applicable platform framework. This can make the minimum monetary commitment substantially higher than a typical Mainboard retail application." },
      { q: "Are SME IPOs riskier than Mainboard IPOs?", a: "They can carry additional risks arising from smaller operating scale, customer or supplier concentration, limited history, lower public float, thinner research coverage and less trading liquidity. Risk still varies company by company." },
      { q: "What does an SME market maker do?", a: "The designated market maker provides two-way quotes under the platform framework to support trading liquidity. Market making does not guarantee that an investor can exit at a preferred price or that liquidity will remain deep during stressed conditions." },
      { q: "Why can SME IPO subscription and listing moves look extreme?", a: "Small share supply, larger lot sizes, concentrated ownership and limited float can magnify demand multiples and price changes. A high subscription multiple or sharp listing move should not be confused with low risk." },
      { q: "Can an SME company migrate to the Mainboard?", a: "Migration may be possible after meeting the exchange's applicable conditions and receiving the required approvals. It is not automatic and should not be assumed merely because management discusses future migration." },
      { q: "Are SME financial disclosures less frequent?", a: "SME-listed companies may follow platform-specific periodic reporting requirements that differ from Mainboard companies. Investors should verify the current exchange rules and should expect less analyst coverage and potentially less frequent market information." },
    ],
  },
  {
    slug: "issue-structure",
    title: "IPO Issue Structure Explained",
    eyebrow: "Fresh issue, OFS and proceeds",
    description: "Understand fresh issues, offers for sale, dilution, promoter selling, anchor investors, employee reservations and use of proceeds.",
    intro: "Two IPOs raising the same amount can have very different economic effects. The key question is how much capital enters the company, who is selling, and what happens to ownership after the issue.",
    faqs: [
      { q: "What is a fresh issue?", a: "In a fresh issue, the company creates and sells new shares. The company receives the proceeds, after issue expenses, for the stated objects such as capex, debt repayment, working capital, acquisitions or general corporate purposes. Existing shareholders are diluted." },
      { q: "What is an offer for sale or OFS in an IPO?", a: "In an IPO OFS, existing shareholders sell some of their shares to the public. The selling shareholders receive the proceeds attributable to their shares; the company does not receive that portion of the money." },
      { q: "Is a large OFS always a red flag?", a: "No. Early investors may need liquidity, promoters may diversify, or regulations may require a wider public float. The relevant questions are who is selling, how much they retain, their acquisition cost, and whether the company itself needs growth capital." },
      { q: "What is dilution?", a: "Dilution is the reduction in an existing shareholder's percentage ownership when new shares are issued. Investors should examine post-issue share count, promoter holding and earnings per share rather than relying only on pre-issue figures." },
      { q: "What are objects of the issue?", a: "These are the disclosed uses for fresh-issue proceeds. Specific, measurable uses such as identified capex or debt repayment are easier to monitor than broad allocations to general corporate purposes or unidentified acquisitions." },
      { q: "What is a pre-IPO placement?", a: "A pre-IPO placement is a share issuance or sale completed before the public issue, often to institutional or strategic investors. Its price, timing, lock-in and effect on the final fresh issue should be reviewed in the offer document." },
      { q: "What is anchor investor allocation?", a: "Anchor investors are eligible institutional investors allotted shares before the public issue opens under the applicable framework. Their participation provides a demand signal but does not guarantee listing performance or long-term business quality." },
      { q: "What are employee and shareholder reservations?", a: "Some IPOs reserve shares for eligible employees or shareholders of a specified parent company. Eligibility dates, discounts, application limits and whether bids can also be made in another category are defined in the offer document." },
    ],
  },
];

export const getIpoLearnGuide = (slug: string) => ipoLearnGuides.find((guide) => guide.slug === slug);

