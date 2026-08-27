import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { MessageActionType } from 'data/chat';

interface MessageActionButtonsProps {
  actions: MessageActionType[];
  variant: 'sent' | 'received';
}

const MessageActionButtons = ({
  actions,
  variant
}: MessageActionButtonsProps) => {
  return (
    <>
      <div className="sm:hidden hover-actions self-center me-2 start-0">
        <div className="bg-soft rounded-full flex items-center border px-2 actions">
          {actions.map(action => (
            <Button key={action.label} className="btn p-2" type="button">
              <FontAwesomeIcon
                icon={action.icon as IconProp}
                className={classNames({
                  'text-primary': variant === 'sent'
                })}
              />
            </Button>
          ))}
        </div>
      </div>
      <div className="hidden sm:flex">
        <div className="hover-actions relative self-center">
          {actions.map(action => (
            <Button key={action.label} className="text-sm p-2" type="button">
              <FontAwesomeIcon
                icon={action.icon as IconProp}
                className={classNames({
                  'text-primary': variant === 'sent'
                })}
              />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MessageActionButtons;
