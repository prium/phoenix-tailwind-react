import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Select aria-label="Default select example" defaultValue="">
  <option value="" disabled>
    Open this select menu
  </option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Select>
`;

const sizingCode = `
<>
  <Select size="lg" className="mb-4" defaultValue="lg" aria-label="Large select">
    <option value="lg">Large select</option>
  </Select>
  <Select className="mb-4" defaultValue="md" aria-label="Default select">
    <option value="md">Default select</option>
  </Select>
  <Select size="sm" defaultValue="sm" aria-label="Small select">
    <option value="sm">Small select</option>
  </Select>
</>
`;

const variantsCode = `
<>
  <Select variant="outline" className="mb-4" defaultValue="pro">
    <option value="free">Outline</option>
    <option value="pro">Pro</option>
  </Select>
  <Select variant="fill" className="mb-6" defaultValue="pro">
    <option value="free">Fill</option>
    <option value="pro">Pro</option>
  </Select>
  {['secondary', 'info', 'success', 'warning'].map(color => (
    <Select key={color} color={color} className="mb-4 capitalize" defaultValue="">
      <option value="">{color}</option>
      <option value="pro">Pro</option>
    </Select>
  ))}
</>
`;

const stateCode = `
<>
  <Field className="mb-4">
    <Field.Label htmlFor="selectValid">Plan</Field.Label>
    <Select id="selectValid" state="valid" defaultValue="pro">
      <option value="free">Free</option>
      <option value="pro">Pro</option>
    </Select>
    <Field.Text variant="valid">Looks good.</Field.Text>
  </Field>
  <Field className="mb-4">
    <Field.Label htmlFor="selectInvalid">Plan</Field.Label>
    <Select id="selectInvalid" state="invalid" defaultValue="">
      <option value="" disabled>
        Choose a plan
      </option>
      <option value="pro">Pro</option>
    </Select>
    <Field.Text variant="invalid">Select a plan to continue.</Field.Text>
  </Field>
  <Select defaultValue="pro" disabled aria-label="Disabled select">
    <option value="pro">Disabled select</option>
  </Select>
</>
`;

const SelectExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Select"
        description="A styled native select for choosing one option from a list."
        link={{
          text: 'Select on hb-react',
          url: 'https://react.hbui.dev/docs/forms/select'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              <code>Select</code> renders a real <code>&lt;select&gt;</code>, so
              its children are plain <code>&lt;option&gt;</code> elements and
              every native attribute — <code>defaultValue</code>,{' '}
              <code>multiple</code>, <code>required</code> — works as usual.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Sizing"
            description="The size prop offers sm, md (the default) and lg, matching the similarly sized text inputs."
          />
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Variants and colors">
            <p className="mb-0">
              <code>variant</code> switches between <code>outline</code> (the
              default) and <code>fill</code>, and <code>color</code> sets the
              focus accent: <code>secondary</code>, <code>info</code>,{' '}
              <code>success</code> or <code>warning</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={variantsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Validation state and disabled">
            <p className="mb-0">
              The <code>state</code> prop marks a select <code>valid</code> or{' '}
              <code>invalid</code> — <code>invalid</code> also sets{' '}
              <code>aria-invalid</code> — and pairs with a{' '}
              <code>Field.Text</code> of the matching <code>variant</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stateCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SelectExample;
