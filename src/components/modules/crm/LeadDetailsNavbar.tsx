import ScrollSpy from 'components/base/ScrollSpy';

/** `nav#navbar-deals-detail` in apps/crm/lead-details.pug */
const LeadDetailsNavbar = () => {
  return (
    <nav className="navbar pb-6 px-0 sticky top-0 bg-default nav-underline-scrollspy">
      <ul className="nav nav-underline text-md">
        <li className="nav-item">
          <ScrollSpy.NavLink className="me-2" href="#tasks">
            Tasks
          </ScrollSpy.NavLink>
        </li>
        <li className="nav-item">
          <ScrollSpy.NavLink className="me-2" href="#deals">
            Deals
          </ScrollSpy.NavLink>
        </li>
        <li className="nav-item">
          <ScrollSpy.NavLink className="me-2" href="#emails">
            Emails
          </ScrollSpy.NavLink>
        </li>
        <li className="nav-item">
          <ScrollSpy.NavLink href="#attachments">Attachments</ScrollSpy.NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LeadDetailsNavbar;
