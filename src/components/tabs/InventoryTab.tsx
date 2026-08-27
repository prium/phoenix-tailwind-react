import { Col, Input, Row, Select, Tabs, cn } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import { Link } from 'react-router';
import ReactSelect from 'components/base/ReactSelect';
import { faCheck, faRotate } from '@fortawesome/free-solid-svg-icons';

type NavItemType = {
  label: string;
  icon: string;
  value: string;
};

const options = [
  { value: 'canada', label: 'Canada' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'united-kingdom', label: 'United Kingdom' },
  { value: 'united-states-of-america', label: 'United States of America' }
];

const navItems: NavItemType[] = [
  { label: 'Pricing', value: 'pricing', icon: 'tag' },
  { label: 'Restock', value: 'restock', icon: 'package' },
  { label: 'Shipping', value: 'shipping', icon: 'truck' },
  { label: 'Global Delivery', value: 'global-delivery', icon: 'globe' },
  { label: 'Attributes', value: 'attributes', icon: 'sliders' },
  { label: 'Advanced', value: 'advanced', icon: 'lock' }
];

const RadioItem = ({
  id,
  name,
  label,
  defaultChecked,
  className
}: {
  id: string;
  name: string;
  label: React.ReactNode;
  defaultChecked?: boolean;
  className?: string;
}) => (
  <div className={cn('form-check', className)}>
    <input
      type="radio"
      id={id}
      name={name}
      className="form-check-input"
      defaultChecked={defaultChecked}
    />
    <label
      htmlFor={id}
      className="form-check-label text-base text-default flex items-center"
    >
      {label}
    </label>
  </div>
);

const CheckItem = ({
  id,
  label,
  defaultChecked,
  className
}: {
  id: string;
  label: string;
  defaultChecked?: boolean;
  className?: string;
}) => (
  <div className={cn('form-check', className)}>
    <input
      type="checkbox"
      id={id}
      className="form-check-input"
      defaultChecked={defaultChecked}
    />
    <label htmlFor={id} className="form-check-label text-default text-base">
      {label}
    </label>
  </div>
);

