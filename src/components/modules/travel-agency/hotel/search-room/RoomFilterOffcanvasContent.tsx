import { UilTimes } from '@iconscout/react-unicons';
import { Col, FloatingLabel, Input, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import Unicon from 'components/base/Unicon';
import NouiSlider from 'components/base/NouiSlider';
import RoomFilterActions from './RoomFilterActions';
import RoomFilterSearch from './RoomFilterSearch';
import {
  amenitiesOptions,
  bedTypeOptions,
  RoomCategoryOptions
} from 'data/travel-agency/admin/searchRoom';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState
} from 'react';
import RoomFilterCollapseItem from './RoomFilterCollapseItem';
import { searchRoomCollapsibleItems } from 'data/travel-agency/customer/hotel';

interface RoomFilterOffcanvasContentProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

interface ExpandedStates {
  priceRange: boolean;
  adult: boolean;
  child: boolean;
  bedroom: boolean;
  numberOfBed: boolean;
  bathroom: boolean;
  roomCategory: boolean;
  bedType: boolean;
  amenities: boolean;
}

/** gold `+RoomFilterOffcanvas` (mixins/travel-agency/room-search/RoomFilterOffcanvas.pug) */
const RoomFilterOffcanvasContent = ({
  setOpen
}: RoomFilterOffcanvasContentProps) => {
  const [priceRange, setPriceRange] = useState([699, 1299]);
  const [expandedStates, setExpandedState] = useState<ExpandedStates>({
    priceRange: true,
    adult: true,
    child: true,
    bedroom: true,
    numberOfBed: true,
    bathroom: true,
    roomCategory: false,
    bedType: false,
    amenities: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange(prev =>
      name === 'price-range-min'
        ? [parseInt(value) || 0, prev[1]]
        : [prev[0], parseInt(value) || 0]
    );
  };

  const allExpanded = useMemo(() => {
    return Object.values(expandedStates).some(value => value) ? false : true;
  }, [expandedStates]);

  const handleToggleCollapse = (key: keyof ExpandedStates) => {
    setExpandedState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCollapseAll = () => {
    const items = Object.keys(expandedStates).reduce((acc, key) => {
      acc[key as keyof ExpandedStates] = allExpanded;
      return acc;
    }, {} as ExpandedStates);
    setExpandedState(items);
  };

  return (
    <div className="pe-1">
      <div className="flex items-center">
        <h3 className="text-highlight">Filters</h3>
        <Button
          variant="phoenix-secondary"
          className="px-4 ms-auto me-2 xl:me-0"
          onClick={toggleCollapseAll}
        >
          {allExpanded ? 'Expand' : 'Collapse'} all
        </Button>
        <Button
          className="xl:hidden p-0"
          onClick={() => setOpen && setOpen(false)}
        >
          <Unicon icon={UilTimes} size={16} fill="currentColor" lineBox />
        </Button>
      </div>

      <RoomFilterCollapseItem
        title="Price Range"
        onToggle={() => handleToggleCollapse('priceRange')}
        collapseStatus={expandedStates.priceRange}
        contentClassName="border-b pb-6 pt-1"
      >
        <NouiSlider
          className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle bg-primary-subtle px-2 mb-4"
          options={{
            range: { min: 500, max: 2000 },
            start: [699, 1299],
            connect: true
          }}
          onChange={vals => setPriceRange(vals.map(v => Math.round(Number(v))))}
        />
        <Row className="g-2">
          <Col xs={6}>
            <FloatingLabel htmlFor="price-range-min" label="Min">
              <Input
                type="number"
                id="price-range-min"
                name="price-range-min"
                placeholder="Min"
                className="input-spin-none"
                value={priceRange[0]}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
          <Col xs={6}>
            <FloatingLabel htmlFor="price-range-max" label="Max">
              <Input
                type="number"
                id="price-range-max"
                name="price-range-max"
                placeholder="Max"
                className="input-spin-none"
                value={priceRange[1]}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
      </RoomFilterCollapseItem>

      {searchRoomCollapsibleItems.map(item => (
        <RoomFilterCollapseItem
          key={item.key}
          title={item.title}
          collapseStatus={expandedStates[item.key as keyof ExpandedStates]}
          onToggle={() =>
            handleToggleCollapse(item.key as keyof ExpandedStates)
          }
        >
          <RoomFilterActions id={item.key} />
        </RoomFilterCollapseItem>
      ))}

      <RoomFilterCollapseItem
        title="Room Category"
        collapseStatus={expandedStates.roomCategory}
        onToggle={() => handleToggleCollapse('roomCategory')}
      >
        <RoomFilterSearch items={RoomCategoryOptions} />
      </RoomFilterCollapseItem>

      <RoomFilterCollapseItem
        title="Bed Type"
        collapseStatus={expandedStates.bedType}
        onToggle={() => handleToggleCollapse('bedType')}
      >
        <RoomFilterSearch items={bedTypeOptions} />
      </RoomFilterCollapseItem>

      <RoomFilterCollapseItem
        title="Amenities"
        collapseStatus={expandedStates.amenities}
        contentClassName=""
        onToggle={() => handleToggleCollapse('amenities')}
      >
        <RoomFilterSearch items={amenitiesOptions} />
      </RoomFilterCollapseItem>

      <div className="sticky bottom-0 z-1020 bg-default pt-6 pb-6 xl:pb-0">
        <Button variant="phoenix-secondary" className="me-2">
          Reset
        </Button>{' '}
        <Button variant="primary" className="px-12">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default RoomFilterOffcanvasContent;
