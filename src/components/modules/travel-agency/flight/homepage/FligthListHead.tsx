import { useState } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import FlightFilterModal from 'components/modals/FlightFilterModal';

const navItems = ['Cheapest', 'Fastest'];

/** `+FligthListHead` in mixins/travel-agency/flight/homepage/FlightListing.pug */
const FligthListHead = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Fastest');

  return (
    <>
      <div className="flex flex-between-center mb-4">
        <ul className="nav nav-pills" role="tablist">
          {navItems.map(item => (
            <li className="nav-item" role="presentation" key={item}>
              <button
                className={cn('nav-link', { active: activeTab === item })}
                type="button"
                role="tab"
                aria-selected={activeTab === item}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <Button
          type="button"
          variant="phoenix-secondary"
          className="text-nowrap px-6"
          onClick={() => setFilterModalOpen(true)}
        >
          <FontAwesomeIcon icon={faFilter} className="md:me-2" />
          <span className="hidden md:inline-block">Filters</span>
        </Button>
      </div>
      <FlightFilterModal
        show={filterModalOpen}
        handleModalClose={() => setFilterModalOpen(false)}
      />
    </>
  );
};

export default FligthListHead;
