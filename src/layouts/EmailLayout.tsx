import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import EmailRow from 'components/modules/email/EmailRow';
import EmailSidebar from 'components/modules/email/EmailSidebar';
import InboxToolbar from 'components/modules/email/InboxToolbar';
import { emails } from 'data/email';
import BulkSelectProvider from 'providers/BulkSelectProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Link } from 'react-router';

interface EmailLayoutProps {
  page: 'inbox' | 'detail' | 'compose';
}

/**
 * Gold `layouts/LayoutEmail.pug`. The sidebar keeps the gold
 * `.phoenix-offcanvas.phoenix-offcanvas-fixed` + sibling backdrop DOM verbatim
 * (email.css makes it sticky at lg); `show` is toggled from state below lg.
 */
const EmailLayout = ({
  children,
  page
}: PropsWithChildren<EmailLayoutProps>) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('pt-0!');

    return () => {
      setContentClass('');
    };
  }, []);

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [openSidebar]);

  return (
    <div className="email-container">
      <div className="row lg:gx-10 gx-4 py-6 z-2 sticky bg-default email-header">
        <div className="col-auto">
          <Button
            variant="primary"
            className="email-sidebar-width hidden lg:inline-flex"
            asChild
          >
            <Link to="/apps/email/compose">Compose</Link>
          </Button>
          <Button
            variant="phoenix-secondary"
            className="px-4 text-subtle lg:hidden"
            onClick={() => setOpenSidebar(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
        {page !== 'compose' && (
          <div className="col-auto lg:hidden">
            <Button variant="primary" className="px-4 sm:px-6" asChild>
              <Link to="/apps/email/compose">
                {' '}
                <span className="hidden sm:inline-block">Compose</span>
                <FontAwesomeIcon icon={faPlus} className="sm:hidden!" />
              </Link>
            </Button>
          </div>
        )}
        <div className="col-auto flex-1">
          <SearchBox
            className="w-full"
            placeholder="Search ..."
            aria-label="Search"
          />
        </div>
      </div>
      <div className="row lg:g-10 mb-14">
        <div className="lg:col-auto">
          <div
            className={cn(
              'email-sidebar email-sidebar-width bg-default phoenix-offcanvas phoenix-offcanvas-fixed',
              { show: openSidebar }
            )}
            id="emailSidebarColumn"
            data-breakpoint="lg"
          >
            <EmailSidebar hideSidebar={() => setOpenSidebar(false)} />
          </div>
          <div
            className="phoenix-offcanvas-backdrop lg:hidden top-0"
            onClick={() => setOpenSidebar(false)}
          />
        </div>
        {page !== 'inbox' && (
          <div className="col-3 hidden 2xl:block">
            <div className="email-content scrollbar">
              <div className="lg:px-1">
                <BulkSelectProvider data={emails}>
                  <InboxToolbar />
                  {emails.map((email, index) => (
                    <EmailRow
                      email={email}
                      index={index}
                      isLast={index === emails.length - 1}
                      key={email.id}
                    />
                  ))}
                </BulkSelectProvider>
              </div>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default EmailLayout;
