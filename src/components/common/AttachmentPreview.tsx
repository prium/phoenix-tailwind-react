import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
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
  className?: string;
  handleRemove?: () => void;
}

/**
 * File attachment row — the "Shared Files" items of phoenix-tailwind
 * mixins/chat/ChatThreadDetails.pug (`size-9.5` icon box + name/meta column).
 */
const AttachmentPreview = ({
  attachment,
  variant = 'primary',
  size = 'lg',
  url = '#!',
  className,
  handleRemove
}: AttachmentProps) => {
  return (
    <a href={url} className={cn('no-underline flex items-center', className)}>
      <div
        className={cn(
          'flex items-center justify-center rounded-lg flex-col me-2 relative',
          size === 'xl' ? 'size-12' : 'size-9.5',
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
              className="text-base mb-1"
            />
            <p className="mb-0 text-sm font-bold leading-none">
              {attachment.format}
            </p>
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
          className={cn('line-clamp-1', {
            'text-default': variant === 'primary',
            'text-white': variant === 'secondary'
          })}
        >
          {attachment.name}
        </h6>
        <div className="flex items-center leading-none">
          <p
            className={cn('text-sm mb-0 font-semibold whitespace-nowrap', {
              'text-subtle': variant === 'primary',
              'text-light': variant === 'secondary'
            })}
          >
            {attachment.size}
          </p>
          {attachment.date && (
            <>
              <FontAwesomeIcon
                icon={faCircle}
                className="text-soft text-sm"
                transform="shrink-12"
              />
              <p
                className={cn('text-sm mb-0 font-semibold whitespace-nowrap', {
                  'text-subtle': variant === 'primary',
                  'text-light': variant === 'secondary'
                })}
              >
                {attachment.date}
              </p>
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default AttachmentPreview;
