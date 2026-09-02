import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';

/**
 * pug: mixins/authentication/SocialButtons.pug. The icons are direct children
 * rather than `startIcon` because the gold spaces them with `me-2` and
 * `startIcon` would append its own `me-1`.
 */
const AuthSocialButtons = ({ title }: { title: string }) => {
  return (
    <>
      <Button variant="phoenix-secondary" className="w-full mb-4">
        <FontAwesomeIcon icon={faGoogle} className="text-danger me-2 text-md" />
        {title} with google
      </Button>
      <Button variant="phoenix-secondary" className="w-full">
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-primary me-2 text-md"
        />
        {title} with facebook
      </Button>
    </>
  );
};

export default AuthSocialButtons;
