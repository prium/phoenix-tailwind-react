import Section from 'components/base/Section';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CheckoutSummaryCard from 'components/modules/e-commerce/checkout/CheckoutSummaryCard';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Input, Row, Select } from '@hummingbirdui/react';

const Label = ({ htmlFor, children }: { htmlFor: string; children: string }) => (
  <label
    htmlFor={htmlFor}
    className="form-label text-base text-highlight ps-0 normal-case"
  >
    {children}
  </label>
);

/** apps/e-commerce/landing/shipping-info.pug (+ShippingInfo mixin) */
const ShippingInfo = () => {
  return (
    <div className="pt-8 mb-16">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-8">Check out</h2>
        <Row className="justify-between gy-10 gx-8">
          <Col lg={7}>
            <h3 className="mb-8">Shipping Info</h3>
            <Row className="g-6">
              <Col xs={12}>
                <Label htmlFor="inputName">Full name</Label>
                <Input id="inputName" type="text" placeholder="Full name" />
              </Col>
              <Col md={6}>
                <Label htmlFor="inputEmail">Email</Label>
                <Input id="inputEmail" type="email" placeholder="Email" />
              </Col>
              <Col md={6}>
                <Label htmlFor="inputPhone">Phone</Label>
                <Input id="inputPhone" type="tel" placeholder="+1234567890" />
              </Col>
              <Col xs={12}>
                <Label htmlFor="inputAddress1">Address line 1</Label>
                <Input id="inputAddress1" type="text" placeholder="Address line 1" />
              </Col>
              <Col xs={12}>
                <Label htmlFor="inputAddress2">Address line 2</Label>
                <Input id="inputAddress2" type="text" placeholder="Address line 2" />
              </Col>
              <Col md={4}>
                <Label htmlFor="inputCity">City</Label>
                <Select id="inputCity" className="text-emphasis" defaultValue="van-nuys">
                  <option value="van-nuys">Van Nuys</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                  <option value="houston">Houston</option>
                </Select>
              </Col>
              <Col md={4}>
                <Label htmlFor="inputState">State</Label>
                <Select id="inputState" className="text-emphasis" defaultValue="california">
                  <option value="california">California</option>
                  <option value="alaska">Alaska</option>
                  <option value="alabama">Alabama</option>
                  <option value="florida">Florida</option>
                </Select>
              </Col>
              <Col md={4}>
                <Label htmlFor="inputZipCode">Zip code</Label>
                <Input
                  id="inputZipCode"
                  type="number"
                  className="number-arrows-none"
                  placeholder="Zip code"
                />
              </Col>
              <Col md={4} className="mb-4">
                <Label htmlFor="inputCountry">Country</Label>
                <Select id="inputCountry" className="text-emphasis" defaultValue="usa">
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="aus">AUS</option>
                  <option value="nz">NZ</option>
                </Select>
              </Col>
              <Col xs={12}>
                <Button variant="primary" className="px-14 sm:px-20 me-2" type="submit">
                  Save
                </Button>
                <Button
                  variant="phoenix"
                  color="secondary"
                  className="whitespace-nowrap"
                  type="button"
                >
                  Exit Without Saving
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={5} xl={{ span: 4, offset: 1 }}>
            <CheckoutSummaryCard />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ShippingInfo;
