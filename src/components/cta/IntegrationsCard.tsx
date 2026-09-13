import { Card, cn } from '@hummingbirdui/react';
import bgIllustrations from 'assets/img/spot-illustrations/39.png';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

export const IntegrationsCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <div
        className="bg-holder bg-card"
        style={{
          backgroundImage: `url(${bgIllustrations})`,
          backgroundPosition: 'bottom right 0px',
          backgroundSize: 'auto'
        }}
      />
      <Card.Body className="z-5">
        <div>
          <h3 className="text-highlight mb-4">Phoenix integrations</h3>
          <p className="text-subtle mb-6 w-3/4 xl:w-full text-base">
            Phoenix improves efficiency instantly and effortlessly{' '}
            <br className="hidden 2xl:block" /> by allowing easy &amp; simple
            connection <br className="hidden xl:block" /> to other popular
            programs
          </p>
          <Link to="#!" className="btn btn-sm btn-phoenix-primary">
            <FontAwesomeIcon icon={faLink} className="me-1" />
            Connect Now
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
