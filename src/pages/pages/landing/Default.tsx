import Brands from 'components/modules/landing/default/Brands';
import Cta from 'components/modules/landing/default/Cta';
import Footer from 'components/modules/landing/default/Footer';
import Gallery from 'components/modules/landing/default/Gallery';
import HeroHeader from 'components/modules/landing/default/HeroHeader';
import AddressSection from 'components/modules/landing/default/address/AddressSection';
import Blog from 'components/modules/landing/default/blog/Blog';
import Features from 'components/modules/landing/default/features/Features';
import FunFacts from 'components/modules/landing/default/fun-facts/FunFacts';
import Pricing from 'components/modules/landing/default/pricing/Pricing';
import TeamSection from 'components/modules/landing/default/team/TeamSection';
import Testimonial from 'components/modules/landing/default/testimonial/Testimonial';
import DefaultLandingNavbar from 'components/navbars/default-landing-navbar/DefaultLandingNavbar';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

/** `pages/landing/default.pug` */
const Default = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });

  return (
    <main className="main" id="top">
      <DefaultLandingNavbar />
      <HeroHeader />
      <Brands className="py-8 xl:pt-26 bg-soft" imageClassName="w-full" />
      <Features />
      <Testimonial />
      <FunFacts />
      <Gallery />
      <Pricing />
      <Blog />
      <AddressSection />
      <TeamSection />
      <Cta />
      <Footer />
    </main>
  );
};

export default Default;
