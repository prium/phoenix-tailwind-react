import { Card, cn } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import { Stat } from 'data/crm/dealDetailsInfo';

interface DimensionsCardProps {
  stats: Stat[];
  className?: string;
}

/** `+PrintingDimensions` in mixins/crm/DealDetails.pug */
const DealsPrintingDimensionsCard = ({
  stats,
  className
}: DimensionsCardProps) => {
  return (
    <Card className={className}>
      <Card.Body>
        <div className="row g-6 xl:g-1 2xl:g-4 items-center justify-between">
          {stats.map((stat, index) => (
            <div key={stat.id} className="sm:col-auto">
              <div
                className={cn(
                  'sm:block inline-flex md:flex xl:flex-col 2xl:flex-row items-center xl:items-start 2xl:items-center',
                  { 'sm:border-s sm:ps-8 border-subtle': index !== 0 }
                )}
              >
                <div
                  className={`size-8 flex ${stat.bgClass} rounded-md flex-center me-4 sm:mb-4 md:mb-0 xl:mb-4 2xl:mb-0`}
                >
                  <FeatherIcon
                    icon={stat.icon}
                    size={16}
                    className={`size-6 ${stat.textClass}`}
                  />
                </div>
                <div>
                  <p className="font-bold mb-1">{stat.title}</p>
                  <h4 className="font-extrabold text-nowrap">{stat.value}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default DealsPrintingDimensionsCard;
