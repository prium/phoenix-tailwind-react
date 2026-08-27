import ScrollSpy from 'components/base/ScrollSpy';
import Scrollbar from 'components/base/Scrollbar';
import { Nav } from 'react-bootstrap';

const WidgetsScrollspyNav = () => {
  return (
    <div className="widgets-scrollspy-nav mt-n5 bg-soft mx-n4 mx-lg-n6 border-bottom">
      <Scrollbar style={{ height: 'auto'}}>
        <Nav className="px-4 flex-nowrap">
          <Nav.Item>
            <ScrollSpy.NavLink
              className="text-subtle font-bold p-3 lh-1 text-nowrap text-base"
              href="#stats"
            >
              Number Stats and Charts
            </ScrollSpy.NavLink>
          </Nav.Item>
          <Nav.Item>
            <ScrollSpy.NavLink
              className="text-subtle font-bold p-3 lh-1 text-nowrap text-base"
              href="#tables"
            >
              Tables, Files, and Lists
            </ScrollSpy.NavLink>
          </Nav.Item>
          <Nav.Item>
            <ScrollSpy.NavLink
              className="text-subtle font-bold p-3 lh-1 text-nowrap text-base"
              href="#e-commerce"
            >
              E-commerce
            </ScrollSpy.NavLink>
          </Nav.Item>
          <Nav.Item>
            <ScrollSpy.NavLink
              className="text-subtle font-bold p-3 lh-1 text-nowrap text-base"
              href="#users-and-feed"
            >
              Users & Feed
            </ScrollSpy.NavLink>
          </Nav.Item>
          <Nav.Item>
            <ScrollSpy.NavLink
              className="text-subtle font-bold p-3 lh-1 text-nowrap text-base"
              href="#forms"
            >
              Forms
            </ScrollSpy.NavLink>
          </Nav.Item>
          <Nav.Item>
            <ScrollSpy.NavLink
              className="text-subtle font-bold p-3 lh-1 text-nowrap text-base"
              href="#others"
            >
              Others
            </ScrollSpy.NavLink>
          </Nav.Item>
        </Nav>
      </Scrollbar>
    </div>
  );
};

export default WidgetsScrollspyNav;
