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
      <h4 className="mb-3 font-bold text-highlight fs-xxl-6">Responses:</h4>
      <div className="flex mb-6">
        <div className="me-3">
          <p className="mb-2 text-muted">Going</p>
          <h3 className="text-muted">4,569</h3>
        </div>
        <div className="my-3 mx-2 mx-sm-3 border-start border-subtle" />
        <div className="mx-3">
          <p className="mb-2 text-muted">Interested</p>
          <h3 className="text-muted">15,652</h3>
        </div>
        <div className="my-3 mx-2 mx-sm-3 border-start border-subtle" />
        <div className="mx-3">
          <p className="mb-2 text-muted">Share</p>
          <h3 className="text-muted">11,236</h3>
        </div>
      </div>
      <h4 className="mb-3 font-bold text-highlight">Share with Friends:</h4>
      <div className="flex mb-5">
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
      <Button variant="phoenix-primary" className="w-100 mb-5 mb-xl-0">
        Load more
      </Button>
    </>
  );
};

export default ResponsesAndShare;
