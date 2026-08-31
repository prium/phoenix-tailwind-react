import { Col, FloatingLabel, Input, Select } from '@hummingbirdui/react';

/** lead information fields of apps/crm/add-contact.pug (rendered inside `form.row.g-4`) */
const LeadInformationForm = () => {
  return (
    <>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingSelectOwner" label="Lead owner">
          <Select id="floatingSelectOwner">
            <option>Max Ernst</option>
            <option value="1">Ernst</option>
            <option value="2">Max</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputFirstname" label="First name">
          <Input
            type="text"
            id="floatingInputFirstname"
            placeholder="First name"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputLastname" label="Last name">
          <Input
            type="text"
            id="floatingInputLastname"
            placeholder="Last name"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputCompany" label="Company">
          <Input type="text" id="floatingInputCompany" placeholder="Company" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputTitle" label="Title">
          <Input type="text" id="floatingInputTitle" placeholder="title" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputEmail" label="Email">
          <Input type="text" id="floatingInputEmail" placeholder="email" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel
          htmlFor="floatingInputAlternativeEmail"
          label="Alternative Email"
        >
          <Input
            type="text"
            id="floatingInputAlternativeEmail"
            placeholder="alternative email"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputPhone" label="Phone">
          <Input
            type="tel"
            id="floatingInputPhone"
            placeholder="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputWebsite" label="Website">
          <Input type="text" id="floatingInputWebsite" placeholder="website" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputLinkedin" label="linkedin">
          <Input
            type="text"
            id="floatingInputLinkedin"
            placeholder="linkedin"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputSkype" label="Skype id">
          <Input type="text" id="floatingInputSkype" placeholder="skype" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputTwitter" label="Twitter">
          <Input type="text" id="floatingInputTwitter" placeholder="twitter" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel
          htmlFor="floatingInputEmployees"
          label="Number of employees"
        >
          <Input
            type="text"
            id="floatingInputEmployees"
            placeholder="employees"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingInputRevenue" label="Annual revenue">
          <Input type="text" id="floatingInputRevenue" placeholder="revenue" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingSelectIndustry" label="industry">
          <Select id="floatingSelectIndustry">
            <option>Large Enterprise</option>
            <option value="1">Manufacturing</option>
            <option value="2">Education</option>
            <option value="3">Technology</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingSelectStatus" label="Lead status">
          <Select id="floatingSelectStatus">
            <option>New</option>
            <option value="1">suspended</option>
            <option value="2">ongoing</option>
            <option value="3">Current</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingSelectLeadSource" label="lead source">
          <Select id="floatingSelectLeadSource">
            <option>Advertisement</option>
            <option value="1">Advertisement One</option>
            <option value="2">Advertisement Two</option>
            <option value="3">Consulting</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel htmlFor="floatingSelectRating" label="rating">
          <Select id="floatingSelectRating">
            <option>Active</option>
            <option value="1">Inactive</option>
            <option value="2">Active</option>
          </Select>
        </FloatingLabel>
      </Col>
    </>
  );
};

export default LeadInformationForm;
