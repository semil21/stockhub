import React from 'react';

const getCrudeOilDaily = async () => {
  const getData = await fetch(
    'https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo',
  );

  const dailyData = await getData.json();
  return dailyData;
};

const page = async () => {
  const crudeDataDaily = await getCrudeOilDaily();
  return (
    <>
      <span className="font-bold text-4xl text-center text-cyan-600">
        Aluminum [ Dollars per Million BTU ]
      </span>
      <div className="p-5 min-h-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {crudeDataDaily?.data?.map((value, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3"
            >
              {value ? (
                <div className="text-gray-700 flex-grow">
                  <h2 className="text-gray-800 font-bold text-2xl text-center my-1">
                    {value.ticker}
                  </h2>
                  <p className="text-base">
                    date : <span className="font-semibold ">{value.date}</span>
                  </p>
                  <p className="text-base">
                    Value :{' '}
                    <span className="font-semibold text-green-500">
                      {value.value}
                    </span>
                  </p>
                </div>
              ) : (
                <p>This Project uses free API which has 25</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
