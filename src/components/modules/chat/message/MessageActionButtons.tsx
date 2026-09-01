import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { messageActions } from 'data/chat';

interface MessageActionButtonsProps {
  variant: 'sent' | 'received';
}

/**
 * Hover actions of a chat message — `+SentMessage` / `+ReceivedMessage`
 * in phoenix-tailwind mixins/chat/ChatContent.pug. Sent messages put the
 * mobile pill before the desktop row; received messages the other way round,
 * and only sent icons are tinted on desktop.
 */
const MessageActionButtons = ({ variant }: MessageActionButtonsProps) => {
  const { desktop, mobile } = messageActions[variant];

  const mobilePill = (
    <div
      className={cn(
        'sm:hidden! hover-actions self-center me-2',
        variant === 'sent' ? 'start-0' : 'end-0'
      )}
    >
      <div className="bg-soft rounded-full flex items-center border px-2 actions">
        {mobile.map(action => (
          <Button key={action.label} className="p-2" type="button">
            <FontAwesomeIcon icon={action.icon} className="text-primary" />
          </Button>
        ))}
      </div>
    </div>
  );

  const desktopRow = (
    <div className="hidden! sm:flex!">
      <div
        className={cn(
          'hover-actions self-center',
          variant === 'sent' ? 'relative!' : 'relative me-2'
        )}
      >
        {desktop.map(action => (
          <Button key={action.label} className="p-2 text-sm" type="button">
            <FontAwesomeIcon
              icon={action.icon}
              className={cn({ 'text-primary': variant === 'sent' })}
            />
          </Button>
        ))}
      </div>
    </div>
  );

  return variant === 'sent' ? (
    <>
      {mobilePill}
      {desktopRow}
    </>
  ) : (
    <>
      {desktopRow}
      {mobilePill}
    </>
  );
};

export default MessageActionButtons;
