import { Nav, cn } from '@hummingbirdui/react';
import FaqCategoryCard from 'components/modules/faq/FaqCategoryCard';
import { faqCategories } from 'data/faq';
import { useFaqTabContext } from 'providers/FaqTabProvider';

/**
 * Gold: `div#faq-subcategory-tab.faq-subcategory-tab.nav.nav-tabs` — a `div`
 * carrying the nav classes whose children are `div.nav-item`, so `Nav` is
 * rendered `asChild`. The "Popular Categories" filter only adds `hidden` to the
 * non-matching items, it never reorders them (their `mb-4`/`mb-0` stay put).
 */
const SubCategoryTab = () => {
  const { activeKey } = useFaqTabContext();

  return (
    <Nav
      variant="tabs"
      asChild
      className="faq-subcategory-tab w-9/10 sm:w-3/4 md:w-full mx-auto mb-6"
    >
      <div id="faq-subcategory-tab">
        {faqCategories.map((category, index) => (
          <div
            key={category.id}
            role="presentation"
            className={cn(
              'nav-item w-full',
              category.category,
              index !== faqCategories.length - 1 ? 'mb-4' : 'mb-0',
              { hidden: activeKey !== 'all' && category.category !== activeKey }
            )}
          >
            <FaqCategoryCard category={category} />
          </div>
        ))}
      </div>
    </Nav>
  );
};

export default SubCategoryTab;
