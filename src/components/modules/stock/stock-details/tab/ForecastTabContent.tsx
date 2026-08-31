import classNames from 'classnames';
import { ForecastDataItem } from 'data/stock/forecast';
import { Col, Row, Form, Card } from 'react-bootstrap';
import { currencyFormat, numberFormat } from 'helpers/utils';
import Badge from 'components/base/Badge';
import ForecastEconomicPredictionTable from 'components/tables/ForecastEconomicPredictionTable';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import ForecastRevenueChart from 'components/charts/e-charts/ForecastRevenueChart';
import GrowthInRevenueChart from 'components/charts/e-charts/GrowthInRevenueChart';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import MostRecentForecastTable from 'components/tables/MostRecentForecastTable';

interface ForecastTabContentProps {
  forecastDataItems: ForecastDataItem;
}

const ForecastTabContent = ({ forecastDataItems }: ForecastTabContentProps) => {
  return (
    <>
      <Row className="g-4 lg:g-8 mb-6 flex-between-center">
        <Col xs="auto">
          <h4>Economic Prediction</h4>
          <p className="text-subtle mb-0">
            Brief summary of all projects
          </p>
        </Col>
        <Col xs="auto">
          <div className="flex items-center gap-2">
            <Form.Select size="sm">
              <option value="annual">Annual</option>
              <option value="half-annual">Half Annual</option>
              <option value="quarterly">Quarterly</option>
            </Form.Select>
            <Form.Select size="sm">
              <option value="export">Export</option>
              <option value="view">View</option>
              <option value="remove">Remove</option>
            </Form.Select>
          </div>
        </Col>
      </Row>
      <Card className="mb-4">
        <Card.Body>
          <Row className="g-0">
            {forecastDataItems.economicPredictionItems.map(item => (
              <Col
                sm={6}
                xxl={3}
                key={item.id}
                className={classNames(item.className)}
              >
                <h5 className="text-highlight mb-4">{item.title}</h5>
                <Row className="flex-between-center">
                  <Col xs={9} className="xl:pe-0 2xl:order-1">
                    <h4 className="mb-2">
                      {currencyFormat(item.currentAmount, {
                        minimumFractionDigits: item.fractionNumber,
                        maximumFractionDigits: item.fractionNumber
                      })}
                      {item.postfix && item.postfix}
                    </h4>
                    <div className="flex items-center gap-2">
                      <h6 className="text-subtle font-semibold mb-0 whitespace-nowrap">
                        From{' '}
                        {numberFormat(item.pastAmount, 'standard', {
                          minimumFractionDigits: 2
                        })}
                        {item.postfix && item.postfix}
                      </h6>
                      <Badge
                        variant="phoenix"
                        bg={item.badge.badgeBg}
                        className="text-sm"
                      >
                        {item.badge.amount}%{item.badge.icon}
                      </Badge>
                    </div>
                  </Col>
                  <Col
                    xs={3}
                    xxl={12}
                    className="2xl:mb-4 ps-0 2xl:ps-4 flex justify-end 2xl:justify-start"
                  >
                    {item.chart}
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      <div className="mb-8">
        <ForecastEconomicPredictionTable
          data={forecastDataItems.economicPredicationTableRow}
        />
      </div>
      <Row className="g-4 lg:g-8 mb-8">
        <Col xxl={6}>
          <Row className="g-4 lg:g-8 flex-between-center">
            <Col xs="auto">
              <h4>Forecast of Revenue</h4>
              <p className="mb-0">Understanding Dividend Income Basics</p>
            </Col>
            <Col xs="auto">
              <RevealDropdown btnClassName="btn-phoenix-secondary">
                <ActionDropdownItems />
              </RevealDropdown>
            </Col>
          </Row>
          <ForecastRevenueChart />
        </Col>
        <Col xxl={6}>
          <Row className="g-4 lg:g-8 flex-between-center">
            <Col xs="auto">
              <h4>Growth in Revenue</h4>
              <p className="mb-0">No. of bookings fulfilled &amp; cancelled</p>
            </Col>
            <Col xs="auto">
              <RevealDropdown btnClassName="btn-phoenix-secondary">
                <ActionDropdownItems />
              </RevealDropdown>
            </Col>
          </Row>
          <GrowthInRevenueChart />
        </Col>
      </Row>
      <Row className="g-4 lg:g-8 flex-between-center mb-8">
        <Col xs="auto">
          <h4>Most Recent Forecast</h4>
          <p className="mb-0">Brief summary of all projects</p>
        </Col>
        <Col xs="auto">
          <div className="flex items-center gap-2">
            <Form.Select size="sm">
              <option value="annual">Annual</option>
              <option value="half-annual">Half Annual</option>
              <option value="quarterly">Quarterly</option>
            </Form.Select>
            <Button
              variant="phoenix-primary"
              className="flex items-center gap-2 px-4"
            >
              <FontAwesomeIcon icon={faFilter} transform="up-1" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
          </div>
        </Col>
      </Row>
      <MostRecentForecastTable
        data={forecastDataItems.mostRecentForecastTableRowItems}
      />
    </>
  );
};

export default ForecastTabContent;
