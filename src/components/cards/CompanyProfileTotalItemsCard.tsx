import { Tooltip } from '@hummingbirdui/react';
import { CompanyProfileTotalItem } from 'data/stock/stockDetails';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/** Gold: `descriptionItem` card in mixins/stock/stock-details/CompanyProfileTabContent.pug */
const CompanyProfileTotalItemsCard = ({
  cardItems
}: {
  cardItems: CompanyProfileTotalItem[];
}) => {
  return (
    <div className="card mb-8">
      <div className="card-body">
        <div className="row g-0">
          {cardItems.map(item => (
            <div
              key={item.id}
              className={classNames(
                item.className,
                'col-6 lg:col-12 2xl:col-6'
              )}
            >
              <div className="row flex-between-center g-2">
                <div className="md:col-6">
                  <div className="md:flex items-center gap-2">
                    <div
                      className={classNames(
                        item.icon.iconClassName,
                        'border flex flex-center p-2 rounded-sm mb-4 md:mb-0 w-8 h-8'
                      )}
                    >
                      <FontAwesomeIcon
                        icon={item.icon.name}
                        className={item.icon.iconColor}
                      />
                    </div>
                    <h5 className="text-highlight mb-0 line-clamp-1">
                      {item.title}
                    </h5>
                  </div>
                </div>
                <div className="col-1 hidden md:block">
                  <h5 className="text-muted mb-0">:</h5>
                </div>
                <div className="md:col-5">
                  <div className="flex md:justify-between items-center gap-2">
                    <p className="mb-0 text-muted">{item.growth}</p>
                    <Tooltip>
                      <Tooltip.Trigger asChild>
                        <div
                          className={`badge-phoenix-${item.badge.badgeBg} badge text-sm`}
                        >
                          {item.badge.title}%
                        </div>
                      </Tooltip.Trigger>
                      <Tooltip.Content side="top">
                        From {item.tooltipContent}
                      </Tooltip.Content>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileTotalItemsCard;
