import Logo from 'components/common/Logo';
import { Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import SearchBox from 'components/common/SearchBox';
import Button from 'components/base/Button';
import ThemeToggler from 'components/common/ThemeToggler';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import SearchResult from 'components/common/SearchResult';

const NavItem = ({
  label,
  url,
  isLast
}: {
  label: string;
  url: string;
  isLast?: boolean;
}) => {
  return (
    <Nav.Item
      as="li"
      className={classNames({
        'border-b border-subtle lg:border-b-0': !isLast
      })}
    >
      <Nav.Link href={url} className="leading-none py-0 text-md font-bold py-4">
        {label}
      </Nav.Link>
    </Nav.Item>
  );
};

const DefaultLandingNavbar = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  useEffect(() => {
    const toggleShadowClass = () => {
      if (window.scrollY > 300) {
        containerRef.current?.classList.add('navbar-shadow');
      } else {
        containerRef.current?.classList.remove('navbar-shadow');
      }
    };

    document.addEventListener('scroll', () => toggleShadowClass());

    return () => document.removeEventListener('scroll', toggleShadowClass);
  }, []);

  return (
    <>
      <div
        className={classNames(
          className,
          'bg-soft sticky top-0 z-1020 landing-navbar'
        )}
        ref={containerRef}
      >
        <Navbar className="px-4 lg:px-12 2xl:px-4 container-small" expand="lg">
          <Navbar.Brand
            as={Link}
            to="/"
            className="no-underline flex-1 lg:grow-0"
          >
            <Logo />
          </Navbar.Brand>
          <ThemeToggler className="mx-2 lg:hidden" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <div className="border-b border-subtle lg:hidden mb-2">
              <SearchBox
                placeholder="Search"
                className="w-full"
                inputClassName="rounded-full my-4"
              />
            </div>
            <Nav className="me-auto mb-2 lg:mb-0" as="ul">
              <NavItem label="Home" url="#home" />
              <NavItem label="Features" url="#features" />
              <NavItem label="Blog" url="#blog" />
              <NavItem label="Team" url="#team" isLast />
            </Nav>

            <div className="grid lg:flex gap-6 items-center">
              <ThemeToggler className="hidden lg:block" />
              <Button
                className="p-0 text-subtle text-body-emphasis-hover hidden lg:inline leading-sm"
                onClick={() => setOpenSearchModal(!openSearchModal)}
              >
                <FeatherIcon icon="search" size={20} />
              </Button>
              <Link
                to="#!"
                className="btn btn-link p-0 text-default order-1 lg:order-0"
              >
                Sign in
              </Link>
              <Link to="#!" className="btn btn-phoenix-primary order-0">
                Sign up
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Modal
        show={openSearchModal}
        onHide={() => setOpenSearchModal(false)}
        className="search-box-modal mt-30"
      >
        <Modal.Body className="p-0 bg-transparent">
          <DropdownSearchBox
            size="lg"
            className="navbar-top-search-box"
            inputClassName="rounded-full"
            style={{ width: 'auto' }}
          >
            <SearchResult />
          </DropdownSearchBox>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DefaultLandingNavbar;
