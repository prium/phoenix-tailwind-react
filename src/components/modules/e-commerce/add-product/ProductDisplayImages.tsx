import Dropzone from 'components/base/Dropzone';

/** `+DisplayImage` in mixins/e-commerce/add-product/DisplayImage.pug */
const ProductDisplayImages = () => {
  return (
    <>
      <h4 className="mb-4">Display images</h4>
      <Dropzone
        className="p-0 mb-8"
        // the gold prompt here is plain 16px (`dz-message text-subtle/85`)
        messageClassName=""
        accept={{
          'image/*': ['.png', '.gif', '.jpeg', '.jpg']
        }}
      />
    </>
  );
};

export default ProductDisplayImages;
