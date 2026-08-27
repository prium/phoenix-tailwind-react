import Avatar from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { suggestions } from 'data/chat';
import Button from 'components/base/Button';
import { useChatWidgetContext } from 'providers/ChatWidgetProvider';
import Message from 'components/modules/chat/message';
import { useEffect, useRef } from 'react';

const ChatWidgetConversation = () => {
  const { conversation, sentMessage } = useChatWidgetContext();
  const messageEndRef = useRef<null | HTMLSpanElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [conversation]);
  return (
    <>
      <div className="text-center mt-auto">
        <Avatar
          src={conversation.user.avatar}
          size="3xl"
          status="online"
          className="mx-auto"
        />
        <h5 className="mt-2 mb-4">Eric</h5>
        <p className="text-center text-emphasis mb-0">
          Ask us anything – we’ll get back to you here or by email within 24
          hours.
        </p>
      </div>
      {!conversation.messages.length && (
        <div className="text-end mt-10">
          {suggestions.map((message, index) => (
            <Button
              key={message}
              onClick={() => sentMessage({ message })}
              className={classNames(
                'inline-flex items-center text-emphasis hover:bg-default rounded-full border border-primary py-2 ps-10 pe-6 leading-base',
                { 'mb-2': index !== suggestions.length - 1 }
              )}
            >
              <p className="mb-0 font-semibold text-md">{message}</p>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-primary text-md ms-4"
              />
            </Button>
          ))}
        </div>
      )}
      {conversation.messages.length > 0 && (
        <>
          <hr className="my-6 border-dashed border-t" />
          <div className="flex flex-col gap-2">
            {conversation.messages.map(message => (
              <Message
                message={message}
                user={conversation.user}
                key={message.id}
                showActions={false}
              />
            ))}
            <span ref={messageEndRef} />
          </div>
        </>
      )}
    </>
  );
};

export default ChatWidgetConversation;
