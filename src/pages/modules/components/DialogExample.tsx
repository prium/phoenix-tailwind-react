import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Dialog>
  <Dialog.Trigger asChild>
    <Button color="primary">Launch demo dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content size="lg" centered>
    <Dialog.Header>
      <Dialog.Title>Dialog heading</Dialog.Title>
      <Dialog.Close asChild>
        <CloseButton />
      </Dialog.Close>
    </Dialog.Header>
    <Dialog.Body>
      <h4 className="mb-2">Centered dialog</h4>
      <Dialog.Description>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </Dialog.Description>
    </Dialog.Body>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button color="secondary" variant="subtle" className="me-2">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close asChild>
        <Button color="primary">Save changes</Button>
      </Dialog.Close>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>
`;

const staticBackdropCode = `
<Dialog>
  <Dialog.Trigger asChild>
    <Button color="primary">Launch static backdrop dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content
    onInteractOutside={(event) => event.preventDefault()}
    onEscapeKeyDown={(event) => event.preventDefault()}
  >
    <Dialog.Header>
      <Dialog.Title>Dialog title</Dialog.Title>
    </Dialog.Header>
    <Dialog.Body>
      I will not close if you click outside me. Don't even try to press the
      escape key.
    </Dialog.Body>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button color="secondary" variant="subtle" className="me-2">
          Close
        </Button>
      </Dialog.Close>
      <Dialog.Close asChild>
        <Button color="primary">Understood</Button>
      </Dialog.Close>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>
`;

const focusCode = `
function FocusExample() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button color="primary">Launch demo dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Dialog heading</Dialog.Title>
          <Dialog.Close asChild>
            <CloseButton />
          </Dialog.Close>
        </Dialog.Header>
        <Dialog.Body>
          <Field className="mb-4">
            <Field.Label htmlFor="dialogEmail">Email address</Field.Label>
            <Input
              id="dialogEmail"
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Field>
          <Field>
            <Field.Label htmlFor="dialogMessage">Example textarea</Field.Label>
            <Textarea id="dialogMessage" rows={3} />
          </Field>
        </Dialog.Body>
        <Dialog.Footer>
          <Button
            color="secondary"
            variant="subtle"
            className="me-2"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <Button color="primary" onClick={() => setOpen(false)}>
            Save changes
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
`;

const sizeCode = `
<div className="flex flex-wrap gap-2">
  {['sm', 'md', 'lg', 'xl'].map((size) => (
    <Dialog key={size}>
      <Dialog.Trigger asChild>
        <Button variant="outline" color="primary">
          {size.toUpperCase()} dialog
        </Button>
      </Dialog.Trigger>
      <Dialog.Content size={size}>
        <Dialog.Header>
          <Dialog.Title>{size.toUpperCase()} dialog</Dialog.Title>
          <Dialog.Close asChild>
            <CloseButton />
          </Dialog.Close>
        </Dialog.Header>
        <Dialog.Body>A dialog rendered with size="{size}".</Dialog.Body>
      </Dialog.Content>
    </Dialog>
  ))}
</div>
`;

const fullscreenCode = `
<div className="flex flex-wrap gap-2">
  {[true, 'sm-down', 'md-down', 'lg-down', 'xl-down', '2xl-down'].map(
    (fullscreen) => (
      <Dialog key={String(fullscreen)}>
        <Dialog.Trigger asChild>
          <Button color="primary">
            Full screen
            {typeof fullscreen === 'string'
              ? ' below ' + fullscreen.split('-')[0]
              : ''}
          </Button>
        </Dialog.Trigger>
        <Dialog.Content fullscreen={fullscreen} scrollable>
          <Dialog.Header>
            <Dialog.Title>Dialog</Dialog.Title>
            <Dialog.Close asChild>
              <CloseButton />
            </Dialog.Close>
          </Dialog.Header>
          <Dialog.Body>Dialog body content</Dialog.Body>
        </Dialog.Content>
      </Dialog>
    )
  )}
</div>
`;

const DialogExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Dialog"
        description="A modal dialog that traps focus, locks scroll, and dismisses on backdrop click or Escape — for lightboxes, user notifications, or completely custom content."
        link={{
          text: 'Dialog on hb-react',
          url: 'https://react.hbui.dev/docs/components/dialog'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic Dialog">
            <p className="mb-0">
              A dialog is a <code>Dialog</code> root wrapping a{' '}
              <code>Dialog.Trigger</code> and a <code>Dialog.Content</code>. The
              content is portaled to <code>document.body</code> together with
              its overlay, so every class you need belongs on{' '}
              <code>Dialog.Content</code> itself. <code>centered</code>{' '}
              vertically centres it in the viewport.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Static backdrop">
            <p className="mb-0">
              There is no <code>backdrop="static"</code> flag — cancel the
              dismiss events instead. Preventing <code>onInteractOutside</code>{' '}
              keeps a click on the backdrop from closing the dialog, and
              preventing <code>onEscapeKeyDown</code> does the same for the
              escape key.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={staticBackdropCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Focus on specific element">
            <p className="mb-0">
              The dialog moves focus into its content on open. Put{' '}
              <code>autoFocus</code> on the control you want focused to choose
              which one that is; <code>onOpenAutoFocus</code> on{' '}
              <code>Dialog.Content</code> takes over completely when you need
              full control.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={focusCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Optional Sizes">
            <p className="mb-0">
              The <code>size</code> prop on <code>Dialog.Content</code> sets the
              dialog width across <code>sm</code>, <code>md</code>,{' '}
              <code>lg</code> and <code>xl</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizeCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Fullscreen Dialog">
            <p className="mb-0">
              Use the <code>fullscreen</code> prop on{' '}
              <code>Dialog.Content</code> to fill the viewport. Passing a
              breakpoint (<code>sm-down</code> … <code>2xl-down</code>) only
              makes the dialog fullscreen <strong>below</strong> that width, and{' '}
              <code>scrollable</code> keeps the header pinned while the body
              scrolls.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fullscreenCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default DialogExample;
