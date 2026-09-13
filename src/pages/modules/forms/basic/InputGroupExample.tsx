import FeatherIcon from 'feather-icons-react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <InputGroup className="mb-4">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <Input
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-4">
    <Input
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup>

  <Field.Label htmlFor="basic-url">Your vanity URL</Field.Label>
  <InputGroup className="mb-4">
    <InputGroup.Text id="basic-addon3">
      https://example.com/users/
    </InputGroup.Text>
    <Input id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-4">
    <InputGroup.Text>$</InputGroup.Text>
    <Input aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>

  <InputGroup>
    <InputGroup.Text>With textarea</InputGroup.Text>
    <Textarea aria-label="With textarea" />
  </InputGroup>
</>
`;

const sizingCode = `
<>
  <InputGroup size="sm" className="mb-4">
    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    <Input aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <InputGroup className="mb-4">
    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    <Input aria-label="Default" aria-describedby="inputGroup-sizing-default" />
  </InputGroup>
  <InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    <Input aria-label="Large" aria-describedby="inputGroup-sizing-lg" />
  </InputGroup>
</>
`;

const checkboxesCode = `
<>
  <InputGroup className="mb-4">
    <InputGroup.Text>
      <Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Text>
    <Input aria-label="Text input with checkbox" />
  </InputGroup>
  <InputGroup>
    <InputGroup.Text>
      <Radio aria-label="Radio button for following text input" />
    </InputGroup.Text>
    <Input aria-label="Text input with radio button" />
  </InputGroup>
</>
`;

const multipleInputCode = `
<InputGroup>
  <InputGroup.Text>First and last name</InputGroup.Text>
  <Input aria-label="First name" />
  <Input aria-label="Last name" />
</InputGroup>
`;

const multipleAddonsCode = `
<>
  <InputGroup className="mb-4">
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
    <Input aria-label="Dollar amount (with dot and two decimal places)" />
  </InputGroup>
  <InputGroup>
    <Input aria-label="Dollar amount (with dot and two decimal places)" />
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
  </InputGroup>
</>
`;

const buttonAddOnsCode = `
<>
  <InputGroup className="mb-4">
    <Button variant="outline" color="secondary" id="button-addon1">
      Button
    </Button>
    <Input
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-4">
    <Input
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <Button variant="outline" color="secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>

  <InputGroup>
    <Input placeholder="Search" aria-label="Search with two button addons" />
    <Button variant="outline" color="secondary">
      Cancel
    </Button>
    <Button color="primary">Search</Button>
  </InputGroup>
</>
`;

const buttonsWithDropdownsCode = `
<>
  <InputGroup className="mb-4">
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button variant="outline" color="secondary" className="dropdown-toggle">
          Dropdown
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content align="start" className="min-w-48">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
    <Input aria-label="Text input with dropdown button" />
  </InputGroup>

  <InputGroup>
    <Input aria-label="Text input with dropdown button" />
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button variant="outline" color="secondary" className="dropdown-toggle">
          Dropdown
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content align="end" className="min-w-48">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  </InputGroup>
</>
`;

const inputIconCode = `
<>
  <InputIcon className="mb-4">
    <InputIcon.Start>
      <FeatherIcon icon="search" size={16} />
    </InputIcon.Start>
    <Input placeholder="Search" aria-label="Search" />
  </InputIcon>
  <InputIcon>
    <Input placeholder="Username" defaultValue="jane" aria-label="Username" />
    <InputIcon.End>
      <FeatherIcon icon="check" size={16} />
    </InputIcon.End>
  </InputIcon>
</>
`;

const InputGroupExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Input group"
        description="Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, selects, and file inputs."
        link={{
          text: 'Input Group on Hummingbird',
          url: 'https://react.hbui.dev/docs/forms/input-group'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              An <code>InputGroup</code> joins a control and its addons into one
              combined control. Put text or an icon in an{' '}
              <code>InputGroup.Text</code> and place it before, after, or on
              both sides of the <code>Input</code>; a <code>Textarea</code>{' '}
              works the same way.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              Set <code>size</code> on the <code>InputGroup</code> and
              everything inside it resizes together — there is no need to repeat
              the size on each child.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Checkboxes and radios">
            <p className="mb-0">
              Drop a <code>Checkbox</code> or a <code>Radio</code> inside an{' '}
              <code>InputGroup.Text</code> to use it as an addon. Leave{' '}
              <code>label</code> off so only the control renders, and give it an{' '}
              <code>aria-label</code> instead.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={checkboxesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Multiple inputs"
            description="While multiple inputs are supported visually, validation styles are only available for input groups with a single input."
          />
          <PhoenixDocCard.Body code={multipleInputCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Multiple addons"
            description="Multiple addons are supported and can be mixed with the checkbox and radio versions."
          />
          <PhoenixDocCard.Body code={multipleAddonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button addons">
            <p className="mb-0">
              A <code>Button</code> can sit on either side of the control, and
              several buttons can be chained after it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonAddOnsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4 overflow-visible">
          <PhoenixDocCard.Header title="Buttons with Dropdowns">
            <p className="mb-0">
              Use a <code>Dropdown</code> whose <code>Dropdown.Trigger</code> is
              the addon button. The menu is portaled, so put its classes and its{' '}
              <code>align</code> on <code>Dropdown.Content</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonsWithDropdownsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Icon addons">
            <p className="mb-0">
              For an icon that sits <em>inside</em> the control rather than
              beside it, use <code>InputIcon</code> with an{' '}
              <code>InputIcon.Start</code> and/or an <code>InputIcon.End</code>{' '}
              — it pads the <code>Input</code> automatically.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={inputIconCode} scope={{ FeatherIcon }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default InputGroupExample;
