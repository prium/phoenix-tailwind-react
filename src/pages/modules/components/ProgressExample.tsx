import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from '@hummingbirdui/react';

const exampleCode = `
  <Progress value={60} className="h-3.75" aria-label="60 percent complete" />
`;

const labelCode = `
  <Progress value={50} className="h-3.75" aria-label="Half way there">
    <Progress.Bar className="rounded-lg">50%</Progress.Bar>
  </Progress>
`;

const heightCode = `
  <>
    <Progress value={70} className="h-px mb-4" aria-label="Thin track" />
    <Progress value={70} className="h-2.5 mb-4" aria-label="Default track" />
    <Progress value={70} className="h-5 mb-4" aria-label="Tall track" />
  </>
`;

const colorCode = `
  <>
    <Progress value={30} className="h-3.75 mb-4" aria-label="Success">
      <Progress.Bar color="success" />
    </Progress>
    <Progress value={40} className="h-3.75 mb-4" aria-label="Info">
      <Progress.Bar color="info" />
    </Progress>
    <Progress value={50} className="h-3.75 mb-4" aria-label="Warning">
      <Progress.Bar color="warning" />
    </Progress>
    <Progress value={60} className="h-3.75 mb-4" aria-label="Danger">
      <Progress.Bar color="danger" />
    </Progress>
  </>
`;

const stripedCode = `
  <>
    <Progress value={30} className="h-3.75 mb-4" aria-label="Striped success">
      <Progress.Bar color="success" striped />
    </Progress>
    <Progress value={40} className="h-3.75 mb-4" aria-label="Striped info">
      <Progress.Bar color="info" striped />
    </Progress>
    <Progress value={50} className="h-3.75 mb-4" aria-label="Striped warning">
      <Progress.Bar color="warning" striped />
    </Progress>
    <Progress value={60} className="h-3.75 mb-4" aria-label="Striped danger">
      <Progress.Bar color="danger" striped />
    </Progress>
  </>
`;

const animatedCode = `
() => {
  const [animated, setAnimated] = useState(true);
  return (
    <>
      <Progress value={45} className="h-3.75" aria-label="Uploading">
        <Progress.Bar striped animated={animated} />
      </Progress>
      <Button variant="outline" onClick={() => setAnimated(!animated)} className="mt-4">
        Toggle Animation
      </Button>
    </>
  );
}`;

const stackedCode = `
  <Progress.Stacked className="h-3.75">
    <Progress value={35} aria-label="Segment one">
      <Progress.Bar />
    </Progress>
    <Progress value={20} aria-label="Segment two">
      <Progress.Bar color="success" />
    </Progress>
    <Progress value={10} aria-label="Segment three">
      <Progress.Bar color="info" />
    </Progress>
  </Progress.Stacked>
`;

const ProgressExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Progress"
        description="Documentation and examples for using Hummingbird React progress bars, featuring support for stacked bars, animated backgrounds, and text labels."
        link={{
          text: 'Progress on Hummingbird',
          url: 'https://react.hbui.dev/docs/components/progress'
        }}
      />

      <DocPagesLayout>
        <Row>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Example">
                <p className="mb-0">
                  A <code>Progress</code> without children renders its{' '}
                  <code>Progress.Bar</code> for you.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={exampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="With Label">
                <p className="mb-0">
                  Content placed inside <code>Progress.Bar</code> renders as a
                  label on the bar.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={labelCode} />
            </PhoenixDocCard>
          </Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Height"
            description="The track height is set with a height utility on the root."
          />
          <PhoenixDocCard.Body code={heightCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Colors">
            <p className="mb-0">
              The <code>color</code> prop on <code>Progress.Bar</code> changes
              the bar&apos;s background: <code>primary</code>,{' '}
              <code>secondary</code>, <code>info</code>, <code>success</code>,{' '}
              <code>warning</code> or <code>danger</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={colorCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Striped">
            <p className="mb-0">
              Setting <code>striped</code> overlays a gradient stripe pattern on
              the bar.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stripedCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Animated">
            <p className="mb-0">
              Combine <code>animated</code> with <code>striped</code> to animate
              the stripes right to left. The animation pauses when reduced
              motion is preferred.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={animatedCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Stacked">
            <p className="mb-0">
              <code>Progress.Stacked</code> combines several segments in one
              track; each nested <code>Progress</code> is sized by its own{' '}
              <code>value</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stackedCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ProgressExample;
