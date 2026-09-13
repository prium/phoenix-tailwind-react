import logoWhite from 'assets/img/icons/logo-white.png';

const links = [
  'Contact us',
  'Newsroom',
  'Opportunities',
  'Login',
  'Sign Up',
  'Support',
  'FAQ'
];

/** `+FooterLanding` in landing-2/Footer.pug */
const Footer = () => (
  <section className="bg-dark dark:bg-subtle">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="row 2xl:gx-14 gy-8 items-center mb-8">
        <div className="xl:col-auto text-center">
          <a href="#">
            <img className="h-12" src={logoWhite} alt="" />
          </a>
        </div>
        <div className="xl:col-auto flex-1">
          <ul
            className="list-none ps-0 flex justify-center flex-wrap mb-0 xl:border-e border-dashed gap-4 xl:gap-14 xl:pe-8 2xl:pe-14 w-3/4 md:w-full mx-auto dark:bg-transparent!"
            data-hb-theme="dark"
          >
            {links.map(link => (
              <li key={link}>
                <a className="text-light/75" href="">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:col-auto">
          <div className="flex items-center justify-center gap-14">
            <a className="text-white" href="#!">
              {' '}
              <span className="fa-brands fa-facebook" />
            </a>
            <a className="text-white" href="#!">
              {' '}
              <span className="fa-brands fa-twitter" />
            </a>
            <a className="text-white" href="#!">
              {' '}
              <span className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-default" data-hb-theme="dark" />
      <div
        className="sm:flex flex-between-center text-center dark:bg-transparent!"
        data-hb-theme="dark"
      >
        <p className="text-subtle mb-0">Copyright © Company Name</p>
        <p className="text-subtle mb-0">
          Made with love by <a href="https://themewagon.com">ThemeWagon</a>
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
