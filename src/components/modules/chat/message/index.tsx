import { cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import Lightbox from 'components/base/LightBox';
import { Message as MessageType, User, actions } from 'data/chat';
import useLightbox from 'hooks/useLightbox';
import MessageActionButtons from './MessageActionButtons';
import MessageAttachments from './MessageAttachments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import AttachmentPreview from 'components/common/AttachmentPreview';

interface MessageProps {
  message: MessageType;
  user: User;
  showActions?: boolean;
}

const Message = ({ message, user, showActions = true }: MessageProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    message.attachments?.images || []
  );

  return (
    <div className="flex chat-message">
      <div
        className={cn('flex flex-1', {
          'justify-end': message.type === 'sent'
        })}
      >
        <div
          className={cn('w-full', {
            '2xl:w-3/4': showActions
          })}
        >
          <div
            className={cn('flex hover-actions-trigger', {
              'flex-end-center': message.type === 'sent'
            })}
          >
            {message.type === 'received' && (
              <Avatar
                src={user.avatar}
                size="m"
                className="me-4 shrink-0"
              />
            )}

            {message.type === 'sent' && showActions && (
              <MessageActionButtons actions={actions} variant="sent" />
            )}

            <div
              className={cn('chat-message-content me-2', {
                received: message.type === 'received'
              })}
            >
              <div
                className={cn('mb-1', {
                  'sent-message-content ': message.type === 'sent',
                  'received-message-content border border-light':
                    message.type === 'received',
                  attachments:
                    Number(message.attachments?.images?.length) > 0 &&
                    !message.message
                })}
              >
                {message.message && <p className="mb-0">{message.message}</p>}
                {message.attachments?.images && (
                  <MessageAttachments
                    attachments={message.attachments.images}
                    openLightbox={openLightbox}
                  />
                )}
                {message.attachments?.file && (
                  <AttachmentPreview
                    attachment={message.attachments.file}
                    variant={
                      message.type === 'received' ? 'primary' : 'secondary'
                    }
                  />
                )}
              </div>
            </div>
            {message.type === 'received' && showActions && (
              <MessageActionButtons
                actions={actions.slice(1)}
                variant="received"
              />
            )}
          </div>
          <div
            className={cn('flex gap-1 text-sm', {
              'ms-24': message.type === 'received',
              'justify-end': message.type === 'sent'
            })}
          >
            <p className="mb-0 text-subtle/85 font-semibold">
              {message.time}
            </p>
            {message.readAt && (
              <FontAwesomeIcon icon={faCheckDouble} className="text-success" />
            )}
          </div>
          {message.attachments?.images && <Lightbox {...lightboxProps} />}
        </div>
      </div>
    </div>
  );
};

export default Message;
