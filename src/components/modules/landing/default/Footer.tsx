import bg19 from 'assets/img/bg/bg-19.png';
import bgLeft20 from 'assets/img/bg/bg-left-20.png';
import bgRight20 from 'assets/img/bg/bg-right-20.png';
import logoWhite from 'assets/img/icons/logo-white.png';

const FooterList = ({ items }: { items: string[] }) => (
  <>
    {items.map(item => (
      <li className="mb-1" key={item}>
        <a className="text-soft" href="#!" data-hb-theme="light">
          {item}
        </a>
      </li>
    ))}
  </>
);

/** `+FooterLanding` in landing-1/Footer.pug */
const Footer = () => (
  <div className="relative">
    <div
      className="bg-holder bg-auto! footer-bg"
      style={{ backgroundImage: `url(${bg19})` }}
    />
    <div
      className="bg-holder bg-right! bg-auto!"
      style={{ backgroundImage: `url(${bgRight20})` }}
    />
    <div
      className="bg-holder bg-left! bg-auto!"
      style={{ backgroundImage: `url(${bgLeft20})` }}
    />
    <div className="relative">
      <svg
        className="w-full text-contrast"
        preserveAspectRatio="none"
        viewBox="0 0 1920 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1920 0.44L0 367.74V0H1920V0.44Z" fill="currentColor" />
      </svg>
      <section className="footer-default">
        <div className="container-small lg:px-12 2xl:px-4">
          <div className="row relative">
            <div className="col-12 sm:col-12 lg:col-5 mb-6 order-0 sm:order-0">
              <a href="#">
                <img className="mb-4" src={logoWhite} height={48} alt="" />
              </a>
              <h3 className="text-white">phoenix</h3>
              <p className="text-white opacity-50">
                All over the world. Alice in <br />
                wonderland and other places.
              </p>
            </div>
            <div className="lg:col-7">
              <div className="row justify-between">
                <div className="col-6 sm:col-4 lg:col-3 mb-4 order-2 sm:order-1">
                  <div className="border-dashed border-s ps-4 border-primary-light/20">
                    <h5 className="font-extrabold mb-2 text-light leading-none">
                      Help
                    </h5>
                    <ul className="list-none ps-0 mb-4">
                      <FooterList items={['About', 'Contact', 'Developers']} />
                    </ul>
                  </div>
                  <div className="border-dashed border-s ps-4 border-primary-light/20">
                    <h5 className="font-extrabold mb-2 text-light leading-lg">
                      Follow
                    </h5>
                    <ul className="list-none ps-0 mb-2">
                      <FooterList items={['Facebook', 'Twitter', 'Linkedin']} />
                    </ul>
                  </div>
                </div>

                <div className="col-6 sm:col-4 lg:col-3 mb-4 order-3 sm:order-2">
                  <div className="border-dashed border-s ps-4 border-primary-light/20">
                    <h5 className="font-extrabold mb-2 text-light leading-lg">
                      Support
                    </h5>
                    <ul className="list-none ps-0 md:mb-2">
                      <FooterList
                        items={[
                          'Privacy',
                          'Community',
                          'Contact',
                          'Blog',
                          'FAQ',
                          'Project',
                          'Team'
                        ]}
                      />
                    </ul>
                  </div>
                </div>

                <div className="col-6 sm:col-4 lg:col-3 mb-4 order-3 sm:order-2">
                  <div className="border-dashed border-s ps-4 border-primary-light/20">
                    <h5 className="font-extrabold mb-2 text-light leading-lg">
                      Info
                    </h5>
                    <ul className="list-none ps-0 md:mb-2">
                      <FooterList
                        items={[
                          'Personal',
                          'NFT System',
                          'Agency',
                          'Contact',
                          'About'
                        ]}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Footer;
