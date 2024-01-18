import React from 'react';

const fetchBalanceSheet = async () => {
  const getData = await fetch(
    'https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=demo',
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
        <div key={index}>
          <div class="rounded-lg bg-white border border-gray-200 p-6  ">
            <li>
              <strong>Operating Cashflow :</strong> {value.operatingCashflow}
            </li>
            <li>
              <strong>Capital Expenditures :</strong>{' '}
              {value.capitalExpenditures}
            </li>
            <li>
              <strong>Change In Inventory :</strong> {value.changeInInventory}
            </li>
            <li>
              <strong>Profit Loss :</strong> {value.profitLoss}
            </li>
            <li>
              <strong>Dividend Payout :</strong> {value.dividendPayout}
            </li>
            <li>
              <strong>Cashflow From Investment :</strong>{' '}
              {value.cashflowFromInvestment}
            </li>
          </div>
        </div>
      ))}

      <span className="font-bold text-3xl text-center text-cyan-600 p-6">
        Quaterly Report
      </span>
      {data.quarterlyReports.map((value, index) => (
        <div key={index}>
          <div class="rounded-lg bg-white border border-gray-200 p-6  ">
            <li>
              <strong>Operating Cashflow :</strong> {value.operatingCashflow}
            </li>
            <li>
              <strong>Capital Expenditures :</strong>{' '}
              {value.capitalExpenditures}
            </li>
            <li>
              <strong>Change In Inventory :</strong> {value.changeInInventory}
            </li>
            <li>
              <strong>Profit Loss :</strong> {value.profitLoss}
            </li>
            <li>
              <strong>Dividend Payout :</strong> {value.dividendPayout}
            </li>
            <li>
              <strong>Cashflow From Investment :</strong>{' '}
              {value.cashflowFromInvestment}
            </li>
          </div>
        </div>
      ))}
    </>
  );
};

export default BalanceSheet;
