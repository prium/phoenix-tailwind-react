import { Input, InputGroup } from '@hummingbirdui/react';
import { UilTimes } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import FormCollapse from 'components/common/FormCollapse';
import {
  availabiltyOptions,
  brandsOptions,
  campaignOptions,
  certificationOptions,
  colorFamilyOptions,
  deliveryOptions,
  displyOptions,
  warrantyOptions,
  warrantyTypeOptions
} from 'data/e-commerce/filterOptions';
import CheckboxItem, { CheckboxItemProps } from 'components/common/CheckboxItem';
import Rating from 'components/base/Rating';

const CheckboxGroup = ({
  title,
  options
}: {
  title: string;
  options: Omit<CheckboxItemProps, 'type'>[];
}) => (
  <FormCollapse title={title}>
    <div className="mb-3">
      {options.map(item => (
        <CheckboxItem
          name={item.name}
          value={item.value}
          label={item.label}
          key={item.value}
        />
      ))}
    </div>
  </FormCollapse>
);

/** Filter column of apps/e-commerce/landing/products-filter.pug */
const ProductFilterItems = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="mb-0">Filters</h3>
        <button type="button" className="btn lg:hidden p-0" onClick={handleClose}>
          <UilTimes fill="currentColor" size={16} />
        </button>
      </div>
      <CheckboxGroup title="Availability" options={availabiltyOptions} />
      <CheckboxGroup title="Color family" options={colorFamilyOptions} />
      <CheckboxGroup title="Brands" options={brandsOptions} />

      <FormCollapse title="Price range">
        <div className="flex justify-between mb-4">
          <InputGroup className="me-2">
            <Input type="text" placeholder="Min" aria-label="Min" />
            <Input type="text" placeholder="Max" aria-label="Max" />
          </InputGroup>
          <Button variant="phoenix" color="primary" className="px-4">
            Go
          </Button>
        </div>
      </FormCollapse>

      <FormCollapse title="Rating">
        {[5, 4, 3, 2, 1].map(rating => (
          <div
            className={rating === 1 ? 'flex items-center mb-5' : 'flex items-center mb-2.75'}
            key={rating}
          >
            <input
              type="radio"
              name="rating"
              value={rating}
              id={`rating-${rating}`}
              className="form-check-input me-4"
            />
            <Rating initialValue={rating} readonly iconClass="text-md me-1" />
            {rating < 5 && <p className="ms-1 mb-0 leading-none">&amp; above</p>}
          </div>
        ))}
      </FormCollapse>

      <CheckboxGroup title="Display type" options={displyOptions} />
      <CheckboxGroup title="Delivery" options={deliveryOptions} />
      <CheckboxGroup title="Campaign" options={campaignOptions} />
      <CheckboxGroup title="Warranty" options={warrantyOptions} />
      <CheckboxGroup title="Warranty Type" options={warrantyTypeOptions} />
      <CheckboxGroup title="Certification" options={certificationOptions} />
    </>
  );
};

export default ProductFilterItems;
