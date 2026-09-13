import { Carousel, cn, type CarouselApi } from '@hummingbirdui/react';
import { useEffect, useState, type CSSProperties } from 'react';

import bg39 from 'assets/img/bg/39.png';
import bgLeft22 from 'assets/img/bg/bg-left-22.png';
import bgRight22 from 'assets/img/bg/bg-right-22.png';
import Avatar from 'components/base/Avatar';
import Rating from 'components/base/Rating';
import { alternateTestimonial } from 'data/landing/testimonial';

/** The gold slides sit edge to edge; HB defaults to a 1rem gutter. */
const NO_SLIDE_GAP = { '--carousel-item-spacing': '0px' } as CSSProperties;

/**
 * `#carouselExampleIndicators.testimonial-carousel` in
 * landing-2/Testimonial.pug, on Hummingbird's embla carousel.
 *
 * The indicators keep the gold's markup verbatim — `carousel.css` skins
 * `.testimonial-carousel .carousel-indicators button.active` and the core
 * utility keys on `[data-bs-target]`, neither of which HB's
 * `Carousel.Indicators` emits.
 */
const AlternateTestimonialCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <Carousel
      id="carouselExampleIndicators"
      className="testimonial-carousel slide relative dark:bg-soft"
      setApi={setApi}
    >
      <div
        className="bg-holder bg-size-[186px]! bg-position-[top_20px_right_20px]! hidden xl:block"
        style={{ backgroundImage: `url(${bg39})` }}
      />
      <img
        className="w-37.5 -top-25 -left-17.5 absolute hidden lg:block"
        src={bgLeft22}
        alt=""
      />
      <img
        className="w-37.5 -bottom-20 -right-20 absolute hidden lg:block"
        src={bgRight22}
        alt=""
      />
      <Carousel.Content style={NO_SLIDE_GAP}>
        {alternateTestimonial.map(item => (
          <Carousel.Item
            key={item.id}
            className="text-center py-14 px-8 xl:px-30"
          >
            <Rating readonly initialValue={item.rating} />
            <h3 className="font-semibold italic mt-4 mb-14 xl:w-7/10 mx-auto leading-base">
              {item.comment}
            </h3>
            <div className="flex items-center justify-center gap-4 mx-auto">
              <Avatar
                size="3xl"
                src={item.avatar}
                imageClassName="border border-2 border-primary"
              />
              <div className="text-start">
                <h5>{item.name}</h5>
                <p className="mb-0">{item.occupation}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Content>
      <div className="carousel-indicators">
        {alternateTestimonial.map((item, index) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={cn({ active: index === selected })}
            aria-current={index === selected || undefined}
            aria-label={`Slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default AlternateTestimonialCarousel;
