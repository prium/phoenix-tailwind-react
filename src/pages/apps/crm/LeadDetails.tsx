import {
  faBars,
  faEllipsis,
  faEnvelope,
  faThumbtack
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dropdown, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import ScrollSpy from 'components/base/ScrollSpy';
import AboutLeadCard from 'components/cards/AboutLeadCard';
import LeadAddressCard from 'components/cards/LeadAddressCard';
import LeadProfileCard from 'components/cards/LeadProfileCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import LeadAttachments from 'components/modules/crm/LeadAttachments';
import LeadDeals from 'components/modules/crm/LeadDeals';
import LeadDetailsNavbar from 'components/modules/crm/LeadDetailsNavbar';
import LeadDetailsOffcanvas from 'components/modules/crm/LeadDetailsOffcanvas';
import LeadEmails from 'components/modules/crm/LeadEmails';
import Tasks from 'components/modules/crm/Tasks';
import { defaultBreadcrumbItems } from 'data/commonData';
import { useState } from 'react';

const LeadDetails = () => {
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="pb-16">
        <Row className="items-center justify-between g-4 mb-4">
          <Col xs={12} md="auto">
            <h2 className="mb-0">Lead details</h2>
          </Col>
          <Col xs={12} md="auto">
            <div className="flex">
              <div className="flex-1 md:hidden">
                <Button
                  variant="phoenix-secondary"
                  className="px-4 text-subtle me-2"
                  onClick={() => setOpenOffcanvas(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </Button>
              </div>
              <Button
                variant="primary"
                className="me-2"
                startIcon={
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                }
              >
                Send an email
              </Button>
              <Button variant="phoenix-secondary" className="px-4 sm:px-8 me-2">
                <FontAwesomeIcon icon={faThumbtack} className="sm:me-2" />
                <span className="hidden sm:inline">Shortlist</span>
              </Button>
              {/* `+DropDownLead.z-9999` */}
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <button
                    type="button"
                    className="btn px-4 btn-phoenix-secondary"
                  >
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
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

        <Row className="g-0 md:g-6 xl:g-10">
          <Col md={5} xl={4} className="hidden md:block">
            <div className="sticky-leads-sidebar">
              <div className="lead-details-offcanvas bg-default scrollbar">
                <div className="flex justify-between items-center mb-2 md:hidden">
                  <h3 className="mb-0">Lead Details</h3>
                </div>
                <LeadProfileCard className="mb-4" />
                <AboutLeadCard className="mb-4" />
                <LeadAddressCard className="mb-4" />
              </div>
            </div>
          </Col>
          <Col md={7} lg={7} xl={8}>
            <div className="lead-details-container">
              <ScrollSpy>
                <LeadDetailsNavbar />
                <div className="scrollspy-example rounded-md">
                  <ScrollSpy.Content id="tasks" className="mb-14">
                    <Tasks />
                  </ScrollSpy.Content>

                  <ScrollSpy.Content id="deals" className="mb-14">
                    <LeadDeals />
                  </ScrollSpy.Content>

                  <ScrollSpy.Content id="emails" className="mb-14">
                    <LeadEmails />
                  </ScrollSpy.Content>

                  <ScrollSpy.Content id="attachments">
                    <LeadAttachments />
                  </ScrollSpy.Content>
                </div>
              </ScrollSpy>
            </div>
          </Col>
        </Row>
      </div>
      <LeadDetailsOffcanvas open={openOffcanvas} setOpen={setOpenOffcanvas} />
    </div>
  );
};

export default LeadDetails;
