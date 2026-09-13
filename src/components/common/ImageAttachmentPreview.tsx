import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '@hummingbirdui/react';

const ImageAttachmentPreview = ({
  image,
  previewHight = 140,
  previewWidth = 200,
  handleClose
}: {
  image: string;
  handleClose: () => void;
  previewHight?: number;
  previewWidth?: number;
}) => {
  return (
    <div
      className="rounded-md overflow-hidden mb-2 relative"
      style={{ height: previewHight, width: previewWidth }}
    >
      <img src={image} className="w-full h-full object-cover" alt="" />
      <div className="absolute end-0 top-0 mt-2 me-2">
        <Dropdown>
          <Dropdown.Trigger asChild>
            <button
              type="button"
              className="btn text-default bg-default dropdown-caret-none px-4 py-2"
            >
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
          </Dropdown.Trigger>
          <Dropdown.Content className="py-1" align="end">
            <Dropdown.Item onClick={handleClose}>Remove</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  );
};

export default ImageAttachmentPreview;
