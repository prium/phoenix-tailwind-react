import bgLeft30 from 'assets/img/bg/bg-left-30.png';
import bgRight30 from 'assets/img/bg/bg-right-30.png';
import IsotopeNav from 'components/navs/IsotopeNav';
import { useState } from 'react';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { GalleryInterface, galleryItems } from 'data/travel-agency/landing';

const navItems = [
  {
    eventKey: 'tokyo',
    label: 'Tokyo'
  },
  {
    eventKey: 'bali',
    label: 'Bali'
  },
  {
    eventKey: 'sydney',
    label: 'Sydney'
  },
  {
    eventKey: 'paris',
    label: 'Paris'
  }
];

const GalleryItem = ({ galleryItem }: { galleryItem: GalleryInterface }) => {
  return (
    // gold: phoenix isotopeInit() reveals `.isotope-item` (visibility guard in
    // plugins/isotope.css) once imagesLoaded fires — mirror its inline style
    <Col
      xs={12}
      className="isotope-item w-full"
      style={{ visibility: 'visible' }}
    >
      <div className="img-zoom-hover-lg rounded-md relative overflow-hidden">
        <Link to="#!">
          <img
            className="h-55 w-full object-cover"
            src={galleryItem.img}
            alt=""
          />
        </Link>
        <button className="btn btn-wish absolute top-0 end-0 mt-6 me-6">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <div className="backdrop-faded">
          <Link
            to="#!"
            className="text-white font-extrabold text-lg stretched-link"
          >
            {galleryItem.location}
          </Link>
          <h5 className="text-light mb-0">
            <FontAwesomeIcon
              icon={faStar}
              className="text-warning me-1"
              transform="shrink-2"
            />
            {galleryItem.rating}
            <span className="text-sm">/5 </span>({galleryItem.review}k review)
          </h5>
        </div>
      </div>
    </Col>
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    galleryItems[0].category
  );
  const images = galleryItems.filter(item =>
    item.category.includes(selectedCategory)
  );

  const handleNavItemSelect = (category: string | null) => {
    setSelectedCategory(category || galleryItems[0].category);
  };

  return (
    <section className="py-18 overflow-hidden">
      <div
        className="bg-holder hidden xl:block bg-size-[40%]! bg-left! z-1"
        style={{ backgroundImage: `url(${bgLeft30})` }}
      />
      <div
        className="bg-holder hidden xl:block bg-size-[26%]! bg-position-[right_25px]! z-1"
        style={{ backgroundImage: `url(${bgRight30})` }}
      />
      <div className="bg-booking-gallery" />
      <div className="container-medium relative z-2">
        <h3 className="mb-2 text-emphasis text-center">Popular Attractions</h3>
        <p className="mb-0 text-subtle text-center mb-8">
          Explore the most popular and frequently visited destinations around
          the world
        </p>
        <IsotopeNav
          navItems={navItems}
          className="mb-10 justify-center flex-wrap mx-auto w-max"
          onSelect={handleNavItemSelect}
        />
        <Row className="g-0 justify-center">
          <Col md={9} lg={7} xl={5}>
            <Row className="gx-0 gy-4" id="image_gallery">
              {images.map(gallery => (
                <GalleryItem galleryItem={gallery} key={gallery.img} />
              ))}
            </Row>
          </Col>
        </Row>
        <div className="flex items-center justify-center gap-4 mt-6">
          <h5 className="mb-0">Explore more popular destination</h5>
          <div className="btn-ping">
            <div className="btn-ping-bg" />
            <button className="btn border border-default p-0 text-base text-primary flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
