import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import CheckButton from 'components/base/CheckButton';
import CheckboxItem from 'components/common/CheckboxItem';
import InlineCheckItem from 'components/common/InlineCheckItem';

const exampleCode = `
// components/common/CheckboxItem
<>
  <CheckboxItem name="check" value="default" label="Default checkbox" />
  <CheckboxItem name="check" value="checked" label="Checked checkbox" defaultChecked />
  <CheckboxItem name="check" value="disabled" label="Disabled checkbox" disabled />
</>
`;

const radioExampleCode = `
<>
  <CheckboxItem type="radio" name="flexRadioDefault" value="1" label="Default radio" />
  <CheckboxItem
    type="radio"
    name="flexRadioDefault"
    value="2"
    label="Default checked radio"
    defaultChecked
  />
</>
`;

const switchesCode = `
<>
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="switchDefault" />
    <label className="form-check-label" htmlFor="switchDefault">
      Default switch checkbox input
    </label>
  </div>
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="switchChecked"
      defaultChecked
    />
    <label className="form-check-label" htmlFor="switchChecked">
      Checked switch checkbox input
    </label>
  </div>
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="switchDisabled"
      disabled
    />
    <label className="form-check-label" htmlFor="switchDisabled">
      Disabled switch checkbox input
    </label>
  </div>
</>
`;

const inlineCheckboxCode = `
// components/common/InlineCheckItem
<div>
  <InlineCheckItem type="checkbox" id="inlineCheckbox1" name="items" label="Item 1" />
  <InlineCheckItem type="checkbox" id="inlineCheckbox2" name="items" label="Item 2" />
  <InlineCheckItem
    type="checkbox"
    id="inlineCheckbox3"
    name="items"
    label="Item 3"
    defaultChecked
  />
</div>
`;

const inlineRadioCode = `
<div>
  <InlineCheckItem id="inlineRadio1" name="inlineRadioOptions" label="Item 1" />
  <InlineCheckItem id="inlineRadio2" name="inlineRadioOptions" label="Item 2" />
  <InlineCheckItem
    id="inlineRadio3"
    name="inlineRadioOptions"
    label="Item 3"
    defaultChecked
  />
</div>
`;

const filterCheckCode = `
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

const bulkSelectCode = `
// components/base/IndeterminateCheckbox
<div className="flex items-center gap-6">
  <IndeterminateCheckbox indeterminate aria-label="Select all rows" />
  <IndeterminateCheckbox defaultChecked aria-label="Select row" />
  <IndeterminateCheckbox aria-label="Select row" />
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
        title="Checks"
        description="Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component."
        link={{
          text: 'Checkbox on hb-react',
          url: 'https://react.hbui.dev/docs/forms/checkbox'
        }}
      >
        <p className="mb-2 text-muted">
          Every check in this project is the phoenix{' '}
          <code>div.form-check &gt; input.form-check-input</code> markup,
          wrapped in the components below. hb-react&apos;s <code>Checkbox</code>{' '}
          is not used: its <code>form-check-input-wrapper</code> span adds a
          hover halo the phoenix skin is not drawn for.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Checks">
            <p className="mb-0">
              <code>CheckboxItem</code> is the check used throughout the app —
              product, room and trip filters, the create-event forms, the kanban
              and gantt option lists. It builds its own <code>id</code> from{' '}
              <code>name</code> and <code>value</code>, and top-aligns the box
              so a wrapping label still lines up.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} scope={{ CheckboxItem }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Radios">
            <p className="mb-0">
              Pass <code>type=&quot;radio&quot;</code> for a single-choice
              group; every item sharing a <code>name</code> belongs to the same
              group.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={radioExampleCode}
            scope={{ CheckboxItem }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Switches">
            <p className="mb-0">
              A switch is the same control with <code>.form-switch</code> on the
              wrapper and <code>role=&quot;switch&quot;</code> on the input —
              the settings panel, the gantt options modal and the project
              roadmap all use this markup directly.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={switchesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Check Inline">
            <p className="mb-0">
              <code>InlineCheckItem</code> renders the{' '}
              <code>.form-check-inline</code> pair for options that sit on one
              row. It takes an explicit <code>id</code> because the label has to
              point at it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={inlineCheckboxCode}
            scope={{ InlineCheckItem }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Radio Inline">
            <p className="mb-0">
              <code>InlineCheckItem</code> defaults to{' '}
              <code>type=&quot;radio&quot;</code> — the Online/Offline/Both and
              Free/Paid choices when creating an event, and the add-room pricing
              options.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={inlineRadioCode}
            scope={{ InlineCheckItem }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Filter checkbox">
            <p className="mb-0">
              <code>label</code> accepts a node, so a result count or a rating
              can sit beside the text — this is how the e-commerce and
              travel-agency filter groups are built.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={filterCheckCode}
            scope={{ CheckboxItem }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Bulk select checkbox">
            <p className="mb-0">
              <code>IndeterminateCheckbox</code> is the label-less box every{' '}
              <code>AdvanceTable</code> selection column renders. The header box
              takes <code>indeterminate</code> for the partial state, which also
              reports as <code>aria-checked=&quot;mixed&quot;</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={bulkSelectCode}
            scope={{ IndeterminateCheckbox }}
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
