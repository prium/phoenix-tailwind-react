import InventoryTab from 'components/tabs/InventoryTab';

/** `+Pricing` in mixins/e-commerce/add-product/Pricing.pug */
const ProductInventory = () => {
  return (
    <>
      <h4 className="mb-4">Inventory</h4>
      <InventoryTab />
    </>
  );
};

export default ProductInventory;
