import { cn } from '@hummingbirdui/react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useState } from 'react';
import Button from 'components/base/Button';

interface PriceTierFormProps {
  id: string;
  name: string;
  className?: string;
  // eslint-disable-next-line
  methods?: any;
}

/** gold `+PriceTierForm` (mixins/travel-agency/common/PriceTierForm.pug) */
const PriceTierForm = ({
  id,
  name,
  className = 'mb-4',
  methods
}: PriceTierFormProps) => {
  const { formData, setFormData } = methods ?? {};
  const [active, setActive] = useState(false);
  const [paid, setPaid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setFormData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked
      });
    }
    setActive(e.target.checked);
  };

  return (
    <div
      className={cn('form-price-tier border p-4 rounded-md', className, {
        active
      })}
    >
      <div className="sm:flex items-center gap-4">
        <div className="form-check form-switch mb-0">
          <input
            className="form-check-input"
            id={id}
            type="checkbox"
            name={id}
            checked={active}
            onChange={handleChange}
          />
          <label
            className="form-check-label text-base font-bold text-default ms-2"
            htmlFor={id}
          >
            {name}
          </label>
        </div>
        <div className="pricings ms-auto mt-2 sm:mt-0 leading-0">
          <div className="form-check-inline me-4 mb-0">
            <input
              className="form-check-input"
              type="radio"
              id={`${id}-free`}
              name={`${name}-radio`}
              value="free"
              checked={!paid}
              onChange={() => setPaid(false)}
            />
            <label className="form-check-label" htmlFor={`${id}-free`}>
              Free
            </label>
          </div>
          <div className="form-check-inline me-0 mb-0">
            <input
              className="form-check-input"
              type="radio"
              id={`${id}-paid`}
              name={`${name}-radio`}
              value="paid"
              checked={paid}
              onChange={() => setPaid(true)}
            />
            <label className="form-check-label" htmlFor={`${id}-paid`}>
              Paid
            </label>
          </div>
        </div>
      </div>
      <div className={cn('collapse', { show: active && paid })}>
        <div className="p-6 bg-primary-subtle rounded-lg mt-4">
          {[1, 2, 3].map(option => (
            <div className="form-check mb-6" key={option}>
              <input
                className="form-check-input"
                id={`${id}-option${option}`}
                type="checkbox"
              />
              <label
                className="form-check-label font-normal text-base font-semibold"
                htmlFor={`${id}-option${option}`}
              >
                Option {option}
              </label>
            </div>
          ))}
          <Button variant="link" className="p-0">
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Additional Condition
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceTierForm;
