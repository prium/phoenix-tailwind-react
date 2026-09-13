import { Input } from '@hummingbirdui/react';
import TinymceEditor from 'components/base/TinymceEditor';

/** `+ProductDescription` in mixins/e-commerce/add-product/ProductDescription.pug */
const ProductDescriptionFields = () => {
  return (
    <>
      <h4 className="mb-4">Product Title</h4>
      <Input type="text" placeholder="Write title here..." className="mb-8" />
      <div className="mb-10">
        <h4 className="mb-4">Product Description</h4>
        <TinymceEditor
          options={{
            height: '15rem',
            placeholder: 'Write a description here...'
          }}
        />
      </div>
    </>
  );
};

export default ProductDescriptionFields;
