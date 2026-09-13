import Unicon from 'components/base/Unicon';
import { ProjectManagementStat } from 'data/project-management/stats';

/** `+SingleStat` in mixins/dashboard/project-management/Stats.pug */
const Stat = ({ stat }: { stat: ProjectManagementStat }) => {
  return (
    <div className="flex items-center">
      <Unicon
        icon={stat.icon}
        size="1em"
        fill="currentColor"
        className={`${stat.iconClass} text-3xl leading-none`}
      />
      <div className="ms-2">
        <div className="flex items-end">
          <h2 className="mb-0 me-2">{stat.count}</h2>
          <span className="text-lg font-semibold text-default">
            {stat.title}
          </span>
        </div>
        <p className="text-muted text-md mb-0">{stat.subtitle}</p>
      </div>
    </div>
  );
};

export default Stat;
