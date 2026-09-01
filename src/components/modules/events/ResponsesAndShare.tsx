import {
  faFacebook,
  faFacebookMessenger,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';

const ResponsesAndShare = () => {
  return (
    <>
      <h4 className="mb-4 font-bold text-highlight 2xl:text-xl">Responses:</h4>
      <div className="flex mb-10">
        <div className="me-4">
          <p className="mb-2 text-muted">Going</p>
          <h3 className="text-muted">4,569</h3>
        </div>
        <div className="my-4 mx-2 sm:mx-4 border-s border-subtle" />
        <div className="mx-4">
          <p className="mb-2 text-muted">Interested</p>
          <h3 className="text-muted">15,652</h3>
        </div>
        <div className="my-4 mx-2 sm:mx-4 border-s border-subtle" />
        <div className="mx-4">
          <p className="mb-2 text-muted">Share</p>
          <h3 className="text-muted">11,236</h3>
        </div>
      </div>
      <h4 className="mb-4 font-bold text-highlight">Share with Friends:</h4>
      <div className="flex mb-8">
        <Button variant="phoenix-primary" className="btn-icon me-2">
          <FontAwesomeIcon icon={faFacebook} />
        </Button>
        <Button variant="phoenix-primary" className="btn-icon me-2">
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </Button>
        <Button variant="phoenix-primary" className="btn-icon me-2">
          <FontAwesomeIcon icon={faTwitter} className="text-info" />
        </Button>
        <Button variant="phoenix-primary" className="btn-icon me-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-danger" />
        </Button>
        <Button variant="phoenix-primary" className="btn-icon me-2">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-info" />
        </Button>
      </div>
      <Button variant="phoenix-primary" className="w-full mb-8 xl:mb-0">
        Load more
      </Button>
    </>
  );
};

export default ResponsesAndShare;
