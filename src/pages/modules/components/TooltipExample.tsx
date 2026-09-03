import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Card } from '@hummingbirdui/react';

const exampleCode = `
<Tooltip>
  <Tooltip.Trigger asChild>
    <Button variant="outline" color="secondary">
      Hover me!
    </Button>
  </Tooltip.Trigger>
  <Tooltip.Content>My Tooltip</Tooltip.Content>
</Tooltip>
`;

const providerCode = `
<Tooltip.Provider delayDuration={200} skipDelayDuration={300}>
  <div className="flex flex-wrap gap-2">
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="outline" color="secondary">
          Save
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Save changes</Tooltip.Content>
    </Tooltip>

    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="outline" color="secondary">
          Copy
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Copy to clipboard</Tooltip.Content>
    </Tooltip>

    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="outline" color="secondary">
          Delete
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Delete item</Tooltip.Content>
    </Tooltip>
  </div>
</Tooltip.Provider>
`;

const placementCode = `
<div className="flex flex-wrap gap-2 py-8">
  {['top', 'right', 'bottom', 'left'].map((side) => (
    <Tooltip key={side}>
      <Tooltip.Trigger asChild>
        <Button variant="outline" color="secondary">
          Tooltip on {side}
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side={side}>
        Tooltip on <strong>{side}</strong>.
      </Tooltip.Content>
    </Tooltip>
  ))}
</div>
`;

const TooltipExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Tooltips"
        description="A small label that appears on hover or keyboard focus to describe the element beneath the pointer."
        link={{
          text: 'Tooltip on hb-react',
          url: 'https://react.hbui.dev/docs/components/tooltip'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overview" noPreview />
          <Card.Body>
            <p className="mb-0">
              A tooltip is three parts: a <code>Tooltip</code> root, a{' '}
              <code>Tooltip.Trigger</code> and a <code>Tooltip.Content</code>.
              The trigger positions the label for you, and the content is
              portaled to <code>document.body</code> — so any class you add
              belongs on <code>Tooltip.Content</code> itself, never on an
              ancestor. Tooltips open on hover and on keyboard focus, and close
              on Escape.
            </p>
          </Card.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              Use <code>Tooltip.Trigger asChild</code> so the tooltip attaches
              to your own element instead of wrapping it in an extra button.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Provider Example">
            <p className="mb-0">
              Every <code>Tooltip</code> wraps its own provider, so{' '}
              <code>delayDuration</code> on a single tooltip tunes how long the
              pointer must rest before it opens. Mounting one shared{' '}
              <code>Tooltip.Provider</code> instead gives a group of tooltips
              the same delay and the skip-delay behaviour — move between the
              buttons below and the second one opens immediately.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={providerCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Placement">
            <p className="mb-0">
              Pass <code>side</code> (<code>top</code>, <code>right</code>,{' '}
              <code>bottom</code> or <code>left</code>) to{' '}
              <code>Tooltip.Content</code> to choose which edge of the trigger
              the tooltip points from; <code>align</code> and{' '}
              <code>sideOffset</code> fine-tune it from there.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={placementCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default TooltipExample;
