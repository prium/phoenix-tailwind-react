import whoopingBannerProduct from 'assets/img/e-commerce/whooping_banner_product.png';
import whoopingBannerShape2 from 'assets/img/e-commerce/whooping_banner_shape_2.png';
import { Link } from 'react-router';

const EcomWhopingBanner = () => {
  return (
    <div className="whooping-banner w-full rounded-lg overflow-hidden">
      <div
        className="bg-holder product-bg"
        style={{
          backgroundImage: `url(${whoopingBannerProduct})`,
          backgroundPosition: 'bottom right'
        }}
      />
      <div
        className="bg-holder shape-bg"
        style={{
          backgroundImage: `url(${whoopingBannerShape2})`,
          backgroundPosition: 'bottom left'
        }}
      />

      <div className="banner-text relative">
          <h2 className="text-orange-300 font-extrabold lg:text-4xl 2xl:text-5xl">
            Whooping <span className="gradient-text">60%</span> Off
          </h2>
          <h3 className="font-extrabold lg:text-2xl 2xl:text-4xl text-white">
            on everyday items
          </h3>
        </div>
        <Link
          to="#!"
          className="btn btn-lg btn-primary rounded-full banner-button relative"
        >
          Shop Now
        </Link>
    </div>
  );
};

export default EcomWhopingBanner;
