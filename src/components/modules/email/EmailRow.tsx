import { useState } from 'react';
import { faEllipsis, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import { Email } from 'data/email';
import { useBulkSelect } from 'providers/BulkSelectProvider';
import { Link } from 'react-router';

interface EmailRowProps {
  email: Email;
  index: number;
  isLast?: boolean;
}

/**
 * Gold `mixin EmailRow` + `mixin ActionButton`
 * (../phoenix-tailwind/src/pug/mixins/email/Common.pug).
 */
const EmailRow = ({ email, index, isLast }: EmailRowProps) => {
  const { getRowCheckboxProps } = useBulkSelect();
  const [starred, setStarred] = useState(email.star);
  // `indeterminate` is a DOM property, not an attribute — a plain row
  // checkbox (the gold has no .form-check wrapper here) never needs it.
  const { indeterminate, ...checkboxProps } = getRowCheckboxProps(
    String(index)
  );
  void indeterminate;
  return (
    <div
      className={cn(
        'border-t border-subtle hover-actions-trigger',
        isLast ? 'pt-4' : 'py-4'
      )}
    >
      <div className="row sm:items-center gx-2">
        <div className="col-auto">
          <div className="flex flex-col sm:flex-row">
            <input
              type="checkbox"
              id={`checkbox-${email.id}`}
              className="form-check-input mt-1 mb-2 me-0 sm:m-0 sm:me-2"
              {...checkboxProps}
            />
            <Button className="p-0" onClick={() => setStarred(!starred)}>
              <FontAwesomeIcon
                icon={starred ? faStar : farStar}
                className={starred ? 'text-warning' : 'text-soft'}
              />
            </Button>
          </div>
        </div>
        <div className="col-auto">
          {email.avatar ? (
            <Avatar
              size="s"
              src={email.avatar}
              placeholder={email.avatarPlaceholder}
            />
          ) : (
            <Avatar size="s" variant="name">
              {email.avatarName}
            </Avatar>
          )}
        </div>
        <div className="col-auto">
          <Link
            to="/apps/email/email-detail"
            className={cn(
              'inbox-link text-md',
              email.read
                ? 'text-default font-semibold'
                : 'text-emphasis font-bold'
            )}
          >
            {email.user}
          </Link>
        </div>
        <div className="col-auto ms-auto">
          <div className="hover-actions end-0">
            <Dropdown>
              <Dropdown.Trigger asChild>
                <Button
                  variant="phoenix-secondary"
                  className="btn-square btn-sm"
                >
                  <FontAwesomeIcon icon={faEllipsis} />
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Content align="end" className="py-2">
                <Dropdown.Item asChild>
                  <a href="#!">Mark Unread</a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!">Mark Important</a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!">Archive</a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!">Download</a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!">Print</a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!">Report Spam</a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!">Report Phishing</a>
                </Dropdown.Item>
                {/* the gold mixin is called without a user, so every row
                    hardcodes Jessica Ball */}
                <Dropdown.Item asChild>
                  <a href="#!">Mute Jessica Ball</a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!">Block Jessica Ball</a>
                </Dropdown.Item>
                <Dropdown.Item className="text-danger" asChild>
                  <a href="#!">Delete</a>
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
          <span className={cn(!email.read && 'font-bold', 'text-sm')}>
            {email.time}
          </span>
        </div>
      </div>
      <div className="ms-6 -mt-4 sm:mt-0 sm:ms-20">
        <Link to="/apps/email/email-detail" className="block inbox-link">
          <span
            className={cn(
              email.read ? 'text-highlight' : 'text-emphasis',
              'text-md line-clamp-1'
            )}
          >
            {email.title}
          </span>
          <p className="text-md ps-0 text-subtle mb-0 line-clamp-2">
            {email.description}
          </p>
        </Link>
        {email.attachments?.map(attachment => (
          <a
            className="inline-flex items-center border border-subtle rounded-full px-4 py-1 me-2 mt-2 inbox-link"
            href="#!"
            key={attachment.id}
          >
            <FontAwesomeIcon
              icon={attachment.icon}
              className={attachment.iconClass}
            />
            <span className="ms-2 font-bold text-sm text-default">
              {attachment.fileName}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EmailRow;
