import airPlane from 'assets/img/spot-illustrations/air-plane.png';
import airPlaneDark from 'assets/img/spot-illustrations/air-plane-dark.png';

/** The `.offer-card` below the plans — `+Pricing` in landing-2/Pricing.pug */
const PricingOffer = () => (
  <div className="card rounded-2xl border-0 offer-card">
    <div className="card-body md:flex items-center gap-6 py-8">
      <img
        className="mb-6 md:mb-0 dark:hidden"
        src={airPlane}
        width={155}
        alt=""
      />
      <img
        className="mb-6 md:mb-0 hidden dark:block"
        src={airPlaneDark}
        width={155}
        alt=""
      />
      <div>
        <p>
          Business Starter, Business Standard, and Business Plus plans can be
          purchased for a maximum of 300 users. There is no minimum or maximum
          user limit for Enterprise plans.
        </p>
        <p className="mb-10">
          Phoenix customers may have access to additional features for a limited
          promotional period
        </p>
        <a className="btn btn-link me-2 p-0 text-md" href="#!" role="button">
          Contact Support
          <i className="fa-solid fa-angle-right ms-2" />
        </a>
      </div>
    </div>
  </div>
);

export default PricingOffer;
