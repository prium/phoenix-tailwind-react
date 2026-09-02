import Avatar from 'components/base/Avatar';
import avatar from 'assets/img/team/30.webp';
import { Form } from 'react-bootstrap';
import Button from 'components/base/Button';
import { Link } from 'react-router';

const LockScreenForm = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <Avatar size="4xl" src={avatar} className="mb-4 inline-block" />
        <h2 className="text-highlight">
          <span className="font-normal">Hello </span>
          John Smith
        </h2>
        <p className="text-subtle">
          Enter your password to access the admin
        </p>
      </div>
      <Form>
        <Form.Control
          className="mb-4"
          id="password"
          type="password"
          placeholder="Enter Password"
        />
        <Button variant="primary" as={Link} to="/" className="w-full">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default LockScreenForm;
