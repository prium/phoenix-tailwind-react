import {
  faCalendarDays,
  faHome,
  faImage,
  faMessage,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { Link } from 'react-router';

interface NavbarBottomProps {
  active: string;
  className?: string;
}

/** `+NavbarBottom` in mixins/navbars/NavbarBottom.pug — CSS keys on the
 *  `.navbar-bottom > .nav > .nav-link` structure, keep it verbatim. */
const NavbarBottom = ({ active, className }: NavbarBottomProps) => {
  return (
    <div className={cn('navbar-bottom', className)}>
      <div className="nav">
        <Link
          to="/apps/social/feed"
          className={cn('nav-link', { active: active === 'home' })}
          aria-current="page"
        >
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
          <span className="nav-label">Home</span>
        </Link>
        <Link
          to="/apps/social/profile"
          className={cn('nav-link', { active: active === 'profile' })}
        >
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
          <span className="nav-label">Profile</span>
        </Link>
        <a href="#!" className="nav-link">
          <FontAwesomeIcon icon={faImage} className="nav-icon" />
          <span className="nav-label">Photos</span>
        </a>
        <Link to="/apps/chat" className="nav-link">
          <FontAwesomeIcon icon={faMessage} className="nav-icon" />
          <span className="nav-label">Messages</span>
        </Link>
        <Link to="/apps/events/event-detail" className="nav-link">
          <FontAwesomeIcon icon={faCalendarDays} className="nav-icon" />
          <span className="nav-label">Events</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarBottom;
