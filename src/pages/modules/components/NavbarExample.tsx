import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const lightCode = `
<Navbar expand="lg" className="bg-subtle" data-hb-theme="light">
  <Navbar.Brand href="#!">Navbar</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Nav className="me-auto lg:flex-row lg:items-center">
      <Nav.Link href="#!" active>
        Home
      </Nav.Link>
      <Nav.Link href="#!">Link</Nav.Link>
      <Dropdown>
        <Dropdown.Trigger asChild>
          <Nav.Link href="#!" className="dropdown-toggle">
            Dropdown
          </Nav.Link>
        </Dropdown.Trigger>
        <Dropdown.Content align="start" className="min-w-48">
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Nav.Link href="#!" disabled>
        Disabled
      </Nav.Link>
    </Navbar.Nav>
    <form className="flex gap-2" onSubmit={(event) => event.preventDefault()}>
      <Input type="search" placeholder="Search" aria-label="Search" />
      <Button type="submit" variant="outline" color="primary">
        Search
      </Button>
    </form>
  </Navbar.Collapse>
</Navbar>
`;

const darkCode = `
<Navbar expand="lg" className="bg-dark" data-hb-theme="dark">
  <Navbar.Brand href="#!">Navbar</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Nav className="me-auto lg:flex-row lg:items-center">
      <Nav.Link href="#!" active>
        Home
      </Nav.Link>
      <Nav.Link href="#!">Link</Nav.Link>
      <Dropdown>
        <Dropdown.Trigger asChild>
          <Nav.Link href="#!" className="dropdown-toggle">
            Dropdown
          </Nav.Link>
        </Dropdown.Trigger>
        <Dropdown.Content align="start" className="min-w-48" data-hb-theme="dark">
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Nav.Link href="#!" disabled>
        Disabled
      </Nav.Link>
    </Navbar.Nav>
    <Navbar.Text className="me-2">Signed in as Mark</Navbar.Text>
    <form className="flex gap-2" onSubmit={(event) => event.preventDefault()}>
      <Input type="search" placeholder="Search" aria-label="Search" />
      <Button type="submit" color="primary">
        Search
      </Button>
    </form>
  </Navbar.Collapse>
</Navbar>
`;

const NavbarExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Navbar"
        description="A responsive navigation header with a brand, links, text, and a collapsible menu."
        link={{
          text: 'Navbar on Hummingbird',
          url: 'https://react.hbui.dev/docs/components/navbar'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Navbar Light">
            <p className="mb-0">
              A navbar composes a <code>Navbar.Brand</code>, a{' '}
              <code>Navbar.Nav</code> of <code>Nav.Link</code>s and, when it
              should collapse, a <code>Navbar.Toggle</code> plus a{' '}
              <code>Navbar.Collapse</code>. The <code>expand</code> prop —{' '}
              <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>
              , <code>2xl</code> or <code>always</code> — decides the width
              above which the menu is laid out horizontally. Below it,{' '}
              <code>Navbar.Collapse</code> is a grid, so put the row layout
              behind the same breakpoint (<code>lg:flex-row</code>).
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={lightCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Navbar Dark">
            <p className="mb-0">
              Colour comes from the theme rather than a variant prop: set{' '}
              <code>data-hb-theme="dark"</code> on the <code>Navbar</code> and
              pick a background class. Because a <code>Dropdown</code> menu is
              portaled to <code>document.body</code> it sits outside that
              subtree, so repeat the attribute on <code>Dropdown.Content</code>{' '}
              to keep the menu dark too. <code>Navbar.Text</code> renders
              non-link content such as a signed-in label.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={darkCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default NavbarExample;
