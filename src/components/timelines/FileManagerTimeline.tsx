import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import Timeline from 'components/base/Timeline';
import AvatarDropdown from 'components/common/AvatarDropdown';

interface Activity {
  time: string;
  icon: IconDefinition;
  iconColor: string;
  title: string;
  tasker: string;
  assignees?: { name: string; avatar: string }[];
  more?: string;
}

/** literal classes — Tailwind cannot see `text-${iconColor}` */
const iconColorClass: Record<string, string> = {
  success: 'text-success',
  danger: 'text-danger',
  info: 'text-info',
  warning: 'text-warning'
};

/**
 * Gold `timelineTemplate` in phoenix-tailwind's
 * `src/js/theme/file-manager/template.js` (the File Activity tab). Only the
 * `timeline-basic` / `timeline-item` wrappers come from the shared Timeline —
 * the separator and content classes differ from the generic ones.
 */
const FileManagerTimeline = ({ data }: { data: Activity[] }) => (
  <Timeline variant="basic">
    {data.map((item, index) => (
      <Timeline.Item key={index}>
        <div className="row g-4">
          <div className="col-auto">
            <div className="timeline-item-bar relative">
              <div className="icon-item icon-item-md rounded-7 border border-subtle">
                <FontAwesomeIcon
                  icon={item.icon}
                  className={cn(iconColorClass[item.iconColor], 'text-md')}
                />
              </div>
              {index !== data.length - 1 && (
                <Timeline.Bar className="border-dashed" />
              )}
            </div>
          </div>
          <div className="col mb-8">
            <div className="flex justify-between">
              <div className="flex mb-2">
                <h6 className="leading-sm mb-0 me-2 text-muted timeline-item-title">
                  {item.title}
                </h6>
              </div>
              <p className="text-soft text-md mb-0 text-nowrap timeline-time">
                <FontAwesomeIcon icon={faClock} className="me-1" />
                {item.time}
              </p>
            </div>
            <h6 className="text-sm font-normal mb-4">
              by{' '}
              <a className="font-semibold" href="#!">
                {item.tasker}
              </a>
            </h6>
            {item.assignees && (
              <div className="avatar-group avatar-group-dense">
                {item.assignees.map((member, memberIndex) => (
                  <AvatarDropdown
                    key={memberIndex}
                    user={{
                      ...member,
                      id: memberIndex,
                      username: 'tyrion222',
                      connections: 224,
                      mutual: 23
                    }}
                    size="m"
                    dropdownClass="dropdown-toggle dropdown-caret-none"
                  />
                ))}
                {item.more && (
                  <Avatar size="m" variant="name">
                    {item.more}
                  </Avatar>
                )}
              </div>
            )}
          </div>
        </div>
      </Timeline.Item>
    ))}
  </Timeline>
);

export default FileManagerTimeline;
