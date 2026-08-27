import ReactSelect from 'components/base/ReactSelect';
import { Select } from '@hummingbirdui/react';
import { Link } from 'react-router';

interface ProductVariantProps {  
  title: string;
  className?: string;
}

const ProductVariant = ({ title ,className }: ProductVariantProps) => {
  return (
    <div className={className}>
      <div className="flex flex-wrap flex-between-center gap-2 mb-2">
        <h5 className="mb-0 text-highlight">{title}</h5>
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
      <ReactSelect
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
  );
};

export default ProductVariant;
