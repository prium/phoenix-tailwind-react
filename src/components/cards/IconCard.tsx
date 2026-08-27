import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconscout/react-unicons';
import Unicon from 'components/base/Unicon';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Form, Toast } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

interface IconCardProps {
  icon: IconProp | Icon | string;
  name: string;
  iconFamily: 'font-awesome' | 'unicons' | 'feather';
}

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
      setText(`<FeatherIcon icon='${name}' />`);
    }
  }, []);

  return (
    <div className="border rounded-md p-4 mb-6 text-center bg-soft dark__bg-gray-1000 shadow-sm">
      {iconFamily === 'font-awesome' && (
        <FontAwesomeIcon icon={icon as IconProp} className="text-default text-2xl" />
      )}
      {iconFamily === 'unicons' && (
        <Unicon fill="currentColor" icon={icon as Icon} style={{ height: 31.25}} className="text-default text-2xl" />
      )}
      {iconFamily === 'feather' && (
        <FeatherIcon icon={icon} className="text-default" size={16} />
      )}
      {children}
      <Form.Control
        onClick={handleClick}
        type="text"
        readOnly
        value={text}
        className="text-center text-emphasis bg-muted dark__bg-gray-1100 mt-4"
      />

      <Toast
        show={showCopyToast}
        onClose={() => setShowCopyToast(false)}
        className="items-center bg-dark border-0 bottom-0 end-0 mb-4 me-4 fixed text-white z-5"
        data-bs-theme="light"
        delay={3000}
        autohide
      >
        <div className="flex">
          <Toast.Body className="P-3">
            <span className="font-black">
              Copied: <code className="text-soft">{text}</code>
            </span>
          </Toast.Body>
        </div>
      </Toast>
    </div>
  );
};

export default IconCard;
