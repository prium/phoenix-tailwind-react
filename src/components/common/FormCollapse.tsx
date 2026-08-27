import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapsible, cn } from '@hummingbirdui/react';
import { PropsWithChildren, useState } from 'react';

interface FormCollapseProps {
  title: string;
  defaultOpen?: boolean;
  className?: string;
}

/** `a.btn.px-0.block.collapse-indicator` + `.collapse` (products-filter.pug) */
const FormCollapse = ({
  title,
  defaultOpen = true,
  className,
  children
}: PropsWithChildren<FormCollapseProps>) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <button
          type="button"
          className={cn('btn px-0 block collapse-indicator w-full', className, {
            collapsed: !open
          })}
          aria-expanded={open}
        >
          <div className="flex items-center justify-between w-full">
            <div className="text-base text-highlight">{title}</div>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="toggle-icon text-soft"
            />
          </div>
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div>{children}</div>
      </Collapsible.Content>
    </Collapsible>
  );
};

export default FormCollapse;
