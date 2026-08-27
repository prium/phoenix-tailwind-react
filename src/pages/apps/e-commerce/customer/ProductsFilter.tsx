import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import Section from 'components/base/Section';
import { useState } from 'react';
import { Col, Pagination, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
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

const pages = [1, 2, 3, 4, 5];

/** apps/e-commerce/landing/products-filter.pug */
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
      <Section className="pt-8 pb-16" containerClassName="xl:max-2xl:max-w-304">
        <Button
          variant="phoenix"
          color="secondary"
          size="sm"
          className="text-subtle mb-8 lg:hidden"
          onClick={handleShow}
        >
          <FontAwesomeIcon icon={faFilter} className="me-2" />
          Filter
        </Button>
        <Row>
          <Col lg={3} xxl={2} className="hidden lg:block ps-2 2xl:ps-4">
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

            <Pagination className="mb-0">
              <Pagination.Content className="justify-end">
                <Pagination.Item>
                  <Pagination.Link href="#!">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Pagination.Link>
                </Pagination.Item>
                {pages.map(page => (
                  <Pagination.Item key={page} active={page === 4}>
                    <Pagination.Link href="#!">{page}</Pagination.Link>
                  </Pagination.Item>
                ))}
                <Pagination.Item>
                  <Pagination.Link href="#!">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Pagination.Link>
                </Pagination.Item>
              </Pagination.Content>
            </Pagination>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ProductsFilter;
