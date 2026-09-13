import {
  faChevronDown,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, cn } from '@hummingbirdui/react';
import Lightbox from 'components/base/Lightbox';
import { RecentFiles, recentFiles } from 'data/file-manager';
import useLightbox from 'hooks/useLightbox';
import { useEffect, useRef, useState } from 'react';
import FilesDropdown from './FilesDropdown';

const ITEM_CLASS = 'dropdown-item font-semibold text-start no-underline!';

/** Gold `+RecentFile` in mixins/file-manager/RecentFiles.pug. */
const RecentFileCard = ({
  file,
  openLightbox
}: {
  file: RecentFiles;
  openLightbox: (index: number) => void;
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isVideo = file.type === 'video';

  useEffect(() => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playing]);

  return (
    <div className="sm:col-6 xl:col-6 2xl:col-3">
      <div
        className="relative"
        {...(isVideo && {
          onMouseEnter: () => setPlaying(true),
          onMouseLeave: () => setPlaying(false)
        })}
      >
        <div className="img-zoom-hover mask-none overflow-hidden border rounded-lg">
          <div className="relative">
            <div className="mask-image-recent-file overflow-hidden">
              {(file.type === 'image' || file.type === 'pdf') && (
                <div className="aspect-video">
                  <img
                    className="size-full object-cover"
                    src={file.img}
                    alt=""
                  />
                </div>
              )}
              {isVideo && (
                <div className="video-container rounded-lg h-full aspect-video">
                  <video
                    ref={videoRef}
                    className="video block h-full w-full object-cover"
                    muted
                    poster={file.thumb}
                  >
                    <source src={file.video} type="video/mp4" />
                  </video>
                </div>
              )}
              <span
                className={cn(
                  'badge text-sm absolute top-0 start-0 mt-4 ms-4',
                  file.actionType === 'Edited'
                    ? 'badge-phoenix-warning'
                    : 'badge-phoenix-info'
                )}
              >
                {file.actionType} {file.createdAt}
              </span>
            </div>
            {isVideo && (
              <button
                type="button"
                data-hb-theme="light"
                className="btn p-0 circle-icon-item-md absolute top-1/2 left-1/2 -translate-1/2 bg-soft/50 z-5"
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
                    className="text-md text-muted"
                    transform="down-1"
                  />
                </span>
              </button>
            )}
          </div>
          <div className="bg-default p-4 pe-2 flex justify-between items-start rounded-b-lg">
            <div className="w-3/4">
              <a
                href="#!"
                className="text-highlight font-bold mb-2 stretched-link block truncate"
                data-gallery="recent-file"
                onClick={event => {
                  event.preventDefault();
                  openLightbox(file.fileNo);
                }}
              >
                {file.name}
              </a>
              <h6 className="mb-0 font-semibold text-subtle">{file.size}</h6>
            </div>
            <div>
              <FilesDropdown
                triggerClassName="btn-square size-7.5 relative z-2 -mt-1"
                iconTransform="shrink-2"
                itemClassName={ITEM_CLASS}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Gold `+RecentFiles` — 4 cards plus a `#collapseRecentFiles` "view more" row. */
const RecentFilesCard = () => {
  const [open, setOpen] = useState(false);
  const sources = recentFiles.map(file => {
    if (file.type === 'pdf' && file.pdf) {
      return (
        <iframe
          key={file.name}
          src={file.pdf}
          title="PDF Viewer"
          width="1900px"
          height="1920px"
        />
      );
    }
    if (file.type === 'video' && file.video) return file.video;
    if (file.type === 'image' && file.img) return file.img;
    return '';
  });
  const { lightboxProps, openLightbox } = useLightbox(sources);

  return (
    <Card className="mt-6">
      <Lightbox {...lightboxProps} />
      <Card.Body className="pb-8">
        <h4 className="mb-4">Recent Files</h4>
        <div className="row g-4">
          {recentFiles.slice(0, 4).map((file, index) => (
            <RecentFileCard
              key={index}
              file={file}
              openLightbox={openLightbox}
            />
          ))}
        </div>
        <div
          className={cn('collapse', { show: open })}
          id="collapseRecentFiles"
        >
          <div className="mt-4">
            <div className="row g-4">
              {recentFiles.slice(4).map((file, index) => (
                <RecentFileCard
                  key={index}
                  file={file}
                  openLightbox={openLightbox}
                />
              ))}
            </div>
          </div>
        </div>
        <a
          className="-bottom-2.75 btn collapse-indicator bg-soft text-sm py-1 border border-default rounded-sm px-4 absolute left-1/2 -translate-x-1/2"
          data-bs-toggle="collapse"
          href="#collapseRecentFiles"
          role="button"
          aria-expanded={open}
          aria-controls="collapseRecentFiles"
          onClick={event => {
            event.preventDefault();
            setOpen(prev => !prev);
          }}
        >
          <span className="collapse-show">VIEW MORE</span>
          <span className="collapse-hide">VIEW LESS</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ms-2 text-sm toggle-icon"
          />
        </a>
      </Card.Body>
    </Card>
  );
};

export default RecentFilesCard;
