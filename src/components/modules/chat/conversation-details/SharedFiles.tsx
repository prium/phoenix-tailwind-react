import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AttachmentPreview from 'components/common/AttachmentPreview';
import { files } from 'data/chat';

/** "Shared Files" block — mixins/chat/ChatThreadDetails.pug. */
const SharedFiles = () => {
  return (
    <div className="mb-8">
      <div className="flex">
        <FontAwesomeIcon icon={faFolder} className="me-4 text-md" />
        <div className="flex-1">
          <h6 className="font-semibold border-b border-subtle pb-2 mb-0">
            Shared Files
          </h6>
          <div className="mb-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="border-b border-subtle flex items-center justify-between"
              >
                <AttachmentPreview attachment={file} className="py-4" />
                <button className="btn p-0" type="button">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleDown}
                    className="text-base text-subtle"
                  />
                </button>
              </div>
            ))}
          </div>
          <a href="#!" className="btn btn-link text-sm p-0">
            See 19 more{' '}
            <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SharedFiles;
