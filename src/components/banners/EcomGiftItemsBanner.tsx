import giftItemsBannerBg from 'assets/img/e-commerce/gift-items-banner-bg.png';
import { Link } from 'react-router';

const EcomGiftItemsBanner = () => {
  return (
    <div className="gift-items-banner w-full rounded-lg overflow-hidden">
      <div
        className="bg-holder -z-1! banner-bg"
        style={{
          backgroundImage: `url(${giftItemsBannerBg})`
        }}
      />
      <div className="banner-text md:text-center">
        <h2 className="text-white font-extrabold xl:text-3xl">
          Get <span className="gradient-text">10% Off</span>
          <br className="md:hidden" /> on gift items
        </h2>
        <Link
          className="btn btn-lg btn-primary rounded-full banner-button"
          to="#!"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default EcomGiftItemsBanner;
