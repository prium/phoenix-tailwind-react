import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <Checkbox id="defaultCheckbox" label="Default Checkbox" />
  <Checkbox id="checkedCheckbox" label="Checked Checkbox" defaultChecked />
  <Checkbox id="disabledCheckbox" label="Disabled Checkbox" disabled />
</>
`;

const radioExampleCode = `
<RadioGroup name="radio" defaultValue="checked">
  <Radio value="default" label="Default Radio" />
  <Radio value="checked" label="Default Checked Radio" />
  <Radio value="disabled" label="Disabled Radio" disabled />
</RadioGroup>
`;

const switchesCode = `
<>
  <Switch id="defaultSwitch" label="Default switch input" />
  <Switch id="checkedSwitch" label="Checked switch input" defaultChecked />
  <Switch id="disabledSwitch" label="Disabled switch input" disabled />
  <Switch
    id="checkedDisabledSwitch"
    label="Checked disabled switch input"
    defaultChecked
    disabled
  />
</>
`;

const inlineCheckboxCode = `
<div>
  <Checkbox inline id="item1Check" label="Item 1" />
  <Checkbox inline id="item2Check" label="Item 2" defaultChecked />
  <Checkbox inline id="item3Check" label="Item 3" disabled />
</div>
`;

const inlineRadioCode = `
<RadioGroup name="inline-radio" defaultValue="item2">
  <Radio inline value="item1" label="Item 1" />
  <Radio inline value="item2" label="Item 2" />
  <Radio inline value="item3" label="Item 3" disabled />
</RadioGroup>
`;

const sizesCode = `
<>
  <Checkbox size="sm" label="Small (default)" defaultChecked />
  <Checkbox size="md" label="Medium" defaultChecked />
  <Checkbox size="lg" label="Large" defaultChecked />
  <Checkbox indeterminate label="Select all" className="mt-4" />
</>
`;

const ChecksExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Checks and radios"
        description="Consistent cross-browser and cross-device checkboxes, radios and switches, each built on the matching native input."
        link={{
          text: 'Checkbox on hb-react',
          url: 'https://react.hbui.dev/docs/forms/checkbox'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Checks">
            <p className="mb-0">
              <code>Checkbox</code> renders a native{' '}
              <code>&lt;input type="checkbox"&gt;</code>. Pass{' '}
              <code>label</code> and it wraps the control and the text in one
              clickable <code>&lt;label&gt;</code>; leave it off to get the bare
              control. A <code>color</code> prop themes the checked state, but
              the phoenix skin pins it to the theme accent, so every value looks
              the same in this project.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Radios">
            <p className="mb-0">
              Wrap related <code>Radio</code>s in a <code>RadioGroup</code>: it
              shares its <code>name</code> with every child and owns the
              selected <code>value</code>, either uncontrolled through{' '}
              <code>defaultValue</code> or controlled through <code>value</code>{' '}
              and <code>onValueChange</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={radioExampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Switches">
            <p className="mb-0">
              <code>Switch</code> is a checkbox with <code>role="switch"</code>{' '}
              and a toggle skin. It takes the same <code>label</code>,{' '}
              <code>inline</code>, <code>color</code> and <code>size</code>{' '}
              props as <code>Checkbox</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={switchesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Check Inline">
            <p className="mb-0">
              Group checkboxes on the same horizontal row by adding the{' '}
              <code>inline</code> prop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={inlineCheckboxCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Radio Inline">
            <p className="mb-0">
              Group radios on the same horizontal row by adding the{' '}
              <code>inline</code> prop to each <code>Radio</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={inlineRadioCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizes and indeterminate">
            <p className="mb-0">
              <code>size</code> offers <code>sm</code> (the default for checks
              and radios), <code>md</code> and <code>lg</code>. The{' '}
              <code>indeterminate</code> prop renders the mixed state used by a
              “select all” parent and reports it as{' '}
              <code>aria-checked="mixed"</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizesCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ChecksExample;
