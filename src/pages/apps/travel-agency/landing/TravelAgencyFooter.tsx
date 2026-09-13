import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router';
import { cn } from '@hummingbirdui/react';
import Logo from 'components/common/Logo';
import Footer from 'components/footers/Footer';

interface TravelAgencyFooterProps {
  className?: string;
}

interface NavItem {
  title: string;
  link: string;
  icon?: IconDefinition;
  transform?: string;
}

/** `+FooterLinks` in phoenix-tailwind mixins/travel-agency/common/FooterLinks.pug */
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

const TravelAgencyFooter = ({ className }: TravelAgencyFooterProps) => {
  return (
    <div className="container-medium">
      <div
        className={cn(
          'row flex-center md:justify-between! md:items-center gy-2',
          // gold layouts: LayoutHotel `+FooterLinks.mb-4`, LayoutTrip `.mt-6.mb-4`
          className ?? 'mb-4'
        )}
      >
        <div className="col-auto">
          <Link to="/" className="navbar-brand">
            <Logo />
          </Link>
        </div>
        <div className="col-auto">
          <ul className="list-none flex flex-center flex-wrap gap-x-8 gap-y-1 mb-0 p-0">
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
      <Footer className="px-0!" />
    </div>
  );
};

export default TravelAgencyFooter;
