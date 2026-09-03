import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const basicFormCode = `
<form>
  <Field className="mb-4">
    <Field.Label htmlFor="formGroupName">Name</Field.Label>
    <Input id="formGroupName" type="text" placeholder="Name" />
  </Field>

  <Field className="mb-4">
    <Field.Label htmlFor="formGroupEmail">Email address</Field.Label>
    <Input id="formGroupEmail" type="email" placeholder="name@example.com" />
    <Field.Text>We'll never share your email with anyone else.</Field.Text>
  </Field>

  <Field className="mb-4">
    <Field.Label htmlFor="formGroupPassword">Password</Field.Label>
    <Input id="formGroupPassword" type="password" placeholder="Password" />
  </Field>

  <Field className="mb-4">
    <Field.Label htmlFor="formGroupGender">Gender</Field.Label>
    <Select id="formGroupGender" defaultValue="">
      <option value="">Select your gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </Select>
  </Field>

  <RadioGroup name="accountType" defaultValue="personal" className="mb-4">
    <Radio value="personal" label="Personal Account" />
    <Radio value="business" label="Business Account" />
  </RadioGroup>

  <Field className="mb-4">
    <Field.Label htmlFor="imageUpload">Upload image</Field.Label>
    <Input id="imageUpload" type="file" />
  </Field>

  <Field className="mb-4">
    <Field.Label htmlFor="formGroupDescription">Description</Field.Label>
    <Textarea id="formGroupDescription" rows={3} placeholder="Description" />
  </Field>

  <Checkbox id="rememberMe" name="remember" label="Remember me" className="mb-4" />

  <Button color="primary" type="submit">
    Submit
  </Button>
</form>
`;

const horizontalFormCode = `
<form>
  <Row className="mb-4 items-center">
    <Col sm={2}>
      <Field.Label htmlFor="inputEmail3" className="mb-0">
        Email
      </Field.Label>
    </Col>
    <Col sm={10}>
      <Input id="inputEmail3" type="email" placeholder="Email" />
    </Col>
  </Row>

  <Row className="mb-4 items-center">
    <Col sm={2}>
      <Field.Label htmlFor="inputPassword3" className="mb-0">
        Password
      </Field.Label>
    </Col>
    <Col sm={10}>
      <Input id="inputPassword3" type="password" placeholder="Password" />
    </Col>
  </Row>

  <fieldset>
    <Row className="mb-4">
      <Col sm={2}>
        <legend className="form-label mb-0">Radios</legend>
      </Col>
      <Col sm={10}>
        <RadioGroup name="gridRadios" defaultValue="option1">
          <Radio value="option1" label="First radio" />
          <Radio value="option2" label="Second radio" />
          <Radio value="option3" label="Third disabled radio" disabled />
        </RadioGroup>
      </Col>
    </Row>
  </fieldset>

  <Row className="mb-4">
    <Col sm={{ span: 10, offset: 2 }}>
      <Checkbox id="gridCheck1" label="Remember me" />
    </Col>
  </Row>

  <Row>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button color="primary" type="submit">
        Sign in
      </Button>
    </Col>
  </Row>
</form>
`;

const horizontalSizingCode = `
<>
  <Row className="mb-4 items-center">
    <Col sm={2}>
      <Field.Label htmlFor="colFormLabelSm" className="mb-0 text-sm">
        Email
      </Field.Label>
    </Col>
    <Col sm={10}>
      <Input id="colFormLabelSm" size="sm" type="email" placeholder="Small text" />
    </Col>
  </Row>
  <Row className="mb-4 items-center">
    <Col sm={2}>
      <Field.Label htmlFor="colFormLabel" className="mb-0">
        Email
      </Field.Label>
    </Col>
    <Col sm={10}>
      <Input id="colFormLabel" type="email" placeholder="Normal text" />
    </Col>
  </Row>
  <Row className="items-center">
    <Col sm={2}>
      <Field.Label htmlFor="colFormLabelLg" className="mb-0 text-lg">
        Email
      </Field.Label>
    </Col>
    <Col sm={10}>
      <Input id="colFormLabelLg" size="lg" type="email" placeholder="Large text" />
    </Col>
  </Row>
</>
`;

