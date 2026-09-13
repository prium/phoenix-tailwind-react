import {
  faFacebook,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  UilEnvelope,
  UilMapMarker,
  UilPhone,
  type Icon
} from '@iconscout/react-unicons';
import type { ReactNode } from 'react';

import Unicon from 'components/base/Unicon';

/**
 * The gold renders these as `span.uil` webfont glyphs; phoenix's `text-3xl` is
 * 39.06px and the unicons em box is 1em wide, so the react-unicons svg has to
 * be sized to match or the label next to it starts ~9px too early.
 */
const ContactRow = ({
  icon,
  className,
  children
}: {
  icon: Icon;
  className?: string;
  children: ReactNode;
}) => (
  <div className={className ?? 'md:flex items-center'}>
    <div className="icon-wrapper shadow-info">
      <Unicon
        icon={icon}
        size={39}
        fill="currentColor"
        lineBox
        wrapperClassName="text-primary text-3xl z-1 ms-2"
        data-hb-theme="light"
      />
    </div>
    <div className="flex-1 ms-4">{children}</div>
  </div>
);

/**
 * "Stay connected" column — `+Address` in landing-1/Address.pug, reused
 * verbatim by `+Contact` in landing-2/Contact.pug.
 */
const HelpCenter = () => (
  <>
    <h3 className="mb-4">Stay connected</h3>
    <p className="mb-8">
      Stay connected with Phoenix&apos;s Help Center; Phoenix is available for
      your necessities at all times.
    </p>
    <div className="flex flex-col items-center md:items-start gap-4 md:gap-0">
      <ContactRow icon={UilPhone}>
        <a className="link-900" href="tel:+871406-7509">
          (871) 406-7509
        </a>
      </ContactRow>
      <ContactRow icon={UilEnvelope}>
        <a
          className="font-semibold text-default"
          href="mailto:phoenix@email.com"
        >
          phoenix@email.com
        </a>
      </ContactRow>
      <ContactRow icon={UilMapMarker} className="mb-10 md:flex items-center">
        <a className="font-semibold text-default" href="#!">
          39163 Amir Drive Suite 802
        </a>
      </ContactRow>
      <div className="flex">
        <a href="#!">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-xl text-primary me-4"
          />
        </a>
        <a href="#!">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-xl text-primary me-4"
          />
        </a>
        <a href="#!">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-xl text-primary"
          />
        </a>
      </div>
    </div>
  </>
);

export default HelpCenter;
