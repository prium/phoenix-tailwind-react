import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import StoreItem from 'components/common/StoreItem';
import { defaultBreadcrumbItems } from 'data/commonData';
import { stores } from 'data/e-commerce/stores';
import { Col, Row } from '@hummingbirdui/react';

const FavoriteStores = () => {
  return (
    <div className="pt-8 mb-16">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-1">My Favorite Stores</h2>
        <p className="mb-8 text-subtle font-semibold">
          Essential for a better life
        </p>
        <Row className="gx-4 gy-8">
          {stores.map(store => (
            <Col key={store.name} xs={6} sm={4} md={3} lg={2}>
              <StoreItem store={store} />
            </Col>
          ))}
        </Row>
      </Section>
    </div>
  );
};

export default FavoriteStores;
