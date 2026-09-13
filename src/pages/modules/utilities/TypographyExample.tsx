import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const alignmentCode = `
<>
  <p className="text-start">Start aligned text on all viewport sizes.</p>
  <p className="text-center">Center aligned text on all viewport sizes.</p>
  <p className="text-end">End aligned text on all viewport sizes.</p>
  <p className="sm:text-start">Start aligned text on viewports sized SM (small) or wider.</p>
  <p className="md:text-start">Start aligned text on viewports sized MD (medium) or wider.</p>
  <p className="lg:text-start">Start aligned text on viewports sized LG (large) or wider.</p>
  <p className="xl:text-start">Start aligned text on viewports sized XL (extra-large) or wider.</p>
</>`;

const textWrappingCode = `
<>
  <div className="badge text-white bg-primary text-wrap mb-4 w-24">
    This text should wrap.
  </div>
  <div className="text-nowrap bg-highlight w-32">
    This text should overflow the parent.
  </div>
</>
`;

const wordBreakCode = `
<p className="wrap-break-word">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
`;

const textTransformCode = `
<>
  <p className="lowercase">Lowercase text.</p>
  <p className="uppercase">Uppercase text.</p>
  <p className="capitalize">Capitalized text.</p>
</>
`;

const fontSizeCode = `
<>
  <h6 className="text-xs">.text-xs</h6>
  <h6 className="text-sm">.text-sm</h6>
  <h6 className="text-md">.text-md</h6>
  <h6 className="text-base">.text-base</h6>
  <h6 className="text-lg">.text-lg</h6>
  <h6 className="text-xl">.text-xl</h6>
  <h6 className="text-2xl">.text-2xl</h6>
  <h6 className="text-3xl">.text-3xl</h6>
  <h6 className="text-4xl">.text-4xl</h6>
  <h6 className="text-5xl">.text-5xl</h6>
  <h6 className="text-6xl">.text-6xl</h6>
</>
`;

const responsiveFontSizeCode = `
<>
  <h6 className="sm:text-base">.sm:text-base</h6>
  <h6 className="md:text-lg">.md:text-lg</h6>
  <h6 className="lg:text-xl">.lg:text-xl</h6>
  <h6 className="xl:text-2xl">.xl:text-2xl</h6>
</>
`;

const fontWeightCode = `
<>
  <div className="font-light">Font weight 300</div>
  <div className="font-normal">Font weight 400</div>
  <div className="font-medium">Font weight 500</div>
  <div className="font-semibold">Font weight 600</div>
  <div className="font-bold">Font weight 700</div>
  <div className="font-extrabold">Font weight 800</div>
  <div className="font-black">Font weight 900</div>
</>
`;

const lineHeightCode = `
<>
  <p className="leading-none">
    This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
  </p>
  <p className="leading-sm">
    This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
  </p>
  <p className="leading-base">
    This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
  </p>
  <p className="leading-lg">
    This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
  </p>
</>
`;

const headingCode = `
<>
  <h1>h1. Heading</h1>
  <h2>h2. Heading</h2>
  <h3>h3. Heading</h3>
  <h4>h4. Heading</h4>
  <h5>h5. Heading</h5>
  <h6>h6. Heading</h6>
</>
`;

const displayCode = `
<>
  <h1 className="display-1 mb-4">Display 1</h1>
  <h1 className="display-2 mb-4">Display 2</h1>
  <h1 className="display-3 mb-4">Display 3</h1>
  <h1 className="display-4 mb-4">Display 4</h1>
  <h1 className="display-5 mb-4">Display 5</h1>
  <h1 className="display-6 mb-4">Display 6</h1>
</>
`;

const fontFamilyCode = `
<>
  <p className="font-sans">Nunito Sans</p>
  <code className="font-mono">Monospace</code>
</>
`;

const textDecorationCode = `
<>
  <p className="underline">This text has a line underneath it.</p>
  <p className="line-through">This text has a line going through it.</p>
  <a className="no-underline" href="#!">This link has its text decoration removed</a>
</>
`;

const TypographyExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Typography"
        description="Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."
        link={{
          text: 'Typography on Hummingbird',
          url: 'https://hbui.dev/docs/content/typography/'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Text alignment"
            description="Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system."
          />
          <PhoenixDocCard.Body code={alignmentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Text wrapping and overflow">
            <p className="mb-0 text-muted">
              Wrap text with a <code>.text-wrap</code> class. Prevent text from
              wrapping with a <code>.text-nowrap</code> class.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={textWrappingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Word break">
            <p className="mb-0 text-muted">
              Prevent long strings of text from breaking your component's layout
              by using <code>.wrap-break-word</code> to set{' '}
              <code>overflow-wrap: break-word</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={wordBreakCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Text transform"
            description="Transform text in components with text capitalization classes."
          />
          <PhoenixDocCard.Body code={textTransformCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Font size">
            <p className="mb-0 text-muted">
              Quickly change the <code>font-size</code> of text with the{' '}
              <code>.text-*</code> utilities. The theme scale runs{' '}
              <code>.text-xs</code> (8.192px), <code>.text-sm</code> (10.24px),{' '}
              <code>.text-md</code> (12.8px), <code>.text-base</code> (16px),{' '}
              <code>.text-lg</code> (20px), <code>.text-xl</code> (25px) and on
              through <code>.text-2xl</code>–<code>.text-6xl</code>, so unlike
              HTML’s heading elements the size grows with the name.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fontSizeCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Responsive font size">
            <p className="mb-0 text-muted">
              Prefix any size with a breakpoint —{' '}
              <code>{'{breakpoint}:text-{size}'}</code> — to apply it from that
              viewport up.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={responsiveFontSizeCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Font weight">
            <p className="mb-0 text-muted">
              Quickly change the <code>font-weight</code> of text with these
              utilities. <code>font-weight</code> utilities are abbreviated as{' '}
              <code>.font-*</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fontWeightCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Line height">
            <p className="mb-0 text-muted">
              Change the line height with <code>.leading-*</code> utilities. The
              theme adds <code>.leading-sm</code> (1.2),{' '}
              <code>.leading-base</code> (1.49) and <code>.leading-lg</code>{' '}
              (1.4) next to Tailwind’s own <code>.leading-none</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={lineHeightCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Heading">
            <p className="mb-0 text-muted">
              Heading elements are sized from the theme’s{' '}
              <code>--h1-font-size</code>–<code>--h6-font-size</code> tokens; no
              class is needed.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={headingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Display"
            description="Display headings are larger, lighter headings for hero copy."
          />
          <PhoenixDocCard.Body code={displayCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Font family">
            <p className="mb-0 text-muted">
              Two font-family helper classes are available:{' '}
              <code>.font-sans</code> (Nunito Sans, the body font) and{' '}
              <code>.font-mono</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fontFamilyCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Text decoration"
            description="Decorate text in components with text decoration classes."
          />
          <PhoenixDocCard.Body code={textDecorationCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default TypographyExample;
