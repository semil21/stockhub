import '../styles/style.css';
import Link from 'next/link';

const getPosts = async () => {
  const data = await fetch(
    'https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo',
  );
  const posts = await data.json();
  return posts;
};

const newsData = async () => {
  const newsData = await fetch(
    'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fbc19217baa34606ac37889ca5fe55ee',
  );
  const news = await newsData.json();
  return news;
};

const Home = async () => {
  const posts = await getPosts();
  const news = await newsData();

  return (
    <>
      <span className="font-bold text-4xl text-center text-cyan-600">
        Global Market Status
      </span>

      <div className="p-5 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts.markets.map((market, index) => (
            <div
              key="index"
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3"
            >
              <div className="text-gray-700 flex-grow">
                
                <h2 className="text-gray-800 font-bold text-2xl text-center my-1 ">
                  {market.region}
                </h2>
                <p className="text-base">
                  Market Type:{' '}
                  <span className="font-semibold"> {market.market_type} </span>
                </p>

                <p className="text-base">
                  Current Status:{' '}
                  {market.current_status === 'open' ? (
                    <span className="font-semibold text-emerald-500">
                      {market.current_status}
                    </span>
                  ) : (
                    <span className="font-semibold text-red-500">
                      {market.current_status}
                    </span>
                  )}
                </p>
                <p className="text-base">
                  Local Open:{' '}
                  <span className="font-semibold">{market.local_open} </span>{' '}
                </p>
                <p className="text-base">
                  Local Close:{' '}
                  <span className="font-semibold">{market.local_close} </span>
                </p>
                <p className="text-base">
                  Primary Exchanges:{' '}
                  <span className="font-semibold ">
                    {market.primary_exchanges}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================= News Section  ========================= */}
      <span className="font-bold text-4xl text-center text-cyan-600">
        Top Business News 
      </span>
{news.articles.map((value,key) => (
  <div className=" min-h-screen" key={key}>
        <Link href={value.url}>
        <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
          <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
            <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
              <div
                href="#"
                className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
              >
                <img
                  src={value.urlToImage}
                  className="absolute z-0 object-cover w-full h-72 md:h-96"
                />
                <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                        {value.title}
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
                      {value.description && value.description.substring(0, 120)} ...
                    </p>
                    <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
      ))}
    </>
  );
};

export default Home;
