import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@hummingbirdui/react';
import FaStack from 'components/base/FaStack';

interface WidgetsSectionTitleProps {
  id?: string;
  title: string;
  subtitle: string;
  icon: IconDefinition;
  /** the gold's `data-fa-transform` on the foreground icon */
  transform?: string;
  className?: string;
}

/**
 * `+WidgetSectionTitle` in mixins/widgets/WidgetSectionTitle.pug.
 *
 * The gold writes the stack as raw `i.fa-stack-2x` spans, which FontAwesome's
 * SVG-with-JS bundle replaces; this app links the FA *webfont* sheet, whose
 * `.fa-stack-2x{font-size:2em}` renders that stack at 2x. `FaStack` bakes in
 * the compensation, so never hand-write `fa-stack-2x` here.
 */
const WidgetsSectionTitle = ({
  id,
  title,
  subtitle,
  icon,
  transform,
  className
}: WidgetsSectionTitleProps) => {
  return (
    <div className={cn('flex', className)} id={id}>
      {/* the gold's foreground class is the malformed `text-(--color-primary-subtle`,
          which Tailwind drops — so the glyph is FA's plain `fa-inverse` white. */}
      <FaStack
        className="me-2 -ms-1"
        background={faCircle}
        backgroundClassName="text-primary"
        icon={icon}
        iconTransform={transform}
        inverse
      />
      <div className="col">
        <h3 className="mb-0 text-primary relative font-bold">
          <span className="bg-default pe-2">{title}</span>
          <span className="border border-primary absolute top-1/2 -translate-y-1/2 w-full start-0 -z-1"></span>
        </h3>
        <p className="mb-0">{subtitle}</p>
      </div>
    </div>
  );
};

export default WidgetsSectionTitle;
