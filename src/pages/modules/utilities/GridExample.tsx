import { Table } from '@hummingbirdui/react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixDocProvider from 'providers/PhoenixDocProvider';

const containerCode = `
<Container>
  <Row className="p-2 bg-muted border">
    <Col>1 of 1</Col>
  </Row>
</Container>
`;

const fluidCode = `
<Container fluid>
  <Row className="p-2 bg-muted border">
    <Col>1 of 1</Col>
  </Row>
</Container>
`;

const containerBreakpointCode = `
<Container breakpoint="md">
  <Row className="p-2 bg-muted border">
    <Col>1 of 1</Col>
  </Row>
</Container>
`;

const equalWidthCode = `
<Container className="text-center">
  <Row className="bg-subtle mb-4">
    <Col className="p-2 border">1 of 2</Col>
    <Col className="p-2 border">2 of 2</Col>
  </Row>
  <Row className="bg-subtle">
    <Col className="p-2 border">1 of 3</Col>
    <Col className="p-2 border">2 of 3</Col>
    <Col className="p-2 border">3 of 3</Col>
  </Row>
</Container>
`;

const columnWidthCode = `
<Container className="text-center">
  <Row className="bg-subtle mb-4">
    <Col className="p-2 border">1 of 3</Col>
    <Col xs={6} className="p-2 border">2 of 3 (wider)</Col>
    <Col className="p-2 border">3 of 3</Col>
  </Row>
  <Row className="bg-subtle">
    <Col className="p-2 border">1 of 3</Col>
    <Col xs={5} className="p-2 border">2 of 3 (wider)</Col>
    <Col className="p-2 border">3 of 3</Col>
  </Row>
</Container>
`;

const autoWidthCode = `
<Container className="text-center">
  <Row className="bg-subtle mb-4 justify-center">
    <Col xs lg={2} className="p-2 border">1 of 3</Col>
    <Col md="auto" className="p-2 border">Variable width content</Col>
    <Col xs lg={2} className="p-2 border">3 of 3</Col>
  </Row>
  <Row className="bg-subtle">
    <Col className="p-2 border">1 of 3</Col>
    <Col md="auto" className="p-2 border">Variable width content</Col>
    <Col xs lg={2} className="p-2 border">3 of 3</Col>
  </Row>
</Container>
`;

const stackedToHorizontalCode = `
<Container className="text-center">
  <Row className="bg-subtle mb-4">
    <Col sm={8} className="p-2 border">.sm:col-8</Col>
    <Col sm={4} className="p-2 border">.sm:col-4</Col>
  </Row>
  <Row className="bg-subtle">
    <Col sm className="p-2 border">.sm:col</Col>
    <Col sm className="p-2 border">.sm:col</Col>
    <Col sm className="p-2 border">.sm:col</Col>
  </Row>
</Container>
`;

const mixAndMatchCode = `
<Container className="text-center">
  {/* full width on mobile, two thirds / one third from md up */}
  <Row className="mb-4">
    <Col md={8} className="bg-subtle p-2 border">md=8</Col>
    <Col xs={6} md={4} className="bg-subtle p-2 border">xs=6 md=4</Col>
  </Row>

  {/* half width on mobile, a third from md up */}
  <Row className="mb-4">
    <Col xs={6} md={4} className="bg-subtle p-2 border">xs=6 md=4</Col>
    <Col xs={6} md={4} className="bg-subtle p-2 border">xs=6 md=4</Col>
    <Col xs={6} md={4} className="bg-subtle p-2 border">xs=6 md=4</Col>
  </Row>

  {/* always half width */}
  <Row>
    <Col xs={6} className="bg-subtle p-2 border">xs=6</Col>
    <Col xs={6} className="bg-subtle p-2 border">xs=6</Col>
  </Row>
</Container>
`;

