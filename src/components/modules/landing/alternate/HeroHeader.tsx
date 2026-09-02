import bg34 from 'assets/img/bg/bg-34.png';
import bg35 from 'assets/img/bg/bg-35.png';
import bg36 from 'assets/img/bg/bg-36.png';
import bg39 from 'assets/img/bg/bg-39.png';

/** `+HeroHeader` in landing-2/HeroHeader.pug */
const HeroHeader = () => (
  <section className="pb-14 overflow-hidden" id="home">
    <div className="hero-header-container-alternate relative">
      <div className="container-small lg:px-12 2xl:px-4">
        <div className="row items-center">
          <div className="col-12 lg:col-6 pt-14 pb-10 relative z-5 text-center lg:text-start">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black mb-6">
              <span className="text-gradient-info me-4">Elegance</span>for
              <br />
              your web app
            </h1>
            <p className="mb-8 xl:pe-18">
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
          <div className="col-12 lg:col-auto hidden lg:block">
            <div className="hero-image-container absolute h-full end-0 flex items-center">
              <div className="relative">
                <div className="absolute end-0 hero-image-container-overlay" />
                <img
                  className="absolute end-0! hero-image-container-bg"
                  src={bg36}
                  alt=""
                />
                <img
                  className="w-full dark:hidden rounded-md hero-image-shadow"
                  src={bg34}
                  alt="hero-header"
                />
                <img
                  className="w-full hidden dark:block rounded-md hero-image-shadow"
                  src={bg35}
                  alt="hero-header"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-small md:px-14 mb-14 lg:hidden">
        <div className="relative">
          <div className="absolute end-0 hero-image-container-overlay" />
          <img
            className="absolute top-1/2 hero-image-container-bg"
            src={bg39}
            alt=""
          />
          <img
            className="ms-auto dark:hidden rounded-md hero-image-shadow"
            src={bg34}
            alt="hero-header"
          />
          <img
            className="ms-auto hidden dark:block rounded-md hero-image-shadow"
            src={bg35}
            alt="hero-header"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroHeader;
