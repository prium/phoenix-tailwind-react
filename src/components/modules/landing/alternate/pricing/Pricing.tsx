import { pricingItemsAlternate } from 'data/landing/pricingData';
import PricingItem from './PricingItem';
import PricingOffer from './PricingOffer';

/** `+Pricing` in landing-2/Pricing.pug */
const Pricing = () => (
  <section className="static pt-30 md:pt-8 lg:pt-2">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="text-center mb-4 lg:mb-12">
        <h5 className="text-info mb-4">Pricing</h5>
        <h2 className="mb-2">Choose the best deal for you</h2>
      </div>
      <div className="row g-4 mb-12 lg:mb-20">
        {pricingItemsAlternate.map(pricing => (
          <div className="lg:col-4" key={pricing.id}>
            <PricingItem pricing={pricing} />
          </div>
        ))}
      </div>
      <PricingOffer />
    </div>
  </section>
);

export default Pricing;
