export async function extractPmsDetailPage(tab, record, index) {
  await tab.goto(record.strategy_url);
  await tab.playwright.waitForLoadState({ state: "domcontentloaded", timeoutMs: 30000 });
  const extracted = await tab.playwright.evaluate(() => {
    const body = document.body;
    const clean = (value) => (value || "").replace(/\s+/g, " ").trim();
    const headings = Array.from(body.querySelectorAll("h1,h2,h3,h4,h5,h6"));
    const heading = (name) => headings.find((item) => clean(item.textContent).toLowerCase() === name.toLowerCase());
    const headingStarts = (name) => headings.find((item) => clean(item.textContent).toLowerCase().startsWith(name.toLowerCase()));
    const nextHeadingValue = (name) => {
      const item = heading(name);
      if (!item) return "";
      const peers = headings.filter((candidate) => candidate.tagName === item.tagName);
      const position = peers.indexOf(item);
      return position >= 0 && peers[position + 1] ? clean(peers[position + 1].textContent) : "";
    };
    const sectionRoot = (name) => {
      const item = heading(name);
      if (!item) return null;
      let node = item.parentElement;
      while (node && node !== body) {
        if (node.querySelector("table,ul,.tab-container,.amc-profile-desc,.oc-item")) return node;
        node = node.parentElement;
      }
      return item.parentElement;
    };
    const listPairs = (name) => {
      const root = sectionRoot(name);
      if (!root) return [];
      return Array.from(root.querySelectorAll("li")).map((item) => {
        const label = clean(item.querySelector("span.font-weight-normal")?.textContent || item.firstElementChild?.textContent);
        const weight = clean(item.querySelector(".progress-percent")?.textContent || item.getAttribute("data-percent"));
        return label ? { name: label, weight } : null;
      }).filter(Boolean).slice(0, 10);
    };
    const characteristicTable = () => {
      const table = sectionRoot("Portfolio Characteristics")?.querySelector("table");
      if (!table) return {};
      return Object.fromEntries(Array.from(table.querySelectorAll("tr")).map((row) => {
        const cells = Array.from(row.querySelectorAll("td")).map((cell) => clean(cell.textContent)).filter(Boolean);
        return cells.length >= 2 ? [cells[0], cells[1]] : null;
      }).filter(Boolean));
    };
    const feeHeading = heading("Fee Structure");
    let feeRoot = feeHeading?.parentElement || null;
    while (feeRoot && feeRoot !== body && !feeRoot.querySelector("table")) feeRoot = feeRoot.parentElement;
    const feeTable = feeRoot?.querySelector("table");
    const feeHeaders = feeTable ? Array.from(feeTable.querySelectorAll("thead th")).map((cell) => clean(cell.textContent)) : [];
    const feePlans = feeTable ? Array.from(feeTable.querySelectorAll("tbody tr")).map((row) => {
      const cells = Array.from(row.querySelectorAll("td")).map((cell) => clean(cell.textContent));
      return Object.fromEntries(cells.map((value, cellIndex) => [feeHeaders[cellIndex] || `field_${cellIndex + 1}`, value]));
    }).filter((row) => Object.keys(row).length) : [];
    const prose = (name) => {
      const root = sectionRoot(name);
      const item = heading(name);
      if (!root) return "";
      const full = clean(root.textContent);
      const label = clean(item?.textContent);
      return full.startsWith(label) ? clean(full.slice(label.length)) : full;
    };
    const managerRoot = sectionRoot("Fund Manager Info");
    const managers = managerRoot ? Array.from(managerRoot.querySelectorAll(".oc-item")).map((item) => ({
      name: clean(item.querySelector(".entry-title h3")?.textContent),
      role: clean(item.querySelector(".entry-title p")?.textContent),
      bio: clean(item.querySelector(".amc-profile-desc")?.textContent),
    })).filter((manager) => manager.name) : [];
    const uniqueManagers = Array.from(new Map(managers.map((manager) => [manager.name, manager])).values());
    const fundHouseRoot = sectionRoot("Fund House Info");
    const returnRows = (selector) => {
      const root = body.querySelector(selector);
      if (!root) return [];
      return Array.from(root.querySelectorAll("table tr")).map((row) =>
        Array.from(row.querySelectorAll("th,td")).map((cell) => clean(cell.textContent)).filter(Boolean)
      ).filter((row) => row.length);
    };
    return {
      profile_as_on: clean(headingStarts("As On")?.textContent).replace(/^As On\s*/i, ""),
      benchmark_detail: nextHeadingValue("Benchmark"),
      inception_date_detail: nextHeadingValue("Inception Date"),
      minimum_investment: nextHeadingValue("Min. Investment"),
      aum_crore_detail: nextHeadingValue("AUM (Cr.)"),
      top_holdings: listPairs("Top 5 Holdings"),
      top_sectors: listPairs("Top 5 Sectors"),
      portfolio_characteristics: characteristicTable(),
      fee_plans: feePlans,
      investment_approach: prose("Investment Approach"),
      investment_objective: prose("Investment Objective"),
      fund_managers: uniqueManagers,
      fund_house_description: clean(fundHouseRoot?.querySelector(".amc-profile-desc")?.textContent),
      calendar_year_returns: returnRows("#sptabs-1"),
      financial_year_returns: returnRows("#sptabs-2"),
    };
  }, undefined, { timeoutMs: 15000 });
  return { ...record, ...extracted, detail_scraped_at: new Date().toISOString(), detail_status: "ok", detail_index: index };
}
