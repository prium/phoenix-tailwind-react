import { Col, Row } from '@hummingbirdui/react';
import ContactsBySourceChart from 'components/charts/e-charts/ContactsBySourceChart';
import ContactSourceItem from 'components/grid-list-items/ContactSourceItem';
import { contactSourceData } from 'data/crm/dashboardData';
import { useMemo } from 'react';

/** `+ContactBySources` in mixins/dashboard/CRM/Crm.pug */
const ContactsBySource = () => {
  const total = useMemo(
    () => contactSourceData.reduce((acc, item) => acc + item.value, 0),
    []
  );

  return (
    <Row>
      <Col sm={7} md={8} xxl={8} className="md:mb-4 lg:mb-0">
        <h3>New Contacts by Source</h3>
        <p className="text-subtle">Payment received across all channels</p>
        <Row className="g-0">
          {contactSourceData.map(item => (
            <Col xs={6} xl={4} key={item.name}>
              <ContactSourceItem
                value={item.value}
                label={item.name}
                iconClass={item.iconClass}
                className={item.borderClass}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col sm={5} md={4} xxl={4} className="my-4 sm:my-0">
        <div className="relative flex flex-center sm:mb-6 xl:mb-0 echart-contact-by-source-container sm:mt-12 lg:mt-6 xl:mt-0">
          <ContactsBySourceChart
            className="min-h-61.25 w-full"
            style={{ height: 'auto', width: '100%' }}
          />
          <div className="size-25 rounded-full bg-primary-subtle absolute top-1/2 left-1/2 -translate-1/2 flex flex-center">
            <h3 className="mb-0 text-primary-dark font-extrabold">{total}</h3>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ContactsBySource;
