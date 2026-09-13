import { Col, Row, cn } from '@hummingbirdui/react';
import { ReactNode } from 'react';
import illustrations31 from 'assets/img/spot-illustrations/31.png';
import illustration11 from 'assets/img/icons/illustrations/11.png';
import illustration12 from 'assets/img/icons/illustrations/12.png';
import illustration13 from 'assets/img/icons/illustrations/13.png';
import illustration14 from 'assets/img/icons/illustrations/14.png';
import illustration15 from 'assets/img/icons/illustrations/15.png';
import illustration16 from 'assets/img/icons/illustrations/16.png';
import illustration17 from 'assets/img/icons/illustrations/17.png';
import illustration18 from 'assets/img/icons/illustrations/18.png';
import illustration19 from 'assets/img/icons/illustrations/19.png';
import illustration21 from 'assets/img/icons/illustrations/21.png';
import illustration22 from 'assets/img/icons/illustrations/22.png';
import illustration23 from 'assets/img/icons/illustrations/23.png';
import illustration24 from 'assets/img/icons/illustrations/24.png';
import illustration25 from 'assets/img/icons/illustrations/25.png';
import illustration26 from 'assets/img/icons/illustrations/26.png';

/**
 * The border each tile carries, by position — `EssentialFeatures.pug` assigns
 * these to slots, not to items. `border-trnslucent` is the gold's own typo and
 * resolves to nothing on either side; kept so the tiles match it exactly.
 */
const SLOT_BORDERS = [
  'border-trnslucent border-e-0 sm:border-e',
  'border-trnslucent border-e-0 sm:border-e',
  'border-trnslucent border-e-0 sm:border-e lg:border-e-0',
  'border-trnslucent border-e-0 sm:border-e',
  'border-trnslucent border-e-0 sm:border-e',
  'border-trnslucent border-e-0',
  'border-trnslucent border-e',
  'border-trnslucent border-e',
  'border-trnslucent border-e-0 sm:border-e lg:border-e-0',
  'border-trnslucent border-e',
  'border-trnslucent border-e',
  'border-trnslucent border-e-0',
  'border-trnslucent border-e',
  'border-trnslucent border-e',
  'border-trnslucent border-e-0'
];

interface FeatureItem {
  id: number;
  icon: string;
  title: ReactNode;
}

/**
 * Brand words use the gold's literal hex: `text-bootstrap`, `text-css3`,
 * `text-sass` and `text-w3c` are declared in neither stylesheet, so they
 * rendered as plain body text.
 */
export const featureItems: FeatureItem[] = [
  {
    id: 11,
    icon: illustration11,
    title: (
      <>
        Built on{' '}
        <span className="text-[#0D80F1] me-1 font-bold">Hummingbird</span>
      </>
    )
  },
  {
    id: 12,
    icon: illustration12,
    title: (
      <>
        Styled with <span className="text-[#003CC7] ms-1 font-bold">CSS3</span>
      </>
    )
  },
  {
    id: 13,
    icon: illustration13,
    title: (
      <>
        Developed with{' '}
        <span className="text-info-light me-1 font-bold">ReactJs</span>
      </>
    )
  },
  {
    id: 17,
    icon: illustration17,
    title: (
      <>
        Built with{' '}
        <span className="text-[#0D80F1] me-1 font-bold">Hummingbird React</span>
      </>
    )
  },
  {
    id: 15,
    icon: illustration15,
    title: (
      <>
        <span className="text-[#38BDF8] ms-1 font-bold">Tailwind CSS</span>{' '}
        Supported
      </>
    )
  },
  {
    id: 18,
    icon: illustration18,
    title: (
      <>
        Built on <span className="text-info font-bold">Typescript</span>
      </>
    )
  },
  {
    id: 14,
    icon: illustration14,
    title: (
      <>
        <span className="text-info font-bold">Clean </span> design
      </>
    )
  },
  {
    id: 16,
    icon: illustration16,
    title: (
      <>
        <span className="text-success ms-1 font-bold">Cross-browser</span>{' '}
        tested
      </>
    )
  },
  {
    id: 19,
    icon: illustration19,
    title: (
      <>
        Interactive <span className="text-warning font-bold">components</span>
      </>
    )
  },
  {
    id: 22,
    icon: illustration22,
    title: <span className="text-warning ms-1 font-bold">Echarts </span>
  },
  {
    id: 21,
    icon: illustration21,
    title: (
      <>
        <span className="text-info ms-1 font-bold">Dark/Light</span> Layouts
      </>
    )
  },
  {
    id: 23,
    icon: illustration23,
    title: (
      <>
        <span className="text-success ms-1 font-bold">FontAwesome 6</span> icons
      </>
    )
  },
  {
    id: 24,
    icon: illustration24,
    title: (
      <>
        Opinionated{' '}
        <span className="text-success font-bold">code formatter</span>
      </>
    )
  },
  {
    id: 25,
    icon: illustration25,
    title: (
      <>
        <span className="text-[#005585] me-1 font-bold">W3C</span>validated
      </>
    )
  },
  {
    id: 26,
    icon: illustration26,
    title: (
      <>
        10+ <span className="text-warning font-bold">layouts</span>
      </>
    )
  }
];

/** `mixins/showcase/EssentialFeatures.pug` */
const EssentialFeatures = () => {
  return (
    <section className="bg-subtle pt-28">
      <div className="lg:container">
        <Row className="justify-center">
          <Col xs={12} lg={9} xl={8} xxl={6} className="text-center">
            <h2 className="text-highlight font-normal mb-26 leading-sm">
              Packed with
              <span className="text-primary ms-2 relative font-extrabold inline-flex">
                essential features
                <img
                  className="text-illustration-underline"
                  src={illustrations31}
                  alt=""
                />
              </span>
            </h2>
            <Row>
              {featureItems.map((item, index) => (
                <Col xs={12} sm={4} className="px-0" key={item.id}>
                  <div className={cn('mb-18 text-center', SLOT_BORDERS[index])}>
                    <img src={item.icon} alt="" className="mb-6" />
                    <p>{item.title}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EssentialFeatures;
