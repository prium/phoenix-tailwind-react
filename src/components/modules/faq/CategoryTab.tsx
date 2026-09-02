import { Nav } from '@hummingbirdui/react';
import { useFaqTabContext } from 'providers/FaqTabProvider';

/**
 * Gold: the `ul.faq-category-tab.nav.nav-underline` of
 * `../phoenix-tailwind/src/pug/pages/faq/faq-tab.pug`. Selecting a filter only
 * hides the non-matching `.nav-item`s (see the gold's `faq-tab.js`).
 */
export const categoryFilters = [
  { id: 'popular', label: 'Popular Categories' },
  { id: 'all', label: 'All Categories' }
];

const CategoryTab = () => {
  const { activeKey, setActiveKey } = useFaqTabContext();
  return (
    <Nav
      variant="underline"
      className="faq-category-tab mb-18 md:mb-7.5 pb-4 pt-2 w-full sm:w-3/4 md:w-full mx-auto"
    >
      {categoryFilters.map(filter => (
        <Nav.Item className="nav-item" key={filter.id}>
          <Nav.Link asChild active={activeKey === filter.id}>
            <button
              id={filter.id}
              type="button"
              className="font-semibold text-base"
              data-category-filter={filter.id}
              onClick={() => setActiveKey(filter.id)}
            >
              {filter.label}
            </button>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default CategoryTab;
