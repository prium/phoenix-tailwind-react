import Avatar from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@hummingbirdui/react';
import { suggestions } from 'data/chat';
import Button from 'components/base/Button';
import { useChatWidgetContext } from 'providers/ChatWidgetProvider';
import Message from 'components/modules/chat/message';
import { useEffect, useRef } from 'react';

/** `+SupportContent` in phoenix-tailwind SupportChat.pug (column-reverse layout) */
const ChatWidgetConversation = () => {
  const { conversation, sentMessage } = useChatWidgetContext();
  const messageEndRef = useRef<null | HTMLSpanElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [conversation]);

  return (
    <div className="flex flex-col-reverse scrollbar h-full p-4">
      {!conversation.messages.length ? (
        <div className="text-end mt-10">
          {suggestions.map((message, index) => (
            <Button
              key={message}
              onClick={() => sentMessage({ message })}
              className={cn(
                'inline-flex items-center no-underline text-emphasis hover:bg-default rounded-full border border-primary py-2 ps-6 pe-4',
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
      ) : (
        <div>
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
        </div>
      )}
      <div className="text-center mt-auto">
        <Avatar
          src={conversation.user.avatar}
          size="3xl"
          status="online"
          className="mx-auto"
          imageClassName="border border-3 border-light-subtle"
        />
        <h5 className="mt-2 mb-4">Eric</h5>
        <p className="text-center text-emphasis mb-0">
          Ask us anything – we’ll get back to you here or by email within 24
          hours.
        </p>
      </div>
    </div>
  );
};

export default ChatWidgetConversation;
