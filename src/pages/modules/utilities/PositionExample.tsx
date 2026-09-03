import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const positionValuesCode = `.static
.relative
.absolute
.sticky
.fixed`;

const arrangeElementsCode = `
<div className="relative bg-muted mb-6 h-50">
  <div className="p-4 bg-emphasis rounded-sm absolute top-0 start-0"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute top-0 end-0"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute top-1/2 start-1/2"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute bottom-1/2 end-1/2"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute bottom-0 start-0"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute bottom-0 end-0"></div>
</div>
`;

const centerElementsCode = `
<div className="relative bg-muted h-50">
  <div className="p-4 bg-emphasis rounded-sm absolute top-0 left-1/2 -translate-x-1/2"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute top-1/2 start-0 -translate-y-1/2"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute top-1/2 left-1/2 -translate-1/2"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute top-1/2 end-0 -translate-y-1/2"></div>
  <div className="p-4 bg-emphasis rounded-sm absolute bottom-0 left-1/2 -translate-x-1/2"></div>
</div>
`;

const PositionExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Position"
        description="Use these shorthand utilities for quickly configuring the position of an element."
        link={{
          text: 'Position on Tailwind',
          url: 'https://tailwindcss.com/docs/position'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Position values"
            description="Quick positioning classes are available, though they are not responsive."
            noPreview
          />
          <PhoenixDocCard.Body hidePreview code={positionValuesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Arrange Elements">
            <p className="mb-0 mt-2 text-muted">
              Arrange elements easily with the edge positioning utilities. The
              format is <code>{'{property}-{value}'}</code> — <code>top-0</code>
              , <code>bottom-0</code> and the logical <code>start-*</code> /{' '}
              <code>end-*</code> pair, which resolve to left and right and flip
              under <code>dir=&quot;rtl&quot;</code>. Fractions such as{' '}
              <code>top-1/2</code> and <code>start-1/2</code> offset by a
              percentage of the positioned ancestor.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={arrangeElementsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Center Elements">
            <p className="mb-0 mt-2 text-muted">
              An edge utility anchors the element&apos;s own edge, so centering
              takes a transform as well. Pair{' '}
              <code>top-1/2 -translate-y-1/2</code> for the vertical axis,{' '}
              <code>left-1/2 -translate-x-1/2</code> for the horizontal one, or{' '}
              <code>-translate-1/2</code> for both at once.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={centerElementsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default PositionExample;
