import logo from 'assets/img/icons/logo.png';
import classNames from 'classnames';

interface LogoProps {
  width?: number;
  text?: boolean;
  textClass?: string;
  className?: string;
  /** The gold's showcase prefooter stacks below `md` (`md:flex`). */
  displayClass?: string;
  /**
   * `.logo-text` sets no line-height, so the tag decides it: the gold's navbar
   * brands are `h5` (26.18px) and its showcase prefooter is a `p` (39.27px).
   * Using the wrong one resizes the navbar and shifts the whole page.
   */
  as?: 'p' | 'h5';
}

const Logo = ({
  width = 27,
  text = true,
  textClass,
  className,
  displayClass = 'flex',
  as: TextTag = 'p'
}: LogoProps) => {
  return (
    <div className={classNames(className, displayClass, 'items-center')}>
      <img src={logo} alt="phoenix" width={width} />
      {text && (
        <TextTag className={classNames(textClass, 'logo-text ms-2')}>
          phoenix
        </TextTag>
      )}
    </div>
  );
};

export default Logo;
