import bg12 from 'assets/img/bg/bg-12.png';
import bg13 from 'assets/img/bg/13.png';
import TestimonialCarousel from 'components/sliders/TestimonialCarousel';

/** `+Testimonial` in landing-1/Testimonial.pug */
const Testimonial = () => (
  <div className="relative">
    <div
      className="bg-holder bg-auto! bg-right! z-2 hidden md:block"
      style={{ backgroundImage: `url(${bg13})` }}
    />
    <div
      className="bg-holder bg-auto! bg-left! z-2 hidden md:block lg:hidden xl:block"
      style={{ backgroundImage: `url(${bg12})` }}
    />
    <div className="bottom-0 start-0 end-0 bg-soft">
      <svg
        className="w-full"
        viewBox="0 0 1920 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="fill-body-bg" d="M1920 0.44L0 367.74V0H1920V0.44Z" />
      </svg>
    </div>
    <section className="pb-0 bg-soft overflow-hidden static">
      <div className="container-small lg:px-12 2xl:px-4">
        <div className="row">
          <div className="lg:col-6 mb-10 text-center lg:text-start z-2">
            <h4 className="text-primary font-extrabold mb-4">Testimonial</h4>
            <h2 className="mb-4 text-emphasis">
              More than 2 Millions happy
              <br />
              Customers and counting
            </h2>
            <p className="mb-8">
              You may now concentrate on the functionality and other{' '}
              <br className="hidden sm:block" />
              aspects of your web products thanks to Phoenix&apos;s strength
              <br className="hidden sm:block" />
              before leaving the UI design to us. It is simple to complete
              <br className="hidden sm:block" />
              the work after checking and double-checking.
            </p>
          </div>
          <div className="lg:col-6 z-2">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Testimonial;
