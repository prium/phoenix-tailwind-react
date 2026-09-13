import { PropsWithChildren } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapsible, cn } from '@hummingbirdui/react';

interface FilterCollapseProps {
  id: string;
  title: string;
  /** gold puts `.text-base` on every h5 title except Baggage */
  titleClassName?: string;
  className?: string;
}

/**
 * Gold collapse section of the flight filter modal:
 * `a.btn.py-2.px-4.flex.flex-between-center.collapse-indicator.text-highlight.bg-subtle`
 * + `.collapse.show.p-4.pb-0` (mixins/travel-agency/flight/homepage/FlightFilters.pug)
 */
const FilterCollapse = ({
  id,
  title,
  titleClassName = 'text-base',
  className,
  children
}: PropsWithChildren<FilterCollapseProps>) => {
  return (
    <Collapsible defaultOpen className={className}>
      <Collapsible.Trigger asChild>
        <a
          className="btn py-2 px-4 flex flex-between-center collapse-indicator text-highlight bg-subtle"
          href={`#${id}`}
          role="button"
          onClick={e => e.preventDefault()}
        >
          <h5 className={cn('mb-0', titleClassName)}>{title}</h5>
          <FontAwesomeIcon icon={faChevronDown} className="toggle-icon" />
        </a>
      </Collapsible.Trigger>
      <Collapsible.Content id={id} className="p-4 pb-0">
        {children}
      </Collapsible.Content>
    </Collapsible>
  );
};

export default FilterCollapse;
