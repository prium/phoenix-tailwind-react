import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const sizingWidthCode = `
<>
  <div className="bg-subtle p-2 border-dashed mb-4 w-full"><code>.w-full</code></div>
  <div className="bg-subtle p-2 border-dashed mb-4 w-3/4"><code>.w-3/4</code></div>
  <div className="bg-subtle p-2 border-dashed mb-4 w-1/2"><code>.w-1/2</code></div>
  <div className="bg-subtle p-2 border-dashed mb-4 w-1/4"><code>.w-1/4</code></div>
  <div className="bg-subtle p-2 border-dashed mb-4 w-auto"><code>.w-auto</code></div>
</>`;

const sizingHeightCode = `
<div className="h-[50vh] py-4">
  <Row className="h-full">
    <Col>
      <div className="bg-subtle p-2 border-dashed mb-4 h-full"><code>.h-full</code></div>
    </Col>
    <Col>
      <div className="bg-subtle p-2 border-dashed mb-4 h-3/4"><code>.h-3/4</code></div>
    </Col>
    <Col>
      <div className="bg-subtle p-2 border-dashed mb-4 h-1/2"><code>.h-1/2</code></div>
    </Col>
    <Col>
      <div className="bg-subtle p-2 border-dashed mb-4 h-1/4"><code>.h-1/4</code></div>
    </Col>
    <Col>
      <div className="bg-subtle p-2 border-dashed mb-4 h-auto"><code>.h-auto</code></div>
    </Col>
  </Row>
</div>`;

const SizingExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Sizing"
        description="Easily make an element as wide or as tall with our width and height utilities."
        link={{
          text: 'Sizing on Tailwind',
          url: 'https://tailwindcss.com/docs/width'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Width (relative to parent)">
            <p className="mb-0 text-muted">
              <code>.w-full</code> and the fraction utilities{' '}
              <code>.w-1/4</code>, <code>.w-1/2</code>, <code>.w-3/4</code> size
              an element as a percentage of its parent;{' '}
              <code>.w-{'{number}'}</code> sizes it on the{' '}
              <code>--spacing</code> scale instead.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingWidthCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Height (relative to parent)">
            <p className="mb-0 text-muted">
              The height utilities mirror the width ones. A percentage height
              only resolves when the parent has a height, so the wrapper below
              is given one with the arbitrary value <code>.h-[50vh]</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingHeightCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SizingExample;
