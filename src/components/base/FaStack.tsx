import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';

export interface FaStackProps {
  /** the `fa-stack-2x` icon painted behind (the gold's filled circle) */
  background: IconDefinition;
  backgroundClassName?: string;
  /** the `fa-stack-1x` icon painted on top */
  icon: IconDefinition;
  iconClassName?: string;
  /** adds `fa-inverse` to the foreground icon, like the gold's markup */
  inverse?: boolean;
  /** classes for the `span.fa-stack` wrapper */
  className?: string;
}

/**
 * The gold's FontAwesome icon stack (`span.fa-stack > .fa-stack-2x + .fa-stack-1x`).
 *
 * The gold only loads FontAwesome's SVG-with-JS bundle, while this app also
 * links the webfont stylesheet (index.html) — and that stylesheet's
 * `.fa-stack-2x { font-size: 2em }` doubles the em the SVG rules size against,
 * rendering the background icon twice as large as the gold's. `text-[1em]!`
 * restores the SVG-only geometry; keep it whenever `fa-stack-2x` is used.
 */
const FaStack = ({
  background,
  backgroundClassName,
  icon,
  iconClassName,
  inverse,
  className
}: FaStackProps) => (
  <span className={cn('fa-stack', className)}>
    <FontAwesomeIcon
      icon={background}
      className={cn('fa-stack-2x text-[1em]!', backgroundClassName)}
    />
    <FontAwesomeIcon
      icon={icon}
      inverse={inverse}
      className={cn('fa-stack-1x', iconClassName)}
    />
  </span>
);

export default FaStack;
