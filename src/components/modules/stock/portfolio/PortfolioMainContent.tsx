import { useState } from 'react';
import { Card, Col, Row, cn } from '@hummingbirdui/react';
import PortfolioLineChart from 'components/charts/e-charts/PortfolioLineChart';
import StockRangeButtonGroup from 'components/common/StockRangeButtonGroup';
import {
  Range,
  portfolioItems,
  portfolioStatusItems
} from 'data/stock/portfolio';
import PortfolioTable from './PortfolioTable';

/** `+MyPortfolioMainContent` in mixins/stock/portfolio/MyPortfolioMainContent.pug */
const PortfolioMainContent = () => {
  const [range, setRange] = useState<Range>('1y');

  return (
    <>
      <Card className="mb-6">
        <Card.Body>
          <Row className="justify-between g-4 2xl:g-8 pb-6 md:pb-8">
            <Col xs={12}>
              <h5 className="text-default">All Portfolio Holding</h5>
              <h4 className="text-default mb-0">$12,000.00</h4>
            </Col>
            <Col xs={12}>
              <div className="scrollbar">
                <Row className="g-0 flex-nowrap">
                  {portfolioStatusItems.map(item => (
                    <Col key={item.title} xs="auto" className={item.className}>
                      <h6 className="text-subtle lh-sm">{item.title}</h6>
                      <div className="flex gap-2 items-center">
                        <p className={cn('mb-0 font-bold', item.textColor)}>
                          {item.amount}
                        </p>
                        <div className={item.badgeClassName}>
                          {' '}
                          {item.badgeContent}%
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="flex-between-center g-4 mb-6">
            <Col xs={12} xxl="auto">
              <h4>Portfolio Chart</h4>
              <p className="mb-0">No. of bookings fulfilled &amp; cancelled</p>
            </Col>
            <Col xs={12} xxl="auto">
              <StockRangeButtonGroup active={range} onChange={setRange} />
            </Col>
          </Row>
          <PortfolioLineChart
            data={portfolioItems.portfolioLineChartData}
            range={range}
          />
        </Card.Body>
      </Card>
      <Row className="g-6">
        <Col xs={12}>
          <h4>My Portfolio </h4>
          <p className="text-subtle mb-0">Brief summary of all projects</p>
        </Col>
        <Col xs={12}>
          <PortfolioTable />
        </Col>
      </Row>
    </>
  );
};

export default PortfolioMainContent;
