import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import Section from 'components/base/Section';
import { useState } from 'react';
import { Button, Col, Pagination, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollbar from 'components/base/Scrollbar';
import ProductFilterItems from 'components/modules/e-commerce/products-filter/ProductFilterItems';
import ProductCard from 'components/common/ProductCard';
import { allProducts } from 'data/e-commerce/products';
import {
  faChevronLeft,
  faChevronRight,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

const ProductsFilter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <PhoenixOffcanvas
        open={show}
        onHide={handleClose}
        style={{ width: 300, top: 92 }}
        className="py-8 ps-8 products-filter-offcanvas"
        fixed
      >
        <Scrollbar style={{ height: '100%' }} className="table-scrollbar">
          <div className="pe-8">
            <ProductFilterItems handleClose={handleClose} />
          </div>
        </Scrollbar>
      </PhoenixOffcanvas>
      <Section className="pt-8 pb-16">
        <Button
          variant="phoenix-secondary"
          size="sm"
          className="text-subtle mb-8 lg:hidden"
          onClick={handleShow}
        >
          <FontAwesomeIcon icon={faFilter} className="me-2" />
          Filter
        </Button>
        <Row>
          <Col lg={3} xxl={2} className="hidden lg:block xl:ps-0 2xl:ps-4">
            <div
              className="sticky"
              style={{ top: '1rem', height: 'calc(100vh - 2rem) ' }}
            >
              <Scrollbar
                style={{ height: 'calc(100vh - 2rem)' }}
                className="product-scrollbar"
              >
                <ProductFilterItems handleClose={handleClose} />
              </Scrollbar>
            </div>
          </Col>
          <Col lg={9} xxl={10}>
            <Row className="gx-4 gy-10 mb-14">
              {allProducts.map(product => (
                <Col xs={12} sm={6} md={4} xxl={2} key={product.id}>
                  <div className="product-card-container h-full">
                    <ProductCard product={product} />
                  </div>
                </Col>
              ))}
            </Row>

            <Pagination className="mb-0 justify-end">
              <Pagination.Prev>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Pagination.Prev>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item active>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                <FontAwesomeIcon icon={faChevronRight} />
              </Pagination.Next>
            </Pagination>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ProductsFilter;
