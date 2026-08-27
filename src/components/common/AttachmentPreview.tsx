import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { getFileIcon } from 'helpers/utils';

export interface FileAttachment {
  name: string;
  size: string;
  format: string;
  date?: string;
  preview?: string;
}

interface AttachmentProps {
  attachment: FileAttachment;
  variant?: 'primary' | 'secondary';
  size?: 'lg' | 'xl';
  url?: string;
  handleRemove?: () => void;
}

const AttachmentPreview = ({
  attachment,
  variant = 'primary',
  size = 'lg',
  url = '#!',
  handleRemove
}: AttachmentProps) => {
  return (
    <a href={url} className="no-underline flex items-center">
      <div
        className={classNames(
          `btn-icon btn-icon-${size} rounded-lg flex-col me-2 relative`,
          {
            border: !attachment.preview,
            'text-soft': variant === 'primary',
            'border-light-subtle text-white': variant === 'secondary'
          }
        )}
      >
        {attachment.preview ? (
          <img
            src={attachment.preview}
            alt={attachment.name}
            className="w-full rounded-md"
          />
        ) : (
          <>
            <FontAwesomeIcon
              icon={getFileIcon(attachment.format)}
              className={classNames('text-base mb-1')}
            />
            <p className="mb-0 text-sm font-bold leading-none">{attachment.format}</p>
          </>
        )}

        {handleRemove && (
          <button className="btn btn-x" onClick={handleRemove}>
            <FontAwesomeIcon icon={faXmark} className="text-default" />
          </button>
        )}
      </div>

      <div className="flex-1">
        <h6
          className={classNames('line-clamp-1 wrap-break-word', {
            'text-default': variant === 'primary',
            'text-white': variant === 'secondary'
          })}
        >
          {attachment.name}
        </h6>
        <div
          className={classNames(
            'flex items-center leading-none font-semibold text-sm',
            {
              'text-subtle': variant == 'primary',
              'text-light': variant == 'secondary'
            }
          )}
        >
          <p className="mb-0 whitespace-nowrap">{attachment.size}</p>
          {attachment.date && (
            <>
              <FontAwesomeIcon
                icon={faCircle}
                className="text-soft"
                transform="shrink-12"
              />
              <p className="mb-0 whitespace-nowrap">{attachment.date}</p>
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default AttachmentPreview;
