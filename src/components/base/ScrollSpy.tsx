import { cn } from '@hummingbirdui/react';
import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  useEffect
} from 'react';
import { useInView } from 'react-intersection-observer';
import ScrollSpyProvider, {
  useScrollSpyContext
} from 'providers/ScrollSpyProvider';

interface ScrollSpyContentInterface extends HTMLAttributes<HTMLDivElement> {
  rootMargin?: string;
  threshold?: number | number[];
}

const ScrollSpy = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return <ScrollSpyProvider>{children}</ScrollSpyProvider>;
};

const ScrollSpyContent = ({
  id,
  children,
  rootMargin = '-50% 0px -50% 0px',
  threshold = 0,
  ...rest
}: PropsWithChildren<ScrollSpyContentInterface>) => {
  const { setActiveElemId } = useScrollSpyContext();
  const { ref, inView } = useInView({ threshold, rootMargin });

  useEffect(() => {
    if (inView && id) {
      setActiveElemId(id);
    }
  }, [inView, id, setActiveElemId]);

  return (
    <div id={id} ref={ref} {...rest}>
      {children}
    </div>
  );
};

const ScrollSpyNavLink = ({
  className,
  href,
  children,
  ...rest
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  const { activeElemId } = useScrollSpyContext();
  const targetId = href?.replace('#', '');

  return (
    <a
      className={cn('nav-link', className, {
        active: activeElemId === targetId
      })}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

ScrollSpy.Content = ScrollSpyContent;
ScrollSpy.NavLink = ScrollSpyNavLink;

export default ScrollSpy;
