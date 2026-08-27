import Avatar from 'components/base/Avatar';
import { useState } from 'react';
import { Card, Dropdown, Input, cn } from '@hummingbirdui/react';
import avatar from 'assets/img/team/72x72/57.webp';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router';

/** `+ProfileDropdown` in phoenix-tailwind Mixins.pug */
const ProfileDropdownMenu = ({ className }: { className?: string }) => {
  const [navItems] = useState([
    { label: 'Profile', icon: 'user' },
    { label: 'Dashboard', icon: 'pie-chart' },
    { label: 'Posts & Activity', icon: 'lock' },
    { label: 'Settings & Privacy ', icon: 'settings' },
    { label: 'Help Center', icon: 'help-circle' },
    { label: 'Language', icon: 'globe' }
  ]);
  return (
    <Dropdown.Content
      align="end"
      sideOffset={8}
      className={cn(
        className,
        'navbar-dropdown-caret py-0 dropdown-profile shadow border'
      )}
    >
      <Card className="relative border-0">
        <Card.Body className="p-0">
          <div className="text-center pt-6 pb-4">
            <Avatar src={avatar} size="xl" className="inline-block" />
            <h6 className="mt-2 text-emphasis">Jerry Seinfield</h6>
          </div>
          <div className="mb-4 mx-4">
            <Input type="text" placeholder="Update your status" size="sm" />
          </div>
          <div className="overflow-auto scrollbar h-40">
            <ul className="nav flex flex-col mb-2 pb-1">
              {navItems.map(item => (
                <li className="nav-item" key={item.label}>
                  <Link to="#!" className="nav-link px-4! block text-md">
                    <FeatherIcon
                      icon={item.icon}
                      size={16}
                      className="me-2 text-default align-bottom"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Card.Body>
        <Card.Footer className="p-0 border-t border-light">
          <ul className="nav flex flex-col my-4">
            <li className="nav-item">
              <Link to="#!" className="nav-link px-4! block text-md">
                <FeatherIcon
                  icon="user-plus"
                  size={16}
                  className="me-2 text-default align-bottom"
                />
                <span>Add another account</span>
              </Link>
            </li>
          </ul>
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
    </Dropdown.Content>
  );
};

export default ProfileDropdownMenu;