const formGridLayoutCode = `
<form>
  <Row className="mb-4 g-4">
    <Col md={6}>
      <Field>
        <Field.Label htmlFor="formGridEmail">Email</Field.Label>
        <Input id="formGridEmail" type="email" placeholder="Enter email" />
      </Field>
    </Col>
    <Col md={6}>
      <Field>
        <Field.Label htmlFor="formGridPassword">Password</Field.Label>
        <Input id="formGridPassword" type="password" placeholder="Password" />
      </Field>
    </Col>
  </Row>

  <Field className="mb-4">
    <Field.Label htmlFor="formGridAddress1">Address</Field.Label>
    <Input id="formGridAddress1" placeholder="1234 Main St" />
  </Field>

  <Field className="mb-4">
    <Field.Label htmlFor="formGridAddress2">Address 2</Field.Label>
    <Input id="formGridAddress2" placeholder="Apartment, studio, or floor" />
  </Field>

  <Row className="mb-4 g-4">
    <Col md={6}>
      <Field>
        <Field.Label htmlFor="formGridCity">City</Field.Label>
        <Input id="formGridCity" />
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Field.Label htmlFor="formGridState">State</Field.Label>
        <Select id="formGridState" defaultValue="">
          <option value="">Choose...</option>
          <option value="ny">New York</option>
        </Select>
      </Field>
    </Col>
    <Col md={3}>
      <Field>
        <Field.Label htmlFor="formGridZip">Zip</Field.Label>
        <Input id="formGridZip" />
      </Field>
    </Col>
  </Row>

  <Checkbox id="formGridCheckbox" label="Check me out" className="mb-4" />

  <Button color="primary" type="submit">
    Submit
  </Button>
</form>
`;

const columnSizingCode = `
<form>
  <Row className="g-4">
    <Col xs={7}>
      <Input placeholder="City" aria-label="City" />
    </Col>
    <Col>
      <Input placeholder="State" aria-label="State" />
    </Col>
    <Col>
      <Input placeholder="Zip" aria-label="Zip" />
    </Col>
  </Row>
</form>
`;

const autoSizingCode = `
<form>
  <Row className="items-center g-4">
    <Col xs="auto">
      <Field.Label htmlFor="inlineFormInput" className="sr-only">
        Name
      </Field.Label>
      <Input id="inlineFormInput" placeholder="Jane Doe" />
    </Col>
    <Col xs="auto">
      <Field.Label htmlFor="inlineFormInputGroup" className="sr-only">
        Username
      </Field.Label>
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
        <Input id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Select defaultValue="" aria-label="Choose one">
        <option value="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Select>
    </Col>
    <Col xs="auto">
      <Checkbox id="autoSizingCheck" label="Remember me" />
    </Col>
    <Col xs="auto">
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Col>
  </Row>
</form>
`;

const guttersCode = `
<form>
  <Row className="items-center g-4">
    <Col>
      <Field.Label htmlFor="firstName" className="sr-only">
        First name
      </Field.Label>
      <Input id="firstName" placeholder="First name" />
    </Col>
    <Col>
      <Field.Label htmlFor="lastName" className="sr-only">
        Last name
      </Field.Label>
      <Input id="lastName" placeholder="Last name" />
    </Col>
  </Row>
</form>
`;

const FormLayoutExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Layout"
        description="Give your forms some structure — from inline to horizontal to custom grid implementations — with the Row and Col layout components."
        link={{
          text: 'Grid on hb-react',
          url: 'https://react.hbui.dev/docs/layout/grid'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic form">
            <p className="mb-0">
              There is no form wrapper component — use a plain{' '}
              <code>&lt;form&gt;</code> and stack a <code>Field</code> per
              control. Each <code>Field</code> groups its{' '}
              <code>Field.Label</code>, its control and an optional{' '}
              <code>Field.Text</code>, and takes the spacing through{' '}
              <code>className</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={basicFormCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal form">
            <p className="mb-0">
              Put the label and the control in sibling <code>Col</code>s of the
              same <code>Row</code> to lay a field out horizontally. Add{' '}
              <code>items-center</code> to the row to centre the label against
              its control, and use the object form of a breakpoint prop to
              indent a column that has no label.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalFormCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal form label sizing">
            <p className="mb-0">
              Match the label to the control by setting <code>size</code> on the{' '}
              <code>Input</code> and the matching text utility on the{' '}
              <code>Field.Label</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalSizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Form Grid Layout">
            <p className="mb-0">
              More complex forms can be built on the twelve-column grid. Give
              each <code>Col</code> a breakpoint span and set the spacing
              between them with a gutter class on the <code>Row</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={formGridLayoutCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Grid - Column Sizing">
            <p className="mb-0">
              Size one <code>Col</code> explicitly and leave the rest bare: the
              remaining columns split whatever width is left over.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={columnSizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Grid - Auto Sizing">
            <p className="mb-0">
              <code>xs="auto"</code> sizes a column to the natural width of its
              content, which is what an inline form needs. Keep the labels for
              screen readers with <code>className="sr-only"</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={autoSizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Gutters">
            <p className="mb-0">
              Gutter classes on the <code>Row</code> control the spacing between
              columns: <code>gx-*</code> horizontally, <code>gy-*</code>{' '}
              vertically and <code>g-*</code> for both.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={guttersCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FormLayoutExample;
