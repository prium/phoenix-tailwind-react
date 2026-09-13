import { cn } from '@hummingbirdui/react';

import bgLeft15 from 'assets/img/bg/bg-left-15.png';
import bgRight15 from 'assets/img/bg/bg-right-15.png';
import { pricingItems } from 'data/landing/pricingData';
import PricingItem from './PricingItem';

/** `+Pricing` in landing-1/Pricing.pug */
const Pricing = () => (
  <section className="bg-soft lg:pt-0 xl:pt-14">
    <div
      className="bg-holder bg-left! bg-auto! hidden md:block"
      style={{ backgroundImage: `url(${bgLeft15})` }}
    />
    <div
      className="bg-holder bg-right! bg-auto! hidden md:block"
      style={{ backgroundImage: `url(${bgRight15})` }}
    />
    <div className="container-small relative lg:px-12 2xl:px-4">
      <div className="mb-6 text-center sm:text-start">
        <h4 className="text-primary font-extrabold mb-4">Pricing</h4>
        <h2>Choose the best deal for you</h2>
      </div>
      <p className="md:columns-2 text-center sm:text-start">
        Entice your customers with Phoenix Tailwind admin dashboard. Show your
        best deal in this section to help customers choose from your best offers
        and place them all in one place with this efficient template. If you are
        availing more than one offer to your customers, let them compare among
        them and search for what they need to get. Show offer details here and
        entice them to buy.
      </p>

      <div className="row pt-16 g-4 xl:g-0">
        {pricingItems.slice(0, 3).map(pricing => (
          <div className="md:col-6 xl:col-3" key={pricing.id}>
            <div className={cn('card h-full', pricing.cardClass)}>
              {pricing.popular && (
                <div className="absolute flex flex-center bg-primary-subtle rounded-t-md py-1 end-0 start-0 badge-pricing">
                  <p className="text-primary-dark mb-0">Most popular</p>
                </div>
              )}
              <div className="card-body px-10">
                <PricingItem pricing={pricing} />
              </div>
            </div>
          </div>
        ))}

        <div className="col-12 md:col-6 xl:col-3 xl:ps-4">
          <div className="row g-0 h-full justify-center">
            <div className="xl:col-12">
              <div className="card h-full mt-8 md:mt-0">
                <div className="card-body">
                  <PricingItem pricing={pricingItems[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 text-center mt-14">
          <p>
            For Enterprise Solution with Managed SMTP, Custom API setup,
            Dedicated Support, and more - <a href="#!"> Contact us</a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
