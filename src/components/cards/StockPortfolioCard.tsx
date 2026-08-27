import { useState } from 'react';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import {
  PortfolioHoldingItem,
  PortfolioLineChartDataItem,
  Range
} from 'data/stock/portfolio';
import { currencyFormat } from 'helpers/utils';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import PortfolioLineChart from 'components/charts/e-charts/PortfolioLineChart';

interface StockPortfolioCardProps {
  portfolioHoldingItems: PortfolioHoldingItem[];
  chartData: PortfolioLineChartDataItem;
}

const StockPortfolioCard = ({
  portfolioHoldingItems,
  chartData
}: StockPortfolioCardProps) => {
  const [active, setActive] = useState<Range>('1y');
  return (
    <Card className="mb-6 overflow-hidden">
      <Card.Body>
        <Row className="justify-between g-4 2xl:g-8 pb-6 md:pb-8">
          <Col xs={12}>
            <h5 className="text-default">All Portfolio Holding</h5>
            <h4 className="text-default mb-0">
              {currencyFormat(12000, { minimumFractionDigits: 2 })}
            </h4>
          </Col>
          <Col xs={12}>
            <div className="scrollbar">
              <Row className="g-0 flex-nowrap">
                {portfolioHoldingItems.map(item => (
                  <Col key={item.id} xs="auto" className={item.className}>
                    <h6 className="text-subtle">{item.title}</h6>
                    <div className="flex gap-2 items-center">
                      <p
                        className={classNames(
                          'mb-0 font-bold',
                          item.amount.className
                        )}
                      >
                        {item.amount.prefix}
                        {currencyFormat(item.amount.price, {
                          notation: 'compact',
                          compactDisplay: 'short'
                        })}
                      </p>
                      <Badge
                        variant="phoenix"
                        bg={item.badge.badgeBg}
                        className="text-sm"
                      >
                        {item.badge.prefix}
                        {item.badge.label}%
                      </Badge>
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
            <div className="scrollbar pe-1">
              <ButtonGroup size="sm" className="stock-btn-group">
                {['1D', '5D', '1M', '3M', '6M', '1Y', 'All'].map(
                  (label, index) => (
                    <Button
                      key={index}
                      variant="phoenix-secondary"
                      active={active === label.toLowerCase()}
                      onClick={() => setActive(label.toLowerCase() as Range)}
                    >
                      {label}
                    </Button>
                  )
                )}
              </ButtonGroup>
            </div>
          </Col>
        </Row>
        <PortfolioLineChart data={chartData} range={active} />
      </Card.Body>
    </Card>
  );
};

export default StockPortfolioCard;
