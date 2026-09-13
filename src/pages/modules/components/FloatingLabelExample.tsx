import FeatherIcon from 'feather-icons-react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <FloatingLabel htmlFor="floatingInput" label="Email address" className="mb-4">
    <Input id="floatingInput" type="email" size="lg" />
  </FloatingLabel>
  <FloatingLabel htmlFor="floatingPassword" label="Password">
    <Input id="floatingPassword" type="password" />
  </FloatingLabel>
</>
`;

const textAreaCode = `
<FloatingLabel htmlFor="floatingTextarea" label="Comments">
  <Textarea id="floatingTextarea" className="h-25!" />
</FloatingLabel>
`;

const selectsCode = `
<FloatingLabel htmlFor="floatingSelect" label="Works with selects">
  <Select id="floatingSelect" defaultValue="">
    <option value="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Select>
</FloatingLabel>
`;

const layoutCode = `
<Row className="g-2">
  <Col md>
    <FloatingLabel htmlFor="floatingInputGrid" label="Email address">
      <Input id="floatingInputGrid" type="email" />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel htmlFor="floatingSelectGrid" label="Works with selects">
      <Select id="floatingSelectGrid" defaultValue="">
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Select>
    </FloatingLabel>
  </Col>
</Row>
`;

const iconCode = `
<InputIcon>
  <InputIcon.Start>
    <FeatherIcon icon="mail" size={16} />
  </InputIcon.Start>
  <FloatingLabel htmlFor="floatingInputIcon" label="Email address">
    <Input id="floatingInputIcon" type="email" />
  </FloatingLabel>
</InputIcon>
`;

const validationCode = `
<>
  <FloatingLabel htmlFor="floatingInputValid" label="Valid input" className="mb-4">
    <Input
      id="floatingInputValid"
      type="email"
      state="valid"
      defaultValue="test@example.com"
    />
  </FloatingLabel>
  <FloatingLabel htmlFor="floatingInputInvalid" label="Invalid input">
    <Input
      id="floatingInputInvalid"
      type="email"
      state="invalid"
      defaultValue="test"
    />
  </FloatingLabel>
</>
`;

const FloatingLabelExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Floating labels"
        description="A label that floats over the control once the field is focused or filled."
        link={{
          text: 'Floating Label on Hummingbird',
          url: 'https://react.hbui.dev/docs/forms/floating-label'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              Wrap a control in <code>FloatingLabel</code> and give it a{' '}
              <code>label</code> plus an <code>htmlFor</code> matching the
              control’s <code>id</code>. The floating effect keys off{' '}
              <code>:placeholder-shown</code>, so <code>FloatingLabel</code>{' '}
              fills in a blank <code>placeholder</code> for you when the child
              has none.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Textareas">
            <p className="mb-0">
              A <code>Textarea</code> is the same height as an{' '}
              <code>Input</code> by default. To make it taller do not use the{' '}
              <code>rows</code> attribute — set an explicit height instead, for
              example <code>className="h-25"</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={textAreaCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Selects">
            <p className="mb-0">
              <code>FloatingLabel</code> also wraps a <code>Select</code>. It
              works the same way, except that a select always shows its label in
              the floated state.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={selectsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Layout"
            description="Floating labels stretch to their container, so place them in Col elements when you lay a form out on the grid."
          />
          <PhoenixDocCard.Body code={layoutCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Icon example">
            <p className="mb-0">
              Put the <code>FloatingLabel</code> inside an{' '}
              <code>InputIcon</code> to add a leading icon; the{' '}
              <code>InputIcon.Start</code> must come before it so the label
              offsets around the icon.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={iconCode} scope={{ FeatherIcon }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Validation">
            <p className="mb-0">
              Use the <code>state</code> prop on the wrapped control —{' '}
              <code>valid</code> or <code>invalid</code> — to colour the border
              and the floating label.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={validationCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FloatingLabelExample;
