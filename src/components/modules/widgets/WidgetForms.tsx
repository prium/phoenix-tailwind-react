import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@hummingbirdui/react';
import OrganizeFormCard from 'components/cards/OrganizeFormCard';
import VariantFormCard from 'components/cards/VariantFormCard';
import EventDetailsForm from 'components/forms/EventDetailsForm';
import ProductDescriptionFields from 'components/modules/e-commerce/add-product/ProductDescriptionFields';
import ProductDisplayImages from 'components/modules/e-commerce/add-product/ProductDisplayImages';
import ProductInventory from 'components/modules/e-commerce/add-product/ProductInventory';
import ComposeCard from 'components/modules/email/ComposeCard';
import WidgetsSectionTitle from './WidgetsSectionTitle';

/** `+Forms` in mixins/widgets/Forms.pug */
const WidgetForms = () => {
  return (
    <>
      <WidgetsSectionTitle
        title="Forms"
        subtitle="Get different types of data from the user by using Phoenix Tailwind's customizable form."
        icon={faFileAlt}
        transform="shrink-2"
        className="mb-8 pt-12"
      />
      <Row className="g-8 mb-8">
        <Col xs={12} xl={8}>
          <ProductDescriptionFields />
          <ProductDisplayImages />
          <ProductInventory />
        </Col>
        <Col xs={12} xl={4}>
          <Row className="g-2">
            <Col xs={12} xl={12}>
              <OrganizeFormCard className="mb-4" />
            </Col>
            <Col xs={12} xl={12}>
              <VariantFormCard />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="g-8">
        <Col xxl={6}>
          <ComposeCard />
        </Col>
        <Col xxl={6}>
          <Row className="gx-4 gy-6">
            <EventDetailsForm />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default WidgetForms;
