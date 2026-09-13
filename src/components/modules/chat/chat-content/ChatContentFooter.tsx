import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useChatContext } from 'providers/ChatProvider';
import AttachmentPreview from 'components/common/AttachmentPreview';
import { convertFileToAttachment } from 'helpers/utils';
import ImageAttachmentPreview from 'components/common/ImageAttachmentPreview';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import EmojiPickerButton from 'components/base/EmojiPickerButton';
import {
  faEllipsis,
  faImage,
  faMicrophone,
  faPaperPlane,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { SENT_MESSAGE } from 'reducers/ChatReducer';

/**
 * `.card-footer` of a chat thread — phoenix-tailwind
 * mixins/chat/ChatContent.pug. The message box is the gold contenteditable
 * `.chat-textarea` (its placeholder is painted by chat.css from the
 * `placeholder` attribute the gold JS sets).
 */
const ChatContentFooter = () => {
  const { currentConversation, chatDispatch } = useChatContext();
  const [messageText, setMessageText] = useState('');
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  const [imageAttachments, setImageAttachments] = useState<File[]>([]);
  const textareaRef = useRef<HTMLDivElement | null>(null);

  const addEmoji = (emoji: string) => {
    if (textareaRef.current) {
      textareaRef.current.textContent += emoji;
      setMessageText(textareaRef.current.textContent ?? '');
    }
  };

  const sentMessage = () => {
    if (
      currentConversation &&
      (messageText || fileAttachment || imageAttachments.length > 0)
    ) {
      chatDispatch({
        type: SENT_MESSAGE,
        payload: {
          conversationId: currentConversation.id,
          message: messageText,
          attachments: {
            images: imageAttachments.map(imageAttachment =>
              URL.createObjectURL(imageAttachment)
            ),
            file: fileAttachment
              ? convertFileToAttachment(fileAttachment)
              : undefined
          }
        }
      });
      setMessageText('');
      setImageAttachments([]);
      setFileAttachment(null);
      if (textareaRef.current) textareaRef.current.textContent = '';
    }
  };

  return (
    <div className="card-footer">
      <div
        ref={textareaRef}
        className="chat-textarea outline-none scrollbar mb-1"
        contentEditable
        suppressContentEditableWarning
        // chat.css paints the placeholder attr on the empty contenteditable
        {...{ placeholder: 'Type your message...' }}
        onInput={(e: FormEvent<HTMLDivElement>) =>
          setMessageText(e.currentTarget.textContent ?? '')
        }
      />

      {fileAttachment && (
        <div className="mb-2">
          <AttachmentPreview
            attachment={convertFileToAttachment(fileAttachment)}
            size="xl"
            handleRemove={() => setFileAttachment(null)}
          />
        </div>
      )}

      {imageAttachments.length > 0 && (
        <div className="mb-2 flex gap-2">
          {imageAttachments.map((attachment, index) => (
            <ImageAttachmentPreview
              key={index}
              image={URL.createObjectURL(attachment)}
              handleClose={() => {
                setImageAttachments(
                  imageAttachments.filter((_, i) => index !== i)
                );
              }}
            />
          ))}
        </div>
      )}

      <div className="flex justify-between items-end">
        <div className="flex">
          <EmojiPickerButton
            className="btn btn-link py-0 ps-0 pe-2 text-default text-md btn-emoji"
            aria-label="Add an emoji"
            onSelect={addEmoji}
          >
            <FontAwesomeIcon icon={faFaceSmile} />
          </EmojiPickerButton>
          <label
            className="btn btn-link py-0 px-2 text-default text-md"
            htmlFor="chatPhotos"
          >
            <FontAwesomeIcon icon={faImage} />
          </label>
          <input
            className="hidden"
            type="file"
            accept="image/*"
            id="chatPhotos"
            multiple
            onChange={({ target: { files } }: ChangeEvent<HTMLInputElement>) =>
              files && setImageAttachments(Array.from(files))
            }
          />
          <label
            className="btn btn-link py-0 px-2 text-default text-md"
            htmlFor="chatAttachment"
          >
            {' '}
            <FontAwesomeIcon icon={faPaperclip} />
          </label>
          <input
            className="hidden"
            type="file"
            id="chatAttachment"
            onChange={({
              target: { files }
            }: ChangeEvent<HTMLInputElement>) => {
              if (files) setFileAttachment(files[0]);
            }}
          />
          <Button variant="link" className="py-0 px-2 text-default text-md">
            <FontAwesomeIcon icon={faMicrophone} />
          </Button>
          <Button variant="link" className="py-0 px-2 text-default text-md">
            <FontAwesomeIcon icon={faEllipsis} />
          </Button>
        </div>
        <div>
          <Button variant="primary" className="text-sm" onClick={sentMessage}>
            Send
            <FontAwesomeIcon icon={faPaperPlane} className="ms-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatContentFooter;
