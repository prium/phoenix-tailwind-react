import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout, { SideNavItem } from 'layouts/DocPagesLayout';
import FeatherIcon from 'feather-icons-react';
import {
  faAlignLeft,
  faAlignRight,
  faPlus,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

const phoenixButtonsCode = `
import Button from 'components/base/Button';

<div className="flex flex-wrap gap-2">
  <Button variant="phoenix" color="primary"> Primary </Button>
  <Button variant="phoenix" color="secondary"> Secondary </Button>
  <Button variant="phoenix" color="success"> Success </Button>
  <Button variant="phoenix" color="danger"> Danger </Button>
  <Button variant="phoenix" color="warning"> Warning </Button>
  <Button variant="phoenix" color="info"> Info </Button>
</div>
`;

const solidButtonsCode = `
<div className="flex flex-wrap items-center gap-2">
  <Button color="primary"> Primary </Button>
  <Button color="secondary"> Secondary </Button>
  <Button color="success"> Success </Button>
  <Button color="danger"> Danger </Button>
  <Button color="warning"> Warning </Button>
  <Button color="info"> Info </Button>
  <Button color="neutral"> Neutral </Button>
</div>
`;

const subtleButtonsCode = `
<div className="flex flex-wrap gap-2">
  <Button variant="subtle" color="primary"> Primary </Button>
  <Button variant="subtle" color="secondary"> Secondary </Button>
  <Button variant="subtle" color="success"> Success </Button>
  <Button variant="subtle" color="danger"> Danger </Button>
  <Button variant="subtle" color="warning"> Warning </Button>
  <Button variant="subtle" color="info"> Info </Button>
</div>
`;

const outlineButtonsCode = `
<div className="flex flex-wrap gap-2">
  <Button variant="outline" color="primary"> Primary </Button>
  <Button variant="outline" color="secondary"> Secondary </Button>
  <Button variant="outline" color="success"> Success </Button>
  <Button variant="outline" color="danger"> Danger </Button>
  <Button variant="outline" color="warning"> Warning </Button>
  <Button variant="outline" color="info"> Info </Button>
</div>
`;

const textButtonsCode = `
<div className="flex flex-wrap items-center gap-2">
  <Button variant="text" color="primary"> Primary </Button>
  <Button variant="text" color="success"> Success </Button>
  <Button variant="text" color="danger"> Danger </Button>
  <Button variant="link"> Link </Button>
</div>
`;

const buttonSizesCode = `
<div className="flex items-center gap-2">
  <Button size="sm"> Small </Button>
  <Button> Medium </Button>
  <Button size="lg"> Large </Button>
</div>
`;

const buttonShapesCode = `
<div className="flex items-center gap-2">
  <Button shape="square">
    <FontAwesomeIcon icon={faPlus} />
  </Button>
  <Button shape="circle">
    <FontAwesomeIcon icon={faPlus} />
  </Button>
  <Button variant="icon" color="danger">
    <FontAwesomeIcon icon={faTrash} />
  </Button>
  <Button variant="subtle" color="secondary" className="rounded-full">
    Capsule
  </Button>
  <Button variant="subtle" color="secondary" className="rounded-full">
    <FontAwesomeIcon icon={faAlignLeft} className="me-2" />
    Icon Left
  </Button>
  <Button variant="subtle" color="secondary" className="rounded-full">
    Icon Right
    <FontAwesomeIcon icon={faAlignRight} className="ms-2" />
  </Button>
</div>
`;

const closeButtonsCode = `
<div className="flex items-center gap-4">
  <CloseButton />
  <CloseButton disabled />
  <CloseButton shape="circle" />
  <div className="bg-subtle rounded-sm p-4 flex gap-4" data-hb-theme="dark">
    <CloseButton />
    <CloseButton disabled />
  </div>
</div>
`;

const buttonWithIconCode = `
import Button from 'components/base/Button';

<div className="flex flex-wrap items-center gap-2">
  <Button variant="primary" startIcon={<FontAwesomeIcon icon={faPlus} />}>
    Create
  </Button>
  <Button variant="primary" endIcon={<FeatherIcon icon="send" size={14} />}>
    Send
  </Button>
  <Button variant="phoenix" color="danger">
    <FontAwesomeIcon icon={faTrash} />
  </Button>
</div>
`;

const disableButtonsCode = `
<div className="flex flex-wrap gap-2">
  <Button disabled> Primary button </Button>
  <Button color="secondary" variant="subtle" disabled>
    Button
  </Button>
  <Button variant="outline" color="danger" disabled>
    Button
  </Button>
</div>
`;

const loadingButtonsCode = `
import Button from 'components/base/Button';

() => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Switch
        id="loading-switch"
        label="Loading"
        className="mb-4"
        onChange={e => setLoading(e.target.checked)}
      />

      <div className="flex items-center gap-2 mb-2">
        <Button variant="primary" size="sm" loading={loading} loadingPosition="start">
          Loading
        </Button>
        <Button variant="primary" size="sm" loading={loading} loadingPosition="end">
          Loading
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Button variant="primary" loading={loading} loadingPosition="start">
          Loading
        </Button>
        <Button variant="primary" loading={loading} loadingPosition="end">
          Loading
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="primary" size="lg" loading={loading} loadingPosition="start">
          Loading
        </Button>
        <Button variant="primary" size="lg" loading={loading} loadingPosition="end">
          Loading
        </Button>
      </div>
    </>
  );
};
`;

const blockButtonsCode = `
<div className="grid gap-2">
  <Button>Button</Button>
  <Button>Button</Button>
</div>
`;

const buttonGroupExampleCode = `
<ButtonGroup aria-label="Basic example">
  <Button variant="outline" color="secondary">Left</Button>
  <Button variant="outline" color="secondary">Middle</Button>
  <Button variant="outline" color="secondary">Right</Button>
</ButtonGroup>
`;

const btnToolbarCode = `
<ButtonGroup.Toolbar aria-label="Toolbar with button groups" className="flex gap-2">
  <ButtonGroup aria-label="First group">
    <Button variant="outline" color="secondary">1</Button>
    <Button variant="outline" color="secondary">2</Button>
    <Button variant="outline" color="secondary">3</Button>
    <Button variant="outline" color="secondary">4</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Second group">
    <Button variant="outline" color="secondary">5</Button>
    <Button variant="outline" color="secondary">6</Button>
    <Button variant="outline" color="secondary">7</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button variant="outline" color="secondary">8</Button>
  </ButtonGroup>
</ButtonGroup.Toolbar>
`;

const inputGroupExampleCode = `
<ButtonGroup.Toolbar
  aria-label="Toolbar with button groups"
  className="flex flex-wrap items-center gap-2"
>
  <ButtonGroup aria-label="First group">
    <Button variant="outline" color="secondary">1</Button>
    <Button variant="outline" color="secondary">2</Button>
    <Button variant="outline" color="secondary">3</Button>
    <Button variant="outline" color="secondary">4</Button>
  </ButtonGroup>
  <InputGroup>
    <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
    <Input
      type="text"
      placeholder="Input group example"
      aria-label="Input group example"
      aria-describedby="btnGroupAddon"
    />
  </InputGroup>
</ButtonGroup.Toolbar>
`;

const sizingCode = `
<div className="flex flex-wrap items-center gap-2">
  <ButtonGroup size="lg">
    <Button variant="outline" color="secondary">Left</Button>
    <Button variant="outline" color="secondary">Middle</Button>
    <Button variant="outline" color="secondary">Right</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button variant="outline" color="secondary">Left</Button>
    <Button variant="outline" color="secondary">Middle</Button>
    <Button variant="outline" color="secondary">Right</Button>
  </ButtonGroup>
  <ButtonGroup size="sm">
    <Button variant="outline" color="secondary">Left</Button>
    <Button variant="outline" color="secondary">Middle</Button>
    <Button variant="outline" color="secondary">Right</Button>
  </ButtonGroup>
</div>
`;

const nestingCode = `
<ButtonGroup>
  <Button variant="outline" color="secondary">1</Button>
  <Button variant="outline" color="secondary">2</Button>
  <Dropdown>
    <Dropdown.Trigger asChild>
      <Button variant="outline" color="secondary">Dropdown</Button>
    </Dropdown.Trigger>
    <Dropdown.Content align="start" className="w-44">
      <Dropdown.Item>Dropdown link</Dropdown.Item>
      <Dropdown.Item>Dropdown link</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown>
</ButtonGroup>
`;

const verticalVariationCode = `
<ButtonGroup orientation="vertical">
  <Button>Button</Button>
  <Button>Button</Button>
  <Dropdown>
    <Dropdown.Trigger asChild>
      <Button>Dropdown</Button>
    </Dropdown.Trigger>
    <Dropdown.Content align="start" className="w-44">
      <Dropdown.Item>Dropdown link</Dropdown.Item>
      <Dropdown.Item>Dropdown link</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown>
  <Button>Button</Button>
</ButtonGroup>
`;

const sideNavItems: SideNavItem[] = [
  {
    to: 'phoenix_buttons',
    label: 'Phoenix Buttons'
  },
  {
    to: 'solid_buttons',
    label: 'Solid Buttons'
  },
  {
    to: 'subtle_buttons',
    label: 'Subtle Buttons'
  },
  {
    to: 'outline_buttons',
    label: 'Outline Buttons'
  },
  {
    to: 'text_and_link_buttons',
    label: 'Text and link buttons'
  },
  {
    to: 'button_sizes',
    label: 'Button Sizes'
  },
  {
    to: 'button_shapes',
    label: 'Button Shapes'
  },
  {
    to: 'close_buttons',
    label: 'Close Buttons'
  },
  {
    to: 'buttons_with_icons_and_label',
    label: 'Buttons with icons and label'
  },
  {
    to: 'disabled_state',
    label: 'Disabled state'
  },
  {
    to: 'button_loading_state',
    label: 'Button loading state'
  },
  {
    to: 'block_buttons',
    label: 'Block buttons'
  },
  {
    to: 'button_group',
    label: 'Button Group',
    subItem: [
      {
        to: 'basic_example',
        label: 'Basic example'
      },
      {
        to: 'button_toolbar',
        label: 'Button toolbar'
      },
      {
        to: 'button_toolbar_with_input_group',
        label: 'Button toolbar with input group'
      },
      {
        to: 'sizing',
        label: 'Sizing'
      },
      {
        to: 'nesting',
        label: 'Nesting'
      },
      {
        to: 'vertical_variation',
        label: 'Vertical variation'
      }
    ]
  }
];

const ButtonExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Buttons"
        description="Buttons let users trigger an action or event with a single click, with support for multiple styles, colours, sizes and states."
        link={{
          text: 'Button on hb-react',
          url: 'https://react.hbui.dev/docs/components/button'
        }}
      />

      <DocPagesLayout sideNavItems={sideNavItems}>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Buttons">
            <p className="mb-0">
              The phoenix soft button is not one of hb-react&apos;s variants, so
              it comes from this theme&apos;s{' '}
              <code>components/base/Button</code> wrapper:{' '}
              <code>variant="phoenix"</code> with a <code>color</code>. Every
              other card on this page uses hb-react&apos;s own{' '}
              <code>Button</code> unless it says otherwise.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={phoenixButtonsCode} scope={{ Button }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid Buttons">
            <p className="mb-0">
              <code>filled</code> is the default variant, so a{' '}
              <code>color</code> on its own gives a solid button. The colours
              are <code>primary</code>, <code>secondary</code>,{' '}
              <code>success</code>, <code>danger</code>, <code>warning</code>,{' '}
              <code>info</code> and <code>neutral</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={solidButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Subtle Buttons"
            description="The subtle variant tints the button with its colour instead of filling it."
          />
          <PhoenixDocCard.Body code={subtleButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Outline Buttons">
            <p className="mb-0">
              In need of a button, but not the hefty background colours they
              bring? <code>variant="outline"</code> drops the fill and states
              the colour with the border and label alone.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={outlineButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Text and link buttons">
            <p className="mb-0">
              <code>variant="text"</code> keeps the button&apos;s padding and
              hit area but drops its chrome; <code>variant="link"</code> makes
              it read as a link.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={textButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button Sizes">
            <p className="mb-0">
              Fancy larger or smaller buttons? Add <code>size="lg"</code> or{' '}
              <code>size="sm"</code>; <code>md</code> is the default.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonSizesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button Shapes">
            <p className="mb-0">
              <code>shape="square"</code> and <code>shape="circle"</code> give
              an icon-only button an even box, and <code>variant="icon"</code>{' '}
              strips it back to the icon itself. There is no capsule shape —
              reach for a <code>rounded-full</code> utility.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={buttonShapesCode}
            scope={{
              FontAwesomeIcon,
              faPlus,
              faTrash,
              faAlignLeft,
              faAlignRight
            }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Close Buttons">
            <p className="mb-0">
              <code>CloseButton</code> is its own component and already carries{' '}
              <code>aria-label="Close"</code>. It takes a{' '}
              <code>shape="circle"</code>, and inverts itself inside anything
              marked <code>data-hb-theme="dark"</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={closeButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Buttons with icons and label">
            <p className="mb-0">
              hb-react&apos;s <code>Button</code> takes icons as children. The
              app wrapper adds <code>startIcon</code> and <code>endIcon</code>{' '}
              props, which space the icon against the label for you.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={buttonWithIconCode}
            scope={{ FontAwesomeIcon, FeatherIcon, Button, faPlus, faTrash }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Disabled state">
            <p className="mb-0">
              Make buttons look inactive by adding the <code>disabled</code>{' '}
              prop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={disableButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button loading state">
            <p className="mb-1">
              When a button starts an asynchronous action it is good practice to
              feed the loading state back to the user. The app wrapper&apos;s{' '}
              <code>loading</code> prop swaps in a spinner and disables the
              button for you.
            </p>
            <p className="mb-0">
              To position the spinner, use{' '}
              <code>loadingPosition: 'start' | 'end'</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={loadingButtonsCode} scope={{ Button }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Block buttons"
            description="Buttons stretch to their container, so a grid or a flex column is all a stack of block buttons needs."
          />
          <PhoenixDocCard.Body code={blockButtonsCode} />
        </PhoenixDocCard>

        <DocPageHeader
          title="Button Group"
          id="button_group"
          description="Group a series of buttons together on a single line or stack them in a vertical column."
          link={{
            text: 'Button Group on hb-react',
            url: 'https://react.hbui.dev/docs/components/button-group'
          }}
        />

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic example">
            <p className="mb-0">
              Wrap a series of <code>Button</code>s in a{' '}
              <code>ButtonGroup</code> and they join into a single control.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonGroupExampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button toolbar">
            <p className="mb-0">
              Combine sets of <code>ButtonGroup</code>s in a{' '}
              <code>ButtonGroup.Toolbar</code> for more complex components.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={btnToolbarCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button toolbar with input group">
            <p className="mb-0">
              Feel free to mix input groups with button groups in your toolbars.
              As above, you will likely need a few utilities to space things
              properly.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={inputGroupExampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              Instead of sizing every button in a group, put the{' '}
              <code>size</code> prop on the <code>ButtonGroup</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Nesting">
            <p className="mb-0">
              A <code>Dropdown</code> can sit in a group: render its{' '}
              <code>Dropdown.Trigger</code> with <code>asChild</code> so the
              button itself stays a direct child of the group. The menu is
              portaled, so its width belongs on <code>Dropdown.Content</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={nestingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Vertical variation">
            <p className="mb-0">
              Add <code>orientation="vertical"</code> to stack the buttons
              rather than lay them out in a row.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={verticalVariationCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ButtonExample;
