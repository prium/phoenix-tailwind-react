import { faEdit, faEllipsis, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dropdown, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import DealProfileCard from 'components/cards/DealProfileCard';
import DealsPrintingDimensionsCard from 'components/cards/DealsPrintingDimensionsCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import DealsOtherInformation from 'components/forms/DealsOtherInformation';
import DealDetailsInfo from 'components/modules/crm/deals-details/DealDetailsInfo';
import DealDetailsTab from 'components/modules/crm/deals-details/DealDetailsTab';
import { defaultBreadcrumbItems } from 'data/commonData';
import { dealDetailsInfoData, stats } from 'data/crm/dealDetailsInfo';

/** apps/crm/deal-details.pug */
const DealDetails = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="pb-16">
        <Row className="items-center justify-between g-4 mb-6">
          <Col xs={12} md="auto">
            <h2 className="mb-0">Deal details</h2>
          </Col>
          <Col xs={12} md="auto" className="flex">
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
            <div>
              {/* `+DropDownLead.z-9999` in mixins/crm/LeadDetails.pug */}
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <Button variant="phoenix-secondary" className="px-4">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Content align="end" className="p-0 z-9999">
                  <Dropdown.Item asChild>
                    <a href="#!">View profile</a>
                  </Dropdown.Item>
                  <Dropdown.Item asChild>
                    <a href="#!">Report</a>
                  </Dropdown.Item>
                  <Dropdown.Item asChild>
                    <a href="#!">Manage notifications</a>
                  </Dropdown.Item>
                  <Dropdown.Item asChild className="text-danger">
                    <a href="#!">Delete Lead</a>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
            </div>
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
