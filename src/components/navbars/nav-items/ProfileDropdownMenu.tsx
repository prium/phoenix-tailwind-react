import Avatar from 'components/base/Avatar';
import { useState } from 'react';
import { Card, Dropdown, Form, Nav } from 'react-bootstrap';
import avatar from 'assets/img/team/72x72/57.webp';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router';
import Scrollbar from 'components/base/Scrollbar';
import classNames from 'classnames';

const ProfileDropdownMenu = ({ className }: { className?: string }) => {
  const [navItems] = useState([
    {
      label: 'Profile',
      icon: 'user'
    },
    {
      label: 'Dashboard',
      icon: 'pie-chart'
    },
    {
      label: 'Posts & Activity',
      icon: 'lock'
    },
    {
      label: 'Settings & Privacy ',
      icon: 'settings'
    },
    {
      label: 'Help Center',
      icon: 'help-circle'
    },
    {
      label: 'Language',
      icon: 'globe'
    }
  ]);
  return (
    <Dropdown.Menu
      align="end"
      className={classNames(
        className,
        'navbar-top-dropdown-menu navbar-dropdown-caret py-0 dropdown-profile shadow border'
      )}
    >
      <Card className="relative border-0">
        <Card.Body className="p-0">
          <div className="flex flex-col items-center justify-center gap-2 pt-6 pb-4">
            <Avatar src={avatar} size="xl" />
            <h6 className="text-emphasis">Jerry Seinfield</h6>
          </div>
          <div className="mb-4 mx-4">
            <Form.Control
              type="text"
              placeholder="Update your status"
              size="sm"
            />
          </div>
          <div style={{ height: '10rem' }}>
            <Scrollbar style={{ maxHeight: '10rem' }}>
              <Nav className="nav flex-col mb-2 pb-1">
                {navItems.map(item => (
                  <Nav.Item key={item.label}>
                    <Nav.Link href="#!" className="px-4">
                      <FeatherIcon
                        icon={item.icon}
                        size={16}
                        className="me-2 text-default"
                      />
                      <span className="text-highlight">{item.label}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Scrollbar>
          </div>
        </Card.Body>
        <Card.Footer className="p-0 border-t border-light">
          <Nav className="nav flex-col my-4">
            <Nav.Item>
              <Nav.Link href="#!" className="px-4">
                <FeatherIcon
                  icon="user-plus"
                  size={16}
                  className="me-2 text-default"
                />
                <span>Add another account</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <hr />
          <div className="px-4">
            <Link
              to="#!"
              className="btn btn-phoenix-secondary flex flex-center w-full"
            >
              <FeatherIcon icon="log-out" className="me-2" size={16} />
              Sign out
            </Link>
          </div>
          <div className="my-2 text-center font-bold text-sm text-soft">
            <Link className="text-soft me-1" to="#!">
              Privacy policy
            </Link>
            •
            <Link className="text-soft mx-1" to="#!">
              Terms
            </Link>
            •
            <Link className="text-soft ms-1" to="#!">
              Cookies
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default ProfileDropdownMenu;
