import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import generic53 from 'assets/img/generic/53.png';

const exampleCode = `<div className="flex justify-center">
  <Card className="w-80 overflow-hidden">
    <Card.Image src={generic53} position="top" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card
        title and make up the bulk of the card's
        content.
      </Card.Text>
      <Button color="primary" size="sm">
        Go somewhere
      </Button>
    </Card.Body>
  </Card>

  <Card className="w-80 ms-4 overflow-hidden" aria-hidden="true">
    <div className="card-img-top w-80 h-45">
      <Skeleton className="w-full h-full" />
    </div>
    <Card.Body>
      <Skeleton.Group>
        <Card.Title>
          <Skeleton className="col-6" />
        </Card.Title>
        <Card.Text>
          <Skeleton className="col-7" /> <Skeleton className="col-4" />{' '}
          <Skeleton className="col-4" /> <Skeleton className="col-6" />{' '}
          <Skeleton className="col-8" />
        </Card.Text>
        <Button variant="text" disabled aria-hidden="true" className="placeholder col-6 text-primary" />
      </Skeleton.Group>
    </Card.Body>
  </Card>
</div>`;

const widthCode = `<>
  <Skeleton className="col-6" />
  <Skeleton className="w-3/4" /> <Skeleton style={{ width: '25%' }} />
</>`;

const colorCode = `<>
  <Skeleton className="col-12 bg-primary" />
  <Skeleton className="col-12 bg-secondary" />
  <Skeleton className="col-12 bg-success" />
  <Skeleton className="col-12 bg-danger" />
  <Skeleton className="col-12 bg-warning" />
  <Skeleton className="col-12 bg-info" />
  <Skeleton className="col-12 bg-subtle" />
  <Skeleton className="col-12 bg-dark" />
</>`;

const sizingCode = `<>
  <Skeleton size="lg" className="col-12" />
  <Skeleton className="col-12" />
  <Skeleton size="sm" className="col-12" />
  <Skeleton size="xs" className="col-12" />
</>`;

const animationCode = `<>
  <Skeleton.Group animation="glow" className="mb-2">
    <Skeleton className="col-12" />
  </Skeleton.Group>
  <Skeleton.Group animation="wave">
    <Skeleton className="col-12" />
  </Skeleton.Group>
</>`;

const SkeletonExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Skeleton"
        description="Use loading placeholders for your components or pages to indicate something may still be loading."
        link={{
          text: 'Skeleton on Hummingbird',
          url: 'https://react.hbui.dev/docs/components/skeleton'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Example"
            description="In the example below, we take a typical card component and recreate it with Skeleton bars to create a “loading card”. Size and proportions are the same between the two."
          />
          <PhoenixDocCard.Body code={exampleCode} scope={{ generic53 }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Width">
            <p className="mb-0">
              You can change the <code>width</code> through grid column classes,
              width utilities, or inline styles.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={widthCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Color">
            <p className="mb-0">
              By default, a <code>Skeleton</code> uses <code>currentColor</code>
              . This can be overridden with a custom color or utility class.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={colorCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              The height of a <code>Skeleton</code> is based on the typographic
              style of the parent element. Customize it with the{' '}
              <code>size</code> prop: <code>xs</code>, <code>sm</code>,{' '}
              <code>md</code> (default) or <code>lg</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Animation">
            <p className="mb-0">
              Animate the bars by setting <code>animation</code> on{' '}
              <code>Skeleton.Group</code> to <code>glow</code> (default) or{' '}
              <code>wave</code>, to better convey the perception of something
              being <em>actively</em> loaded.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={animationCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SkeletonExample;
