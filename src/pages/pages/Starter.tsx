import starterImg from 'assets/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/img/spot-illustrations/dark_2.png';
import Button from 'components/base/Button';
import { Link } from 'react-router';

const Starter = () => {
  return (
    <div className="flex flex-center content-min-h">
      <div className="text-center py-16">
        <img src={starterImg} className="mb-12 w-117.5 dark:hidden" alt="" />
        <img
          src={starterDarkImg}
          className="mb-12 w-117.5 hidden mx-auto dark:block"
          alt=""
        />
        <h1 className="text-muted font-normal mb-8">
          Create Something Beautiful.
        </h1>
        <Button variant="primary" size="lg" asChild>
          <Link to="/documentation/getting-started">Getting Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Starter;
