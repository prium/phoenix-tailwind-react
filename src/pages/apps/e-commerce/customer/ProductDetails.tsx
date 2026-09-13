import ProductDescription from 'components/modules/e-commerce/ProductDescription';
import ProductDetailsTab from 'components/modules/e-commerce/ProductDetailsTab';
import { topElectronicProducts } from 'data/e-commerce/products';
import SimilarProducts from 'components/sliders/SimilarProducts';
import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { ecomBreadcrumbItems } from 'data/commonData';

const ProductDetails = () => {
  return (
    <div className="pt-8 mb-16">
      <Section small className="py-0">
        <PageBreadcrumb items={ecomBreadcrumbItems} className="mb-4" />
        <ProductDescription />
      </Section>

      <Section small className="py-0">
        <div className="mb-16">
          <ProductDetailsTab />
        </div>
      </Section>

      <Section className="py-0">
        <SimilarProducts products={topElectronicProducts} />
      </Section>
    </div>
  );
};

export default ProductDetails;
