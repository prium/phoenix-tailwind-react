import bg47 from 'assets/img/bg/47.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const startLinks = ['Home', 'Terms', 'Talent & culture', 'Destination'];
const endLinks = ['Refund policy', 'Sitemap', 'EMI Policy', 'Privacy Policy'];

/** `+TripFooter` in phoenix-tailwind mixins/travel-agency/trip/TripFooter.pug */
const TripCommonCTASection = () => {
  return (
    <section className="py-10">
      <div className="container-medium">
        <div
          className="bg-holder overlay before:bg-(--color-black)/75! bg-cover! bg-center!"
          style={{ backgroundImage: `url(${bg47})` }}
        />
        <div className="row relative items-center gy-4">
          <div className="2xl:col-4 order-1 2xl:order-0">
            <ul className="list-none flex gap-4 2xl:gap-6 flex-wrap mb-0 justify-center 2xl:justify-start p-0">
              {startLinks.map(label => (
                <li key={label}>
                  <Link to="#!" className="text-gray-100">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-8! md:col-7! lg:col-5! xl:col-4! mx-auto mb-4 2xl:mb-0">
            <h2 className="mb-6 font-semibold text-white text-center leading-sm">
              Subscribe to get notified about the latest news
            </h2>
            <div className="input-group gap-2">
              <div className="input-group-icon flex-1">
                <input
                  className="form-control form-icon-input bg-soft"
                  type="text"
                  placeholder="Your email address"
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="form-control-icon-start text-default text-md"
                />
              </div>
              <button type="button" className="btn btn-primary rounded-md">
                Sign up
              </button>
            </div>
          </div>
          <div className="2xl:col-4 order-2 2xl:order-0">
            <ul className="list-none flex gap-4 2xl:gap-6 flex-wrap mb-0 justify-center 2xl:justify-end ps-0">
              {endLinks.map(label => (
                <li key={label}>
                  <Link to="#!" className="text-gray-100">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripCommonCTASection;
