import { useRef } from 'react';
import figmaIcon from 'assets/img/icons/figma.png';
import figmaBg from 'assets/img/bg/figma.png';
import useParallaxHooks from 'hooks/useParallaxHooks';

const FeatureFigma = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxElRef = useRef<(HTMLImageElement | HTMLDivElement | null)[]>(
    []
  );

  useParallaxHooks(containerRef, parallaxElRef);

  return (
    <section
      className="py-12 relative overflow-hidden bg-subtle"
      ref={containerRef}
    >
      <div
        className="bg-gradient-figma"
        ref={el => {
          parallaxElRef.current?.push(el)
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
          parallaxElRef.current?.push(el)
        }}
        data-parallax={JSON.stringify({ y: '-50%' })}
      />
      <div className="relative container-small text-center">
        <div className="flex gap-3 justify-content-center mb-3">
          <img src={figmaIcon} alt="" />
          <h1 className="text-white">Figma design files</h1>
        </div>
        <p className="mb-0 text-white">
          Modern &amp; highly customizable, simple and user-friendly UI
          components 🎨 based on Bootstrap design system only for you!
        </p>
      </div>
    </section>
  );
};

export default FeatureFigma;
