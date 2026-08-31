import { cn } from '@hummingbirdui/react';
import bg45 from 'assets/img/bg/45.png';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface SocialLink {
  icon: IconDefinition;
  path: string;
}

const socialsLinks: SocialLink[] = [
  { icon: faFacebook, path: '#!' },
  { icon: faTwitter, path: '#!' },
  { icon: faInstagram, path: '#!' },
  { icon: faYoutube, path: '#!' }
];

interface FooterNav {
  title: string;
  link: string;
}

const footerNavs: FooterNav[] = [
  { title: 'About', link: '#!' },
  { title: 'Policy', link: '#!' },
  { title: 'Terms & Condition', link: '#!' }
];

/** `+FlightFooter` in mixins/travel-agency/flight/homepage/FlightFooter.pug */
const FlightFooter = ({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <div className="md:container-small px-0 md:px-4">
        <div className="relative overflow-hidden md:rounded-md">
          <div
            className="bg-holder overlay before:bg-(--color-black)/75! bg-cover! bg-center!"
            style={{ backgroundImage: `url(${bg45})` }}
          />

          <div className="row lg:g-0 gy-4 relative justify-center py-16 px-4 sm:px-10 xl:px-30">
            <div className="col-11 sm:col-8 lg:col-5">
              <div className="input-group gap-2">
                <div className="input-group-icon flex-1">
                  <input
                    className="form-control form-icon-input bg-soft"
                    type="email"
                    placeholder="Your email address"
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="form-control-icon-start text-default"
                  />
                </div>
                <Button type="button" variant="primary" className="rounded-md">
                  Sign up
                </Button>
              </div>
            </div>
            <div data-hb-theme="light" className="md:col-7">
              <div className="flex flex-col lg:flex-row lg:gap-10 gap-2 items-center lg:justify-end justify-center">
                <ul className="nav">
                  {footerNavs.map(item => (
                    <li className="nav-item" key={item.title}>
                      <a
                        className="nav-link link text-white font-normal no-underline"
                        href={item.link}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div>
                  {socialsLinks.map((social, idx) => (
                    <Link
                      key={idx}
                      to={social.path}
                      className={cn('link text-white', {
                        'pe-1 me-2': idx !== socialsLinks.length - 1
                      })}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FlightFooter;
