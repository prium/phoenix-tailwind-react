import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faFileWord,
  faFileExcel,
  faFileInvoice,
  faFileZipper,
  faFilePdf,
  faFileCsv
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { File } from 'data/file-manager';

const RenderFileIcon = ({ file }: { file: File }) => {
  switch (file.type) {
    case 'folder':
      return (
        <FontAwesomeIcon
          icon={faFolder}
          className={classNames('text-6xl', file.id === 3 ? 'text-info-light' : '')}
        />
      );
    case 'doc':
      return <FontAwesomeIcon icon={faFileWord} className="text-6xl mb-4" />;
    case 'xls':
    case 'xlx':
      return <FontAwesomeIcon icon={faFileExcel} className="text-6xl mb-4" />;
    case 'source-code':
    case 'html':
      return <FontAwesomeIcon icon={faFileInvoice} className="text-6xl mb-4" />;
    case 'zip':
      return <FontAwesomeIcon icon={faFileZipper} className="text-6xl mb-4" />;
    case 'pdf':
      return <FontAwesomeIcon icon={faFilePdf} className="text-6xl mb-4" />;
    case 'csv':
      return <FontAwesomeIcon icon={faFileCsv} className="text-6xl mb-4" />;
    case 'image':
      return (
        <img
          className="w-full h-full object-cover rounded-md mb-4"
          src={file.img}
          alt=""
          style={{ aspectRatio: '16/9' }}
        />
      );
    case 'video':
      return (
        <video
          className="block h-full w-full overflow-hidden rounded-md object-cover mb-4"
          muted
          controls
          style={{ aspectRatio: '16/9' }}
        >
          <source src={file.video} type="video/mp4" />
        </video>
      );
    default:
      return null;
  }
};

export default RenderFileIcon;
