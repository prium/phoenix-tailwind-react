import { useState } from 'react';

import bg5 from 'assets/img/bg/bg-5.png';
import bgDark5 from 'assets/img/bg/bg-dark-5.png';
import bgLeft5 from 'assets/img/bg/bg-left-5.png';
import bgRight6 from 'assets/img/bg/bg-right-6.png';
import Lightbox from 'components/base/LightBox';
import PackeryGrid from 'components/modules/gallery/PackeryGrid';
import IsotopeNav from 'components/navs/IsotopeNav';
import {
  galleryFilters,
  galleryItems
} from 'data/landing/default-landing-data';
import useLightbox from 'hooks/useLightbox';

/** `+Gallery` in landing-1/Gallery.pug */
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
    <section className="bg-soft lg:pb-10 xl:pb-14">
      <div
        className="bg-holder bg-auto! dark:hidden"
        style={{ backgroundImage: `url(${bg5})` }}
      />
      <div
        className="bg-holder bg-auto! hidden dark:block"
        style={{ backgroundImage: `url(${bgDark5})` }}
      />
      <div
        className="bg-holder bg-left! bg-auto!"
        style={{ backgroundImage: `url(${bgLeft5})` }}
      />
      <div
        className="bg-holder bg-right! bg-auto!"
        style={{ backgroundImage: `url(${bgRight6})` }}
      />
      <div className="container-small relative lg:px-12 2xl:px-4">
        <div className="mb-14 text-center sm:text-start">
          <h4 className="text-primary font-extrabold mb-4">Gallery</h4>
          <h2>Some of Our Best Works</h2>
        </div>
        <p className="lg:columns-2">
          Rise like Phoenix Tailwind focusing only on functionalities for your
          digital products leaving the design for us. Show what you do, with our
          latest admin dashboard. Check our best works and let us know what you
          want to find. Want to tell your customers about the details of how and
          what? Tell them with all the posts at one place without them
          ridirecting to another page or site.
        </p>
        <IsotopeNav
          navItems={galleryFilters}
          className="mb-10 justify-center sm:justify-start w-max"
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
