import React from 'react';

const fetchBalanceSheet = async () => {
  const getData = await fetch(
    'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo',
  );

  const result = await getData.json();
  return result;
};

const BalanceSheet = async () => {
  const data = await fetchBalanceSheet();

  return (
    <>
      <span className="font-bold text-4xl text-center text-cyan-600 p-6">
        Company Overview
      </span>

      <span className="font-bold text-3xl text-center text-cyan-600 p-6">
        Annual Report
      </span>
      {data.annualReports.map((value, index) => (
        <div>
          <div class="rounded-lg bg-white border border-gray-200 p-6  ">
            <li>
              <strong>Fiscal Date Ending :</strong> {value.fiscalDateEnding}
            </li>
            <li>
              <strong>Reported Currency :</strong> {value.reportedCurrency}
            </li>
            <li>
              <strong>Total Assets :</strong> {value.totalAssets}
            </li>
            <li>
              <strong>Total Current Assets :</strong> {value.totalCurrentAssets}
            </li>
            <li>
              <strong>Inventory :</strong> {value.inventory}
            </li>
            <li>
              <strong>Goodwill :</strong> {value.goodwill}
            </li>
            <li>
              <strong>Total Liabilities :</strong> {value.totalLiabilities}
            </li>
            <li>
              <strong>Deferred Revenue :</strong> {value.deferredRevenue}
            </li>{' '}
            <li>
              <strong>Current Debt :</strong> {value.currentDebt}
            </li>
            <li>
              <strong>ShortTerm Debt :</strong> {value.shortTermDebt}
            </li>
            <li>
              <strong>LongTerm Debt :</strong> {value.longTermDebt}
            </li>
            <li>
              <strong>Treasury Stock :</strong> {value.treasuryStock}
            </li>
            <li>
              <strong>Common Stock :</strong> {value.commonStock}
            </li>
          </div>
        </div>
      ))}

      <span className="font-bold text-3xl text-center text-cyan-600 p-6">
        Quaterly Report
      </span>
      {data.quarterlyReports.map((value, index) => (
        <div>
          <div class="rounded-lg bg-white border border-gray-200 p-6  ">
            <li>
              <strong>Fiscal Date Ending :</strong> {value.fiscalDateEnding}
            </li>
            <li>
              <strong>Reported Currency :</strong> {value.reportedCurrency}
            </li>
            <li>
              <strong>Total Assets :</strong> {value.totalAssets}
            </li>
            <li>
              <strong>Total Current Assets :</strong> {value.totalCurrentAssets}
            </li>
            <li>
              <strong>Inventory :</strong> {value.inventory}
            </li>
            <li>
              <strong>Goodwill :</strong> {value.goodwill}
            </li>
            <li>
              <strong>Total Liabilities :</strong> {value.totalLiabilities}
            </li>
            <li>
              <strong>Deferred Revenue :</strong> {value.deferredRevenue}
            </li>{' '}
            <li>
              <strong>Current Debt :</strong> {value.currentDebt}
            </li>
            <li>
              <strong>ShortTerm Debt :</strong> {value.shortTermDebt}
            </li>
            <li>
              <strong>LongTerm Debt :</strong> {value.longTermDebt}
            </li>
            <li>
              <strong>Treasury Stock :</strong> {value.treasuryStock}
            </li>
            <li>
              <strong>Common Stock :</strong> {value.commonStock}
            </li>
          </div>
        </div>
      ))}
    </>
  );
};

export default BalanceSheet;
