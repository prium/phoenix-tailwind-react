import { useState, useRef } from 'react';
import { AlbumItem, MediaItem } from 'data/gallery';
import { Dropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Masonry } from 'react-plock';

const navItems = [
  {
    eventKey: '1',
    label: 'All',
    className: 'text-start pe-3'
  },
  {
    eventKey: '2',
    label: 'Image',
    className: 'px-3'
  },
  {
    eventKey: '3',
    label: 'Video',
    className: 'px-3'
  }
];

const AlbumItems = ({ albumItems }: { albumItems: AlbumItem[] }) => {
  const [selectedCategory, setSelectedCategory] = useState('1');

  const filteredImages =
    selectedCategory === '1'
      ? albumItems
      : albumItems.filter(item => item.category.includes(selectedCategory));

  const handleNavItemSelect = (category: string | null) => {
    setSelectedCategory(category || '1');
  };

  return (
    <>
      <Nav
        className="my-6 gap-0 w-max-content nav-underline"
        defaultActiveKey={navItems[0].eventKey}
        onSelect={handleNavItemSelect}
      >
        {navItems.map(navItem => (
          <Nav.Item key={navItem.eventKey}>
            <Nav.Link
              className={classNames('cursor-pointer', navItem.className)}
              eventKey={navItem.eventKey}
            >
              {navItem.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Masonry
        items={filteredImages}
        config={{
          columns: [1, 2, 3, 4],
          gap: [24, 24, 24, 24],
          media: [575, 767, 1199, 1200],
          useBalancedLayout: true,
        }}
        render={album => {
          return (
            <div className="album-item relative overflow-hidden">
              <Link
                to="/apps/gallery/gallery-grid"
                className="no-underline"
              >
                <div className="photo-stack">
                  {album.media.map(item => (
                    <Media item={item} key={item.id} />
                  ))}
                </div>
                <h4 className="mt-8 title">{album.title}</h4>
                <p className="mb-0 text-md text-default">{album.count} items</p>
              </Link>
              <Dropdown className="absolute top-0 end-0 mt-4 me-4 z-5">
                <Dropdown.Toggle
                  variant=""
                  size="sm"
                  className="dropdown-caret-none px-4"
                >
                  <FontAwesomeIcon icon={faEllipsisH} />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="py-2">
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                  <Dropdown.Item>Download</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          );
        }}
      />
    </>
  );
};

export default AlbumItems;

interface MediaProps {
  item: MediaItem;
}

const Media = ({ item }: MediaProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseOut = () => {
    videoRef.current?.pause();
  };
  return (
    <div
      key={item.id}
      className={classNames('md:rounded-md overflow-hidden', item.className)}
    >
      {item.type === 'video' ? (
        <div className="video-container">
          <video
            muted
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            className="video block h-full w-full overflow-hidden rounded-md"
            poster={item.poster}
          >
            <source src={item.src} type="video/mp4" />
          </video>
          <div className="video-icon border-0 absolute top-1/2 start-1/2 top-1/2 left-1/2 -translate-1/2 bg-soft rounded-full bg-opacity-50">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-md sm:text-base text-default"
            />
          </div>
        </div>
      ) : (
        <img src={item.src} className="w-full object-cover" />
      )}
    </div>
  );
};
