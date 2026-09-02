import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from '@hummingbirdui/react';
import { FaqCategory } from 'data/faq';
import { useFaqTabContext } from 'providers/FaqTabProvider';

/**
 * Gold: `button.category.nav-link.btn.bg-soft` inside `.faq-subcategory-tab`.
 * Clicking one selects its pane and closes the below-`md` offcanvas, as the
 * gold's `faq-tab.js` does.
 */
const FaqCategoryCard = ({ category }: { category: FaqCategory }) => {
  const { subCategoryActiveKey, setSubCategoryActiveKey, setIsOpenOffcanvas } =
    useFaqTabContext();
  const active = subCategoryActiveKey === category.id;
  return (
    <Nav.Link asChild active={active}>
      <button
        id={`tab-${category.id}`}
        type="button"
        role="tab"
        aria-selected={active}
        className="category btn bg-soft w-full px-4 pt-6 pb-4 text-base"
        onClick={() => {
          setSubCategoryActiveKey(category.id);
          setIsOpenOffcanvas(false);
        }}
      >
        <FontAwesomeIcon
          icon={category.icon}
          className="category-icon text-muted text-xl"
        />
        <span className="block text-xl font-extrabold leading-none text-default mt-3.25 mb-2">
          {category.name}
        </span>
        <span className="block text-default font-normal mb-0 text-md leading-sm">
          {category.description}
        </span>
      </button>
    </Nav.Link>
  );
};

export default FaqCategoryCard;
