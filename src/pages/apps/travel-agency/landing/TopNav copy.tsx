import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faArrowRightToBracket,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';

const TopNav = () => {
  interface navItems {
    title: string;
    link: string;
    icon?: IconDefinition;
    transform?: string;
  }
  const navItems: navItems[] = [
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

  return (
    <div className="bg-primary-subtle py-2">
      <div className="container-medium flex items-center justify-between">
        <Button href="#!" variant="link" className="text-default p-0">
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className="me-2"
            transform="down-1"
          />
          Agent Login
        </Button>
        <Dropdown>
          {/* <Button size="sm" className="p-0 md:hidden text-base"></Button> */}
          <Dropdown.Toggle
            size="sm"
            variant=""
            className="p-0 md:hidden text-base dropdown-caret-none"
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ zIndex: 9999 }}>
            <Dropdown.Item href="">Become a Host</Dropdown.Item>
            <Dropdown.Item href="">Blog</Dropdown.Item>
            <Dropdown.Item href="">Career</Dropdown.Item>
            <Dropdown.Item href="">Support</Dropdown.Item>
            <Dropdown.Item href="">+01 123 581321</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ul className="hidden md:flex gap-8 list-unstyled mb-0">
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
