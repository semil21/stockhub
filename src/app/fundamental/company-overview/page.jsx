import { resourceLimits } from 'worker_threads';
import React from 'react';

const fetchCompanyOverview = async () => {
  const getData = await fetch(
    'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo',
  );

  const result = await getData.json();
  return result;
};

const CompanyOverview = async () => {
  const data = await fetchCompanyOverview();
  console.log('data', data);

  return (
    <>
      <span className="font-bold text-4xl text-center text-cyan-600 p-6">
        Company Overview
      </span>

      {Object.entries(data).map(([key, value]) => (
        <div>
          <div class="rounded-lg bg-white border border-gray-200 p-6  ">
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompanyOverview;
