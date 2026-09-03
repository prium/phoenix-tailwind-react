import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Drawer direction="left">
  <Drawer.Trigger asChild>
    <Button color="primary">Launch</Button>
  </Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Drawer</Drawer.Title>
      <Drawer.Close asChild>
        <CloseButton />
      </Drawer.Close>
    </Drawer.Header>
    <Drawer.Body>
      <Drawer.Description>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Drawer.Description>
    </Drawer.Body>
  </Drawer.Content>
</Drawer>
`;

const placementCode = `
<div className="flex flex-wrap gap-2">
  {['left', 'right', 'top', 'bottom'].map((direction) => (
    <Drawer key={direction} direction={direction}>
      <Drawer.Trigger asChild>
        <Button color="primary" className="capitalize">
          {direction}
        </Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title className="capitalize">{direction} drawer</Drawer.Title>
          <Drawer.Close asChild>
            <CloseButton />
          </Drawer.Close>
        </Drawer.Header>
        <Drawer.Body>
          <Drawer.Description>
            Slides in from the {direction} edge of the viewport.
          </Drawer.Description>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  ))}
</div>
`;

const backdropCode = `
<div className="flex flex-wrap gap-2">
  <Drawer direction="right">
    <Drawer.Trigger asChild>
      <Button color="primary">Backdrop (default)</Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Drawer</Drawer.Title>
        <Drawer.Close asChild>
          <CloseButton />
        </Drawer.Close>
      </Drawer.Header>
      <Drawer.Body>
        <Drawer.Description>
          The backdrop dims the page and scrolling is locked while the drawer is
          open.
        </Drawer.Description>
      </Drawer.Body>
    </Drawer.Content>
  </Drawer>

  <Drawer direction="right">
    <Drawer.Trigger asChild>
      <Button color="primary">No backdrop</Button>
    </Drawer.Trigger>
    <Drawer.Content overlay={false}>
      <Drawer.Header>
        <Drawer.Title>Drawer</Drawer.Title>
        <Drawer.Close asChild>
          <CloseButton />
        </Drawer.Close>
      </Drawer.Header>
      <Drawer.Body>
        <Drawer.Description>
          {'overlay={false}'} hides the backdrop so the page behind stays
          visible.
        </Drawer.Description>
      </Drawer.Body>
    </Drawer.Content>
  </Drawer>

  <Drawer direction="right" modal={false}>
    <Drawer.Trigger asChild>
      <Button color="primary">Body scrolling</Button>
    </Drawer.Trigger>
    <Drawer.Content overlay={false}>
      <Drawer.Header>
        <Drawer.Title>Drawer</Drawer.Title>
        <Drawer.Close asChild>
          <CloseButton />
        </Drawer.Close>
      </Drawer.Header>
      <Drawer.Body>
        <Drawer.Description>
          {'modal={false}'} leaves the rest of the page scrollable and clickable.
        </Drawer.Description>
      </Drawer.Body>
    </Drawer.Content>
  </Drawer>
</div>
`;

const staticBackdropCode = `
<Drawer direction="left" dismissible={false}>
  <Drawer.Trigger asChild>
    <Button color="primary">Toggle static drawer</Button>
  </Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Drawer</Drawer.Title>
      <Drawer.Close asChild>
        <CloseButton />
      </Drawer.Close>
    </Drawer.Header>
    <Drawer.Body>
      <Drawer.Description>
        I will not close if you click outside of me — use the close button.
      </Drawer.Description>
    </Drawer.Body>
  </Drawer.Content>
</Drawer>
`;

const DrawerExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Drawer"
        description="A draggable, dismissible panel that slides in from any edge of the screen — hidden sidebars for navigation, shopping carts, and more."
        link={{
          text: 'Drawer on hb-react',
          url: 'https://react.hbui.dev/docs/components/drawer'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              A drawer is a <code>Drawer</code> root with a{' '}
              <code>Drawer.Trigger</code> and a <code>Drawer.Content</code>{' '}
              holding <code>Drawer.Header</code> and <code>Drawer.Body</code>.
              The panel is portaled to <code>document.body</code>; drag it back
              towards its edge, click the backdrop, press Escape or use{' '}
              <code>Drawer.Close</code> to dismiss it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Placement">
            <p>
              The <code>direction</code> prop on the <code>Drawer</code> root
              picks the edge the panel slides from:
            </p>
            <ul className="mb-0">
              <li>
                <code>left</code> places the drawer on the left of the viewport
              </li>
              <li>
                <code>right</code> places the drawer on the right of the
                viewport
              </li>
              <li>
                <code>top</code> places the drawer on the top of the viewport
              </li>
              <li>
                <code>bottom</code> places the drawer on the bottom of the
                viewport
              </li>
            </ul>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={placementCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Backdrop">
            <p className="mb-0">
              Scrolling the <code>&lt;body&gt;</code> element is disabled while
              a drawer and its backdrop are visible. Set{' '}
              <code>overlay=&#123;false&#125;</code> on{' '}
              <code>Drawer.Content</code> to drop the backdrop, and{' '}
              <code>modal=&#123;false&#125;</code> on the <code>Drawer</code>{' '}
              root to leave the rest of the page scrollable and interactive.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={backdropCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Static backdrop">
            <p className="mb-0">
              Set <code>dismissible=&#123;false&#125;</code> on the{' '}
              <code>Drawer</code> root and the drawer will not close when you
              click outside it, press Escape or drag it — only an explicit{' '}
              <code>Drawer.Close</code> dismisses it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={staticBackdropCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default DrawerExample;
