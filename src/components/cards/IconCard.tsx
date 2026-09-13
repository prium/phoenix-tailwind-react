import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconscout/react-unicons';
import { Input } from '@hummingbirdui/react';
import Unicon from 'components/base/Unicon';
import CopyToast from 'components/common/CopyToast';
import FeatherIcon from 'feather-icons-react';
import { PropsWithChildren, useEffect, useState } from 'react';

interface IconCardProps {
  icon: IconProp | Icon | string;
  name: string;
  iconFamily: 'font-awesome' | 'unicons' | 'feather';
}

/**
 * Gold `+IconCard` (`../phoenix-tailwind/src/pug/mixins/icons/IconCards.pug`):
 * the icon over a readonly input that copies on click. The gold copies the
 * font-icon class name; the React theme copies the JSX you would write instead.
 */
const IconCard = ({
  icon,
  name,
  iconFamily,
  children
}: PropsWithChildren<IconCardProps>) => {
  const [text, setText] = useState('');
  const [showCopyToast, setShowCopyToast] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(text);
    setShowCopyToast(true);
  };

  useEffect(() => {
    if (iconFamily === 'font-awesome') {
      setText(`<FontAwesomeIcon icon={${name}} />`);
    }
    if (iconFamily === 'unicons') {
      setText(`<Unicon icon={${name}} />`);
    }
    if (iconFamily === 'feather') {
      setText(`<FeatherIcon icon="${name}" />`);
    }
  }, []);

  return (
    <div className="border rounded-md p-4 mb-6 text-center bg-soft dark:bg-subtle shadow-sm">
      {iconFamily === 'font-awesome' && (
        <FontAwesomeIcon
          icon={icon as IconProp}
          className="text-default text-2xl"
        />
      )}
      {iconFamily === 'unicons' && (
        <Unicon
          fill="currentColor"
          icon={icon as Icon}
          style={{ height: 31.25 }}
          className="text-default text-2xl"
        />
      )}
      {iconFamily === 'feather' && (
        <FeatherIcon icon={icon as string} className="text-default" size={24} />
      )}
      {children}
      <Input
        size="sm"
        type="text"
        readOnly
        value={text}
        onClick={handleClick}
        className="mt-4 text-center w-full text-emphasis bg-muted dark:bg-soft"
      />

      {showCopyToast && (
        <CopyToast onDone={() => setShowCopyToast(false)}>
          <span className="font-black">
            Copied: <code className="text-soft">{text}</code>
          </span>
        </CopyToast>
      )}
    </div>
  );
};

export default IconCard;
