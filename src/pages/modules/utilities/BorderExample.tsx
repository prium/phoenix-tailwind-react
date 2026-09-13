import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const additiveBorderCode = `
<>
  <span className="border" />
  <span className="border-t" />
  <span className="border-e" />
  <span className="border-b" />
  <span className="border-s" />
</>`;

const subtractiveBorderCode = `
<>
  <span className="border border-0" />
  <span className="border border-t-0" />
  <span className="border border-e-0" />
  <span className="border border-b-0" />
  <span className="border border-s-0" />
</>`;

const borderColorCode = `
<>
  <span className="border border-info" />
  <span className="border border-success" />
  <span className="border border-warning" />
  <span className="border border-danger" />
  <div className="w-full" />
  <span className="border border-black" />
  <span className="border border-emphasis" />
  <span className="border border-gray-1000" />
  <span className="border border-gray-950" />
  <span className="border border-gray-900" />
  <span className="border border-gray-800" />
  <span className="border border-gray-700" />
  <span className="border border-gray-600" />
  <span className="border border-gray-500" />
  <span className="border border-gray-400" />
  <span className="border" />
  <span className="border border-subtle" />
  <span className="border border-gray-100" />
  <span className="border border-white" />
</>`;

const borderWidthCode = `
<>
  <span className="border border-1" />
  <span className="border border-2" />
  <span className="border border-3" />
  <span className="border border-4" />
  <span className="border border-5" />
  <hr />
  <span className="border-t border-t-2" />
  <span className="border-e border-e-2" />
  <span className="border-b border-b-2" />
  <span className="border-s border-s-2" />
</>`;

const borderRadiusCode = `
<>
  <span className="rounded-none" />
  <span className="rounded-sm" />
  <span className="rounded-md" />
  <span className="rounded-lg" />
  <span className="rounded-2xl" />
  <span className="rounded-4xl" />
  <span className="rounded-full" />
  <span className="rounded-full w-37.5! h-18.75!" />
</>`;

const responsiveBorderRadiusCode = `
<>
  <span className="md:rounded-t" />
  <span className="lg:rounded-t" />
  <span className="md:rounded-e" />
  <span className="lg:rounded-e" />
  <span className="md:rounded-b" />
  <span className="lg:rounded-b" />
  <span className="md:rounded-s" />
  <span className="lg:rounded-s" />
</>`;

const BorderExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Borders"
        description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Border" noPreview />
          <PhoenixDocCard.Body>
            <p>
              The classes are named using the format{' '}
              <code>border-{`{side}`}</code> for <code>xs</code> and{' '}
              <code>
                {`{breakpoint}`}:border-{`{side}`}
              </code>{' '}
              for <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
              <code>xl</code>, and <code>2xl</code>.
            </p>
            <p>
              Where<em> side</em> is one of:
            </p>
            <ul>
              <li>
                <code>t</code> - for classes that set style for{' '}
                <code>border-top</code>
              </li>
              <li>
                <code>b</code> - for classes that set style for{' '}
                <code>border-bottom</code>
              </li>
              <li>
                <code>s</code> - for classes that set style for{' '}
                <code>border-inline-start</code>
              </li>
              <li>
                <code>e</code> - for classes that set style for{' '}
                <code>border-inline-end</code>
              </li>
              <li>
                <code>x</code> - for classes that set both <code>*-start</code>{' '}
                and <code>*-end</code>
              </li>
              <li>
                <code>y</code> - for classes that set both <code>*-top</code>{' '}
                and <code>*-bottom</code>
              </li>
              <li>
                blank - for classes that set the <code>border</code> style on
                all 4 side of the element.
              </li>
            </ul>
            <p className="mb-0">
              Use border utilities to quickly style the <code>border</code> of
              an element. Great for images, buttons, or any other element.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4 border-component">
          <PhoenixDocCard.Header title="Additive" />
          <PhoenixDocCard.Body code={additiveBorderCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4 border-component">
          <PhoenixDocCard.Header title="Subtractive" />
          <PhoenixDocCard.Body code={subtractiveBorderCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4 border-component">
          <PhoenixDocCard.Header title="Border Color">
            <p className="mb-0 text-muted">
              Change the border color using utilities built on our theme colors.
              The most used border color utility classes of this theme are{' '}
              <code>.border</code> and <code>.border-subtle</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={borderColorCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4 border-component">
          <PhoenixDocCard.Header title="Border Width">
            <p className="mb-0 text-muted">
              You can control border width using the helper classes{' '}
              <code>border-{`{1|2|3|4|5}`}</code>. In addition, you can also use{' '}
              <code>border-t-2</code>, <code>border-e-2</code>,{' '}
              <code>border-b-2</code> and <code>border-s-2</code> for a single
              side.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={borderWidthCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4 border-component">
          <PhoenixDocCard.Header
            title="Border Radius"
            description="Add classes to an element to easily round its corners."
          />
          <PhoenixDocCard.Body code={borderRadiusCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4 border-component">
          <PhoenixDocCard.Header title="Responsive border radius">
            <p className="mb-0 text-muted">
              Round a single side with <code>rounded-{`{t|e|b|s}`}</code> and
              prefix it with a breakpoint —{' '}
              <code>
                {`{breakpoint}`}:rounded-{`{side}`}
              </code>{' '}
              — to apply the radius from that viewport up.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={responsiveBorderRadiusCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BorderExample;
