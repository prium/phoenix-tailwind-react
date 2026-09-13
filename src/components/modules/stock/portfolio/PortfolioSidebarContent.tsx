import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Row, cn } from '@hummingbirdui/react';
import SearchBox from 'components/common/SearchBox';
import StockOverviewChart from 'components/charts/e-charts/StockOverviewChart';
import StockOverviewInvertedChart from 'components/charts/e-charts/StockOverviewInvertedChart';
import StockOverviewMixedChart from 'components/charts/e-charts/StockOverviewMixedChart';
import {
  QuoteLookupItem,
  StockOverviewChartClass,
  quoteLookupItems
} from 'data/stock/portfolio';
import { CSSProperties } from 'react';

const chartStyle: CSSProperties = { width: 80, minHeight: 44, height: 44 };

/** gold `div(class=item.chart … data-echarts)` — `.w-20.min-h-11` box */
const OverviewChart = ({
  chart,
  data
}: {
  chart: StockOverviewChartClass;
  data: number[];
}) => {
  switch (chart) {
    case 'echart-stock-overview-mixed-chart':
      return <StockOverviewMixedChart data={data} style={chartStyle} />;
    case 'echart-stock-overview-inverted-chart':
      return <StockOverviewInvertedChart data={data} style={chartStyle} />;
    default:
      return <StockOverviewChart data={data} style={chartStyle} />;
  }
};

interface PortfolioSidebarContentProps {
  sidebarItems?: QuoteLookupItem[];
  onClose?: () => void;
}

/** `+MyPortfolioSidebar` in mixins/stock/portfolio/MyPortfolioSidebar.pug */
const PortfolioSidebarContent = ({
  sidebarItems = quoteLookupItems,
  onClose
}: PortfolioSidebarContentProps) => {
  return (
    <Card className="border-0">
      <Card.Body>
        <Row className="flex-between-center mb-6">
          <Col xs="auto" xl={12}>
            <h4 className="mb-0 text-highlight xl:text-center">Quote Lookup</h4>
          </Col>
          <Col xs="auto" className="xl:hidden">
            <button
              type="button"
              className="btn btn-link btn-sm text-base p-0 text-muted"
              aria-label="close"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </Col>
        </Row>
        <SearchBox placeholder="Search symbol" className="w-full mb-4" />
        <div className="table-responsive scrollbar overflow-x-hidden">
          <table className="table mb-0 border-t">
            <tbody>
              {sidebarItems.map(item => (
                <tr key={item.companyAbbr}>
                  <td className="align-middle whitespace-nowrap min-w-28">
                    <p className="mb-0 font-semibold uppercase">
                      {item.companyAbbr}
                    </p>
                  </td>
                  <td className="align-middle whitespace-nowrap min-w-28">
                    <h5 className="text-default">${item.amount}</h5>
                    <p
                      className={cn(
                        item.growth ? 'text-success' : 'text-danger',
                        'text-md mb-0'
                      )}
                    >
                      <span className="me-1 font-bold">{item.profit}</span>
                      <span>{item.percent}%</span>
                    </p>
                  </td>
                  <td className="min-w-28 align-middle whitespace-nowrap flex justify-end xl:justify-start items-center">
                    <OverviewChart chart={item.chart} data={item.echartData} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PortfolioSidebarContent;
