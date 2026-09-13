import Button from 'components/base/Button';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const flexCode = `
<>
  <div className="flex p-2 bg-muted mb-2">Flexbox container!</div>
  <div className="inline-flex p-2 bg-muted">Inline flexbox container!</div>
</>`;

const verticalCode = `
<div className="flex flex-col gap-4">
  <div className="bg-subtle border border-subtle">First item</div>
  <div className="bg-subtle border border-subtle">Second item</div>
  <div className="bg-subtle border border-subtle">Third item</div>
</div>`;

const horizontalCode = `
<div className="flex items-center gap-4">
  <div className="bg-subtle border border-subtle">First item</div>
  <div className="bg-subtle border border-subtle">Second item</div>
  <div className="bg-subtle border border-subtle">Third item</div>
</div>`;

const alignmentCode = `
<div className="flex items-center gap-2">
  <div className="bg-subtle border border-subtle">First item</div>
  <div className="bg-subtle border border-subtle ms-auto">Second item</div>
  <Divider orientation="vertical" />
  <div className="bg-subtle border border-subtle">Third item</div>
</div>`;

const buttonCode = `
// components/base/Button

<div className="flex flex-col gap-2 md:w-5/12 mx-auto">
  <Button variant="phoenix-secondary">Save changes</Button>
  <Button variant="outline-secondary">Cancel</Button>
</div>`;

const StackExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Stacks"
        description="hb-react has no Stack component — lay components out with the flexbox and gap utilities directly."
        link={{
          text: 'Flex on Tailwind',
          url: 'https://tailwindcss.com/docs/flex-direction'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex behaviors">
            <p className="mb-0 text-muted">
              <code>.flex</code> makes an element a block-level flex container
              and <code>.inline-flex</code> an inline one. Everything a stack
              used to do is a combination of <code>.flex</code>,{' '}
              <code>.flex-col</code> and a <code>.gap-*</code> utility.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Vertical">
            <p className="mb-0 text-muted">
              <code>.flex .flex-col</code> stacks items vertically and stretches
              them to the full width. Use a <code>.gap-*</code> utility to add
              space between items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={verticalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal">
            <p className="mb-0 text-muted">
              Drop <code>.flex-col</code> for a horizontal layout. Add{' '}
              <code>.items-center</code> to center the items vertically — they
              only take up their necessary width.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Alignment and dividers">
            <p className="mb-0 text-muted">
              Auto margins such as <code>.ms-auto</code> push an item and
              everything after it to the end of the row, and{' '}
              <code>{'<Divider orientation="vertical" />'}</code> draws a
              vertical rule between items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alignmentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Stack buttons">
            <p className="mb-0 text-muted">
              Use a vertical flex container to stack buttons and other elements.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonCode} scope={{ Button }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default StackExample;