const rowColumnsCode = `
<Container className="text-center">
  <Row xs={2} className="bg-subtle mb-4">
    <Col className="p-2 border">Column</Col>
    <Col className="p-2 border">Column</Col>
    <Col className="p-2 border">Column</Col>
    <Col className="p-2 border">Column</Col>
  </Row>
  <Row xs={1} md={3} className="bg-subtle mb-4">
    <Col className="p-2 border">Column</Col>
    <Col className="p-2 border">Column</Col>
    <Col className="p-2 border">Column</Col>
  </Row>
  <Row xs="auto" className="bg-subtle">
    <Col className="p-2 border">Column</Col>
    <Col className="p-2 border">A wider column</Col>
    <Col className="p-2 border">Column</Col>
  </Row>
</Container>
`;

const offsetCode = `
<Container className="text-center">
  <Row className="bg-subtle mb-4">
    <Col md={4} className="p-2 border">md=4</Col>
    <Col md={{ span: 4, offset: 4 }} className="p-2 border">md=4 offset=4</Col>
  </Row>
  <Row className="bg-subtle mb-4">
    <Col md={{ span: 3, offset: 3 }} className="p-2 border">md=3 offset=3</Col>
    <Col md={{ span: 3, offset: 3 }} className="p-2 border">md=3 offset=3</Col>
  </Row>
  <Row className="bg-subtle">
    <Col md={{ span: 6, offset: 3 }} className="p-2 border">md=6 offset=3</Col>
  </Row>
</Container>
`;

const nestingCode = `
<Container className="text-center">
  <Row>
    <Col sm={3} className="bg-subtle p-2 border">Level 1: sm=3</Col>
    <Col sm={9} className="bg-subtle p-4 border">
      <Row>
        <Col xs={8} sm={6} className="p-2 border">Level 2: xs=8 sm=6</Col>
        <Col xs={4} sm={6} className="p-2 border">Level 2: xs=4 sm=6</Col>
      </Row>
    </Col>
  </Row>
</Container>
`;

/** Breakpoints and container widths as defined in `src/assets/css/theme.css`
 *  and `src/assets/css/components/container.css`. */
const gridOptions = {
  tiers: [
    {
      label: 'Extra small',
      width: '<576px',
      max: 'None (auto)',
      prefix: 'col-'
    },
    { label: 'Small', width: '≥576px', max: '540px', prefix: 'sm:col-' },
    { label: 'Medium', width: '≥768px', max: '720px', prefix: 'md:col-' },
    { label: 'Large', width: '≥992px', max: '960px', prefix: 'lg:col-' },
    {
      label: 'Extra large',
      width: '≥1200px',
      max: '1184px',
      prefix: 'xl:col-'
    },
    { label: 'Massive', width: '≥1540px', max: '1678px', prefix: '2xl:col-' }
  ],
  rows: [
    { label: '# of columns', value: '12' },
    { label: 'Gutter width', value: '2rem (1rem on each side of a column)' },
    { label: 'Nestable', value: 'Yes' },
    { label: 'Column ordering', value: 'Yes, with the order-* utilities' }
  ]
};

const GridExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Grid system"
        description="The grid uses containers, rows and columns to lay content out. It is built on flexbox, is mobile-first and is fully responsive: twelve columns, six breakpoint tiers, and a hb-react Container/Row/Col component for each piece."
        link={{
          text: 'Grid on Hummingbird',
          url: 'https://hbui.dev/docs/layout/grid/'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Grid options" noPreview>
            <p className="mb-0">
              The grid is a set of Tailwind utilities (<code>container</code>,{' '}
              <code>row</code>, <code>col</code>, <code>col-1</code>…
              <code>col-12</code>, <code>offset-0</code>…<code>offset-11</code>,{' '}
              <code>row-cols-1</code>…<code>row-cols-6</code>,{' '}
              <code>row-cols-auto</code>, and the <code>g-*</code>/
              <code>gx-*</code>/<code>gy-*</code> gutters). Each takes a
              breakpoint prefix, and the hb-react <code>Container</code>,{' '}
              <code>Row</code> and <code>Col</code> components emit exactly
              those classes from their props.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <div className="overflow-x-auto scrollbar">
              <Table bordered striped className="mb-0">
                <thead>
                  <tr>
                    <th />
                    {gridOptions.tiers.map(tier => (
                      <th className="text-center" key={tier.label}>
                        {tier.label}
                        <br />
                        <small>{tier.width}</small>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="whitespace-nowrap" scope="row">
                      Max container width
                    </th>
                    {gridOptions.tiers.map(tier => (
                      <td key={tier.label}>{tier.max}</td>
                    ))}
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap" scope="row">
                      Class prefix
                    </th>
                    {gridOptions.tiers.map(tier => (
                      <td key={tier.label}>
                        <code>.{tier.prefix}</code>
                      </td>
                    ))}
                  </tr>
                  {gridOptions.rows.map(row => (
                    <tr key={row.label}>
                      <th className="whitespace-nowrap" scope="row">
                        {row.label}
                      </th>
                      <td colSpan={6}>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Container">
              <p className="mb-0 text-muted">
                Containers center and horizontally pad the page content.{' '}
                <code>Container</code> renders <code>.container</code>, which is
                capped at the max width of the current breakpoint.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={containerCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header>
              <p className="mb-0 text-muted">
                <code>&lt;Container fluid /&gt;</code> is 100% wide at every
                viewport size.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={fluidCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header>
              <p className="mb-0 text-muted">
                <code>breakpoint</code> renders{' '}
                <code>.{'{breakpoint}'}:container</code>: full width below that
                breakpoint, capped from there up. Accepted values are{' '}
                <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
                <code>xl</code> and <code>xxl</code>. The skin also ships{' '}
                <code>.container-small</code> and <code>.container-medium</code>{' '}
                for the narrower page shells, and <code>.container-fluid</code>{' '}
                as a plain full-width box.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={containerBreakpointCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Equal-width">
            <p className="mb-0 text-muted">
              A <code>Col</code> with no width prop renders <code>.col</code>{' '}
              and takes an equal share of the row. Add as many as you need and
              every column stays the same width, at every viewport size.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={equalWidthCode} />
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Column width">
              <p className="mb-0 text-muted">
                Set the width of one column and its siblings resize around it.
                The width is a number of twelfths — <code>{'xs={6}'}</code>{' '}
                renders <code>.col-6</code> — and the other columns will resize
                no matter what that number is.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={columnWidthCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header>
              <p className="mb-0 text-muted">
                Set a breakpoint to <code>&quot;auto&quot;</code> (
                <code>.col-auto</code>) to size a column to the natural width of
                its content.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={autoWidthCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Stacked to horizontal">
            <p className="mb-0 text-muted">
              With a single set of <code>.sm:col-*</code> classes you get a grid
              that starts out stacked and becomes horizontal at the small
              breakpoint. The <code>Col</code> props are named after the same
              tiers: <code>xs</code>, <code>sm</code>, <code>md</code>,{' '}
              <code>lg</code>, <code>xl</code>, <code>xxl</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stackedToHorizontalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Mix and match">
            <p className="mb-0 text-muted">
              Combine tiers on the same column when you do not want it to simply
              stack. Each prop you set adds one more breakpoint class.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={mixAndMatchCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Row columns">
            <p className="mb-0 text-muted">
              The width props on <code>Row</code> render{' '}
              <code>.row-cols-*</code>, which sets how many columns fit on a
              line for every child at once — a shortcut instead of repeating{' '}
              <code>.md:col-4</code> on each <code>Col</code>. One through six
              are generated, plus <code>&quot;auto&quot;</code> to give each
              child its natural width.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={rowColumnsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Offset">
            <p className="mb-0 text-muted">
              Pass <code>{'{{ span, offset }}'}</code> to a breakpoint prop to
              push a column to the right by a number of twelfths (
              <code>.offset-0</code> … <code>.offset-11</code>). For anything
              else, use the margin utilities.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={offsetCode} />
        </PhoenixDocCard>

        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Nesting">
            <p className="mb-0 text-muted">
              To nest content, put a new <code>Row</code> and set of{' '}
              <code>Col</code>s inside an existing column. A nested row should
              hold columns adding up to twelve or fewer.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={nestingCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default GridExample;
