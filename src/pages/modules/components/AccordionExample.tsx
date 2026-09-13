import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Accordion type="single" collapsible defaultValue="item-1">
  <Accordion.Item value="item-1" className="border-t">
    <Accordion.Header>
      <Accordion.Trigger>How long does it take to ship my order?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="pt-0">
      <strong>This is the first item's accordion body.</strong> It is open on the first
      render because <code>defaultValue</code> names it. Accordion.Content wraps its
      children in an <code>accordion-body</code> element and animates the height of the
      panel around it, so just about any markup can go inside — the transition does limit
      overflow.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Header>
      <Accordion.Trigger>How long does it take to ship my order?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="pt-0">
      <strong>This is the second item's accordion body.</strong> Opening it closes the
      panel above, because <code>type="single"</code> keeps one item open at a time.
      <code>collapsible</code> additionally lets you close the open item by clicking its
      trigger again.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Header>
      <Accordion.Trigger>How long does it take to ship my order?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="pt-0">
      <strong>This is the third item's accordion body.</strong> Every trigger has to sit
      inside an Accordion.Header; the header renders the heading element and the trigger
      renders the button that carries the ARIA wiring and the chevron.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
`;

const multipleCode = `
<Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
  <Accordion.Item value="item-1" className="border-t">
    <Accordion.Header>
      <Accordion.Trigger>Can two panels stay open?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="pt-0">
      Yes. With <code>type="multiple"</code> every panel toggles on its own, so any
      number of them can be open at the same time.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Header>
      <Accordion.Trigger>How do I preset the open panels?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="pt-0">
      Pass an array of item values to <code>defaultValue</code>. Both this panel and the
      one above it are listed there, so both start open.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Header>
      <Accordion.Trigger>Can I control it from state?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="pt-0">
      Yes — swap <code>defaultValue</code> for <code>value</code> and
      <code>onValueChange</code> to drive the open items from your own state.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
`;

const disabledCode = `
<Accordion type="single" collapsible defaultValue="item-1">
  <Accordion.Item value="item-1" className="border-t">
    <Accordion.Header>
      <Accordion.Trigger>This item works as usual</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="pt-0">
      Open and close this panel to check that the rest of the accordion still responds.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2" disabled>
    <Accordion.Header>
      <Accordion.Trigger>This item is disabled</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="pt-0">
      You will not be able to open this panel.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
`;

const AccordionExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
        link={{
          text: 'Accordion on Hummingbird',
          url: 'https://react.hbui.dev/docs/components/accordion'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Accordion Example">
            <p className="mb-0">
              An accordion is composed of an <code>Accordion</code> root and one{' '}
              <code>Accordion.Item</code> per section, each holding an{' '}
              <code>Accordion.Header</code> with its{' '}
              <code>Accordion.Trigger</code> and an{' '}
              <code>Accordion.Content</code>. With <code>type="single"</code>{' '}
              only one panel is open at a time; add <code>collapsible</code> to
              let the open one be closed again.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Multiple"
            description="Use type='multiple' to let any number of panels stay open at once. The open items are then a list of values rather than a single one."
          />
          <PhoenixDocCard.Body code={multipleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Disabled">
            <p className="mb-0">
              Add <code>disabled</code> to an <code>Accordion.Item</code> to
              stop it from opening, or to the <code>Accordion</code> root to
              disable every item at once.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={disabledCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default AccordionExample;
