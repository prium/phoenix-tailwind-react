import {
  faFacebook,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilEnvelope, UilMapMarker, UilPhone } from '@iconscout/react-unicons';
import { Link } from 'react-router';

const HelpCenter = () => {
  return (
    <>
      <h3 className="mb-4">Stay connected</h3>
      <p className="mb-8">
        Stay connected with Phoenix's Help Center. Phoenix is available for your
        necessities at all times.
      </p>
      <div className="flex flex-col items-center md:items-start gap-6">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="icon-wrapper shadow-info">
            <UilPhone
              fill='currentColor'
              size={40}
              className="text-primary text-3xl z-1 ms-2"
              data-bs-theme="light"
            />
          </div>
          <div className="flex-1 ms-4">
            <a href="tel:+8714067509" className="link-900">
              (871) 406-7509
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="icon-wrapper shadow-info">
            <UilEnvelope
              fill='currentColor'
              size={40}
              className="text-primary z-1 ms-2"
              data-bs-theme="light"
            />
          </div>
          <div className="flex-1 ms-4">
            <Link
              to="mailto:phoenix@email.com"
              className="font-semibold text-default"
            >
              phoenix@email.com
            </Link>
          </div>
        </div>
        <div className="mb-10 flex flex-col md:flex-row gap-2 items-center">
          <div className="icon-wrapper shadow-info">
            <UilMapMarker
              fill='currentColor'
              size={40}
              className="text-primary z-1 ms-2"
              data-bs-theme="light"
            />
          </div>
          <div className="flex-1 ms-4">
            <Link to="#!" className="font-semibold text-default">
              39163 Amir Drive Suite 802
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#!">
            <FontAwesomeIcon icon={faFacebook} className="text-primary text-xl" />
          </a>
          <a href="#!">
            <FontAwesomeIcon icon={faTwitter} className="text-primary text-xl" />
          </a>
          <a href="#!">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-primary text-xl"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
