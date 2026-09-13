import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

/* Every example below renders hb-react's `Table` straight out of the react-live
   scope (`PhoenixLiveProvider` injects the whole `@hummingbirdui/react`
   namespace), so the snippets are exactly what you would paste into a page. */

const headerMarkup = `
  <Table.Header>
    <Table.Row>
      <Table.Head scope="col">#</Table.Head>
      <Table.Head scope="col">First</Table.Head>
      <Table.Head scope="col">Last</Table.Head>
      <Table.Head scope="col">Handle</Table.Head>
    </Table.Row>
  </Table.Header>`;

const bodyMarkup = `
  <Table.Body>
    <Table.Row>
      <Table.Head scope="row">1</Table.Head>
      <Table.Cell>Mark</Table.Cell>
      <Table.Cell>Otto</Table.Cell>
      <Table.Cell>@mdo</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Head scope="row">2</Table.Head>
      <Table.Cell>Jacob</Table.Cell>
      <Table.Cell>Thornton</Table.Cell>
      <Table.Cell>@fat</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Head scope="row">3</Table.Head>
      <Table.Cell colSpan={2}>Larry the Bird</Table.Cell>
      <Table.Cell>@twitter</Table.Cell>
    </Table.Row>
  </Table.Body>`;

/** `<Table {props}>` around the shared header + body markup. */
const tableCode = (props = '') =>
  `<Table${props ? ` ${props}` : ''}>${headerMarkup}${bodyMarkup}
</Table>
`;

const exampleCode = tableCode();
const stripedCode = tableCode('striped');
const stripedColumnsCode = tableCode('stripedColumns');
const hoverCode = tableCode('hover');
const borderedCode = tableCode('bordered');
const borderlessCode = tableCode('borderless');
const smTableCode = tableCode('size="sm" hover');

const activeCode = `
<Table hover>${headerMarkup}
  <Table.Body>
    <Table.Row active>
      <Table.Head scope="row">1</Table.Head>
      <Table.Cell>Mark</Table.Cell>
      <Table.Cell>Otto</Table.Cell>
      <Table.Cell>@mdo</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Head scope="row">2</Table.Head>
      <Table.Cell active>Jacob</Table.Cell>
      <Table.Cell>Thornton</Table.Cell>
      <Table.Cell>@fat</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Head scope="row">3</Table.Head>
      <Table.Cell colSpan={2}>Larry the Bird</Table.Cell>
      <Table.Cell>@twitter</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
`;

const colorCode = `
<div className="flex flex-col gap-6">
  <Table color="primary" bordered>${headerMarkup}${bodyMarkup}
  </Table>
  <Table color="success" bordered>${headerMarkup}${bodyMarkup}
  </Table>
  <Table color="danger" bordered>${headerMarkup}${bodyMarkup}
  </Table>
</div>
`;

const captionCode = `
<Table highlight>
  <Table.Caption className="text-muted">List of users</Table.Caption>${headerMarkup}${bodyMarkup}
  <Table.Footer>
    <Table.Row>
      <Table.Head scope="row" colSpan={3}>Total</Table.Head>
      <Table.Head>3 users</Table.Head>
    </Table.Row>
  </Table.Footer>
</Table>
`;

const stickyHeaderCode = `
<div className="overflow-y-auto scrollbar h-50">
  <Table stickyHeader striped>${headerMarkup}
    <Table.Body>
      <Table.Row>
        <Table.Head scope="row">1</Table.Head>
        <Table.Cell>Mark</Table.Cell>
        <Table.Cell>Otto</Table.Cell>
        <Table.Cell>@mdo</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Head scope="row">2</Table.Head>
        <Table.Cell>Jacob</Table.Cell>
        <Table.Cell>Thornton</Table.Cell>
        <Table.Cell>@fat</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Head scope="row">3</Table.Head>
        <Table.Cell>Larry</Table.Cell>
        <Table.Cell>the Bird</Table.Cell>
        <Table.Cell>@twitter</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Head scope="row">4</Table.Head>
        <Table.Cell>Anna</Table.Cell>
        <Table.Cell>Karina</Table.Cell>
        <Table.Cell>@anna</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Head scope="row">5</Table.Head>
        <Table.Cell>Homer</Table.Cell>
        <Table.Cell>Simpson</Table.Cell>
        <Table.Cell>@homer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Head scope="row">6</Table.Head>
        <Table.Cell>Emily</Table.Cell>
        <Table.Cell>Watson</Table.Cell>
        <Table.Cell>@emily</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</div>
`;

const wideHeadings = [
  '#',
  'Heading',
  'Heading',
  'Heading',
  'Heading',
  'Heading',
  'Heading',
  'Heading',
  'Heading',
  'Heading',
  'Heading',
  'Heading'
];

const wideRow = (cells: string[], indent: string) =>
  [
    `${indent}<Table.Row>`,
    ...cells.map((cell, index) =>
      index === 0
        ? `${indent}  <Table.Head scope="row">${cell}</Table.Head>`
        : `${indent}  <Table.Cell>${cell}</Table.Cell>`
    ),
    `${indent}</Table.Row>`
  ].join('\n');