/** `+Pricing` (Inventory) in phoenix-tailwind mixins/e-commerce/add-product/Pricing.pug */
const InventoryTab = () => {
  return (
    <Tabs defaultValue="pricing">
      <Row className="g-0 border-y">
        <Col sm={4}>
          <Tabs.List
            variant="default"
            className="sm:flex-col border-b sm:border-b-0 sm:border-e text-md vertical-tab h-full justify-between"
          >
            {navItems.map((item, index) => (
              <Tabs.Trigger
                key={item.value}
                value={item.value}
                className={cn(
                  'text-center sm:text-start cursor-pointer outline-none sm:flex sm:items-center',
                  { 'border-e sm:border-e-0 sm:border-b': index !== navItems.length - 1 }
                )}
              >
                <FeatherIcon
                  icon={item.icon}
                  size={16}
                  className="sm:me-2 nav-icons"
                />
                <span className="hidden sm:inline">{item.label}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Col>

        <Col sm={8}>
          <div className="tab-content py-4 sm:ps-6 h-full">
            <Tabs.Content value="pricing">
              <h4 className="mb-4 sm:hidden">Pricing</h4>
              <Row className="g-4">
                <Col xs={12} lg={6}>
                  <h5 className="mb-2 text-highlight">Regular price</h5>
                  <Input type="text" placeholder="$$$" />
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="mb-2 text-highlight">Sale price</h5>
                  <Input type="text" placeholder="$$$" />
                </Col>
              </Row>
            </Tabs.Content>

            <Tabs.Content value="restock" className="h-full">
              <div className="flex flex-col h-full">
                <h5 className="mb-4 text-highlight">Add to Stock</h5>
                <Row className="g-4 flex-1 mb-6">
                  <Col sm={7}>
                    <Input
                      type="number"
                      placeholder="Quantity"
                      className="input-spin-none"
                    />
                  </Col>
                  <Col sm>
                    <Button variant="primary" type="button">
                      <FontAwesomeIcon icon={faCheck} className="me-1 text-sm" />
                      Confirm
                    </Button>
                  </Col>
                </Row>
                <table>
                  <thead>
                    <tr>
                      <th className="w-50" />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-highlight font-bold py-1">
                        Product in stock now:
                      </td>
                      <td className="text-subtle font-semibold py-1">
                        $1,090
                        <button type="button" className="btn p-0">
                          <FontAwesomeIcon
                            icon={faRotate}
                            className="text-default/60 ms-1"
                          />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-highlight font-bold py-1">
                        Product in transit:
                      </td>
                      <td className="text-subtle font-semibold py-1">5000</td>
                    </tr>
                    <tr>
                      <td className="text-highlight font-bold py-1">
                        Last time restocked:
                      </td>
                      <td className="text-subtle font-semibold py-1">
                        30th June, 2021
                      </td>
                    </tr>
                    <tr>
                      <td className="text-highlight font-bold py-1">
                        Total stock over lifetime:
                      </td>
                      <td className="text-subtle font-semibold py-1">20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tabs.Content>

            <Tabs.Content value="shipping" className="h-full">
              <div className="flex flex-col h-full">
                <h5 className="mb-4 text-highlight">Shipping Type</h5>
                <div className="flex-1">
                  <div className="mb-6">
                    <RadioItem
                      id="fullfilledBySeller"
                      name="shippingRadio"
                      label="Fullfilled by Seller"
                      className="mb-1"
                    />
                    <div className="ps-6">
                      <p className="text-muted text-md mb-0">
                        You’ll be responsible for product delivery. <br />
                        Any damage or delay during shipping may cost you a
                        Damage fee.
                      </p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <RadioItem
                      id="fullfilledByPhoenix"
                      name="shippingRadio"
                      defaultChecked
                      className="mb-1"
                      label={
                        <>
                          Fullfilled by Phoenix
                          <Badge
                            variant="phoenix"
                            color="warning"
                            className="text-sm ms-2"
                          >
                            Recommended
                          </Badge>
                        </>
                      }
                    />
                    <div className="ps-6">
                      <p className="text-muted text-md mb-0">
                        Your product, Our responsibility.
                        <br />
                        For a measly fee, we will handle the delivery process
                        for you.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-md font-semibold mb-0">
                  See our{' '}
                  <a className="font-bold" href="#!">
                    Delivery terms and conditions{' '}
                  </a>
                  for details.
                </p>
              </div>
            </Tabs.Content>

            <Tabs.Content value="global-delivery">
              <h5 className="mb-4 text-highlight">Global Delivery</h5>
              <div className="mb-4">
                <RadioItem
                  id="worldwideDelivery"
                  name="deliveryRadio"
                  label="Worldwide delivery"
                />
                <div className="ps-6">
                  <p className="text-md mb-0 text-muted">
                    Only available with Shipping method:{' '}
                    <Link to="#!">Fullfilled by Phoenix</Link>
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <RadioItem
                  id="selectedCountry"
                  name="deliveryRadio"
                  label="Selected Countries"
                  defaultChecked
                />
                <div className="ps-6 max-w-87.5">
                  <ReactSelect
                    options={options}
                    isMulti
                    placeholder="Type Country name"
                  />
                </div>
              </div>
              <div>
                <RadioItem
                  id="localDelivery"
                  name="deliveryRadio"
                  label="Local delivery"
                />
                <p className="text-md ms-6 mb-0 text-muted">
                  Deliver to your country of residence{' '}
                  <Link to="#!">Change profile address</Link>
                </p>
              </div>
            </Tabs.Content>

            <Tabs.Content value="attributes">
              <h5 className="mb-4 text-highlight">Attributes</h5>
              <CheckItem id="fragileCheck" label="Fragile Product" />
              <CheckItem id="biodegradableCheck" label="Biodegradable" />
              <div className="mb-4">
                <CheckItem
                  id="frozenCheck"
                  label="Frozen Product"
                  defaultChecked
                  className="mb-0"
                />
                <Input
                  type="text"
                  className="ms-6.5 w-87.5"
                  placeholder="Max. allowed Temperature"
                />
              </div>
              <CheckItem
                id="productCheck"
                label="Expiry Date of Product"
                defaultChecked
                className="mb-0"
              />
              <Input
                type="date"
                placeholder="d/m/y"
                className="inventory-attributes w-87.5 ms-6.5"
              />
            </Tabs.Content>

            <Tabs.Content value="advanced">
              <h5 className="mb-4 text-highlight">Advanced</h5>
              <Row className="g-4">
                <Col xs={12} lg={6}>
                  <h5 className="mb-2 text-highlight">Product ID Type</h5>
                  <Select>
                    <option value="isbn">ISBN</option>
                    <option value="upc">UPC</option>
                    <option value="ean">EAN</option>
                    <option value="jan">JAN</option>
                  </Select>
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="mb-2 text-highlight">Product ID</h5>
                  <Input type="text" placeholder="ISBN Number" />
                </Col>
              </Row>
            </Tabs.Content>
          </div>
        </Col>
      </Row>
    </Tabs>
  );
};

export default InventoryTab;
