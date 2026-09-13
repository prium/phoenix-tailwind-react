import { Table } from '@hummingbirdui/react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <div className="inline bg-primary p-2 text-white">inline</div>
  <div className="block bg-primary p-2 text-white mt-4">block</div>
</>`;

const displayInPrintCode = `
<>
  <div className="print:hidden">Screen only (hidden when printing)</div>
  <div className="hidden print:block">Print only (hidden on screen)</div>
  <div className="hidden lg:block print:block">
    Hidden below lg on screen, but always shown when printing
  </div>
</>`;

/** The display values Tailwind ships a utility for. */
const displayValues = [
  'hidden',
  'inline',
  'inline-block',
  'block',
  'flow-root',
  'table',
  'inline-table',
  'table-cell',
  'table-row',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'contents',
  'list-item'
];

/** Screen-size recipes. `hidden`/`block` are plain utilities; the `sm:`…`2xl:`
 *  prefixes are Tailwind breakpoint variants of the same two classes. */
const hidingRecipes = [
  { size: 'Hidden on all', classes: 'hidden' },
  { size: 'Hidden only on xs', classes: 'hidden sm:block' },
  { size: 'Hidden only on sm', classes: 'sm:hidden md:block' },
  { size: 'Hidden only on md', classes: 'md:hidden lg:block' },
  { size: 'Hidden only on lg', classes: 'lg:hidden xl:block' },
  { size: 'Hidden only on xl', classes: 'xl:hidden 2xl:block' },
  { size: 'Hidden only on 2xl', classes: '2xl:hidden' },
  { size: 'Visible on all', classes: 'block' },
  { size: 'Visible only on xs', classes: 'block sm:hidden' },
  { size: 'Visible only on sm', classes: 'hidden sm:block md:hidden' },
  { size: 'Visible only on md', classes: 'hidden md:block lg:hidden' },
  { size: 'Visible only on lg', classes: 'hidden lg:block xl:hidden' },
  { size: 'Visible only on xl', classes: 'hidden xl:block 2xl:hidden' },
  { size: 'Visible only on 2xl', classes: 'hidden 2xl:block' }
];

const DisplayExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Display"
        description="Quickly and responsively toggle the display value of components and more with the display utilities. Includes support for the common display values as well as a print variant."
        link={{
          text: 'Display on Tailwind',
          url: 'https://tailwindcss.com/docs/display'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Notation" noPreview />
          <PhoenixDocCard.Body>
            <p>
              A display utility with no prefix applies at every breakpoint, from{' '}
              <code>xs</code> up to <code>2xl</code>: it is not wrapped in a
              media query, so it holds from <code>min-width: 0</code> and up. To
              change the value at a breakpoint, prefix the same class with that
              breakpoint.
            </p>
            <p className="mt-4">As such, the classes are named:</p>
            <ul>
              <li>
                <code>.block</code> for <code>xs</code>
              </li>
              <li>
                <code>.{'{breakpoint}'}:block</code> for <code>sm</code>,{' '}
                <code>md</code>, <code>lg</code>, <code>xl</code> and{' '}
                <code>2xl</code>
              </li>
            </ul>
            <p className="mt-4">Where the value is one of:</p>
            <ul>
              {displayValues.map(value => (
                <li key={value}>
                  <code>{value}</code>
                </li>
              ))}
            </ul>
            <p>
              Note that the &quot;none&quot; value is spelled{' '}
              <code>hidden</code>, not <code>none</code>.
            </p>
            <p className="mb-0">
              A breakpoint variant is a <code>min-width</code> media query, so
              it affects that breakpoint and every larger one. For example,{' '}
              <code>lg:hidden</code> sets <code>display: none</code> on{' '}
              <code>lg</code>, <code>xl</code> and <code>2xl</code> screens. The
              breakpoints are defined in <code>src/assets/css/theme.css</code>:{' '}
              <code>sm</code> 576px, <code>md</code> 768px, <code>lg</code>{' '}
              992px, <code>xl</code> 1200px, <code>2xl</code> 1540px.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              The utility name is the CSS value: <code>.inline</code> makes an
              element flow with the text around it, <code>.block</code> makes it
              take the full width of its parent.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Hiding Elements" noPreview />
          <PhoenixDocCard.Body>
            <p>
              For faster mobile-friendly development, use responsive display
              classes for showing and hiding elements by device. Avoid creating
              entirely different versions of the same page — hide elements
              responsively for each screen size instead.
            </p>
            <p>
              To hide an element use <code>.hidden</code>, or one of the{' '}
              <code>.{'{sm,md,lg,xl,2xl}'}:hidden</code> variants for a
              particular screen size and up.
            </p>
            <p>
              To show an element only over an interval of screen sizes, combine
              the two: <code>.hidden .md:block .xl:hidden</code> hides the
              element everywhere except on medium and large screens.
            </p>
            <Table bordered className="mb-0">
              <thead>
                <tr>
                  <th className="ps-2">Screen Size</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                {hidingRecipes.map(recipe => (
                  <tr key={recipe.size}>
                    <td className="ps-2">{recipe.size}</td>
                    <td>
                      <code>{recipe.classes}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Display in print" alignItems="end">
            <p className="mt-2">
              Tailwind has no separate set of print classes. Instead, prefix any
              display utility with the <code>print:</code> variant, which wraps
              it in <code>@media print</code>:
            </p>
            <ul>
              <li>
                <code>.print:hidden</code>
              </li>
              <li>
                <code>.print:inline</code>
              </li>
              <li>
                <code>.print:inline-block</code>
              </li>
              <li>
                <code>.print:block</code>
              </li>
              <li>
                <code>.print:table</code>
              </li>
              <li>
                <code>.print:table-row</code>
              </li>
              <li>
                <code>.print:table-cell</code>
              </li>
              <li>
                <code>.print:flex</code>
              </li>
              <li>
                <code>.print:inline-flex</code>
              </li>
            </ul>
            <p className="mb-0">
              The print variant and the breakpoint variants combine — the third
              example below is hidden below <code>lg</code> on screen but always
              printed.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={displayInPrintCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default DisplayExample;
