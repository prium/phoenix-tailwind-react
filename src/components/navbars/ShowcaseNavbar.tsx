import Button from 'components/base/Button';
import Logo from 'components/common/Logo';
import useNavbarBgChangeOnScroll from 'hooks/useNavbarBgChangeOnScroll';
import { useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const ShowcaseNavbar = () => {
  const navbarRef = useRef(null);

  useNavbarBgChangeOnScroll(navbarRef);

  return (
    <Navbar ref={navbarRef} expand="lg" sticky="top" className="py-4">
      <div className="container-small px-0 sm:px-4">
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 lg:mb-0">
            <Nav.Item className="border-b border-subtle lg:border-b-0">
              <Nav.Link
                as={Link}
                to="/documentation/getting-started"
                className="text-md font-bold pe-4 active"
                aria-current="page"
              >
                Documentation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border-b border-subtle lg:border-b-0">
              <Nav.Link
                className="text-md font-bold pe-4"
                href="mailto:support@themewagon.com"
              >
                Support
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-md font-bold pe-8"
                href="https://themewagon.com/hire-us/"
                target="_blank"
              >
                Hire us
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="grid lg:flex items-center">
            <Button
              variant="primary"
              as={Link}
              to={`${import.meta.env.VITE_PURCHASE_LINK}`}
              target="_blank"
            >
              Purchase
            </Button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default ShowcaseNavbar;
