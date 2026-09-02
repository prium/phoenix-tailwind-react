import bg12 from 'assets/img/bg/bg-1-2.png';
import bg23 from 'assets/img/bg/bg-23.png';
import bg28 from 'assets/img/bg/bg-28.png';
import bg29 from 'assets/img/bg/bg-29.png';
import bg30 from 'assets/img/bg/bg-30.png';
import bg31 from 'assets/img/bg/bg-31.png';

/** `+HeroHeader` in landing-1/HeroHeader.pug */
const HeroHeader = () => (
  <section className="bg-soft pb-14" id="home">
    <div className="container-small hero-header-container lg:px-12 2xl:px-4">
      <div className="row items-center">
        <div className="col-12 lg:col-auto order-1 text-end">
          <div className="relative p-8 md:p-12 lg:hidden">
            <div
              className="bg-holder bg-contain!"
              style={{ backgroundImage: `url(${bg23})` }}
            />
            <div className="relative">
              <img
                className="w-full shadow-lg dark:hidden rounded-md"
                src={bg31}
                alt="hero-header"
              />
              <img
                className="w-full shadow-lg hidden dark:block rounded-md"
                src={bg30}
                alt="hero-header"
              />
            </div>
          </div>
          <div className="hero-image-container absolute top-0 bottom-0 end-0 hidden lg:block">
            <div className="relative h-full w-full">
              <div className="absolute h-full top-0 flex items-center end-0 hero-image-container-bg">
                <img
                  className="pt-12 md:pt-0 w-full"
                  src={bg12}
                  alt="hero-header"
                />
              </div>
              <div className="absolute h-full top-0 flex items-center end-0">
                <img
                  className="pt-12 md:pt-0 w-full shadow-lg dark:hidden rounded-md"
                  src={bg28}
                  alt="hero-header"
                />
                <img
                  className="pt-12 md:pt-0 w-full shadow-lg hidden dark:block rounded-md"
                  src={bg29}
                  alt="hero-header"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lg:col-6 lg:text-start text-center pt-14 pb-10 order-0! relative">
          <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl fs font-black mb-6">
            <span className="text-primary me-4">Elegance</span>for
            <br />
            your web app
          </h1>
          <p className="mb-8">
            Standard, modern and Elegant solution for your next web app so you
            don’t have to look further. Sign up or check the demo below.
          </p>
          <a
            className="btn btn-lg btn-primary rounded-full me-4"
            href="#!"
            role="button"
          >
            Sign up
          </a>
          <a
            className="btn btn-link me-2 text-base p-0"
            href="#!"
            role="button"
          >
            Check Demo
            <span className="fa-solid fa-angle-right ms-2 text-md" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroHeader;
