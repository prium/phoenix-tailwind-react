import { faCloudBolt, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import BaseLineChart from 'components/charts/e-charts/BaseLineChart';
import BasicEcharts from 'components/charts/e-charts/BasicEcharts';
import CommissionChart from 'components/charts/e-charts/CommissionChart';
import TravelStats from 'components/stats/TravelStats';
import { currencyFormat, getDates } from 'helpers/utils';

export const TravelStatistics = () => {
  return (
    <Row className="g-0">
      <Col
        xs={6}
        xl={12}
        xxl={6}
        className="border-b border-e xl:border-e-0 2xl:border-e pb-6 pt-6 xl:pt-0 2xl:pt-6 pe-6 sm:pe-8 xl:pe-0 2xl:pe-8"
      >
        <TravelStats
          title="Total Value"
          amount={currencyFormat(2345, {
            minimumFractionDigits: 2
          })}
          badgeLabel="23.35%"
          badgeBg="primary"
          amountContainerClass="mt-6 md:mt-0"
        >
          <div className="echart-booking-value h-13.5 w-22.5 order-1 sm:order-0 md:order-1">
            <BaseLineChart
              data={[150, 100, 300, 200, 250, 180, 250]}
              dates={getDates(
                new Date('11/1/2023'),
                new Date('11/7/2023'),
                1000 * 60 * 60 * 24
              )}
              color="warning"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </TravelStats>
      </Col>

      {/* 2nd */}
      <Col
        xs={6}
        xl={12}
        xxl={6}
        className="border-b py-6 ps-6 sm:ps-8 xl:ps-0 2xl:ps-8"
      >
        <TravelStats
          title="Booked Flights"
          amount="1,432"
          badgeLabel="3.98%"
          badgeBg="success"
          subtitleNowrap
        >
          <div className="md:flex items-center gap-2 sm:order-0 md:order-1">
            <FontAwesomeIcon
              icon={faCloudBolt}
              className="text-2xl text-warning-light dark:text-warning/75"
              data-hb-theme="light"
            />
            <div className="flex md:block gap-2 items-center mt-1 md:mt-0">
              <p className="text-md mb-0 md:mb-2 text-subtle text-nowrap">
                Rain Chances
              </p>
              <h4 className="text-highlight mb-0">95%</h4>
            </div>
          </div>
        </TravelStats>
      </Col>

      {/* 3rd */}
      <Col
        xs={6}
        xl={12}
        xxl={6}
        className="xl:border-b 2xl:border-b-0 border-e xl:border-e-0 2xl:border-e py-6 pe-6 sm:pe-8 xl:pe-0 2xl:pe-8"
      >
        <TravelStats
          title="Commission"
          amount="$3,339.00"
          badgeLabel="12.21%"
          badgeBg="danger"
          badgeIcon={faMinus}
        >
          <div className="echart-commission size-13.5 sm:order-0 md:order-1">
            <CommissionChart
              color="primary"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </TravelStats>
      </Col>
      {/* 4th */}
      <Col
        xs={6}
        xl={12}
        xxl={6}
        className="py-6 ps-6 sm:ps-8 xl:ps-0 2xl:ps-8"
      >
        <TravelStats
          title="Canceled Booking"
          amount="120.00"
          badgeLabel="5.76%"
          badgeBg="danger"
        >
          <div className="chart-cancel-booking h-13.5 w-19.5 sm:order-0 md:order-1">
            <BasicEcharts
              data={[120, 150, 100, 120, 110, 160]}
              dates={getDates(
                new Date('11/1/2023'),
                new Date('11/6/2023'),
                1000 * 60 * 60 * 24
              )}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </TravelStats>
      </Col>
    </Row>
  );
};
