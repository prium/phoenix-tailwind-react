import { UilCalendarAlt } from '@iconscout/react-unicons';
import { NewsItem } from 'data/stock/stockDetails';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const NewsCardBody = ({ news }: { news: NewsItem }) => {
  return (
    <Card.Body>
      <h4 className="mb-2 line-clamp-1">{news.title}</h4>
      <p className="text-md text-muted line-clamp-2">
        {news.description}
      </p>
      <div className="flex flex-wrap items-center gap-2 mb-4 text-soft">
        <div className="flex">
          <UilCalendarAlt
            fill="currentColor"
            style={{
              width: 10.25,
              height: 15.23,
              transform: 'translateY(-1px)'
            }}
          />
          <p className="mb-0 text-sm ms-1">{news.postTime}</p>
        </div>
        <ul className="text-sm ps-4 mb-0">
          <li>{news.type}</li>
        </ul>
      </div>
      {news.tags && (
        <div className="flex items-center gap-2">
          {news.tags.map(tag => (
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
    </Card.Body>
  );
};

const StockDetailsNewsCard = ({ newsItem }: { newsItem: NewsItem }) => {
  return (
    <>
      {newsItem.newsState === 'featured' && (
        <Card
          className="overflow-hidden 2xl:h-full"
          style={{ maxHeight: '390px' }}
        >
          <img src={newsItem.image} alt="" className="card-img-top 2xl:h-full" />
          <Card.ImgOverlay className="flex items-end stock-news-tab backdrop-faded">
            <div className="text-white">
              <h4 className="text-white mb-2 line-clamp-1">{newsItem.title}</h4>
              <p className="text-md text-white line-clamp-4">
                {newsItem.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex">
                  <UilCalendarAlt
                    fill="currentColor"
                    style={{
                      width: 10.25,
                      height: 15.23,
                      transform: 'translateY(-1px)'
                    }}
                  />
                  <p className="mb-0 text-sm ms-1">{newsItem.postTime}</p>
                </div>
                <ul className="text-sm ps-4 mb-0">
                  <li>{newsItem.type}</li>
                </ul>
              </div>
              {newsItem.tags && (
                <div className="flex items-center gap-2">
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
          </Card.ImgOverlay>
        </Card>
      )}
      {newsItem.newsState === 'highlight' && (
        <Row className="g-0">
          <Col xs={12} sm={4}>
            <img
              src={newsItem.image}
              alt=""
              className="h-full w-full rounded-t-md sm:rounded-t-none sm:rounded-s-md"
            />
          </Col>
          <Col xs={12} sm={8}>
            <Card className="rounded-none sm:rounded-e-md h-full">
              <NewsCardBody news={newsItem} />
            </Card>
          </Col>
        </Row>
      )}
      {newsItem.newsState === 'regular' && (
        <Card className="h-full">
          <img src={newsItem.image} alt="" className="card-img-top" />
          <NewsCardBody news={newsItem} />
        </Card>
      )}
    </>
  );
};

export default StockDetailsNewsCard;
