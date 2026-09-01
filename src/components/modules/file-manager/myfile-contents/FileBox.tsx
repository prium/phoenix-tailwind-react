import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faFileWord,
  faFileExcel,
  faFileInvoice,
  faFileZipper,
  faFilePdf,
  faFileCsv,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { Form } from 'react-bootstrap';
import FilesDropdown from '../FilesDropdown';
import classNames from 'classnames';
import { File } from 'data/file-manager';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import Lightbox from 'components/base/LightBox';
import useLightbox from 'hooks/useLightbox';

const RenderFileIcon = ({ file }: { file: File }) => {
  switch (file.type) {
    case 'folder':
      return (
        <FontAwesomeIcon
          icon={faFolder}
          className={classNames(
            'text-4xl',
            file.id === 3 ? 'text-info-light' : 'text-subtle'
          )}
        />
      );
    case 'doc':
      return (
        <FontAwesomeIcon
          icon={faFileWord}
          className="text-4xl text-subtle"
        />
      );
    case 'xls':
    case 'xlx':
      return (
        <FontAwesomeIcon
          icon={faFileExcel}
          className="text-4xl text-subtle"
        />
      );
    case 'source-code':
    case 'html':
      return (
        <FontAwesomeIcon
          icon={faFileInvoice}
          className="text-4xl text-subtle"
        />
      );
    case 'zip':
      return (
        <FontAwesomeIcon
          icon={faFileZipper}
          className="text-4xl text-subtle"
        />
      );
    case 'pdf':
      return (
        <FontAwesomeIcon icon={faFilePdf} className="text-4xl text-subtle" />
      );
    case 'csv':
      return (
        <FontAwesomeIcon icon={faFileCsv} className="text-4xl text-subtle" />
      );
    default:
      return null;
  }
};

const FileBox = ({ file }: { file: File }) => {
  const { checkedFileIds, setCheckedFileIds } = useFileManagerContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const attachment = () => {
    if (file.type === 'pdf' && file.pdf) {
      return (
        <iframe
          src={file.pdf}
          title="PDF Viewer"
          width="1900px"
          height="1920px"
        />
      );
    }
    if (file.type === 'video' && file.video) {
      return file.video;
    }
    if (file.type === 'image' && file.img) {
      return file.img;
    }
    return '';
  };
  const { lightboxProps, openLightbox } = useLightbox([attachment()]);

  const handlePlayPause = () => setIsPlaying(prev => !prev);

  const handleSingleClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).closest('.dropdown')) return;

    clickTimeoutRef.current && clearTimeout(clickTimeoutRef.current);

    clickTimeoutRef.current = setTimeout(() => {
      setCheckedFileIds(prevFilesId =>
        prevFilesId.includes(file.id)
          ? prevFilesId.filter(id => id !== file.id)
          : [...prevFilesId, file.id]
      );
    }, 200);
  };

  const handleDoubleClick = () => {
    // Prevent single-click action from executing
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

    if (['image', 'video', 'pdf'].includes(file.type)) {
      openLightbox(1);
      setCheckedFileIds(prevFilesId =>
        prevFilesId.includes(file.id) ? prevFilesId : [...prevFilesId, file.id]
      );
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <Lightbox {...lightboxProps} />
      <div
        className="text-center"
        onClick={handleSingleClick}
        onDoubleClick={() => handleDoubleClick()}
        {...(file.type === 'video' && {
          onMouseEnter: () => setIsPlaying(true),
          onMouseLeave: () => setIsPlaying(false)
        })}
      >
        <div className="file-box-wrapper img-zoom-hover">
          <Form.Check.Input
            type="checkbox"
            className="form-check-input-transparent absolute top-0 start-0 mt-4 ms-4 z-1"
            name={file.id.toString()}
            id={file.id.toString()}
            checked={checkedFileIds.includes(file.id)}
            onChange={() => {}} // Dummy handler to suppress the warning
          />
          <Form.Check.Label
            htmlFor={file.id.toString()}
            className="stretched-link absolute top-0 start-0 w-full h-full"
          />
          <div className="relative h-full">
            <div className="file-box overflow-hidden">
              {file.type === 'image' && (
                <img
                  src={file.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
              {file.type === 'video' && (
                <div className="video-container h-full">
                  <video
                    className="video block h-full w-full overflow-hidden object-cover"
                    muted
                    ref={videoRef}
                    src={file.video}
                  />
                </div>
              )}
              <RenderFileIcon file={file} />
            </div>
            {file.type === 'video' && (
              <Button
                data-bs-theme="light"
                className="p-0 circle-icon-item-md absolute top-1/2 start-1/2 top-1/2 left-1/2 -translate-1/2 bg-soft bg-opacity-50 z-1"
                onClick={handlePlayPause}
              >
                <span className="play-icon pointer-events-none">
                  {!isPlaying ? (
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-muted text-md"
                      transform="down-1"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPause}
                      className="text-muted text-md"
                      transform="down-1"
                    />
                  )}
                </span>
              </Button>
            )}
          </div>
          <FilesDropdown className="leading-none absolute top-0 end-0 mt-2 me-2" />
          <Link
            to="#!"
            className="block font-bold text-highlight mt-2 whitespace-nowrap text-truncate text-md sm:text-base"
          >
            {file.name}
          </Link>
          <h6 className="mb-0 font-semibold text-subtle text-sm sm:text-md">
            {file.size || file.itemCount}
          </h6>
        </div>
      </div>
    </>
  );
};

export default FileBox;
