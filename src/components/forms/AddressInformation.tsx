import { Col, FloatingLabel, Input, Select } from '@hummingbirdui/react';

/** address information fields of apps/crm/add-contact.pug (rendered inside `form.row.g-4`) */
const AddressInformation = () => {
  return (
    <>
      <h4 className="mt-10">Address Information</h4>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputStreet" label="Street">
          <Input type="text" id="floatingInputStreet" placeholder="street" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingSelectCity" label="City">
          <Select id="floatingSelectCity">
            <option>Neo centrola</option>
            <option value="1">London</option>
            <option value="2">New York</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingSelectState" label="State">
          <Select id="floatingSelectState">
            <option>Qualimando</option>
            <option value="1">Sovereign</option>
            <option value="2">Northeastern United States</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6}>
        <FloatingLabel htmlFor="floatingSelectCountry" label="Country">
          <Select id="floatingSelectCountry">
            <option>United Empire of Brekania</option>
            <option value="1">UK</option>
            <option value="2">USA</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6}>
        <FloatingLabel htmlFor="floatingInputZipcode" label="zip code">
          <Input type="text" id="floatingInputZipcode" placeholder="zip code" />
        </FloatingLabel>
      </Col>
    </>
  );
};

export default AddressInformation;
