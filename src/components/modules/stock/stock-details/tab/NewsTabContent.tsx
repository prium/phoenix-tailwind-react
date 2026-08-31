import classNames from 'classnames';
import { Select } from '@hummingbirdui/react';
import StockDetailsNewsCard from 'components/cards/StockDetailsNewsCard';
import SearchBox from 'components/common/SearchBox';
import StockDetailsPagination from 'components/common/StockDetailsPagination';
import { NewsItem } from 'data/stock/stockDetails';

interface NewsTabContentProps {
  newsItems: NewsItem[];
}

/** Gold: mixins/stock/stock-details/NewsTabContent.pug */
const NewsTabContent = ({ newsItems }: NewsTabContentProps) => {
  return (
    <div className="row g-4 lg:g-8 flex-between-center">
      <div className="col-auto">
        <h4 className="font-extrabold">Apple Stock News</h4>
        <p className="mb-0 text-subtle">Brief summary of all projects</p>
      </div>
      <div className="col-auto">
        <div className="flex items-center gap-2">
          <Select name="news-filter" id="news-filter" className="max-w-35">
            <option value="all">All News</option>
            <option value="orcl">Orcl News</option>
            <option value="AAPL">AAPL News</option>
          </Select>
          <SearchBox placeholder="Search news" className="w-full" />
        </div>
      </div>
      <div className="col-12">
        <div className="row g-6 mb-6">
          <div className="col-12 2xl:col-6">
            <StockDetailsNewsCard newsItem={newsItems[0]} />
          </div>
          <div className="col-12 2xl:col-6">
            <div className="row g-0 mb-6">
              <StockDetailsNewsCard newsItem={newsItems[1]} />
            </div>
            <div className="row g-0">
              <StockDetailsNewsCard newsItem={newsItems[2]} />
            </div>
          </div>
        </div>
        <div className="row g-6">
          {newsItems.slice(3).map(newsItem => (
            <div key={newsItem.id} className={classNames(newsItem.className)}>
              <StockDetailsNewsCard newsItem={newsItem} />
            </div>
          ))}
        </div>
        <StockDetailsPagination
          currentPage={1}
          pageSize={9}
          totalItem={78}
          nextBtnClassName="pe-0"
        >
          <li className="page-item active">
            <a className="page-link" href="#!">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#!">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#!">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#!">
              9
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#!">
              10
            </a>
          </li>
        </StockDetailsPagination>
      </div>
    </div>
  );
};

export default NewsTabContent;
