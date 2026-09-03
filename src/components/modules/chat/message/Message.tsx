import { cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import Lightbox from 'components/base/Lightbox';
import { Message as MessageType, User } from 'data/chat';
import useLightbox from 'hooks/useLightbox';
import MessageActionButtons from './MessageActionButtons';
import MessageAttachments from './MessageAttachments';
import AttachmentPreview from 'components/common/AttachmentPreview';

interface MessageProps {
  message: MessageType;
  user: User;
  showActions?: boolean;
}

/**
 * `+SentMessage` / `+ReceivedMessage` in phoenix-tailwind
 * mixins/chat/ChatContent.pug.
 */
const Message = ({ message, user, showActions = true }: MessageProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    message.attachments?.images || []
  );

  const images = message.attachments?.images;
  const sent = message.type === 'sent';

  const content = (
    <div
      className={cn('chat-message-content me-2', {
        received: !sent,
        'w-min': sent && images?.length === 1
      })}
    >
      <div
        className={cn(
          'mb-1',
          sent ? 'sent-message-content' : 'received-message-content',
          message.message
            ? sent
              ? 'bg-blue-500 rounded-md p-4 text-white'
              : 'border rounded-md p-4'
            : 'gallery'
        )}
        {...(sent ? { 'data-hb-theme': 'light' } : {})}
      >
        <p className="mb-0">{message.message}</p>
        {images && (
          <MessageAttachments
            attachments={images}
            openLightbox={openLightbox}
          />
        )}
        {message.attachments?.file && (
          <AttachmentPreview
            attachment={message.attachments.file}
            variant={sent ? 'secondary' : 'primary'}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex chat-message">
      <div className={cn('flex mb-2 flex-1', { 'justify-end': sent })}>
        <div className={cn('w-full', { '2xl:w-3/4': showActions })}>
          <div
            className={cn('flex hover-actions-trigger', {
              'flex-end-center': sent
            })}
          >
            {sent ? (
              <>
                {showActions && <MessageActionButtons variant="sent" />}
                {content}
              </>
            ) : (
              <>
                <Avatar
                  src={user.avatar}
                  size="m"
                  className="me-4 shrink-0"
                  placeholder={user.placeholder}
                />
                {content}
                {showActions && <MessageActionButtons variant="received" />}
              </>
            )}
          </div>
          {sent ? (
            <div className="text-end">
              <p className="mb-0 text-sm text-subtle/85 font-semibold">
                {message.time}
              </p>
            </div>
          ) : (
            <p className="mb-0 text-sm text-subtle/85 font-semibold ms-12">
              {message.time}
            </p>
          )}
          {images && <Lightbox {...lightboxProps} />}
        </div>
      </div>
    </div>
  );
};

export default Message;
