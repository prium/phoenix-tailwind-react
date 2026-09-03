import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from '@hummingbirdui/react';

const exampleCode = `
<Dropdown>
  <Dropdown.Trigger asChild>
    <Button color="primary" className="dropdown-toggle">
      Dropdown
    </Button>
  </Dropdown.Trigger>
  <Dropdown.Content className="min-w-48">
    <Dropdown.Item>Action</Dropdown.Item>
    <Dropdown.Item>Another action</Dropdown.Item>
    <Dropdown.Item>Something else</Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item>Separated link</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
`;

const dropdownLinkCode = `
<Dropdown>
  <Dropdown.Trigger asChild>
    <Button variant="outline" color="primary" className="dropdown-toggle">
      Dropdown link
    </Button>
  </Dropdown.Trigger>
  <Dropdown.Content className="min-w-48">
    <Dropdown.Item asChild>
      <a href="#!">Action</a>
    </Dropdown.Item>
    <Dropdown.Item asChild>
      <a href="#!">Another action</a>
    </Dropdown.Item>
    <Dropdown.Item asChild>
      <a href="#!">Something else</a>
    </Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
`;

const btnVariantCode = `
<div className="flex flex-wrap gap-2">
  {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
    (color) => (
      <Dropdown key={color}>
        <Dropdown.Trigger asChild>
          <Button color={color} className="capitalize dropdown-toggle">
            {color}
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content className="min-w-48">
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item className="active">Active item</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    )
  )}
</div>
`;

const splitBtnCode = `
<div className="flex flex-wrap gap-2">
  {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
    (color) => (
      <ButtonGroup key={color}>
        <Button color={color} className="capitalize">
          {color}
        </Button>
        <Dropdown>
          <Dropdown.Trigger asChild>
            <Button color={color} className="dropdown-toggle px-3">
              <span className="sr-only">Toggle dropdown</span>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Content align="end" className="min-w-48">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item className="active">Active item</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </ButtonGroup>
    )
  )}
</div>
`;

const sizingCode = `
<div className="flex flex-wrap items-center gap-2">
  {['lg', 'md', 'sm'].map((size) => (
    <Dropdown key={size}>
      <Dropdown.Trigger asChild>
        <Button size={size} color="secondary" className="dropdown-toggle">
          {size.toUpperCase()} button
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content className="min-w-48">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ))}
</div>
`;

const directionCode = `
<div className="flex flex-wrap gap-2 py-16">
  {['top', 'bottom', 'left', 'right'].map((side) => (
    <Dropdown key={side}>
      <Dropdown.Trigger asChild>
        <Button variant="outline" color="secondary" className="capitalize">
          Drop {side}
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content side={side} className="min-w-48">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ))}
</div>
`;

const dropdownItemsCode = `
<Dropdown>
  <Dropdown.Trigger asChild>
    <Button color="primary" className="dropdown-toggle">
      Menu items
    </Button>
  </Dropdown.Trigger>
  <Dropdown.Content className="min-w-56">
    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
    <Dropdown.Item asChild>
      <a href="#!">A link item</a>
    </Dropdown.Item>
    <Dropdown.Item onSelect={() => alert('Action')}>A button item</Dropdown.Item>
    <Dropdown.Item className="active">Active item</Dropdown.Item>
    <Dropdown.Item disabled>Disabled item</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
`;

const menuAlignMentCode = `
<div className="flex flex-wrap gap-2">
  {['start', 'center', 'end'].map((align) => (
    <Dropdown key={align}>
      <Dropdown.Trigger asChild>
        <Button variant="outline" color="secondary" className="dropdown-toggle">
          Aligned to {align}
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content align={align} className="min-w-64">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  ))}
</div>
`;

const responsiveAlignmentCode = `
function ResponsiveAlignment() {
  const [align, setAlign] = useState('start');

  useEffect(() => {
    const query = window.matchMedia('(min-width: 992px)');
    const sync = () => setAlign(query.matches ? 'end' : 'start');
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button color="primary" className="dropdown-toggle">
          Start aligned, end aligned from lg up
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content align={align} className="min-w-48">
        <Dropdown.Item>Action 1</Dropdown.Item>
        <Dropdown.Item>Action 2</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
`;

const autoCloseCode = `
function AutoClose() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-2">
      <Dropdown>
        <Dropdown.Trigger asChild>
          <Button variant="outline" color="secondary" className="dropdown-toggle">
            Default
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content className="min-w-48">
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>

      <Dropdown>
        <Dropdown.Trigger asChild>
          <Button variant="outline" color="secondary" className="dropdown-toggle">
            Stays open on select
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content className="min-w-48">
          {[1, 2, 3].map((item) => (
            <Dropdown.Item key={item} onSelect={(event) => event.preventDefault()}>
              Menu item
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown>

      <Dropdown open={open} onOpenChange={setOpen}>
        <Dropdown.Trigger asChild>
          <Button variant="outline" color="secondary" className="dropdown-toggle">
            Manual close
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content
          className="min-w-48"
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
        >
          <Dropdown.Item onSelect={(event) => event.preventDefault()}>
            Menu item
          </Dropdown.Item>
          <Dropdown.Item onSelect={(event) => event.preventDefault()}>
            Menu item
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item onSelect={() => setOpen(false)}>Close menu</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}
`;

