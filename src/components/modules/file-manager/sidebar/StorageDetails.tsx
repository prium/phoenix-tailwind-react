import {
  faChevronRight,
  faFile,
  faFilePdf,
  faMusic,
  faRectangleList,
  faVideo,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import spotIllustration45 from 'assets/img/spot-illustrations/45.png';
import spotIllustrationDark45 from 'assets/img/spot-illustrations/dark_45.png';
import { useState } from 'react';

interface StorageCategory {
  category: string;
  count: string;
  storage: string;
  icon: IconDefinition;
  /** literal classes — Tailwind cannot see `bg-${type}-subtle` */
  boxClass: string;
  iconClass: string;
}

const categories: StorageCategory[] = [
  {
    category: 'Images',
    count: '22k',
    storage: '13GB',
    icon: faFilePdf,
    boxClass: 'bg-primary-subtle',
    iconClass: 'text-primary-darker'
  },
  {
    category: 'Videos',
    count: '534',
    storage: '8.3GB',
    icon: faVideo,
    boxClass: 'bg-info-subtle',
    iconClass: 'text-info-darker'
  },
  {
    category: 'Audio',
    count: '55',
    storage: '4GB',
    icon: faMusic,
    boxClass: 'bg-warning-subtle',
    iconClass: 'text-warning-darker'
  },
  {
    category: 'Documents',
    count: '65k',
    storage: '15.5GB',
    icon: faFile,
    boxClass: 'bg-danger-subtle',
    iconClass: 'text-danger-darker'
  },
  {
    category: 'Others',
    count: '12k',
    storage: '5GB',
    icon: faRectangleList,
    boxClass: 'bg-success-subtle',
    iconClass: 'text-success-darker'
  }
];

/** Stacked meter segments, literal so Tailwind keeps the fractional widths. */
const segments = [
  { width: 'w-1/5', bar: 'bg-primary-light', value: 20 },
  { width: 'w-4/25', bar: 'bg-info-lighter', value: 16 },
  { width: 'w-9/50', bar: 'bg-warning-lighter', value: 18 },
  { width: 'w-3/25', bar: 'bg-danger-lighter', value: 12 },
  { width: 'w-[11%]', bar: 'bg-success-lighter', value: 11 }
];

/**
 * Gold `mixins/file-manager/FileManagerOffcanvas.pug` (storage details block).
 * `.collapse-indicator[aria-expanded]` is what rotates `.toggle-icon`, so the
 * anchor keeps the gold attributes instead of swapping the icon from state.
 */
const StorageDetails = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        className="btn collapse-indicator px-0 py-4 mt-4 flex flex-between-center"
        data-bs-toggle="collapse"
        href="#collapseStorageDetails"
        role="button"
        aria-expanded={open}
        aria-controls="collapseStorageDetails"
        onClick={event => {
          event.preventDefault();
          setOpen(prev => !prev);
        }}
      >
        <h5 className="mb-0 text-highlight">Storage details</h5>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="toggle-icon storate-details-toggle text-md text-primary"
        />
      </a>
      <div className="progress-stacked h-2.5">
        {segments.map(segment => (
          <div
            key={segment.bar}
            className={cn('progress h-full', segment.width)}
            role="progressbar"
            aria-label="Segment one"
            aria-valuenow={segment.value}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className={cn('progress-bar', segment.bar)} />
          </div>
        ))}
      </div>
      <h6 className="text-default mt-2 mb-0">
        Used: 45.8 GB (92%) of the 50 GB.
      </h6>
      <div
        className={cn('collapse', { show: open })}
        id="collapseStorageDetails"
      >
        <div className="pt-6">
          {categories.map((item, index) => (
            <div
              key={item.category}
              className={cn('flex items-center gap-2', {
                'mb-3': index !== categories.length - 1
              })}
            >
              <div className={cn('square-icon-box', item.boxClass)}>
                <FontAwesomeIcon icon={item.icon} className={item.iconClass} />
              </div>
              <div>
                <h6 className="text-default">{item.category}</h6>
                {/* gold reads `item.storate`, so the size never prints — kept verbatim */}
                <h6 className="mb-0 text-default font-semibold">
                  {item.count} Files - Used
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6" />
      <div className="text-center">
        <img
          src={spotIllustration45}
          alt=""
          width={98}
          className="dark:hidden mx-auto"
        />
        <img
          src={spotIllustrationDark45}
          alt=""
          width={98}
          className="hidden dark:block mx-auto"
        />
        <h5 className="mt-4 text-default font-black">Upgrade to Pro</h5>
        <h6 className="mb-4 text-subtle font-normal">
          Expand your storage capacity with our upgraded storage options.
        </h6>
        <Button variant="primary" size="sm" className="w-full">
          Upgrade Now
        </Button>
      </div>
    </>
  );
};

export default StorageDetails;
