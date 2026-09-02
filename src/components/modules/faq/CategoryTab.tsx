import { Col, Nav } from 'react-bootstrap';
import { useFaqTabContext } from 'providers/FaqTabProvider';

const CategoryTab = () => {
  const { setActiveKey } = useFaqTabContext();
  return (
    <Col md={6} xl={5} xxl={4} className="faq-category-tab">
      <Nav
        variant="presentation"
        className="mb-2 md:mb-8 pb-4 pt-2 w-full sm:w-3/4 md:w-full mx-auto bg-default"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="popular"
            className="font-semibold me-4 text-base pe-2 text-center"
            onClick={() => setActiveKey('popular')}
          >
            Popular Categories
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="all"
            className="font-semibold me-4 text-base pe-2 text-center"
            onClick={() => setActiveKey('all')}
          >
            All Categories
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default CategoryTab;
