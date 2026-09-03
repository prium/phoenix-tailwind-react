import Button from 'components/base/Button';
import OrganizeFormCard from 'components/cards/OrganizeFormCard';
import VariantFormCard from 'components/cards/VariantFormCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ProductDescriptionFields from 'components/modules/e-commerce/add-product/ProductDescriptionFields';
import ProductDisplayImages from 'components/modules/e-commerce/add-product/ProductDisplayImages';
import ProductInventory from 'components/modules/e-commerce/add-product/ProductInventory';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Row } from '@hummingbirdui/react';

const AddProduct = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <form className="mb-16">
        <div className="flex flex-wrap gap-4 flex-between-end mb-8">
          <div>
            <h2 className="mb-2">Add a product</h2>
            <h5 className="text-subtle font-semibold">
              Orders placed across your store
            </h5>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="phoenix" color="secondary" type="button">
              Discard
            </Button>
            <Button variant="phoenix" color="primary" type="button">
              Save draft
            </Button>
            <Button variant="primary" type="submit">
              Publish product
            </Button>
          </div>
        </div>
        <Row className="g-8">
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
      </form>
    </div>
  );
};

export default AddProduct;
