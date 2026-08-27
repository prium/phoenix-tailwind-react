import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import EmojiPicker, { EmojiStyle, Theme} from 'emoji-picker-react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useState } from 'react';
import { useAppContext } from 'providers/AppProvider';

const emojiButtonCode = `
import Button from 'components/base/Button';

function EmojiButtonExample() {
  const [previewEmoji, setPreviewEmoji] = useState(false); 
  const [message, setMessage] = useState('');

  const { 
    config: { isDark }
  } = useAppContext();

  const addEmoji = (emojiData: EmojiClickData) => {
    console.log(message + emojiData.emoji)
    setMessage(message + emojiData.emoji);
    setPreviewEmoji(false);
  }

  return (
    <div className="position-relative">
      <Button
        variant="primary"
        className="fs-7"
        onClick={() => setPreviewEmoji(!previewEmoji)}
      >
        <FontAwesomeIcon icon={faFaceSmile} />
      </Button>
      {previewEmoji && (
        <EmojiPicker
          theme={isDark ? Theme.DARK : Theme.LIGHT}
          onEmojiClick={addEmoji}
          skinTonesDisabled
          previewConfig={{ showPreview: false }}
          emojiStyle={EmojiStyle.GOOGLE}
        />
      )}
    </div>
  )
}
`;

const EmojiButtonExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Emoji button"
        description={`${
          import.meta.env.VITE_TITLE
        }-React uses Picmo as a emoji picker component. It displays a panel of emojis where one can be selected. What is done with the selected emoji is up to you.`}
        link={{
          text: 'Documentation for Picmo',
          url: 'https://picmojs.com/docs/api/overview/'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body
            code={emojiButtonCode}
            scope={{
              EmojiPicker,
              Button,
              FontAwesomeIcon,
              useState,
              faFaceSmile,
              useAppContext,
              Theme,
              EmojiStyle
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default EmojiButtonExample;
