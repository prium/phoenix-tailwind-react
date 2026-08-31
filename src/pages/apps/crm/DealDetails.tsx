import { faEdit, faEllipsis, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DealProfileCard from 'components/cards/DealProfileCard';
import DealsPrintingDimensionsCard from 'components/cards/DealsPrintingDimensionsCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import DealsOtherInformation from 'components/forms/DealsOtherInformation';
import DealDetailsInfo from 'components/modules/crm/deals-details/DealDetailsInfo';
import DealDetailsTab from 'components/modules/crm/deals-details/DealDetailsTab';
import { defaultBreadcrumbItems } from 'data/commonData';
import { dealDetailsInfoData, stats } from 'data/crm/dealDetailsInfo';
import { Col, Dropdown, Row } from 'react-bootstrap';

const DealDetails = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-16">
        <Row className="items-center justify-between g-4 mb-6">
          <Col md="auto">
            <h2 className="mb-0">Deal details</h2>
          </Col>
          <Col md="auto" className="flex">
            <Button variant="phoenix-secondary" className="px-4 sm:px-8 me-2">
              <FontAwesomeIcon icon={faEdit} className="sm:me-2" />
              <span className="hidden sm:inline">Edit</span>
            </Button>
            <Button
              variant="phoenix-danger"
              className="me-2"
              startIcon={<FontAwesomeIcon icon={faTrash} className="me-2" />}
            >
              <span>Delete Deal</span>
            </Button>
            <Dropdown>
              <Dropdown.Toggle
                variant="phoenix-secondary"
                className="px-4 dropdown-caret-none"
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="py-2" style={{ zIndex: 9999 }}>
                <Dropdown.Item href="#!">View profile</Dropdown.Item>
                <Dropdown.Item href="#!">Report</Dropdown.Item>
                <Dropdown.Item href="#!">Manage notifications</Dropdown.Item>
                <Dropdown.Item href="#!" className="text-danger">
                  Delete Lead
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="g-6 xl:g-10">
          <Col xl={5} xxl={4}>
            <div className="sticky-leads-sidebar">
              <DealProfileCard className="mb-4" />
              <DealsOtherInformation />
            </div>
          </Col>
          <Col xl={7} xxl={8}>
            <DealsPrintingDimensionsCard stats={stats} className="mb-8" />
            <DealDetailsInfo data={dealDetailsInfoData} className="mb-12" />
            <DealDetailsTab />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DealDetails;
