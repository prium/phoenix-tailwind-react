import { Card } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import illustration32 from 'assets/img/spot-illustrations/32.png';
import illustration21 from 'assets/img/spot-illustrations/21.png';
import illustration21Dark from 'assets/img/spot-illustrations/dark_21.png';
import { faAward } from '@fortawesome/free-solid-svg-icons';

/** `+FlyCard` in mixins/dashboard/project-management/FlyCard.pug */
const EarlyBirdCard = () => {
  return (
    <Card className="border-default h-full w-full overflow-hidden">
      <div
        className="bg-holder block bg-card bg-top-right!"
        style={{ backgroundImage: `url(${illustration32})` }}
      />
      <div className="dark:hidden">
        <div
          className="bg-holder hidden sm:block xl:hidden 2xl:block bg-card bg-bottom-right! bg-auto!"
          style={{ backgroundImage: `url(${illustration21})` }}
        />
      </div>
      <div className="hidden dark:block">
        <div
          className="bg-holder hidden sm:block xl:hidden 2xl:block bg-card bg-bottom-right! bg-auto!"
          style={{ backgroundImage: `url(${illustration21Dark})` }}
        />
      </div>
      <Card.Body className="px-8 relative">
        <div className="badge text-sm badge-phoenix-warning mb-6 mt-1">
          <span className="font-bold">Coming soon</span>
          <FontAwesomeIcon icon={faAward} className="ms-1" />
        </div>
        <h3 className="mb-8">Early bird gets the warm leads!</h3>
        <p className="text-base text-subtle font-semibold mb-5">
          Phoenix CRM Dashboard is coming to <br className="hidden sm:block" />
          market soon for fulfilling your every{' '}
          <br className="hidden sm:block" />
          CRM related needs.{' '}
        </p>
      </Card.Body>
      <Card.Footer className="border-0 py-0 px-8 z-1">
        <p className="text-base text-subtle font-semibold">
          Follow{' '}
          <a href="https://themewagon.com/" target="_blank" rel="noreferrer">
            ThemeWagon{' '}
          </a>
          to get the latest updates.
        </p>
      </Card.Footer>
    </Card>
  );
};

export default EarlyBirdCard;
