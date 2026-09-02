import { Stack } from 'react-bootstrap';
import starterImg from 'assets/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/img/spot-illustrations/dark_2.png';
import Button from 'components/base/Button';
import { Link } from 'react-router';

const Starter = () => {
  return (
    <Stack className="flex-center content-min-h">
      <div className="text-center py-16">
        <img
          src={starterImg}
          width={470}
          className="img-fluid mb-12 dark:hidden"
          alt="starter"
        />
        <img
          src={starterDarkImg}
          width={470}
          className="img-fluid mb-12 hidden dark:block"
          alt="starter"
        />
        <h1 className="text-muted font-normal mb-8">
          Create Something Beautiful.
        </h1>
        <Button
          as={Link}
          className="btn btn-lg btn-primary"
          to="/documentation/getting-started"
        >
          Getting Started
        </Button>
      </div>
    </Stack>
  );
};

export default Starter;
