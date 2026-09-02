import { useState } from 'react';

import bgLeft26 from 'assets/img/bg/bg-left-26.png';
import bgRight26 from 'assets/img/bg/bg-right-26.png';
import Lightbox from 'components/base/LightBox';
import PackeryGrid from 'components/modules/gallery/PackeryGrid';
import IsotopeNav from 'components/navs/IsotopeNav';
import { galleryItems } from 'data/landing/alternate-landing-data';
import { galleryFilters } from 'data/landing/default-landing-data';
import useLightbox from 'hooks/useLightbox';

/** `+Gallery` in landing-2/Gallery.pug */
const Gallery = () => {
  const [filter, setFilter] = useState('*');
  const images =
    filter === '*'
      ? galleryItems
      : galleryItems.filter(item => item.filters.includes(filter));

  const { lightboxProps, openLightbox } = useLightbox(
    images.map(item => item.image)
  );

  return (
    <section className="gallery">
      <div className="gallery-overlay absolute start-0 w-full" />
      <div
        className="bg-holder bg-auto! bg-position-[left_65%]! hidden xl:block"
        style={{ backgroundImage: `url(${bgLeft26})` }}
      />
      <div
        className="bg-holder bg-auto! bg-position-[right_62%]! hidden xl:block"
        style={{ backgroundImage: `url(${bgRight26})` }}
      />
      <div className="container-small relative lg:px-12 2xl:px-4">
        <div className="text-center mb-12">
          <h5 className="text-info mb-4">Gallery</h5>
          <h2 className="mb-2">Our best works</h2>
        </div>
        <IsotopeNav
          navItems={galleryFilters}
          className="mb-10 w-max mx-auto"
          onSelect={key => setFilter(key ?? '*')}
        />

        <PackeryGrid className="row g-4" id="image_gallery">
          {images.map((item, index) => (
            // `.isotope-item` is `visibility: hidden` until the gold's
            // isotope.js reveals it after imagesLoaded (plugins/isotope.css)
            <div
              className={item.className}
              key={item.image}
              style={{ visibility: 'visible' }}
            >
              <a
                href="#!"
                onClick={event => {
                  event.preventDefault();
                  openLightbox(index + 1);
                }}
              >
                <img className="rounded-md w-full" src={item.image} alt="" />
              </a>
            </div>
          ))}
        </PackeryGrid>

        <Lightbox key={filter} {...lightboxProps} />
      </div>
    </section>
  );
};

export default Gallery;
