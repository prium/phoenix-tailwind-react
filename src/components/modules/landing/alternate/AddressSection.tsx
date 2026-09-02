import { Suspense, lazy } from 'react';

import PhoenixLoader from 'components/common/PhoenixLoader';
import HelpCenter from '../default/address/HelpCenter';
import QueryForm from '../default/address/QueryForm';

const Mapbox = lazy(() => import('components/base/MapBox'));

/**
 * `+Contact` in landing-2/Contact.pug. The gold embeds a Google map
 * (`.googlemap.h-95.25.rounded-3xl`, no border and no zoom controls); the app
 * renders the same box with the shared lazy Mapbox, as `events/Location` does.
 */
const AddressSection = () => (
  <section className="pb-14 sm:pb-18 xl:pb-28">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="text-center mb-12">
        <h5 className="text-info mb-4">Contact</h5>
        <h2 className="mb-2">Choose the best deal for you</h2>
      </div>
      <div className="row">
        <div className="col-12 mb-18">
          <Suspense fallback={<PhoenixLoader />}>
            <Mapbox
              className="h-95.25 rounded-3xl [&_.mapbox-control-btn]:hidden"
              options={{
                center: [-74.0020158, 40.7228022],
                zoom: 15,
                scrollZoom: false
              }}
            />
          </Suspense>
        </div>
      </div>
      <div className="row g-8 lg:g-8">
        <div className="md:col-6 mb-8 md:mb-0 text-center md:text-start">
          <HelpCenter />
        </div>
        <div className="md:col-6 text-center md:text-start">
          <QueryForm />
        </div>
      </div>
    </div>
  </section>
);

export default AddressSection;
