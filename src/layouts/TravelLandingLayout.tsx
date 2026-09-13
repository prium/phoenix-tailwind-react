import { Outlet } from 'react-router';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import LandingNavbar from 'pages/apps/travel-agency/landing/LandingNavbar';
import Footer from 'pages/apps/travel-agency/landing/Footer';
import TopNav from 'pages/apps/travel-agency/landing/TopNav';

const TravelLandingLayout = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <>
      <TopNav />
      <LandingNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default TravelLandingLayout;
