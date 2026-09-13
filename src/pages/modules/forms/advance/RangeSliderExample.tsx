import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixSlider from 'components/forms/PhoenixSlider';

const defaultCode = `
<PhoenixSlider className="noUi-primary" options={{ start: [45] }} />
`;

const connectCode = `
<PhoenixSlider
  className="noUi-primary"
  options={{ start: [20, 80], connect: true }}
/>
`;

const coloredCode = `
<>
  <PhoenixSlider className="noUi-primary mb-6" options={{ start: [45] }} />
  <PhoenixSlider className="noUi-success mb-6" options={{ start: [35] }} />
  <PhoenixSlider className="noUi-info mb-6" options={{ start: [40] }} />
  <PhoenixSlider className="noUi-warning mb-6" options={{ start: [70] }} />
  <PhoenixSlider className="noUi-danger" options={{ start: [65] }} />
</>
`;

const stylingCode = `
<>
  <PhoenixSlider
    className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-0 mb-6"
    options={{ start: [45] }}
  />
  <PhoenixSlider
    className="noUi-primary-lighter noUi-handle-primary noUi-slider-medium noUi-handle-circle px-1 mb-6"
    options={{ start: [45] }}
  />
  <PhoenixSlider
    className="noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-8 pe-4"
    options={{ range: { min: 0, max: 250 }, start: [20, 150], connect: true }}
  />
</>
`;

const onChangeCode = `
function PriceFilter() {
  const [range, setRange] = useState([20, 150]);
  return (
    <>
      <PhoenixSlider
        className="noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-8 pe-4"
        options={{ range: { min: 0, max: 250 }, start: [20, 150], connect: true }}
        onChange={val => setRange(val.map(Number))}
      />
      <p className="mt-6 mb-0 text-muted">
        Selected: \${range[0]} – \${range[1]}
      </p>
    </>
  );
}
`;

const RangeSliderExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Range Slider"
        description="A lightweight, ARIA-accessible JavaScript range slider with multi-touch and keyboard support. Fast and has no dependencies."
        link={{
          text: 'Documentation for noUiSlider',
          url: 'https://refreshless.com/nouislider/'
        }}
      >
        <p className="mb-2 text-muted">
          <code>PhoenixSlider</code> wraps <code>nouislider</code> and is styled
          by the phoenix <code>.noUi-*</code> skin in{' '}
          <code>assets/css/plugins/nouislider.css</code>. Colour and size go on
          the wrapper as class names; everything else goes through{' '}
          <code>options</code>.
        </p>
        <p className="mb-0 text-muted">
          hb-react ships a <code>Slider</code>, but it emits{' '}
          <code>.slider</code>, <code>.slider-track</code>,{' '}
          <code>.slider-range</code> and <code>.slider-thumb</code>, none of
          which has CSS in hummingbird or in this theme — it would render
          unstyled, so this project uses noUiSlider, as the static theme does.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Default">
            <p className="mb-0">
              A single handle. The defaults match the static theme&apos;s
              initialiser: range <code>0–100</code>, <code>step</code> 1,
              tooltips on, and the track connected up to the handle.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={defaultCode} scope={{ PhoenixSlider }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Range Connect">
            <p className="mb-0">
              Two handles: pass two values to <code>start</code> and{' '}
              <code>connect: true</code> to fill the span between them.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={connectCode} scope={{ PhoenixSlider }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Colored Sliders">
            <p className="mb-0">
              <code>noUi-primary</code>, <code>noUi-success</code>,{' '}
              <code>noUi-info</code>, <code>noUi-warning</code> and{' '}
              <code>noUi-danger</code> colour the connected part of the track.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={coloredCode} scope={{ PhoenixSlider }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Styling">
            <p className="mb-0">
              <code>noUi-slider-slim</code>, <code>-medium</code> and{' '}
              <code>-large</code> set the track height;{' '}
              <code>noUi-handle-circle</code> rounds the handle and{' '}
              <code>noUi-handle-primary</code> colours it.{' '}
              <code>noUi-target-primary</code> and{' '}
              <code>noUi-primary-lighter</code> tint the track itself. The large
              variant is the one the hotel price filter uses.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stylingCode} scope={{ PhoenixSlider }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Reading the value">
            <p className="mb-0">
              The slider is uncontrolled once created, as it is in the static
              theme. Read it with <code>onChange</code> (on release) or{' '}
              <code>onUpdate</code> (while dragging); values arrive formatted,
              so convert them if you need numbers.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={onChangeCode}
            scope={{ PhoenixSlider }}
            noInline={false}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default RangeSliderExample;
