import Footer from 'components/footers/Footer';
import AdvanceFeatures from 'components/modules/showcase/AdvanceFeatures';
import Cta from 'components/modules/showcase/Cta';
import Demos from 'components/modules/showcase/Demos';
import DifferentModules from 'components/modules/showcase/DifferentModules';
import EssentialFeatures from 'components/modules/showcase/EssentialFeatures';
import Faq from 'components/modules/showcase/Faq';
import Feature from 'components/modules/showcase/Feature';
import FeatureFigma from 'components/modules/showcase/FeatureFigma';
import Header from 'components/modules/showcase/Header';
import ImportantApplications from 'components/modules/showcase/ImportantApplications';
import NecessaryPages from 'components/modules/showcase/NecessaryPages';
import PreFooter from 'components/modules/showcase/PreFooter';
import ShowcaseNavbar from 'components/navbars/ShowcaseNavbar';
import useForcedTheme from 'hooks/useForcedTheme';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Showcase = () => {
  useSettingsMountEffect({
    showSettingPanelButton: false
  });
  // Light whatever the visitor picked, as the gold's LayoutShowcase pins it.
  // `setConfig({ theme })` cannot do this: config.theme only mirrors hb-react's
  // theme state, so the old call here was overwritten on the next render.
  useForcedTheme('light');

  return (
    <>
      <ShowcaseNavbar />
      <Header />
      <Demos />
      <DifferentModules />
      <AdvanceFeatures />
      <EssentialFeatures />
      <Feature />
      <ImportantApplications />
      <NecessaryPages />
      <FeatureFigma />
      <Faq />
      <Cta />
      <PreFooter />
      <Footer className="flex justify-center bg-default border-0!" />
    </>
  );
};

export default Showcase;
