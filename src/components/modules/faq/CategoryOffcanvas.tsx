import { cn } from '@hummingbirdui/react';
import { useFaqTabContext } from 'providers/FaqTabProvider';
import CategoryTab from './CategoryTab';
import SubCategoryTab from './SubCategoryTab';

/**
 * Gold: `div#faq-offcanvas.offcanvas-md.offcanvas-start`. `offcanvas-md` is a
 * pure-CSS responsive offcanvas (`offcanvas` below `md`, `offcanvas-static`
 * from `md` up), so a single DOM serves both — only the `show` class is
 * state-driven, and the gold sets `data-bs-backdrop="false"`.
 */
const CategoryOffcanvas = () => {
  const { isOpenOffcanvas } = useFaqTabContext();
  return (
    <div
      id="faq-offcanvas"
      data-vertical-category-offcanvas="data-vertical-category-offcanvas"
      className={cn(
        'offcanvas-md offcanvas-start bg-default z-5 w-full overflow-auto md:overflow-visible',
        { show: isOpenOffcanvas }
      )}
    >
      <CategoryTab />
      <SubCategoryTab />
    </div>
  );
};

export default CategoryOffcanvas;
