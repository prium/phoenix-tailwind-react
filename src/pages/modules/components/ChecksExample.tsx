import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import CheckButton from 'components/base/CheckButton';
import CheckboxItem from 'components/common/CheckboxItem';
import InlineCheckItem from 'components/common/InlineCheckItem';

const exampleCode = `
<>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
    <label className="form-check-label text-base text-default" htmlFor="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="flexCheckChecked"
      defaultChecked
    />
    <label className="form-check-label text-base text-default" htmlFor="flexCheckChecked">
      Checked checkbox
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="flexCheckDisabled"
      disabled
    />
    <label className="form-check-label text-base text-default" htmlFor="flexCheckDisabled">
      Disabled checkbox
    </label>
  </div>
</>
`;

const radioExampleCode = `
<>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
    />
    <label className="form-check-label text-base text-default" htmlFor="flexRadioDefault1">
      Default radio
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      defaultChecked
    />
    <label className="form-check-label text-base text-default" htmlFor="flexRadioDefault2">
      Default checked radio
    </label>
  </div>
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
          text: 'Checkbox on Hummingbird',
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
              The base check: <code>div.form-check</code> around an{' '}
              <code>input.form-check-input</code> and a{' '}
              <code>label.form-check-label</code>. This is what most of the app
              writes directly — the checkout delivery and payment options, the
              product-details and settings toggles. The label carries whatever
              type utilities the context needs (
              <code>text-base text-default</code> here); the box itself is
              always 16px.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Radios">
            <p className="mb-0">
              Same markup with <code>type=&quot;radio&quot;</code>; every input
              sharing a <code>name</code> belongs to the same group.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={radioExampleCode} />
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
              <code>CheckboxItem</code> is the filter-list variant:{' '}
              <code>items-start</code> so a wrapping label still lines up with
              the box, a block label, and its own <code>id</code> built from{' '}
              <code>name</code> and <code>value</code>. The e-commerce
              products-filter column alone renders 44 of them, and the room and
              trip filters use the same component. <code>label</code> accepts a
              node, so a result count or a rating can sit beside the text.
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
