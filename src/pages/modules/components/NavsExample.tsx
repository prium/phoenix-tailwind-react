import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixDocProvider from 'providers/PhoenixDocProvider';

const horizontalCode = `
<Nav>
  <Nav.Item>
    <Nav.Link href="#!" active>
      Active
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const verticalCode = `
<Nav className="flex-col">
  <Nav.Item>
    <Nav.Link href="#!" active>
      Active
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const pillsCode = `
<div className="flex flex-col gap-6">
  <Nav className="nav-pills">
    <Nav.Item>
      <Nav.Link href="#!" active>
        Active
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#!">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#!" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>

  <Nav variant="underline">
    <Nav.Item>
      <Nav.Link href="#!" active>
        Active
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#!">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#!" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>

  <Nav variant="tabs">
    <Nav.Item>
      <Nav.Link href="#!" active>
        Active
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#!">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#!" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
</div>
`;

const fillsCode = `
<Nav className="nav-pills nav-fill">
  <Nav.Item>
    <Nav.Link href="#!" active>
      Active
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">Much longer nav link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const justifyCode = `
<Nav className="nav-pills nav-justified">
  <Nav.Item>
    <Nav.Link href="#!" active>
      Active
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">Much longer nav link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const dropdownsCode = `
<Nav className="nav-pills">
  <Nav.Item>
    <Nav.Link href="#!" active>
      NavLink 1
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!">NavLink 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#!" disabled>
      NavLink 3
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Nav.Link href="#!" className="dropdown-toggle">
          Dropdown
        </Nav.Link>
      </Dropdown.Trigger>
      <Dropdown.Content className="min-w-48">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  </Nav.Item>
</Nav>
`;

const NavsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Navs"
        description="A styled navigation list of links with active and disabled states."
        link={{
          text: 'Nav on hb-react',
          url: 'https://react.hbui.dev/docs/components/nav'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal">
            <p className="mb-0">
              <code>Nav</code> renders a <code>&lt;ul&gt;</code> of{' '}
              <code>Nav.Item</code>s. The <code>active</code> prop on{' '}
              <code>Nav.Link</code> marks the current link and sets{' '}
              <code>aria-current=&quot;page&quot;</code>; <code>disabled</code>{' '}
              mutes it and stops interaction.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Vertical"
            description="There is no orientation prop — stack the links by adding flex-col to the Nav."
          />
          <PhoenixDocCard.Body code={verticalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pills">
            <p className="mb-0">
              The <code>variant</code> prop covers <code>tabs</code> and{' '}
              <code>underline</code>; the pill treatment is the{' '}
              <code>nav-pills</code> class from the Phoenix skin, so pass it
              through <code>className</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={pillsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Fill and justify">
              <p className="mb-0">
                Add <code>nav-fill</code> to spread the links over the available
                width in proportion to their content.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={fillsCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header className="border-bottom-0">
              <p className="mb-0">
                If you want each <code>Nav.Item</code> to be the same size, use{' '}
                <code>nav-justified</code> instead.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={justifyCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dropdowns">
            <p className="mb-0">
              <code>Nav</code> has no dropdown part of its own. Drop a{' '}
              <code>Dropdown</code> into a <code>Nav.Item</code> and use{' '}
              <code>Dropdown.Trigger asChild</code> around the{' '}
              <code>Nav.Link</code> — the menu is portaled to{' '}
              <code>document.body</code>, so its classes belong on{' '}
              <code>Dropdown.Content</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dropdownsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default NavsExample;