const wideTableMarkup = (indent: string) => `
${indent}<Table.Header>
${wideRow(wideHeadings, `${indent}  `)}
${indent}</Table.Header>
${indent}<Table.Body>
${[1, 2, 3]
  .map(row =>
    wideRow(
      wideHeadings.map((_, index) => (index === 0 ? `${row}` : 'Cell')),
      `${indent}  `
    )
  )
  .join('\n')}
${indent}</Table.Body>`;

const alwaysResponsiveCode = `
<div className="overflow-x-auto scrollbar">
  <Table className="whitespace-nowrap">${wideTableMarkup('    ')}
  </Table>
</div>
`;

const breakpointSpecificCode = `
<div className="overflow-x-auto lg:overflow-x-visible scrollbar">
  <Table className="whitespace-nowrap">${wideTableMarkup('    ')}
  </Table>
</div>
`;

const BasicTableExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Tables"
        description="Documentation and examples for opt-in styling of tables with hb-react."
        link={{
          text: 'Table on Hummingbird',
          url: 'https://react.hbui.dev/docs/components/table'
        }}
      >
        <p className="mb-2 text-muted">
          hb-react&apos;s <code>Table</code> is a set of thin wrappers around
          the native table elements: <code>Table.Header</code>,{' '}
          <code>Table.Body</code>, <code>Table.Footer</code>,{' '}
          <code>Table.Row</code>, <code>Table.Head</code>,{' '}
          <code>Table.Cell</code> and <code>Table.Caption</code> render{' '}
          <code>thead</code>, <code>tbody</code>, <code>tfoot</code>,{' '}
          <code>tr</code>, <code>th</code>, <code>td</code> and{' '}
          <code>caption</code>. All styling is opt-in through the props on the
          root <code>Table</code>, each of which just adds one{' '}
          <code>table-*</code> class the phoenix skin styles.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              A plain <code>Table</code> with no modifier props: the phoenix
              skin gives it a bottom border per row, and drops the start padding
              of the first cell and the end padding of the last one so the table
              lines up with the card body around it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Striped rows">
            <p className="mb-0">
              <code>striped</code> adds a zebra background to every second row
              in <code>Table.Body</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stripedCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Striped columns">
            <p className="mb-0">
              <code>stripedColumns</code> stripes every second column instead,
              header included. It combines with <code>striped</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stripedColumnsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Hoverable rows">
            <p className="mb-0">
              <code>hover</code> highlights the body row under the pointer.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={hoverCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Active tables">
            <p className="mb-0">
              <code>active</code> is available on <code>Table.Row</code> and{' '}
              <code>Table.Cell</code> to mark a single row or cell as selected,
              and on <code>Table</code> itself to tint the whole table.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={activeCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Bordered tables">
            <p className="mb-0">
              <code>bordered</code> draws a border on all sides of every cell.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={borderedCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Table without borders">
            <p className="mb-0">
              <code>borderless</code> removes the per-row bottom border the base
              table draws.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={borderlessCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Variants">
            <p className="mb-0">
              <code>color</code> tints the whole table: <code>neutral</code>,{' '}
              <code>primary</code>, <code>secondary</code>, <code>info</code>,{' '}
              <code>success</code>, <code>warning</code> or <code>danger</code>.
              The variant also recolours the striped, hover and active
              backgrounds, and inverts in dark mode.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={colorCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Small tables">
            <p className="mb-0">
              <code>size=&quot;sm&quot;</code> is the compact density: it halves
              the horizontal cell padding and the vertical padding of the body
              cells. This is what every <code>AdvanceTable</code> in the app
              passes through <code>tableProps</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={smTableCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Caption and footer">
            <p className="mb-0">
              <code>Table.Caption</code> renders a <code>caption</code> and{' '}
              <code>Table.Footer</code> a <code>tfoot</code>.{' '}
              <code>highlight</code> gives the header and footer their own
              surface and drops the border between them and the body.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={captionCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-5">
          <PhoenixDocCard.Header title="Sticky header">
            <p className="mb-0">
              <code>stickyHeader</code> pins the header row while the body
              scrolls. The scroll itself belongs to the wrapper, so give it a
              height and <code>overflow-y-auto</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stickyHeaderCode} />
        </PhoenixDocCard>

        <DocPageHeader
          title="Responsive Tables"
          description="Responsive tables allow tables to be scrolled horizontally with ease."
          className="mb-5"
        >
          <p className="mb-2 text-muted">
            <code>Table</code> has no responsive prop — the scroll lives on the
            wrapper, exactly as <code>AdvanceTable</code> does it (
            <code>overflow-x-auto</code> plus the phoenix <code>scrollbar</code>{' '}
            skin).
          </p>
        </DocPageHeader>

        <PhoenixDocCard className="mb-5">
          <PhoenixDocCard.Header title="Always responsive">
            <p className="mb-0">
              Across every breakpoint, wrap the table in{' '}
              <code>div.overflow-x-auto.scrollbar</code> for horizontal
              scrolling. The following example has 12 columns that are
              scrollable horizontally.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alwaysResponsiveCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-5">
          <PhoenixDocCard.Header title="Breakpoint specific">
            <p className="mb-0">
              Add a breakpoint variant — <code>sm:overflow-x-visible</code>,{' '}
              <code>md:overflow-x-visible</code>,{' '}
              <code>lg:overflow-x-visible</code> or{' '}
              <code>xl:overflow-x-visible</code> — to scroll only below that
              breakpoint. From there up the table behaves normally and does not
              scroll horizontally.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={breakpointSpecificCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BasicTableExample;
