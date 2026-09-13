import { faEllipsisH, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import type { AlbumItem, AlbumMedia } from 'data/gallery';
import { useRef } from 'react';
import { Link } from 'react-router';
import PackeryGrid from './PackeryGrid';

const AlbumItems = ({ albumItems }: { albumItems: AlbumItem[] }) => (
  <PackeryGrid className="row g-6" id="gallery-album">
    {albumItems.map(album => (
      <div
        key={album.id}
        className={cn(album.category, 'sm:col-6 md:col-4 xl:col-3')}
      >
        <div className="album-item relative overflow-hidden">
          <Link to="/apps/gallery/gallery-grid" className="no-underline">
            <div className="photo-stack">
              {album.media.map(item => (
                <Media item={item} key={item.id} />
              ))}
            </div>
            <h4 className="mt-8 title">{album.title}</h4>
            <p className="mb-0 text-md text-default">{album.count} Items</p>
          </Link>
          <div className="dropdown absolute top-0 end-0 mt-4 me-4 z-5">
            <Dropdown>
              <Dropdown.Trigger asChild>
                <button
                  className="btn btn-sm px-4 dropdown-toggle dropdown-caret-none"
                  type="button"
                >
                  <FontAwesomeIcon icon={faEllipsisH} />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="end" className="py-2">
                <Dropdown.Item asChild>
                  <a href="#!">Edit</a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!" className="text-danger">
                    Delete
                  </a>
                </Dropdown.Item>
                <Dropdown.Item asChild>
                  <a href="#!">Download</a>
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </div>
    ))}
  </PackeryGrid>
);

export default AlbumItems;

const Media = ({ item }: { item: AlbumMedia }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className={cn('rounded-md overflow-hidden', item.className)}>
      {item.type === 'video' ? (
        <div className="video-container">
          <video
            muted
            ref={videoRef}
            onMouseEnter={() => videoRef.current?.play()}
            onMouseOut={() => videoRef.current?.pause()}
            className="video block h-full w-full overflow-hidden rounded-md"
            poster={item.poster}
          >
            <source src={item.src} type="video/mp4" />
          </video>
          <div className="circle-icon-item absolute top-1/2 left-1/2 -translate-1/2 bg-soft/50 rounded-full">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-default text-md sm:text-base"
            />
          </div>
        </div>
      ) : (
        <img className="w-full object-cover" src={item.src} alt="" />
      )}
    </div>
  );
};
