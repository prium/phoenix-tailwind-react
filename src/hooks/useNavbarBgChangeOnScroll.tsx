import { hexToRgb } from 'helpers/utils';
import { MutableRefObject, useEffect } from 'react';

// This custom React hook allows for dynamic background color change of a navbar based on scrolling.

// Parameters:
// - navbarRef (MutableRefObject<HTMLDivElement | null>): A mutable reference to the navbar's HTMLDivElement.
// - bgColor (string): The initial background color of the navbbar in hexadecimal format (default: '#ffffff').

// How to use:
// 1. Import this hook where you want to implement the scrolling effect.
// 2. Attach the hook to the desired navbar element using `navbarRef`.
// 3. Optionally, provide an initial `bgColor` in hexadecimal format.
// 4. As you scroll down the page, the navbar's background color will transition to a semi-transparent version of the provided `bgColor`.
//    The transition occurs as you scroll down, giving a smooth visual effect.

const useNavbarBgChangeOnScroll = (
  navbarRef: MutableRefObject<HTMLElement | null>,
  bgColor = '#ffffff'
) => {
  useEffect(() => {
    const bgColorRgb = hexToRgb(bgColor);
    const handleAlpha = () => {
      if (navbarRef.current) {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const alpha = Math.min((scrollTop / windowHeight) * 2, 1);
        navbarRef.current.style.backgroundColor = `rgba(${bgColorRgb}, ${alpha})`;
      }
    };

    // The gold (`navbar-soft-on-scroll.js`) paints the initial alpha before the
    // first scroll, which is what keeps a navbar with its own background class
    // transparent at the top of the page.
    handleAlpha();
    document.addEventListener('scroll', handleAlpha);

    return () => document.removeEventListener('scroll', handleAlpha);
  }, []);
};

export default useNavbarBgChangeOnScroll;
