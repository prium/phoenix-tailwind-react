import { useEffect } from 'react';
import HeroHeader from './HeroHeader';
import SeasonOfTour from './SeasonOfTour';
import BestPlaces from './BestPlaces';
import BestHotel from './BestHotel';
import Gallery from './Gallery';
import LatestPosts from './LatestPosts';
import LatestPhotos from './LatestPhotos';
import GetApp from './GetApp';
import TravelCta from 'components/cta/TravelCta';

const Landing = () => {
  // gold: attrsBody = { style: '--phoenix-scroll-margin-top: 1.2rem', class: 'bg-soft' }
  useEffect(() => {
    document.body.classList.add('bg-soft');
    document.body.setAttribute(
      'style',
      document.body.getAttribute('style')
        ? document.body.getAttribute('style') +
            '; --phoenix-scroll-margin-top: 1.2rem'
        : '--phoenix-scroll-margin-top: 1.2rem'
    );
    return () => {
      document.body.classList.remove('bg-soft');
      document.body.removeAttribute('style');
    };
  }, []);

  return (
    <>
      <HeroHeader />
      <SeasonOfTour />
      <BestPlaces />
      <BestHotel />
      <Gallery />
      <LatestPosts />
      <TravelCta />
      <LatestPhotos />
      <GetApp />
    </>
  );
};

export default Landing;
