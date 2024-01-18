import React from 'react';

const fetchIncomeStatement = async () => {
  const getData = await fetch(
    'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo',
  );

  const result = await getData.json();
  return result;
};

const IncomeStatement = async () => {
  const data = await fetchIncomeStatement();

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
              <strong>Gross Profit :</strong> {value.grossProfit}
            </li>
            <li>
              <strong>Cost of Revenue :</strong> {value.operatingIncome}
            </li>
            <li>
              <strong>Research and Development :</strong>{' '}
              {value.researchAndDevelopment}
            </li>
            <li>
              <strong>Operating Expenses :</strong> {value.operatingExpenses}
            </li>
            <li>
              <strong>Net Interest Income :</strong> {value.netInterestIncome}
            </li>
            <li>
              <strong>interest Income :</strong> {value.interestIncome}
            </li>{' '}
            <li>
              <strong>Interest Expense :</strong> {value.interestExpense}
            </li>
            <li>
              <strong>Depreciation :</strong> {value.depreciation}
            </li>
            <li>
              <strong>Ebit :</strong> {value.ebit}
            </li>
            <li>
              <strong>Ebitda :</strong> {value.ebitda}
            </li>
            <li>
              <strong>Net Income :</strong> {value.netIncome}
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
              <strong>Gross Profit :</strong> {value.grossProfit}
            </li>
            <li>
              <strong>Cost of Revenue :</strong> {value.operatingIncome}
            </li>
            <li>
              <strong>Research and Development :</strong>{' '}
              {value.researchAndDevelopment}
            </li>
            <li>
              <strong>Operating Expenses :</strong> {value.operatingExpenses}
            </li>
            <li>
              <strong>Net Interest Income :</strong> {value.netInterestIncome}
            </li>
            <li>
              <strong>interest Income :</strong> {value.interestIncome}
            </li>{' '}
            <li>
              <strong>Interest Expense :</strong> {value.interestExpense}
            </li>
            <li>
              <strong>Depreciation :</strong> {value.depreciation}
            </li>
            <li>
              <strong>Ebit :</strong> {value.ebit}
            </li>
            <li>
              <strong>Ebitda :</strong> {value.ebitda}
            </li>
            <li>
              <strong>Net Income :</strong> {value.netIncome}
            </li>
          </div>
        </div>
      ))}
    </>
  );
};

export default IncomeStatement;
