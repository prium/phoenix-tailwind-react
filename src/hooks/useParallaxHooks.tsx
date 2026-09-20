import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { parseData } from 'helpers/utils';
import merge from 'lodash.merge';
import { MutableRefObject, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useParallaxHooks = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
  parallaxElRef:
    | MutableRefObject<HTMLDivElement | null>
    | MutableRefObject<(HTMLDivElement | HTMLImageElement | null)[]>,
  /**
   * Options merged into every element's tween. Pass a function when an option
   * needs a DOM node: `gsap.context` resolves selector strings against
   * `containerRef`'s *descendants*, so a trigger that is the container itself
   * (the showcase gallery's `section.gsap`) can only be given as an element,
   * and the ref is not populated until the effect runs.
   */
  commonOptions?: unknown | (() => unknown)
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elRefs = Array.isArray(parallaxElRef.current)
        ? parallaxElRef.current
        : [parallaxElRef.current];

      elRefs.forEach(elRef => {
        const elOptions = parseData(elRef?.getAttribute('data-parallax') || '');

        const options = merge(
          {
            ease: 'none',
            scrollTrigger: {
              trigger: elRef,
              scrub: true,
              start: 'top bottom',
              toggleActions: 'play none none reverse'
            }
          },
          typeof commonOptions === 'function' ? commonOptions() : commonOptions,
          elOptions
        );

        gsap.to(elRef, options);
      });
    }, containerRef); //
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);
};

export default useParallaxHooks;
