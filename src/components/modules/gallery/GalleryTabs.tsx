import { cn } from '@hummingbirdui/react';
import type { GalleryTab } from 'data/gallery';

interface GalleryTabsProps {
  tabs: GalleryTab[];
  activeFilter: string;
  onSelect: (filter: string) => void;
  /** classes on the `ul`; the gold varies them per page */
  className?: string;
  /** classes on every `a.nav-link` — a function when they differ per tab */
  linkClassName?: string | ((tab: GalleryTab, index: number) => string);
  id?: string;
  /** the gold wraps the filter nav in a plain `div.scrollbar` */
  scrollable?: boolean;
}

/**
 * Gold `GalleryTabs` mixin —
 * `../phoenix-tailwind/src/pug/mixins/gallery/GalleryTabs.pug`; the album and
 * slider pages reuse the same `ul.nav.nav-underline` with their own classes.
 */
const GalleryTabs = ({
  tabs,
  activeFilter,
  onSelect,
  className,
  linkClassName = 'cursor-pointer',
  id,
  scrollable = true
}: GalleryTabsProps) => {
  const nav = (
    <ul id={id} className={cn('nav nav-underline', className)}>
      {tabs.map((tab, index) => (
        <li className="nav-item" key={tab.filter}>
          <a
            className={cn(
              'nav-link',
              typeof linkClassName === 'function'
                ? linkClassName(tab, index)
                : linkClassName,
              { active: activeFilter === tab.filter }
            )}
            onClick={() => onSelect(tab.filter)}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return scrollable ? <div className="scrollbar">{nav}</div> : nav;
};

export default GalleryTabs;
