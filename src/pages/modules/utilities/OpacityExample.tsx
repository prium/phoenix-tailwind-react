import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <div className="text-white bg-primary">100%</div>
  <div className="text-white bg-primary/85">85%</div>
  <div className="text-white bg-primary/75">75%</div>
  <div className="text-white bg-primary/50">50%</div>
  <div className="text-white bg-primary/25">25%</div>
</>
`;

const OpacityExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Opacity"
        description="Control the opacity of elements."
      />
      <DocPagesLayout>
        {/* `.opacity-docs` (assets/css/components/documentation.css) sizes the
            swatches below to 100 × 100 */}
        <PhoenixDocCard className="mb-4 opacity-docs">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0 mt-2 text-muted">
              Append <code>/&lt;alpha&gt;</code> to any colour utility to fade
              the colour itself: <code>bg-primary/75</code>,{' '}
              <code>text-default/50</code>, <code>border-default/25</code>. Any
              percentage from <code>/0</code> to <code>/100</code> works.
              <br />
              To fade a whole element — its background, text and children
              together — use the <code>opacity-*</code> utilities instead, which
              set the CSS <code>opacity</code> property.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default OpacityExample;
