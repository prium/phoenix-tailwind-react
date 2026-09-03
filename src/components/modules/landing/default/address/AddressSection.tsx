import { Suspense, lazy } from 'react';

import PhoenixLoader from 'components/common/PhoenixLoader';
import HelpCenter from './HelpCenter';
import QueryForm from './QueryForm';

const Mapbox = lazy(() => import('components/base/Mapbox'));

/** `+Address` in landing-1/Address.pug */
const AddressSection = () => (
  <section className="bg-soft">
    <div className="container-small relative lg:px-12 2xl:px-4">
      <div className="mb-4 text-center sm:text-start">
        <h4 className="text-primary font-extrabold mb-4">Address</h4>
        <h2>If you need to find us:</h2>
      </div>
      <p className="md:columns-2">
        Do not lose your potential customers to others. Tell them exactly where
        you are with Geolocation enabled Phoenix admin dashboard, No need to
        take the burden of communicating directly. You can easily tell your
        customers where to find you with precise location map. Getting closer
        was never easier!
      </p>
      <div className="row">
        <div className="col-12 mb-30">
          {/* the gold's `.mapbox-container` wraps a separately sized `#mapbox`,
              and its markup carries no zoom controls */}
          <div className="rounded-lg border overflow-hidden mt-4 mb-10">
            <Suspense fallback={<PhoenixLoader />}>
              <Mapbox
                className="h-95.25 [&_.mapbox-control-btn]:hidden"
                options={{
                  attributionControl: false,
                  center: [-74.0020158, 40.7228022],
                  zoom: 14,
                  scrollZoom: false
                }}
              />
            </Suspense>
          </div>
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
