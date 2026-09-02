import AlternateTestimonialCarousel from 'components/sliders/AlternateTestimonialCarousel';

/** `+Testimonial` in landing-2/Testimonial.pug */
const Testimonial = () => (
  <section className="pb-28 overflow-x-hidden">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="text-center mb-8 relative">
        <h5 className="text-info mb-4">Testimonial</h5>
        <h2 className="mb-2 leading-normal">
          What our customers has to say about us
        </h2>
      </div>
      <AlternateTestimonialCarousel />
    </div>
  </section>
);

export default Testimonial;
