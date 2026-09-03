import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <Field className="mb-4">
    <Field.Label htmlFor="exampleFormControlInput">Email address</Field.Label>
    <Input
      id="exampleFormControlInput"
      type="email"
      placeholder="name@example.com"
    />
    <Field.Text>We'll never share your email with anyone else.</Field.Text>
  </Field>
  <Field>
    <Field.Label htmlFor="exampleTextarea">Example textarea</Field.Label>
    <Textarea id="exampleTextarea" rows={3} placeholder="Leave a comment" />
  </Field>
</>
`;

const sizingCode = `
<>
  <Input size="lg" type="text" placeholder="Large text" className="mb-4" />
  <Input type="text" placeholder="Normal text" className="mb-4" />
  <Input size="sm" type="text" placeholder="Small text" />
</>
`;

const variantsCode = `
<>
  <Input variant="outline" placeholder="Outline" className="mb-4" />
  <Input variant="fill" placeholder="Fill" className="mb-6" />
  {['primary', 'secondary', 'info', 'success', 'warning'].map(color => (
    <Input
      key={color}
      color={color}
      placeholder={color}
      className="mb-4 capitalize"
    />
  ))}
</>
`;

const readOnlyCode = `
<>
  <Input type="text" placeholder="Readonly input here..." readOnly className="mb-4" />
  <Input type="text" defaultValue="Disabled input" disabled />
</>
`;

const fileInputCode = `
<>
  <Field className="mb-4">
    <Field.Label htmlFor="formFile">Default file input example</Field.Label>
    <Input id="formFile" type="file" />
  </Field>
  <Field className="mb-4">
    <Field.Label htmlFor="formFileDisabled">
      Disabled file input example
    </Field.Label>
    <Input id="formFileDisabled" type="file" disabled />
  </Field>
  <Field>
    <Field.Label htmlFor="formFileMultiple">
      Multiple files input example
    </Field.Label>
    <Input id="formFileMultiple" type="file" multiple />
  </Field>
</>
`;

const fileInputSizingCode = `
<>
  <Field className="mb-4">
    <Field.Label htmlFor="formFileSm">Small file input example</Field.Label>
    <Input id="formFileSm" type="file" size="sm" />
  </Field>
  <Field>
    <Field.Label htmlFor="formFileLg">Large file input example</Field.Label>
    <Input id="formFileLg" type="file" size="lg" />
  </Field>
</>
`;

const datalistCode = `
<Field>
  <Field.Label htmlFor="customDatalist">
    Choose your browser from the list:
  </Field.Label>
  <Input
    id="customDatalist"
    size="sm"
    list="browsers"
    name="browser"
    placeholder="Type to search"
  />
  <datalist id="browsers">
    <option value="Edge" />
    <option value="Firefox" />
    <option value="Chrome" />
    <option value="Opera" />
    <option value="Safari" />
  </datalist>
</Field>
`;

const InputExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Input"
        description="Give textual form controls like Input and Textarea an upgrade with custom styles, sizing, focus states, and more."
        link={{
          text: 'Input on hb-react',
          url: 'https://react.hbui.dev/docs/forms/input'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              <code>Input</code> renders a single-line control and{' '}
              <code>Textarea</code> a multi-line one. Wrap either in a{' '}
              <code>Field</code> to group it with a <code>Field.Label</code> and
              a <code>Field.Text</code> helper line; point the label at the
              control with <code>htmlFor</code> so the pair stays accessible.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              Use <code>size</code> on <code>Input</code> to change the size of
              the control. It accepts <code>sm</code>, <code>md</code> (the
              default) and <code>lg</code>, and <code>Textarea</code> takes the
              same values.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Variants and colors">
            <p className="mb-0">
              <code>variant</code> switches between <code>outline</code> (the
              default, bordered) and <code>fill</code>, a filled muted surface.{' '}
              <code>color</code> sets the focus accent and accepts{' '}
              <code>primary</code>, <code>secondary</code>, <code>info</code>,{' '}
              <code>success</code> and <code>warning</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={variantsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Readonly and disabled">
            <p className="mb-0">
              <code>Input</code> forwards every native attribute, so{' '}
              <code>readOnly</code> prevents modification of the value while
              keeping the standard cursor, and <code>disabled</code> takes the
              control out of the tab order entirely.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={readOnlyCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="File Input">
            <p className="mb-0">
              A file picker is just <code>Input</code> with{' '}
              <code>type="file"</code>; <code>disabled</code> and{' '}
              <code>multiple</code> work as usual.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fileInputCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="File Input Sizing">
            <p className="mb-0">
              The <code>size</code> prop scales the file picker and its browse
              button along with the rest of the control.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fileInputSizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Datalist">
            <p className="mb-0">
              Pair an <code>Input</code> with a native{' '}
              <code>&lt;datalist&gt;</code> through the <code>list</code>{' '}
              attribute to offer suggestions without giving up free text entry.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={datalistCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default InputExample;
