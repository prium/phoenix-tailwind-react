import { Col, Row } from '@hummingbirdui/react';
import bg from 'assets/img/bg/bg-40.png';
import bgDark from 'assets/img/bg/bg-dark-40.png';
import SearchBox from 'components/common/SearchBox';
import CategoryOffcanvas from 'components/modules/faq/CategoryOffcanvas';
import SubCategoryContent from 'components/modules/faq/SubCategoryContent';
import FaqTabProvider from 'providers/FaqTabProvider';
import { Link } from 'react-router';

/** Gold: `../phoenix-tailwind/src/pug/pages/faq/faq-tab.pug`. */
const FaqTab = () => {
  return (
    <FaqTabProvider>
      <div className="mb-16">
        <div className="-mx-6 lg:-mx-10 -mt-8 relative md:mb-16 h-52">
          <div
            className="bg-holder bg-card bg-cover! dark:hidden"
            style={{ backgroundImage: `url(${bg})` }}
          />
          <div
            className="bg-holder bg-card bg-cover! hidden dark:block"
            style={{ backgroundImage: `url(${bgDark})` }}
          />
          <div className="faq-title-box relative bg-soft border border-subtle p-10 rounded-lg text-center mx-auto">
            <h1>How can we help?</h1>
            <p className="my-4">
              Search for the topic you need help with or{' '}
              <Link to="#!">contact our support</Link>
            </p>
            <SearchBox
              className="w-full"
              formClassName="w-full"
              placeholder=""
            />
          </div>
        </div>
        <Row className="xl:gx-14 2xl:gx-20 gy-10 faq">
          <Col md={6} xl={5} xxl={4}>
            <CategoryOffcanvas />
          </Col>
          <Col md={6} xl={7} xxl={8} className="md:mt-20">
            <SubCategoryContent />
          </Col>
        </Row>
      </div>
    </FaqTabProvider>
  );
};

export default FaqTab;
