import { useRef } from 'react';
import figmaIcon from 'assets/img/icons/figma.png';
import figmaBg from 'assets/img/bg/figma.png';
import useParallaxHooks from 'hooks/useParallaxHooks';

/** `mixins/showcase/FeatureFigma.pug` */
const FeatureFigma = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxElRef = useRef<(HTMLImageElement | HTMLDivElement | null)[]>(
    []
  );

  useParallaxHooks(containerRef, parallaxElRef);

  return (
    <section
      className="py-24 relative overflow-hidden bg-subtle"
      ref={containerRef}
    >
      <div
        className="grd bg-gradient-figma"
        ref={el => {
          parallaxElRef.current?.push(el);
        }}
        data-parallax={JSON.stringify({
          y: '-90%',
          scrollTrigger: { end: 'top -20%' }
        })}
      />
      <img
        className="feature-figma-img"
        src={figmaBg}
        alt=""
        ref={el => {
          parallaxElRef.current?.push(el);
        }}
        data-parallax={JSON.stringify({ y: '-50%' })}
      />
      <div className="container-small relative">
        <div className="row px-6">
          <div className="col-12 flex justify-center items-center mb-4">
            <img className="me-4" src={figmaIcon} alt="" />
            <h1 className="text-white">Figma design files</h1>
          </div>
          <p className="text-center mb-0 text-white">
            Modern &amp; highly customizable, simple and user-friendly UI
            components 🎨 based on Hummingbird design system only for you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureFigma;
