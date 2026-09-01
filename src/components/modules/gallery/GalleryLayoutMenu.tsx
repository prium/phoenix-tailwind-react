import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, cn } from '@hummingbirdui/react';
import { galleryLayoutMenuItems, type GalleryView } from 'data/gallery';
import { Link } from 'react-router';

interface GalleryLayoutMenuProps {
  view: GalleryView;
  className?: string;
}

/**
 * Gold `GalleryLayoutMenu` mixin —
 * `../phoenix-tailwind/src/pug/mixins/gallery/GalleryLayoutMenu.pug`.
 * The anchors are the buttons themselves (`a.btn.btn-phoenix-secondary.btn-square`).
 */
const GalleryLayoutMenu = ({ view, className }: GalleryLayoutMenuProps) => (
  <div className={cn('flex gap-2', className)}>
    {galleryLayoutMenuItems.map(item => (
      <Tooltip key={item.view}>
        <Tooltip.Trigger asChild>
          <Link
            to={item.link}
            className={cn('btn btn-phoenix-secondary btn-square', {
              'border-primary text-primary': view === item.view
            })}
          >
            <FontAwesomeIcon icon={item.icon} />
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Content side="top">{item.title}</Tooltip.Content>
      </Tooltip>
    ))}
  </div>
);

export default GalleryLayoutMenu;
