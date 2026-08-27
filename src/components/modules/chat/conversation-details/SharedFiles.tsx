import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import AttachmentPreview from 'components/common/AttachmentPreview';
import { files } from 'data/chat';

const SharedFiles = () => {
  return (
    <div className="flex gap-4 my-4">
      <FontAwesomeIcon icon={faFolder} className="text-md" />
      <div className="flex-1">
        <h6 className="font-semibold mb-2">Shared Files</h6>
        <div className="mb-2">
          {files.map((file, index) => (
            <div
              key={index}
              className={classNames(
                'border-b flex items-center justify-between py-6 gap-2',
                {
                  'border-t': index === 0
                }
              )}
            >
              <AttachmentPreview attachment={file} />

              <button className="btn p-0">
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="fs-0 text-subtle"
                />
              </button>
            </div>
          ))}
        </div>
        <Button
          variant="link"
          className="p-0 text-sm"
          endIcon={<FontAwesomeIcon icon={faChevronDown} />}
        >
          See 19 more
        </Button>
      </div>
    </div>
  );
};

export default SharedFiles;
