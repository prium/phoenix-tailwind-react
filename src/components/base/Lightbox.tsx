import FsLightbox, { FsLightboxProps } from 'fslightbox-react';
import { JSX } from 'react';

interface LightboxProps extends FsLightboxProps {
  toggler: boolean;
  slide?: number;
  sources: Array<string | JSX.Element>;
}

const Lightbox = ({ toggler, slide = 1, sources, ...rest }: LightboxProps) => {
  return (
    <FsLightbox toggler={toggler} sources={sources} slide={slide} {...rest} />
  );
};

export default Lightbox;
