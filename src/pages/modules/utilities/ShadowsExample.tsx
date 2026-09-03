import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <div className="shadow-none p-4 mb-8 bg-subtle rounded-md">No shadow</div>
  <div className="shadow-sm p-4 mb-8 bg-subtle rounded-md">Small shadow</div>
  <div className="shadow-base p-4 mb-8 bg-subtle rounded-md">Regular shadow</div>
  <div className="shadow-lg p-4 mb-8 bg-subtle rounded-md">Larger shadow</div>
</>
`;

const ShadowsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Shadows"
        description="Add or remove shadows to elements with box-shadow utilities."
        link={{
          text: 'Shadows on Hummingbird',
          url: 'https://hbui.dev/docs/content/shadows/'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Examples">
            <p className="mb-0 mt-2 text-muted">
              The theme defines three shadows in{' '}
              <code>assets/css/theme.css</code> — <code>--shadow-sm</code>,{' '}
              <code>--shadow-base</code> and <code>--shadow-lg</code> — which
              Tailwind exposes as <code>shadow-sm</code>,{' '}
              <code>shadow-base</code> and <code>shadow-lg</code>.{' '}
              <code>shadow-none</code> removes a shadow again; the cards on
              these documentation pages use it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ShadowsExample;
