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
    <div className={classNames({ '2xl:px-8': !(layout === 'split') })}>
      <div
        className={classNames('text-center', { 'mb-10': !(layout === 'split') })}
      >
        <h4 className="text-highlight">Forgot your password?</h4>
        <p className="text-subtle mb-8">
          Enter your email below and we will send <br className="sm:hidden" />
          you a reset link
        </p>
        <Form className="flex items-center mb-8">
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
