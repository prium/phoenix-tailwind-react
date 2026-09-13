import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@hummingbirdui/react';
import AboutLeadCard from 'components/cards/AboutLeadCard';
import CustomerNotesCard from 'components/cards/CustomerNotesCard';
import CustomerProfileCard from 'components/cards/CustomerProfileCard';
import DealProfileCard from 'components/cards/DealProfileCard';
import EarlyBirdCard from 'components/cards/EarlyBirdCard';
import CustomerDefaultAddressCard from 'components/cards/CustomerDefaultAddressCard';
import LeadProfileCard from 'components/cards/LeadProfileCard';
import OrderDetailsSummaryCard from 'components/cards/OrderDetailsSummaryCard';
import FeedTextarea from 'components/forms/FeedTextarea';
import WidgetsSectionTitle from './WidgetsSectionTitle';

/** `+Others` in mixins/widgets/Others.pug */
const WidgetOthers = () => {
  return (
    <>
      <WidgetsSectionTitle
        title="Others"
        subtitle="Get more awesome cards for showing your different types of content.."
        icon={faFolderPlus}
        transform="shrink-2"
        className="mb-6 pt-12"
      />
      <Row className="g-4 mb-4">
        <Col xl={6} xxl={5}>
          <EarlyBirdCard />
        </Col>
        <Col xl={6} xxl={7}>
          <FeedTextarea className="mb-8 h-full" />
        </Col>
      </Row>
      <Row className="g-4">
        <Col xl={4}>
          <Row className="gy-4 h-full">
            <Col xs={12}>
              <CustomerNotesCard className="mb-4 h-full" />
            </Col>
            <Col xs={12}>
              <DealProfileCard className="mb-4 h-full" />
            </Col>
          </Row>
        </Col>
        <Col xl={4}>
          <Row className="gy-4 h-full">
            <Col xs={12}>
              <CustomerProfileCard className="mb-4" />
            </Col>
            <Col xs={12}>
              <CustomerDefaultAddressCard className="mb-4" />
            </Col>
            <Col xs={12}>
              <OrderDetailsSummaryCard className="mb-4 h-full" />
            </Col>
          </Row>
        </Col>
        <Col xl={4}>
          <Row className="gy-4 h-full">
            <Col xs={12}>
              <AboutLeadCard className="mb-4 h-full" />
            </Col>
            <Col xs={12}>
              <LeadProfileCard className="h-full" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default WidgetOthers;
