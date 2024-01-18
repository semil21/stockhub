import '../styles/style.css';

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

const getTechnologyData = async () => {
  const techData = await fetch(
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fbc19217baa34606ac37889ca5fe55ee',
  );

  const techNews = await techData.json();
  return techNews;
};

const getScienceData = async () => {
  const scienceData = await fetch(
    'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=fbc19217baa34606ac37889ca5fe55ee',
  );

  const scienceNews = await scienceData.json();
  return scienceNews;
};

const Home = async () => {
  const posts = await getPosts();
  const news = await newsData();
  const techNews = await getTechnologyData();
  const scienceNews = await getScienceData();

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

      {/* ========================= Business  News Section starts  ========================= */}
      <span className="font-bold text-4xl text-center text-cyan-600">
        Top Business News
      </span>

      <div className="p-5 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {news.articles.map((value, key) => (
            <a href={`${value.url}`} target="__blank">
              <div
                key="index"
                className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3 	"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(30,34,45,0.6), rgba(30,34,45,0.8)),url(${value.urlToImage})`,
                  backgroundSize: 'cover',
                  height: '100%',
                }}
              >
                <div className="text-gray-700 flex-grow">
                  <p className="text-base">
                    <span className="font-bold text-white">
                      {' '}
                      {value.title.substring(0, 95)}
                    </span>
                  </p>
                  <span className="text-white">...read more</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* ========================= Business  News Section Ends  ========================= */}

      {/* ========================= Technology News Section starts  ========================= */}
      <span className="font-bold text-4xl text-center text-cyan-600 ">
        Top Technology News
      </span>

      <div className="p-5 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {techNews.articles.map((value, key) => (
            <a href={`${value.url}`} target="__blank">
              <div
                key="index"
                className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3 	"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(30,34,45,0.6), rgba(30,34,45,0.8)),url(${value.urlToImage})`,
                  backgroundSize: 'cover',
                  height: '100%',
                }}
              >
                <div className="text-gray-700 flex-grow">
                  {/* <h2 className="text-gray-800 font-bold text-2xl text-center my-1 ">
                    {market.region}
                  </h2> */}
                  <p className="text-base">
                    <span className="font-bold text-white">
                      {value.title.substring(0, 95)}
                    </span>
                  </p>
                  <span className="text-white">...read more</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* ========================= Technology News Section ends  ========================= */}

      {/* ========================= Science  Section starts  ========================= */}
      <span className="font-bold text-4xl text-center text-cyan-600 ">
        Top Science News
      </span>

      <div className="p-5 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {scienceNews.articles.map((value, key) => (
            <a href={`${value.url}`} target="__blank">
              <div
                key="index"
                className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3 	"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(30,34,45,0.6), rgba(30,34,45,0.8)),url(${value.urlToImage})`,
                  backgroundSize: 'cover',
                  height: '100%',
                }}
              >
                <div className="text-gray-700 flex-grow">
                  <p className="text-base">
                    <span className="font-bold text-white">
                      {' '}
                      {value.title.substring(0, 95)} ...read more
                    </span>
                  </p>
                  <span className="text-white">...read more</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* ========================= Science  Section ends  ========================= */}
    </>
  );
};

export default Home;
