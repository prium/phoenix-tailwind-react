import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import SearchBox from 'components/common/SearchBox';
import EmailSidebar from 'components/modules/email/EmailSidebar';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import InboxToolbar from '../components/modules/email/InboxToolbar';
import { emails } from 'data/email';
import EmailRow from '../components/modules/email/EmailRow';
import { Link } from 'react-router';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import BulkSelectProvider from 'providers/BulkSelectProvider';

interface EmailLayoutProps {
  page: 'inbox' | 'detail' | 'compose';
}

const EmailLayout = ({
  children,
  page
}: PropsWithChildren<EmailLayoutProps>) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { breakpoints } = useBreakpoints();
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('pt-0');

    return () => {
      setContentClass('');
    };
  }, []);
  return (
    <div className="email-container">
      <Row className="lg:gx-6 xl:gx-10 gx-4 py-6 z-2 sticky bg-default email-header">
        <Col className="col-auto">
          <Button
            variant="primary"
            className="email-sidebar-width hidden lg:block"
            as={Link}
            to="/apps/email/compose"
          >
            Compose
          </Button>
          <Button
            variant="phoenix-secondary"
            className="px-4 text-subtle lg:hidden"
            onClick={() => setOpenSidebar(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Col>
        {page !== 'compose' && (
          <Col className="col-auto lg:hidden">
            <Button variant="primary" className="px-4 sm:px-6">
              <span className="hidden sm:inline-block">Compose</span>
              <FontAwesomeIcon icon={faPlus} className="sm:hidden" />
            </Button>
          </Col>
        )}
        <Col className="col-auto flex-1">
          <SearchBox className="w-full" />
        </Col>
      </Row>
      <Row className="lg:g-6 xl:g-10 mb-14">
        <Col lg="auto">
          <div
            className="email-sidebar email-sidebar-width bg-default hidden lg:block"
            id="emailSidebarColumn"
          >
            <EmailSidebar />
          </div>
          {breakpoints.down('lg') && (
            <PhoenixOffcanvas
              open={openSidebar}
              fixed
              placement="start"
              className="email-sidebar email-sidebar-width bg-default"
              backdropClassName="top-0"
              onHide={() => setOpenSidebar(false)}
            >
              <EmailSidebar hideSidebar={() => setOpenSidebar(false)} />
            </PhoenixOffcanvas>
          )}
        </Col>
        {page !== 'inbox' && (
          <Col xs="3" className="hidden 2xl:block">
            <div className="email-content scrollbar">
              <div className="lg:px-1">
                <BulkSelectProvider data={emails}>
                  <InboxToolbar size="sm" />
                  {emails.map((email, index) => (
                    <EmailRow email={email} index={index} key={email.id} />
                  ))}
                </BulkSelectProvider>
              </div>
            </div>
          </Col>
        )}
        {children}
      </Row>
    </div>
  );
};

export default EmailLayout;
