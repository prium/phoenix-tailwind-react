import classNames from 'classnames';
import StockDetailsNewsCard from 'components/cards/StockDetailsNewsCard';
import SearchBox from 'components/common/SearchBox';
import StockDetailsPagination from 'components/common/StockDetailsPagination';
import { NewsItem } from 'data/stock/stockDetails';
import { Col, Form, Pagination, Row } from 'react-bootstrap';

interface NewsTabContentProps {
  newsItems: NewsItem[];
}

const NewsTabContent = ({ newsItems }: NewsTabContentProps) => {
  return (
    <Row className="g-4 lg:g-8 flex-between-center">
      <Col xs="auto">
        <h4 className="font-black">Apple Stock News</h4>
        <p className="mb-0">Brief summary of all projects</p>
      </Col>
      <Col xs="auto">
        <div className="flex items-center gap-2">
          <Form.Select style={{ maxWidth: 140 }}>
            <option value="all">All News</option>
            <option value="orcl">Orcl News</option>
            <option value="aapl">AAPL News</option>
            <option value="ai">AI News</option>
            <option value="buy">Buy News</option>
            <option value="sell">Sell News</option>
          </Form.Select>
          <SearchBox placeholder="Search news" className="w-full" />
        </div>
      </Col>
      <Col xs={12}>
        <div className="grid grid-cols-12 gap-6">
          {newsItems.map(newsItem => (
            <div key={newsItem.id} className={classNames(newsItem.className)}>
              <StockDetailsNewsCard newsItem={newsItem} />
            </div>
          ))}
        </div>
        <StockDetailsPagination currentPage={1} pageSize={9} totalItem={78}>
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>9</Pagination.Item>
          <Pagination.Item>10</Pagination.Item>
        </StockDetailsPagination>
      </Col>
    </Row>
  );
};

export default NewsTabContent;
