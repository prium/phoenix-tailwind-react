import Unicon from 'components/base/Unicon';
import { ProjectManagementStat } from 'data/project-management/stats';
import React from 'react';

const Stat = ({ stat }: { stat: ProjectManagementStat }) => {
  return (
    <div className="flex align-items-center">
      <Unicon icon={stat.icon} size={40} fill='currentColor' className={`text-${stat.iconColor}`} />
      <div className="ms-2">
        <div className="flex align-items-end">
          <h2 className="mb-0 me-2">{stat.count}</h2>
          <span className="text-lg font-semibold text-default">{stat.title}</span>
        </div>
        <p className="text-muted text-md mb-0">{stat.subtitle}</p>
      </div>
    </div>
  );
};

export default Stat;
