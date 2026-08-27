import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router';

const ForgotPasswordForm = ({
  layout
}: {
  layout?: 'simple' | 'card' | 'split';
}) => {
  return (
    <div className={classNames({ 'px-xxl-5': !(layout === 'split') })}>
      <div
        className={classNames('text-center', { 'mb-6': !(layout === 'split') })}
      >
        <h4 className="text-highlight">Forgot your password?</h4>
        <p className="text-subtle mb-5">
          Enter your email below and we will send <br className="d-sm-none" />
          you a reset link
        </p>
        <Form className="flex align-items-center mb-5">
          <Form.Control
            type="email"
            id="email"
            className="flex-1"
            placeholder="Email"
          />
          <Button
            variant="primary"
            className="ms-2"
            endIcon={<FontAwesomeIcon icon={faChevronRight} className="ms-2" />}
          >
            Send
          </Button>
        </Form>
        <Link to="#!" className="text-md font-bold">
          Still having problems?
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
