import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faArrowRightToBracket,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '@hummingbirdui/react';
import { Link } from 'react-router';

interface NavItem {
  title: string;
  link: string;
  icon?: IconDefinition;
  transform?: string;
}

/** `+TopNavbar` links in phoenix-tailwind mixins/travel-agency/landing/TopNavbar.pug */
const navItems: NavItem[] = [
  {
    title: 'Become a Host',
    link: '#!'
  },
  {
    title: 'Blog',
    link: '#!'
  },
  {
    title: 'Career',
    link: '#!'
  },
  {
    title: 'Support',
    link: 'mailto:example@gmail.com',
    icon: faEnvelope,
    transform: 'down-1'
  },
  {
    title: '+01 123 581321',
    link: 'tel:+01123581321',
    icon: faWhatsapp
  }
];

const TopNav = () => {
  return (
    <div className="bg-primary-subtle py-2">
      <div className="container-medium flex items-center justify-between">
        <Link to="#!" className="btn btn-link p-0 text-default">
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className="me-2"
            transform="down-1"
          />
          Agent Login
        </Link>
        <Dropdown>
          <Dropdown.Trigger asChild>
            <button
              type="button"
              className="btn btn-sm p-0 md:hidden text-base dropdown-caret-none"
            >
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
          </Dropdown.Trigger>
          <Dropdown.Content align="end" className="z-9999">
            <Dropdown.Item>Become a Host</Dropdown.Item>
            <Dropdown.Item>Blog</Dropdown.Item>
            <Dropdown.Item>Career</Dropdown.Item>
            <Dropdown.Item>Support</Dropdown.Item>
            <Dropdown.Item>+01 123 581321</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
        <ul className="hidden md:flex gap-8 list-none mb-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="leading-none text-subtle font-semibold text-md"
              >
                {item.icon && (
                  <FontAwesomeIcon
                    icon={item.icon}
                    transform={item.transform || undefined}
                    className="me-2"
                  />
                )}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
