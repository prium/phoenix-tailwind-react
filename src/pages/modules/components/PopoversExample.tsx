import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Card } from '@hummingbirdui/react';

const exampleCode = `
<Popover>
  <Popover.Trigger asChild>
    <Button color="primary">Click me to see</Button>
  </Popover.Trigger>
  <Popover.Content side="right">
    <Popover.Header>Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      Right?
    </Popover.Body>
  </Popover.Content>
</Popover>
`;

const placementCode = `
<div className="flex flex-wrap gap-2 py-16">
  {['top', 'right', 'bottom', 'left'].map((side) => (
    <Popover key={side}>
      <Popover.Trigger asChild>
        <Button variant="outline" color="secondary">
          Popover on {side}
        </Button>
      </Popover.Trigger>
      <Popover.Content side={side}>
        <Popover.Body>Popover {side}</Popover.Body>
      </Popover.Content>
    </Popover>
  ))}
</div>
`;

const disableElCode = `
<Popover>
  <Popover.Trigger asChild>
    <span className="inline-block">
      <Button color="primary" style={{ pointerEvents: 'none' }} disabled>
        Disabled button
      </Button>
    </span>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Body>Disabled popover</Popover.Body>
  </Popover.Content>
</Popover>
`;

const dismissibleCode = `
<Popover>
  <Popover.Trigger asChild>
    <Button color="primary">Dismissible popover</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Header className="flex items-center justify-between">
      Heads up
      <Popover.Close asChild>
        <CloseButton />
      </Popover.Close>
    </Popover.Header>
    <Popover.Body>
      Click the close button, click outside, or press Escape to dismiss this
      popover.
    </Popover.Body>
  </Popover.Content>
</Popover>
`;

const dynamicPositionCode = `
function UpdatingPopover() {
  const shortContent = 'Short and sweet!';
  const longContent =
    'Very long multiline content that is engaging and what-not, and long enough to change the size of the popover while it is open.';
  const [content, setContent] = useState(shortContent);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent((current) =>
        current === shortContent ? longContent : shortContent
      );
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button color="primary">Holy guacamole!</Button>
      </Popover.Trigger>
      <Popover.Content side="bottom" className="max-w-64">
        <Popover.Body>{content}</Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
`;

const PopoversExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Popovers"
        description="A floating panel anchored to a trigger, like those found in iOS, with Hummingbird's popover styling."
        link={{
          text: 'Popover on hb-react',
          url: 'https://react.hbui.dev/docs/components/popover'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overview" noPreview />
          <Card.Body>
            <p className="mb-0">
              A popover is a <code>Popover</code> root with a{' '}
              <code>Popover.Trigger</code> and a <code>Popover.Content</code>{' '}
              holding <code>Popover.Header</code> and <code>Popover.Body</code>.
              The trigger positions the panel and draws its arrow, and the
              content is portaled to <code>document.body</code> — so every class
              belongs on <code>Popover.Content</code> itself, never on an
              ancestor of the trigger.
            </p>
          </Card.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              A popover opens on click. Use <code>Popover.Trigger asChild</code>{' '}
              to keep your own button markup, and set{' '}
              <code>arrow=&#123;false&#125;</code> on{' '}
              <code>Popover.Content</code> if you would rather not draw the
              pointer.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Placement">
            <p className="mb-0">
              As with <code>Tooltip.Content</code>, use <code>side</code> and{' '}
              <code>align</code> on <code>Popover.Content</code> to position the
              panel relative to the trigger.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={placementCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Disabled elements">
            <p className="mb-0">
              Elements with the <code>disabled</code> attribute aren&rsquo;t
              interactive, so they never fire the events a popover listens for.
              As a workaround, point <code>Popover.Trigger asChild</code> at a
              wrapper <code>&lt;span&gt;</code> and override{' '}
              <code>pointer-events</code> on the disabled control inside it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={disableElCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dismissible Example">
            <p className="mb-0">
              <code>Popover.Close</code> dismisses the popover from inside the
              content — wrap a <code>CloseButton</code> in it with{' '}
              <code>asChild</code>. Clicking outside the panel and pressing
              Escape close it as well; cancel <code>onInteractOutside</code> or{' '}
              <code>onEscapeKeyDown</code> on <code>Popover.Content</code> when
              you want the close button to be the only way out.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dismissibleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Updating position dynamically">
            <p>
              There is no <code>scheduleUpdate()</code> to call. The popover is
              positioned by an observer that tracks the trigger and the content,
              so a panel that grows or shrinks while it is open repositions
              itself.
            </p>
            <p className="mb-0">
              The content below swaps between a short and a long string every
              three seconds; open it and watch the panel follow.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dynamicPositionCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default PopoversExample;
