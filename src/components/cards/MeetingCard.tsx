import { faCircle, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import { Meeting } from 'data/crm/dealDetailsData';

/** `+Meeting(data)` in mixins/crm/DealDetails.pug */
const MeetingCard = ({ meeting }: { meeting: Meeting }) => {
  return (
    <div className="card h-full">
      <div className="card-body">
        <div className="flex justify-between items-start flex-wrap mb-6 gap-2">
          <div className="mb-4 sm:mb-0">
            <h4 className="line-clamp-1 mb-2 sm:mb-1">{meeting.title}</h4>
            <div>
              {/* h-lh keeps the gold `span.uil` font-icon line box */}
              <span className="text-primary me-2 inline-flex items-center align-top h-lh">
                <UilCalendarAlt fill="currentColor" size={16} />
              </span>
              <span className="font-semibold text-muted text-md">
                {meeting.date.from}
              </span>
              <span className="text-subtle/85"> to </span>
              <span className="font-semibold text-muted text-md">
                {meeting.date.to}
              </span>
              <span className="text-muted text-md">
                {meeting.date.duration}
              </span>
            </div>
          </div>
          <div className="avatar-group avatar-group-dense">
            {meeting.name && (
              <Avatar size="s" variant="name">
                {meeting.name}
              </Avatar>
            )}
            {meeting.assignees.map(assignee => (
              <Avatar key={assignee} size="s" src={assignee} />
            ))}
            {meeting.more && (
              <Avatar size="s" variant="name">
                {meeting.more}
              </Avatar>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <span className={`badge me-2 ${meeting.badge.className}`}>
            {meeting.badge.text}
          </span>
          <div className="flex items-center flex-1">
            <FontAwesomeIcon
              icon={faCircle}
              transform="shrink-6 up-1"
              className={`me-1 ${meeting.priority.iconClass}`}
            />
            <span className="font-bold text-md text-default">
              {meeting.priority.label}
            </span>
          </div>
          <Button
            variant="phoenix-primary"
            startIcon={
              <FontAwesomeIcon
                icon={faVideo}
                className="me-2 hidden sm:inline-block"
              />
            }
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
