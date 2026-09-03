import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from '@hummingbirdui/react';

const exampleCode = `
<Loader />
`;

const growingCode = `
<Loader variant="grow" />
`;

const variantsCode = `
<>
  <div className="flex flex-wrap items-center gap-4">
    <Loader color="primary" />
    <Loader color="secondary" />
    <Loader color="success" />
    <Loader color="danger" />
    <Loader color="warning" />
    <Loader color="info" />
    <Loader color="neutral" />
    <Loader variant="grow" color="primary" />
    <Loader variant="grow" color="secondary" />
    <Loader variant="grow" color="success" />
    <Loader variant="grow" color="danger" />
    <Loader variant="grow" color="warning" />
    <Loader variant="grow" color="info" />
    <Loader variant="grow" color="neutral" />
  </div>
  <div className="flex flex-col gap-4 mt-6 max-w-sm">
    <Loader variant="bar" label="Loading" />
    <Loader variant="bar" color="success" label="Loading" />
    <Loader variant="bar" color="danger" label="Loading" />
  </div>
</>
`;

const sizingCode = `
<div className="flex flex-wrap items-center gap-4">
  <Loader size="sm" />
  <Loader />
  <Loader className="size-12" />
  <Loader variant="grow" size="sm" />
  <Loader variant="grow" />
  <Loader variant="grow" className="size-12" />
</div>
`;

const buttonsCode = `
<div className="flex flex-wrap items-center gap-2">
  <Button color="primary" shape="square" disabled aria-label="Loading">
    <Loader size="sm" label="" aria-hidden="true" />
  </Button>
  <Button color="primary" disabled>
    <Loader size="sm" label="" aria-hidden="true" className="me-2" />
    Loading...
  </Button>
  <Button color="primary" shape="square" disabled aria-label="Loading">
    <Loader variant="grow" size="sm" label="" aria-hidden="true" />
  </Button>
  <Button color="primary" disabled>
    <Loader variant="grow" size="sm" label="" aria-hidden="true" className="me-2" />
    Loading...
  </Button>
</div>
`;

const SpinnerExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Loaders"
        description="Indicate the loading state of a component or page with Hummingbird React loaders, built entirely with CSS and no animation library."
        link={{
          text: 'Loader on hb-react',
          url: 'https://react.hbui.dev/docs/components/loader'
        }}
      />

      <DocPagesLayout>
        <Row>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Example">
                <p className="mb-0">
                  The default <code>Loader</code> is a circular border spinner
                  with a screen-reader only &ldquo;Loading…&rdquo; label.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={exampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Growing spinner">
                <p className="mb-0">
                  <code>variant=&quot;grow&quot;</code> renders an indicator
                  that repeatedly grows and fades instead of spinning.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={growingCode} />
            </PhoenixDocCard>
          </Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Variants">
            <p className="mb-0">
              <code>variant</code> picks the loader style — <code>border</code>{' '}
              (default), <code>grow</code> or <code>bar</code>, a horizontal
              indeterminate bar. The spinners take their color from{' '}
              <code>currentcolor</code>, so the <code>color</code> prop recolors
              both them and the bar.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={variantsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              In addition to the standard size, a smaller preconfigured size is
              available by setting <code>size</code> to <code>sm</code>. Any
              other dimension comes from a size utility.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Buttons">
            <p className="mb-0">
              Loaders can be placed inside buttons to indicate a loading state.
              Pass an empty <code>label</code> and <code>aria-hidden</code> when
              the button already announces itself.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SpinnerExample;
