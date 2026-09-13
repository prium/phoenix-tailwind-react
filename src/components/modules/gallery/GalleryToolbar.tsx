import type { GalleryView } from 'data/gallery';
import type { ReactNode } from 'react';
import GalleryLayoutMenu from './GalleryLayoutMenu';

interface GalleryToolbarProps {
  view: GalleryView;
  /** the filter nav — `GalleryTabs` on every page but the slider */
  tabs: ReactNode;
}

/**
 * The `div.md:flex.lg:block.xl:flex` row that carries the layout menu and the
 * filter nav on every gallery page except the album — see
 * `../phoenix-tailwind/src/pug/apps/gallery/gallery-column.pug`.
 */
const GalleryToolbar = ({ view, tabs }: GalleryToolbarProps) => (
  <div className="md:flex lg:block xl:flex justify-between gap-6 my-6">
    <GalleryLayoutMenu
      view={view}
      className="mb-4 md:mb-0 lg:mb-4 xl:mb-0 md:order-1 lg:order-0 xl:order-1"
    />
    {tabs}
  </div>
);

export default GalleryToolbar;
