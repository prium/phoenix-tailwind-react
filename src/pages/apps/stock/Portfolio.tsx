import {
  faAdd,
  faMattressPillow,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PortfolioMainContent from 'components/modules/stock/portfolio/PortfolioMainContent';
import PortfolioOffcanvas from 'components/modules/stock/portfolio/PortfolioOffcanvas';
import PortfolioSidebarContent from 'components/modules/stock/portfolio/PortfolioSidebarContent';
import { defaultBreadcrumbItems } from 'data/commonData';
import { useState } from 'react';

/** apps/stock/portfolio.pug */
const Portfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
      <Row className="flex-between-center g-4 lg:g-8 mb-4">
        <Col xs="auto">
          <h2 className="mb-0">My Portfolio</h2>
        </Col>
        <Col xs="auto" className="flex items-center">
          <Button variant="phoenix-secondary" className="bg-soft me-3">
            Create new Portfolio{' '}
            <FontAwesomeIcon icon={faAdd} className="ms-2" />
          </Button>
          <Button
            variant="phoenix-secondary"
            size="sm"
            className="bg-soft md:px-6"
          >
            <FontAwesomeIcon icon={faPrint} />
            <span className="hidden md:inline ms-2"> Print</span>
          </Button>
          <Button
            variant="phoenix-secondary"
            size="sm"
            className="bg-soft xl:hidden ms-2"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon icon={faMattressPillow} />
          </Button>
        </Col>
      </Row>
      <Row className="g-4 lg:g-8 pb-8 md:pb-12 xl:pb-16">
        <Col xl={7} className="flex-1">
          <PortfolioMainContent />
        </Col>
        <Col xl={5} className="portfolio-sidebar-container">
          <div className="offcanvas offcanvas-end stock-offcanvas-xl bg-soft xl:border xl:rounded-md scrollbar">
            <div className="offcanvas-body p-0">
              <PortfolioSidebarContent />
            </div>
          </div>
        </Col>
      </Row>
      <PortfolioOffcanvas open={open} setOpen={setOpen} />
    </>
  );
};

export default Portfolio;
