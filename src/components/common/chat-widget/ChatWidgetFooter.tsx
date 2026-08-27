import { useChatWidgetContext } from 'providers/ChatWidgetProvider';
import { ChangeEvent, FormEvent, useState } from 'react';
import ImageAttachmentPreview from 'components/common/ImageAttachmentPreview';
import { Input, cn } from '@hummingbirdui/react';
import { convertFileToAttachment } from 'helpers/utils';
import AttachmentPreview from 'components/common/AttachmentPreview';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faPaperPlane,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';

/** `.card-footer` of `+SupportChat` in phoenix-tailwind SupportChat.pug */
const ChatWidgetFooter = () => {
  const [messageText, setMessageText] = useState('');
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  const [imageAttachments, setImageAttachments] = useState<File[]>([]);

  const { sentMessage } = useChatWidgetContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageText || fileAttachment || imageAttachments.length > 0) {
      sentMessage({
        message: messageText,
        attachments: {
          images: imageAttachments.map(imageAttachment =>
            URL.createObjectURL(imageAttachment)
          ),
          file: fileAttachment
            ? convertFileToAttachment(fileAttachment)
            : undefined
        }
      });
      setMessageText('');
      setImageAttachments([]);
      setFileAttachment(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <div className={cn('flex gap-2 mb-2')}>
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
      <div className="flex items-center gap-2">
        <div className="flex items-center flex-1 gap-4 border border-light rounded-full px-6">
          <Input
            className="outline-none border-0 flex-1 text-md px-0"
            type="text"
            placeholder="Write message"
            value={messageText}
            onChange={e => setMessageText(e.target.value)}
          />
          <label
            className="btn btn-link flex p-0 text-soft text-md border-0"
            htmlFor="widgetImages"
          >
            <FontAwesomeIcon icon={faImage} />
          </label>
          <input
            className="hidden"
            type="file"
            accept="image/*"
            id="widgetImages"
            multiple
            onChange={({ target: { files } }: ChangeEvent<HTMLInputElement>) =>
              files && setImageAttachments(Array.from(files))
            }
          />
          <label
            className="btn btn-link flex p-0 text-soft text-md border-0"
            htmlFor="widgetAttachments"
          >
            <FontAwesomeIcon icon={faPaperclip} />
          </label>
          <input
            className="hidden"
            type="file"
            id="widgetAttachments"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar"
            onChange={({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
              files && setFileAttachment(files[0]);
            }}
          />
        </div>
        <Button className="p-0 border-0 send-btn" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} className="text-md" />
        </Button>
      </div>
    </form>
  );
};

export default ChatWidgetFooter;
