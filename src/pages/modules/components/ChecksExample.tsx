import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import CheckButton from 'components/base/CheckButton';
import CheckboxItem from 'components/common/CheckboxItem';
import InlineCheckItem from 'components/common/InlineCheckItem';

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

const bulkSelectCode = `
// components/base/IndeterminateCheckbox
<div className="flex items-center gap-6">
  <IndeterminateCheckbox indeterminate aria-label="Select all rows" />
  <IndeterminateCheckbox defaultChecked aria-label="Select row" />
  <IndeterminateCheckbox aria-label="Select row" />
</div>
`;

const filterCheckCode = `
// components/common/CheckboxItem
<>
  <CheckboxItem name="brand" value="apple" label="Apple" defaultChecked />
  <CheckboxItem name="brand" value="samsung" label="Samsung" />
  <CheckboxItem
    name="brand"
    value="sony"
    label={<>Sony <span className="text-subtle">(12)</span></>}
  />
</>
`;

const inlineCheckItemCode = `
// components/common/InlineCheckItem
<div>
  <InlineCheckItem
    id="eventOnline"
    name="eventType"
    label="Online"
    className="me-4"
    defaultChecked
  />
  <InlineCheckItem
    id="eventOffline"
    name="eventType"
    label="Offline"
    className="me-4"
  />
  <InlineCheckItem id="eventBoth" name="eventType" label="Both" />
</div>
`;

const checkButtonCode = `
// components/base/CheckButton
<div className="flex gap-2">
  <CheckButton
    id="tripAll"
    label="All"
    inputProps={{ name: 'tripType', defaultChecked: true }}
  />
  <CheckButton id="tripHotel" label="Hotel" inputProps={{ name: 'tripType' }} />
  <CheckButton
    id="tripFlight"
    label="Flight"
    inputProps={{ name: 'tripType' }}
  />
</div>
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
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Bulk select checkbox">
            <p className="mb-0">
              Every <code>AdvanceTable</code> selection column renders{' '}
              <code>IndeterminateCheckbox</code> instead of{' '}
              <code>Checkbox</code>: it emits the bare{' '}
              <code>div.form-check &gt; input.form-check-input</code> the
              phoenix tables are drawn for, without the{' '}
              <code>form-check-input-wrapper</code> span that gives{' '}
              <code>Checkbox</code> the hover halo you can see in the examples
              above. The header box takes <code>indeterminate</code> for the
              partial state.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={bulkSelectCode}
            scope={{ IndeterminateCheckbox }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Filter checkbox">
            <p className="mb-0">
              <code>CheckboxItem</code> is the top-aligned check used by the
              e-commerce product filters and the travel-agency room and trip
              filters. It builds its own <code>id</code> from <code>name</code>{' '}
              and <code>value</code>, and <code>label</code> accepts a node, so
              a count or a rating can sit beside the text. Pass{' '}
              <code>type="radio"</code> for a single-choice filter.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={filterCheckCode}
            scope={{ CheckboxItem }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Inline check item">
            <p className="mb-0">
              <code>InlineCheckItem</code> is the{' '}
              <code>.form-check-inline</code> pair used across the forms — the
              Online/Offline/Both and Free/Paid choices when creating an event,
              and the add-room pricing options. It defaults to{' '}
              <code>type="radio"</code>; spacing between items comes from{' '}
              <code>className</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={inlineCheckItemCode}
            scope={{ InlineCheckItem }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Check buttons">
            <p className="mb-0">
              <code>CheckButton</code> hides the input behind{' '}
              <code>.btn-check</code> and styles its <code>&lt;label&gt;</code>{' '}
              as a button, for filter chips that read as a button group. It
              takes <code>type</code> (<code>radio</code> by default),{' '}
              <code>variant</code> for the button skin, and passes anything in{' '}
              <code>inputProps</code> to the input itself.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={checkButtonCode} scope={{ CheckButton }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ChecksExample;
