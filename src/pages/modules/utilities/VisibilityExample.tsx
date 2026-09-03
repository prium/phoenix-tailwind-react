import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `.visible
.invisible`;

const VisibilityExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Visibility"
        description="Control the visibility, without modifying the display, of elements with visibility utilities."
        link={{
          text: 'Visibility on Tailwind',
          url: 'https://tailwindcss.com/docs/visibility'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" noPreview>
            <div className="mt-2 text-muted">
              <p>
                Set the <code>visibility</code> of elements with our visibility
                utilities. These utility classes do not modify the display value
                at all and do not affect layout – <code>invisible</code>{' '}
                elements still take up space in the page. Content will be hidden
                both visually and for assistive technology/screen reader users.
              </p>
              <p className="mb-0">
                Apply <code>visible</code> or <code>invisible</code> as needed.
                To remove an element from the layout altogether use{' '}
                <code>hidden</code> from the display utilities instead.
              </p>
            </div>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body hidePreview code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default VisibilityExample;
