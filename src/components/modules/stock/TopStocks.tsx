import { useState } from 'react';
import { Row, Col, Nav, Tab, Card } from 'react-bootstrap';
import SearchBox from 'components/common/SearchBox';
import { topStockItems } from 'data/stock/dashboardTopStocks';
import TopStocksSidebarCard from 'components/cards/TopStocksSidebarCard';
import TopStockMainContent from './TopStockMainContent';

const TopStocks = () => {
  const [activeKey, setActiveKey] = useState('aapl');

  const handleSelect = (key: string | null) => {
    if (key) {
      setActiveKey(key);
    }
  };

  return (
    <>
      <h3 className="mb-6 text-emphasis">Top Stock</h3>
      <Tab.Container
        activeKey={activeKey}
        onSelect={handleSelect}
        mountOnEnter={false}
      >
        <Row className="gx-8">
          <Col xl={5} xxl={4} className="mb-6 xl:mb-0 top-stock-card-container">
            <SearchBox
              placeholder="Enter Company or Symbol name"
              className="w-full mb-4 xl:pe-4"
            />
            <div className="">
              <Nav className="whitespace-nowrap gap-4 xl:gap-2 flex-nowrap xl:flex-col top-stock-tab w-full xl:pe-4 scrollbar">
                {topStockItems.map(item => (
                  <Nav.Link
                    key={item.id}
                    as={Card}
                    eventKey={item.abbr.toLowerCase()}
                    className="company-card"
                  >
                    <TopStocksSidebarCard topStocksItem={item} />
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          </Col>
          <Col xl={7} xxl={8} className="flex-1 xl:ps-0">
            <Tab.Content>
              {topStockItems.map(item => (
                <Tab.Pane key={item.id} eventKey={item.abbr.toLowerCase()}>
                  <TopStockMainContent topStockItem={item} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default TopStocks;
