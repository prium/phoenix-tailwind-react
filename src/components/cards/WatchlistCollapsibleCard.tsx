import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Collapsible, Row } from '@hummingbirdui/react';
import WatchlistReportChart from 'components/charts/e-charts/WatchlistReportChart';
import StockRangeButtonGroup from 'components/common/StockRangeButtonGroup';
import { Range } from 'data/stock/portfolio';
import {
  watchlistDataItems,
  watchlistSummaryStats
} from 'data/stock/watchlist';

interface WatchlistCollapsibleCardProps {
  className?: string;
}

/**
 * `+CollapsibleContainer` in mixins/stock/watchlist/CollapsibleContainer.pug.
 * The `.summery-statistics` block must stay in the DOM as the sibling of the
 * `.watchlist-collapsible` trigger — components/stock.css hides it while the
 * trigger is `[aria-expanded='true']`.
 */
const WatchlistCollapsibleCard = ({
  className
}: WatchlistCollapsibleCardProps) => {
  const [range, setRange] = useState<Range>('1y');

  return (
    <Card className={className}>
      <Card.Body>
        <Collapsible defaultOpen>
          <div className="flex flex-wrap flex-between-center gap-4 2xl:gap-8">
            <Collapsible.Trigger asChild>
              <a
                className="btn flex items-center gap-2 p-0 watchlist-collapsible collapse-indicator"
                href="#!"
                role="button"
                aria-controls="holdingSummary"
              >
                <FontAwesomeIcon icon={faChevronDown} className="toggle-icon" />
                <h4 className="text-base sm:text-lg mb-0 text-highlight">
                  Holdings Summary
                </h4>
              </a>
            </Collapsible.Trigger>
            <div className="scrollbar summery-statistics">
              <Row className="g-0 flex-nowrap py-1">
                {watchlistSummaryStats.map(item => (
                  <Col key={item.title} xs="auto" className={item.className}>
                    <div className="flex items-center gap-2">
                      <h6 className="font-normal text-subtle mb-0">
                        {item.title}
                      </h6>
                      <h5 className={item.amountClassName}>{item.amount}</h5>
                      <div className={item.badgeClassName}>
                        {item.badgeContent}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <Collapsible.Content id="holdingSummary">
            <Row className="g-0 mt-4">
              <Col
                xs={12}
                xl={4}
                xxl={3}
                className="xl:pe-8 xl:border-e overflow-hidden"
              >
                <h3 className="mb-4">Summary</h3>
                <table className="table mb-2">
                  <tbody>
                    <tr>
                      <td className="align-middle p-0 pb-2 border-b-0">
                        <p className="mb-0">Market Value</p>
                      </td>
                      <td className="align-middle text-end p-0 pb-2 border-b-0">
                        <h5 className="font-semibold mb-0">$688.43</h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle p-0 pb-2 border-b-0">
                        <p className="mb-0">Day Change</p>
                      </td>
                      <td className="align-middle text-end p-0 pb-2 border-b-0">
                        <h5 className="mb-0 font-semibold">+$0.00 (0.00%)</h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle p-0 pb-2 border-b-0">
                        <p className="mb-0">Unrealized G/L</p>
                      </td>
                      <td className="align-middle text-end p-0 pb-2 border-b-0">
                        <h5 className="mb-0 font-semibold text-danger">
                          +$0.00 (0.00%)
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle p-0 pb-4 border-b-0">
                        <p className="mb-0">Realized Value</p>
                      </td>
                      <td className="align-middle text-end p-0 pb-4 border-b-0">
                        <h5 className="mb-0 font-semibold">$0.00</h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle p-0 pt-4 border-b-0 border-t border-dashed">
                        <h4 className="mb-0">Total: </h4>
                      </td>
                      <td className="align-middle text-end p-0 pt-4 border-b-0 border-t border-dashed">
                        <h4 className="mb-0">$688.43</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col xl={8} xxl={9} className="xl:ps-8 mt-8 xl:mt-0">
                <Row className="g-4 2xl:g-8 flex-between-center mb-4">
                  <Col xs={12} xxl="auto">
                    <h4> Chart Report </h4>
                    <p className="mb-0">
                      No. of bookings fulfilled &amp; cancelled
                    </p>
                  </Col>
                  <Col xs={12} xxl="auto">
                    <StockRangeButtonGroup active={range} onChange={setRange} />
                  </Col>
                </Row>
                <WatchlistReportChart
                  data={watchlistDataItems.watchlistReportChartDataItem}
                  range={range}
                />
              </Col>
            </Row>
          </Collapsible.Content>
        </Collapsible>
      </Card.Body>
    </Card>
  );
};

export default WatchlistCollapsibleCard;
