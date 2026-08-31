import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import { TravelStatistics } from 'components/modules/travel-agency/dashboard/TravelStatistics';
import { FinancialActivities } from 'components/modules/travel-agency/dashboard/FinancialActivities';
import { HolidaysCard } from 'components/cards/HolidaysCard';
import { IntegrationsCard } from 'components/cta/IntegrationsCard';
import Bookings from 'components/modules/travel-agency/dashboard/Bookings';
import Flights from 'components/modules/travel-agency/dashboard/Flights';
import { VisitorsCard } from 'components/cards/VisitorsCard';
import GrossProfitCard from 'components/cards/GrossProfitCard';

const TravelAgency = () => {
  return (
    <>
      <Row className="mb-6 xl:mb-10 2xl:mb-6 gy-4 justify-between">
        <Col xs="auto">
          <h2 className="mb-0 text-emphasis">Travel Agency</h2>
        </Col>
        <Col xs="auto">
          <div className="flex gap-4">
            <Link to="#!" className="btn btn-phoenix-primary">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              New Package
            </Link>
            <Link to="#!" className="btn btn-primary px-6 sm:px-20">
              <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
              Book Now
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="gx-4">
        <Col xxl={7}>
          <Row className="gx-12 2xl:pe-4">
            <Col xs={12} xl={5} xxl={12}>
              <TravelStatistics />
            </Col>
            <Col xs={12} xl={7} xxl={12}>
              <FinancialActivities className="mt-14 xl:mt-0 2xl:mt-14 mb-14 2xl:mb-0" />
            </Col>
          </Row>
        </Col>
        <Col xxl={5}>
          <Row className="g-4">
            <Col xs={12} md={6} xxl={12}>
              <VisitorsCard />
            </Col>
            <Col xs={12} md={6} xxl={12}>
              <HolidaysCard />
            </Col>
            <Col xs={12}>
              <IntegrationsCard className="mb-4" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="g-4 mb-8">
        <Col xl={5} xxl={7}>
          <GrossProfitCard />
        </Col>
        <Col xl={7} xxl={5}>
          <Bookings />
        </Col>
      </Row>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 pb-16 bg-soft border-t">
        <Flights />
      </div>
    </>
  );
};

export default TravelAgency;
