import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import AuthSocialButtons from 'components/common/AuthSocialButtons';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const SignInForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {
  return (
    <>
      <div className="text-center mb-7">
        <h3 className="text-highlight">Sign In</h3>
        <p className="text-subtle">Get access to your account</p>
      </div>
      <AuthSocialButtons title="Sign in" />
      <div className="relative">
        <hr className="bg-muted mt-5 mb-4" />
        <div className="divider-content-center">or use email</div>
      </div>
      <Form.Group className="mb-3 text-start">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <div className="form-icon-container">
          <Form.Control
            id="email"
            type="email"
            className="form-icon-input"
            placeholder="name@example.com"
          />
          <FontAwesomeIcon icon={faUser} className="text-default text-md form-icon" />
        </div>
      </Form.Group>
      <Form.Group className="mb-3 text-start">
        <Form.Label htmlFor="password">Password</Form.Label>
        <div className="form-icon-container">
          <Form.Control
            id="password"
            type="password"
            className="form-icon-input"
            placeholder="Password"
          />
          <FontAwesomeIcon icon={faKey} className="text-default text-md form-icon" />
        </div>
      </Form.Group>
      <Row className="flex-between-center mb-7">
        <Col xs="auto">
          <Form.Check type="checkbox" className="mb-0">
            <Form.Check.Input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              defaultChecked
            />
            <Form.Check.Label htmlFor="remember-me" className="mb-0">
              Remember me
            </Form.Check.Label>
          </Form.Check>
        </Col>
        <Col xs="auto">
          <Link
            to={`/pages/authentication/${layout}/forgot-password`}
            className="text-md font-semibold"
          >
            Forgot Password?
          </Link>
        </Col>
      </Row>
      <Button variant="primary" className="w-100 mb-3">
        Sign In
      </Button>
      <div className="text-center">
        <Link
          to={`/pages/authentication/${layout}/sign-up`}
          className="text-md font-bold"
        >
          Create an account
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
