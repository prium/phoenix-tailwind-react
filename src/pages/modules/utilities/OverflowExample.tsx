import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

/* `.overflow-docs` (assets/css/components/documentation.css) is the sizing
   helper that gives each box below its 70px height and 22% width. The gold puts
   it on the card; here it wraps the demo instead, because hb-react's
   `Collapsible.Content` carries `overflow-hidden` and would be caught by the
   helper's `[class^='overflow-']` selector. */
const exampleCode = `
<div className="flex overflow-docs">
  <div className="overflow-auto">
    This is an example of using <code>.overflow-auto </code>on an element with set
    width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div className="overflow-hidden">
    This is an example of using <code>.overflow-hidden </code>on an element with set
    width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div className="overflow-visible">
    This is an example of using <code>.overflow-visible </code>on an element with set
    width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div className="overflow-scroll">
    This is an example of using <code>.overflow-scroll </code>on an element with set
    width and height dimensions. By design, this content will vertically scroll.
  </div>
</div>
`;

const OverflowExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Overflow"
        description="Use these shorthand utilities for quickly configuring how content overflows an element."
        link={{
          text: 'Overflow on Tailwind',
          url: 'https://tailwindcss.com/docs/overflow'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4 overflow-hidden min-h-62.5">
          <PhoenixDocCard.Header
            title="Example"
            description="Adjust the overflow property on the fly with four default values and classes: overflow-auto, overflow-hidden, overflow-visible and overflow-scroll. Axis-specific variants exist too — overflow-x-* and overflow-y-*."
          />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default OverflowExample;
