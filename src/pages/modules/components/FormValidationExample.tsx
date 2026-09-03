import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
function ValidationExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setValidated(true);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={validated ? 'was-validated' : undefined}
    >
      <Row className="g-4">
        <Col md={4}>
          <Field>
            <Field.Label htmlFor="validationFirstName">First name</Field.Label>
            <Input id="validationFirstName" defaultValue="Mark" required />
            <Field.Text variant="valid">Looks good!</Field.Text>
          </Field>
        </Col>
        <Col md={4}>
          <Field>
            <Field.Label htmlFor="validationLastName">Last name</Field.Label>
            <Input id="validationLastName" defaultValue="Otto" required />
            <Field.Text variant="valid">Looks good!</Field.Text>
          </Field>
        </Col>
        <Col md={4}>
          <Field>
            <Field.Label htmlFor="validationUsername">Username</Field.Label>
            <InputGroup className="has-validation">
              <InputGroup.Text id="usernamePrepend">@</InputGroup.Text>
              <Input
                id="validationUsername"
                aria-describedby="usernamePrepend"
                required
              />
              <Field.Text variant="invalid">
                Please choose a username.
              </Field.Text>
            </InputGroup>
          </Field>
        </Col>
        <Col md={6}>
          <Field>
            <Field.Label htmlFor="validationCity">City</Field.Label>
            <Input id="validationCity" required />
            <Field.Text variant="invalid">
              Please provide a valid city.
            </Field.Text>
          </Field>
        </Col>
        <Col md={3}>
          <Field>
            <Field.Label htmlFor="validationState">State</Field.Label>
            <Select id="validationState" defaultValue="" required>
              <option value="" disabled>
                Choose...
              </option>
              <option value="ny">New York</option>
            </Select>
            <Field.Text variant="invalid">
              Please select a valid state.
            </Field.Text>
          </Field>
        </Col>
        <Col md={3}>
          <Field>
            <Field.Label htmlFor="validationZip">Zip</Field.Label>
            <Input id="validationZip" required />
            <Field.Text variant="invalid">
              Please provide a valid zip.
            </Field.Text>
          </Field>
        </Col>
        <Col xs={12}>
          <label className="form-check flex-wrap">
            <Checkbox id="validationTerms" required />
            <span className="form-check-label">
              Agree to terms and conditions
            </span>
            <Field.Text variant="invalid">
              You must agree before submitting.
            </Field.Text>
          </label>
        </Col>
        <Col xs={12}>
          <Button color="primary" type="submit">
            Submit form
          </Button>
        </Col>
      </Row>
    </form>
  );
}
`;

const stateCode = `
<Row className="g-4">
  <Col md={6}>
    <Field>
      <Field.Label htmlFor="stateValid">Email address</Field.Label>
      <Input id="stateValid" state="valid" defaultValue="jane@example.com" />
      <Field.Text variant="valid">Looks good.</Field.Text>
    </Field>
  </Col>
  <Col md={6}>
    <Field>
      <Field.Label htmlFor="stateInvalid">Email address</Field.Label>
      <Input id="stateInvalid" state="invalid" defaultValue="not-an-email" />
      <Field.Text variant="invalid">Enter a valid email address.</Field.Text>
    </Field>
  </Col>
  <Col md={6}>
    <Field>
      <Field.Label htmlFor="stateSelectInvalid">Plan</Field.Label>
      <Select id="stateSelectInvalid" state="invalid" defaultValue="">
        <option value="" disabled>
          Choose a plan
        </option>
        <option value="pro">Pro</option>
      </Select>
      <Field.Text variant="invalid">Select a plan to continue.</Field.Text>
    </Field>
  </Col>
  <Col md={6}>
    <Field>
      <Field.Label htmlFor="stateTextareaValid">Bio</Field.Label>
      <Textarea id="stateTextareaValid" state="valid" rows={2} defaultValue="Looks fine." />
      <Field.Text variant="valid">Looks good.</Field.Text>
    </Field>
  </Col>
</Row>
`;

const tooltipsCode = `
function TooltipValidationExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setValidated(true);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={validated ? 'was-validated' : undefined}
    >
      <Row className="g-4">
        <Col md={4} className="relative">
          <Field.Label htmlFor="tooltipFirstName">First name</Field.Label>
          <Input id="tooltipFirstName" defaultValue="Mark" required />
          <div className="valid-tooltip">Looks good!</div>
        </Col>
        <Col md={4} className="relative">
          <Field.Label htmlFor="tooltipLastName">Last name</Field.Label>
          <Input id="tooltipLastName" defaultValue="Otto" required />
          <div className="valid-tooltip">Looks good!</div>
        </Col>
        <Col md={4} className="relative">
          <Field.Label htmlFor="tooltipUsername">Username</Field.Label>
          <Input id="tooltipUsername" required />
          <div className="invalid-tooltip">
            Please choose a unique and valid username.
          </div>
        </Col>
        <Col xs={12} className="mt-6">
          <Button color="primary" type="submit">
            Submit form
          </Button>
        </Col>
      </Row>
    </form>
  );
}
`;

const FormValidationExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Validation"
        description="Provide valuable, actionable feedback to your users with native form validation, either through the browser defaults or with custom styles."
        link={{
          text: 'Input on hb-react',
          url: 'https://react.hbui.dev/docs/forms/input'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              Turn the browser bubbles off with <code>noValidate</code>, let the
              constraint attributes (<code>required</code>, <code>type</code>,{' '}
              <code>pattern</code>, <code>min</code>) do the checking, and add{' '}
              <code>was-validated</code> to the <code>&lt;form&gt;</code> once
              it has been submitted. From then on every control is styled from
              its own <code>:valid</code> / <code>:invalid</code> state and the
              matching <code>Field.Text</code> appears — no per-field state to
              track. For schema-driven forms with cross-field rules, the
              recommended route is{' '}
              <a
                href="https://react.hbui.dev/docs/advanced-forms/react-hook-form"
                target="_blank"
                rel="noreferrer"
              >
                React Hook Form with a Zod resolver
              </a>
              , driving each control’s <code>state</code> prop from the
              resolver’s errors.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Validation state">
            <p className="mb-0">
              When you already know the result — from a server response, say —
              set it directly with the <code>state</code> prop:{' '}
              <code>valid</code> or <code>invalid</code>, which also sets{' '}
              <code>aria-invalid</code>. <code>Input</code>,{' '}
              <code>Textarea</code> and <code>Select</code> all take it, and a{' '}
              <code>Field.Text</code> with <code>variant="valid"</code> or{' '}
              <code>variant="invalid"</code> right after the control renders the
              feedback line.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stateCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Tooltips">
            <p className="mb-0">
              If the layout allows it, swap the feedback line for a floating one
              by using a <code>valid-tooltip</code> or{' '}
              <code>invalid-tooltip</code> element in place of the{' '}
              <code>Field.Text</code>. The tooltip is absolutely positioned, so
              give the column around it <code>relative</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={tooltipsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FormValidationExample;
