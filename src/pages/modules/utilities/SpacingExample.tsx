import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const horizontalCenteringCode = `
<div className="mx-auto bg-subtle w-50">Centered element</div>
`;

const negativeMarginCode = `.-mt-5 {
  margin-top: calc(var(--spacing) * -5);
}`;

const gapCode = `
<div className="grid gap-4">
  <div className="p-2 bg-subtle border border-subtle">Grid item 1</div>
  <div className="p-2 bg-subtle border border-subtle">Grid item 2</div>
  <div className="p-2 bg-subtle border border-subtle">Grid item 3</div>
</div>
`;

const SpacingExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Spacing"
        description="Tailwind CSS includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance."
        link={{
          text: 'Spacing on Tailwind',
          url: 'https://tailwindcss.com/docs/padding'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Margin and padding" noPreview />
          <PhoenixDocCard.Body>
            <p>
              Assign responsive-friendly margin or padding values to an element
              or a subset of its sides with shorthand classes. Includes support
              for individual properties, all properties, and vertical and
              horizontal properties.
            </p>
            <p className="mb-0">
              Using the CSS Grid layout module? Consider using the{' '}
              <a
                href="https://tailwindcss.com/docs/gap"
                rel="noreferrer"
                target="_blank"
              >
                gap utility
              </a>
              .
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Notations" noPreview />
          <PhoenixDocCard.Body>
            <p>
              Spacing utilities that apply to all breakpoints, from{' '}
              <code>xs</code> to <code>2xl</code>, have no breakpoint
              abbreviation in them. This is because those classes are applied
              from <code>min-width: 0</code> and up, and thus are not bound by a
              media query. The remaining breakpoints, however, do include a
              breakpoint abbreviation.
            </p>
            <p>
              The classes are named using the format{' '}
              <code>
                {'{property}'}
                {'{sides}'}-{'{size}'}
              </code>{' '}
              for <code>xs</code> and{' '}
              <code>
                {'{breakpoint}'}:{'{property}'}
                {'{sides}'}-{'{size}'}
              </code>{' '}
              for <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
              <code>xl</code> and <code>2xl</code>.
            </p>
            <p className="mb-2">
              Where<em> property </em> is one of:
            </p>
            <ul>
              <li>
                <code>m</code> - for classes that set <code>margin</code>
              </li>
              <li>
                <code>p</code> - for classes that set <code>padding</code>
              </li>
            </ul>
            <p className="mb-2">
              Where<em> sides </em> is one of:
            </p>
            <ul>
              <li>
                <code>t</code> - for classes that set <code>margin-top</code> or{' '}
                <code>padding-top</code>
              </li>
              <li>
                <code>b</code> - for classes that set <code>margin-bottom</code>{' '}
                or <code>padding-bottom</code>
              </li>
              <li>
                <code>s</code> - for classes that set{' '}
                <code>margin-inline-start</code> or{' '}
                <code>padding-inline-start</code>
              </li>
              <li>
                <code>e</code> - for classes that set{' '}
                <code>margin-inline-end</code> or{' '}
                <code>padding-inline-end</code>
              </li>
              <li>
                <code>x</code> - for classes that set <code>margin-inline</code>{' '}
                or <code>padding-inline</code>
              </li>
              <li>
                <code>y</code> - for classes that set <code>margin-block</code>{' '}
                or <code>padding-block</code>
              </li>
              <li>
                <code>l</code> - for classes that set <code>margin-left</code>{' '}
                or <code>padding-left</code>
              </li>
              <li>
                <code>r</code> - for classes that set <code>margin-right</code>{' '}
                or <code>padding-right</code>
              </li>
              <li>
                blank - for classes that set a <code>margin</code> or{' '}
                <code>padding</code> on all 4 sides of the element
              </li>
            </ul>
            <p className="mb-0">
              Where<em> size </em>is a multiple of the <code>--spacing</code>{' '}
              theme variable (0.25rem), so <code>p-4</code> is{' '}
              <code>calc(var(--spacing) * 4)</code> = 1rem. <code>auto</code>{' '}
              and arbitrary values such as <code>mt-[3px]</code> are supported
              too.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal centering">
            <p className="mb-0 text-muted">
              Additionally, Tailwind also includes an <code>.mx-auto</code>{' '}
              class for horizontally centering fixed-width block level
              content—that is, content that has <code>display: block</code> and{' '}
              <code>a width</code> set—by setting the horizontal margins to{' '}
              <code>auto</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalCenteringCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Negative margins" noPreview>
            <p className="mb-0 text-muted">
              For negative margins, use a <code>-</code> prefix before the size.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={negativeMarginCode} hidePreview />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Gap">
            <p className="mb-0 text-muted">
              When using <code>display: grid</code>, you can make use of{' '}
              <code>gap</code> utilities on the parent grid container. This can
              save on having to add margin utilities to individual grid items
              (children of a <code>display: grid</code> container). Gap
              utilities are responsive by default, and use the same{' '}
              <code>--spacing</code> scale as margin and padding.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={gapCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SpacingExample;
