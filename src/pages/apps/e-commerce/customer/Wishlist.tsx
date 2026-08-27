import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import EcomWishlistTable from 'components/tables/EcomWishlistTable';
import { defaultBreadcrumbItems } from 'data/commonData';

const Wishlist = () => {
  return (
    <div className="pt-8 mb-16">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-8">
          Wishlist
          <span className="text-subtle font-normal ms-2">(43)</span>
        </h2>
        <EcomWishlistTable />
      </Section>
    </div>
  );
};

export default Wishlist;
