import { UilCalendarAlt } from '@iconscout/react-unicons';
import Unicon from 'components/base/Unicon';
import { NewsItem } from 'data/stock/stockDetails';
import { Link } from 'react-router';

/**
 * Gold: `+NewsCardBody` / featured & highlight card markup in
 * mixins/stock/stock-details/NewsTabContent.pug. The `highlight` variant
 * renders the two `.col-*` halves — the parent supplies the `.row.g-0` wrapper.
 */
const NewsCardBody = ({ news }: { news: NewsItem }) => {
  return (
    <div className="card-body">
      <h4 className="mb-2 line-clamp-1">{news.title}</h4>
      <p className="text-md text-muted line-clamp-2">{news.description}</p>
      <div className="flex flex-wrap items-center gap-2 mb-4 text-soft">
        <div className="flex items-center">
          <Unicon
            icon={UilCalendarAlt}
            lineBox
            wrapperClassName="text-sm"
            fill="currentColor"
            size={12.8}
          />
          <p className="mb-0 text-sm ms-1">{news.postTime}</p>
        </div>
        <ul className="text-sm ps-4 mb-0">
          <li>{news.type}</li>
        </ul>
      </div>
      <div className="flex align-items gap-2">
        {news.tags?.map(tag => (
          <Link
            key={tag.id}
            to={tag.link}
            className="text-sm font-bold px-2 py-1 bg-primary-subtle rounded-md text-highlight mb-0 uppercase leading-sm"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const StockDetailsNewsCard = ({ newsItem }: { newsItem: NewsItem }) => {
  return (
    <>
      {newsItem.newsState === 'featured' && (
        <div className="card overflow-hidden 2xl:h-full max-h-97.5">
          <img
            src={newsItem.image}
            alt=""
            className="card-img-top 2xl:h-full"
          />
          <div className="card-img-overlay flex items-end stock-news-tab backdrop-faded top-0">
            <div className="text-white">
              <h4 className="text-white mb-2 line-clamp-1">{newsItem.title}</h4>
              <p className="text-md text-white line-clamp-4">
                {newsItem.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Unicon
                    icon={UilCalendarAlt}
                    lineBox
                    wrapperClassName="text-sm"
                    fill="currentColor"
                    size={12.8}
                  />
                  <p className="mb-0 text-sm text-white ms-1">
                    {newsItem.postTime}
                  </p>
                </div>
                <ul className="text-sm ps-4 mb-0">
                  <li>{newsItem.type}</li>
                </ul>
              </div>
              {newsItem.tags && newsItem.tags.length > 0 && (
                <div className="flex align-items gap-2">
                  {newsItem.tags.map(tag => (
                    <Link
                      key={tag.id}
                      to={tag.link}
                      className="px-2 py-1 bg-primary-subtle rounded-md text-sm font-bold text-highlight mb-0 uppercase leading-sm"
                    >
                      {tag.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {newsItem.newsState === 'highlight' && (
        <>
          <div className="col-12 sm:col-4">
            <img
              src={newsItem.image}
              alt=""
              className="h-full w-full rounded-t-md sm:rounded-e-none  sm:rounded-s-md"
            />
          </div>
          <div className="col-12 sm:col-8">
            <div className="card rounded-none sm:rounded-e-md h-full">
              <NewsCardBody news={newsItem} />
            </div>
          </div>
        </>
      )}
      {newsItem.newsState === 'regular' && (
        <div className="card h-full">
          <img src={newsItem.image} alt="image" className="card-img-top" />
          <NewsCardBody news={newsItem} />
        </div>
      )}
    </>
  );
};

export default StockDetailsNewsCard;
