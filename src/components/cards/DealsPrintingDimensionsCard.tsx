import classNames from 'classnames';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Stat } from 'data/crm/dealDetailsInfo';

interface DimensionsCardProps {
  stats: Stat[];
  className?: string;
}

const DealsPrintingDimensionsCard = ({
  stats,
  className
}: DimensionsCardProps) => {
  return (
    <Card className={className}>
      <Card.Body>
        <Row className="g-6 xl:g-1 2xl:g-4 justify-between">
          {stats.map((stat, index) => (
            <Col key={stat.id} sm="auto">
              <div
                className={classNames(
                  'sm:block inline-flex md:flex xl:flex-col 2xl:flex-row items-center xl:items-start 2xl:items-center',
                  { 'sm:border-s border-subtle sm:ps-8': index !== 0 }
                )}
              >
                <div
                  className={`flex bg-${stat.color}-subtle rounded-md flex-center me-4 sm:mb-4 md:mb-0 xl:mb-4 2xl:mb-0`}
                  style={{ width: '32px', height: '32px' }}
                >
                  <FeatherIcon
                    icon={stat.icon}
                    className={`text-${stat.color}-dark`}
                  />
                </div>
                <div>
                  <p className="font-bold mb-1">{stat.title}</p>
                  <h4 className="font-black whitespace-nowrap">{stat.value}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DealsPrintingDimensionsCard;
