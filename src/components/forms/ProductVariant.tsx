import ReactSelect from 'components/base/ReactSelect';
import { Select, cn } from '@hummingbirdui/react';
import { Link } from 'react-router';

interface ProductVariantProps {
  title: string;
  className?: string;
  /** the gold puts `mb-4` on the second option's choices wrapper only */
  selectMenuClassName?: string;
}

/** one option block of `+VariantCard` (mixins/e-commerce/add-product/VariantCard.pug) */
const ProductVariant = ({
  title,
  className,
  selectMenuClassName
}: ProductVariantProps) => {
  return (
    <div className={className}>
      <div className="flex flex-wrap flex-between-center mb-2">
        <h5 className="text-highlight me-2">{title}</h5>
        <Link className="font-bold text-md" to="#!">
          Remove
        </Link>
      </div>
      <Select className="mb-4">
        <option value="size">Size</option>
        <option value="color">Color</option>
        <option value="weight">Weight</option>
        <option value="smell">Smell</option>
      </Select>
      {/* the gold's `.product-variant-select-menu > select[data-choices].mb-4` */}
      <div className={cn('product-variant-select-menu', selectMenuClassName)}>
        <ReactSelect
          className="mb-4"
          options={[
            { value: '4x6 in', label: '4x6 in' },
            { value: '9x6 in', label: '9x6 in' },
            { value: '11x8 in', label: '11x8 in' }
          ]}
          isMulti
          placeholder=""
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              height: '70px',
              alignItems: 'start'
            }),
            dropdownIndicator: baseStyles => ({
              ...baseStyles,
              display: 'none'
            })
          }}
        />
      </div>
    </div>
  );
};

export default ProductVariant;