const headerCode = `
<Dropdown>
  <Dropdown.Trigger asChild>
    <Button color="primary" className="dropdown-toggle">
      Grouped menu
    </Button>
  </Dropdown.Trigger>
  <Dropdown.Content className="min-w-56">
    <Dropdown.Group>
      <Dropdown.Label>Documents</Dropdown.Label>
      <Dropdown.Item>New file</Dropdown.Item>
      <Dropdown.Item>Import</Dropdown.Item>
    </Dropdown.Group>
    <Dropdown.Separator />
    <Dropdown.Group>
      <Dropdown.Label>Team</Dropdown.Label>
      <Dropdown.Item>Invite member</Dropdown.Item>
      <Dropdown.Item>Manage roles</Dropdown.Item>
    </Dropdown.Group>
  </Dropdown.Content>
</Dropdown>
`;

const dividerCode = `
<Dropdown>
  <Dropdown.Trigger asChild>
    <Button color="primary" className="dropdown-toggle">
      Divided menu
    </Button>
  </Dropdown.Trigger>
  <Dropdown.Content className="min-w-48">
    <Dropdown.Item>Action</Dropdown.Item>
    <Dropdown.Item>Another action</Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item>Something else</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>
`;

const DropdownExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Dropdowns"
        description="A toggleable menu of actions or links, anchored to a trigger and positioned by Radix UI."
        link={{
          text: 'Dropdown on hb-react',
          url: 'https://react.hbui.dev/docs/components/dropdown'
        }}
      />

      <DocPagesLayout>
        <Row className="g-3">
          <Col md>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Example">
                <p className="mb-0">
                  A dropdown is composed of a <code>Dropdown</code> root, a{' '}
                  <code>Dropdown.Trigger</code> and a{' '}
                  <code>Dropdown.Content</code>. Use{' '}
                  <code>Dropdown.Trigger asChild</code> so your own button keeps
                  its markup.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={exampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Dropdown link">
                <p className="mb-0">
                  <code>Dropdown.Item</code> renders a <code>div</code> with the{' '}
                  <code>dropdown-item</code> class. Add <code>asChild</code> to
                  render it as an <code>&lt;a&gt;</code> or a router{' '}
                  <code>&lt;Link&gt;</code> instead.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={dropdownLinkCode} />
            </PhoenixDocCard>
          </Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Button variant"
            description="The trigger is an ordinary Button, so every colour and style the button supports is available to a dropdown."
          />
          <PhoenixDocCard.Body code={btnVariantCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button split">
            <p className="mb-0">
              Split buttons are a <code>ButtonGroup</code> holding the primary
              action and a second button that is the{' '}
              <code>Dropdown.Trigger</code>. Only the caret button opens the
              menu.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={splitBtnCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Sizing"
            description="Sizing lives on the trigger button — pass size='sm', 'md' or 'lg'. The menu itself is sized by its own width classes."
          />
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Directions">
            <p className="mb-0">
              The <code>side</code> prop on <code>Dropdown.Content</code> picks
              the edge the menu opens from — <code>top</code>,{' '}
              <code>bottom</code> (default), <code>left</code> or{' '}
              <code>right</code>. The menu flips automatically when it would
              overflow the viewport.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={directionCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Menu items">
            <p>
              Menu contents do not have to be links. An item is interactive by
              default and fires <code>onSelect</code>; add <code>asChild</code>{' '}
              when you need a real <code>&lt;a&gt;</code>.
            </p>
            <p className="mb-0">
              <code>Dropdown.ItemText</code> renders non-interactive text,{' '}
              <code>disabled</code> mutes an item, and the <code>active</code>{' '}
              class marks the current one.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dropdownItemsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Menu alignment">
            <p className="mb-0">
              By default a menu is centred on its trigger. Pass{' '}
              <code>align="start"</code>, <code>"center"</code> or{' '}
              <code>"end"</code> to <code>Dropdown.Content</code> to line the
              menu up with either edge of the trigger.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={menuAlignMentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Responsive alignment">
            <p className="mb-0">
              <code>align</code> takes a single value rather than a map of
              breakpoints, so responsive alignment is driven from React: watch a
              media query and feed the result to <code>Dropdown.Content</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={responsiveAlignmentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Auto close">
            <p>
              A menu closes when an item is selected or when you click outside
              it. Call <code>event.preventDefault()</code> in an item&apos;s{' '}
              <code>onSelect</code> to keep the menu open after a choice — handy
              for menus of checkboxes or filters.
            </p>
            <p className="mb-0">
              For a menu that only the button can close, control it with{' '}
              <code>open</code> / <code>onOpenChange</code> and cancel{' '}
              <code>onInteractOutside</code> and <code>onEscapeKeyDown</code> on{' '}
              <code>Dropdown.Content</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={autoCloseCode} />
        </PhoenixDocCard>

        <Row className="g-3">
          <Col md>
            <PhoenixDocCard className="overflow-visible">
              <PhoenixDocCard.Header title="Dropdown headers">
                <p className="mb-0">
                  <code>Dropdown.Group</code> bundles related items under a{' '}
                  <code>Dropdown.Label</code> section header.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={headerCode} />
            </PhoenixDocCard>
          </Col>
          <Col md>
            <PhoenixDocCard className="overflow-visible">
              <PhoenixDocCard.Header title="Dropdown divider">
                <p className="mb-0">
                  <code>Dropdown.Separator</code> draws the rule between two
                  sets of items.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={dividerCode} />
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default DropdownExample;
