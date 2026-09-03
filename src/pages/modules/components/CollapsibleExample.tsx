import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Collapsible className="max-w-md">
  <Collapsible.Trigger asChild>
    <Button variant="outline" color="primary">
      Show details
    </Button>
  </Collapsible.Trigger>
  <Collapsible.Content>
    <div className="mt-2 rounded-md border border-default p-4">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
      anderson cred nesciunt sapiente ea proident.
    </div>
  </Collapsible.Content>
</Collapsible>
`;

const defaultOpenCode = `
<Collapsible defaultOpen className="max-w-md space-y-2">
  <div className="flex items-center justify-between gap-4">
    <span className="font-semibold">@hummingbirdui/react</span>
    <Collapsible.Trigger asChild>
      <Button variant="outline" color="secondary" size="sm">
        Toggle
      </Button>
    </Collapsible.Trigger>
  </div>
  <div className="rounded-md border border-default px-4 py-2 font-mono text-sm">
    Tailwind CSS
  </div>
  <Collapsible.Content className="space-y-2">
    <div className="rounded-md border border-default px-4 py-2 font-mono text-sm">
      Radix Primitives
    </div>
    <div className="rounded-md border border-default px-4 py-2 font-mono text-sm">
      Hummingbird UI
    </div>
  </Collapsible.Content>
</Collapsible>
`;

const multipleTargetsCode = `
function MultipleTargets() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-3xl">
      <div className="mb-4 flex gap-2">
        <Button variant="outline" color="primary" onClick={() => setOpen(!open)}>
          Toggle both panels
        </Button>
        <Button variant="subtle" color="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </div>
      <Row className="g-4">
        <Col md={6}>
          <Collapsible open={open} onOpenChange={setOpen}>
            <Collapsible.Content>
              <div className="rounded-md border border-default p-4">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid.
              </div>
            </Collapsible.Content>
          </Collapsible>
        </Col>
        <Col md={6}>
          <Collapsible open={open} onOpenChange={setOpen}>
            <Collapsible.Content>
              <div className="rounded-md border border-default p-4">
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </div>
            </Collapsible.Content>
          </Collapsible>
        </Col>
      </Row>
    </div>
  );
}
`;

const CollapsibleExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Collapsible"
        description="An interactive component that expands and collapses a single panel of content."
        link={{
          text: 'Collapsible on hb-react',
          url: 'https://react.hbui.dev/docs/components/collapsible'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              <code>Collapsible</code> lets users show and hide content with a
              trigger. Wrap your own control in{' '}
              <code>Collapsible.Trigger asChild</code> and put the panel inside{' '}
              <code>Collapsible.Content</code> — the open/close height animation
              comes from the content element.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Open by default"
            description="Use defaultOpen to render the panel expanded on mount. Content that sits outside Collapsible.Content always stays visible."
          />
          <PhoenixDocCard.Body code={defaultOpenCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Multiple targets">
            <p className="mb-0">
              A single control can show and hide several panels at once: give
              every <code>Collapsible</code> the same <code>open</code> state
              and the same <code>onOpenChange</code> handler instead of pointing
              a trigger at a list of ids.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={multipleTargetsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default CollapsibleExample;
