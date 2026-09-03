import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Lightbox from 'components/base/Lightbox';
import { File } from 'data/file-manager';
import useLightbox from 'hooks/useLightbox';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import FilesDropdown from '../FilesDropdown';
import FileIcon from './FileIcon';

const ITEM_CLASS = 'dropdown-item font-semibold text-start no-underline!';

/** Gold `+MyFile` in mixins/file-manager/MyFile.pug. */
const FileBox = ({ file }: { file: File }) => {
  const { checkedFileIds, setCheckedFileIds } = useFileManagerContext();
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVideo = file.type === 'video';
  const fileId = String(file.id);

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
    if (isVideo && file.video) return file.video;
    if (file.type === 'image' && file.img) return file.img;
    return '';
  };
  const { lightboxProps, openLightbox } = useLightbox([attachment()]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playing]);

  const handleClick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest('.dropdown')) return;
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      setCheckedFileIds(prev =>
        prev.includes(file.id)
          ? prev.filter(id => id !== file.id)
          : [...prev, file.id]
      );
    }, 200);
  };

  const handleDoubleClick = () => {
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    if (['image', 'video', 'pdf'].includes(file.type)) {
      openLightbox(1);
      setCheckedFileIds(prev =>
        prev.includes(file.id) ? prev : [...prev, file.id]
      );
    }
  };

  return (
    <>
      <Lightbox {...lightboxProps} />
      <div
        className="text-center"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        {...(isVideo && {
          'data-play-on-container-hover': true,
          onMouseEnter: () => setPlaying(true),
          onMouseLeave: () => setPlaying(false)
        })}
      >
        <div className="file-box-wrapper img-zoom-hover">
          <input
            className="form-check-input form-check-input-transparent absolute top-0 start-0 mt-4 ms-4 z-1"
            type="checkbox"
            name="fileManagerFiles"
            id={fileId}
            data-bulk-select-row
            data-file={fileId}
            checked={checkedFileIds.includes(file.id)}
            onChange={() => undefined}
          />
          <label
            className="stretched-link absolute top-0 start-0 w-full h-full"
            htmlFor={fileId}
            data-file={fileId}
            data-file-thumbnail={
              isVideo
                ? file.video
                : file.type === 'image'
                  ? file.img
                  : undefined
            }
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
              {isVideo && (
                <div className="video-container h-full">
                  <video
                    ref={videoRef}
                    className="video block h-full w-full overflow-hidden object-cover"
                    muted
                    poster={file.thumb}
                  >
                    <source src={file.video} type="video/mp4" />
                  </video>
                </div>
              )}
              <FileIcon file={file} className="text-4xl" />
            </div>
            {isVideo && (
              <button
                type="button"
                data-hb-theme="light"
                className="btn p-0 circle-icon-item-md bg-soft/50 absolute top-1/2 left-1/2 -translate-1/2 z-3"
                onClick={() => setPlaying(prev => !prev)}
              >
                <span
                  className={cn('pointer-events-none', {
                    'play-icon': !playing,
                    'pause-icon': playing
                  })}
                >
                  <FontAwesomeIcon
                    icon={playing ? faPause : faPlay}
                    className="text-muted text-md"
                    transform="down-1"
                  />
                </span>
              </button>
            )}
          </div>
          <FilesDropdown
            className="dropdown leading-none absolute top-0 end-0 mt-2 me-2"
            triggerClassName="btn-square size-7.5 text-default relative z-1"
            iconTransform="shrink-2"
            itemClassName={ITEM_CLASS}
          />
          <a
            href="#!"
            className="block font-bold text-highlight mt-2 text-nowrap truncate text-base"
          >
            {file.name}
          </a>
          <h6 className="mb-0 font-semibold text-subtle text-sm sm:text-md">
            {file.size || file.itemCount}
          </h6>
        </div>
      </div>
    </>
  );
};

export default FileBox;
