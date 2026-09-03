import { Col, Row, cn } from '@hummingbirdui/react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useAppContext } from 'providers/AppProvider';

/* Tailwind only sees literal class strings, so every swatch below spells its
   `bg-*` out in full instead of interpolating the token name. */

/** `--color-*` tokens from `src/assets/css/theme.css`. */
const solidColors = [
  { name: 'primary', bg: 'bg-primary' },
  { name: 'secondary', bg: 'bg-secondary' },
  { name: 'success', bg: 'bg-success' },
  { name: 'info', bg: 'bg-info' },
  { name: 'warning', bg: 'bg-warning' },
  { name: 'danger', bg: 'bg-danger' }
];

/** `--background-color-*` tokens: the six surface levels the skin is built on. */
const surfaces = [
  { name: 'default', bg: 'bg-default', note: 'page background' },
  { name: 'soft', bg: 'bg-soft', note: 'cards, modals, dropdowns' },
  { name: 'subtle', bg: 'bg-subtle', note: 'table stripes, wells' },
  { name: 'muted', bg: 'bg-muted', note: 'inactive controls' },
  { name: 'highlight', bg: 'bg-highlight', note: 'selected rows, dividers' },
  { name: 'emphasis', bg: 'bg-emphasis', note: 'strongest surface' }
];

/** The gray ramp in `theme.css`, dark → light. */
const grays = [
  { name: '1000', bg: 'bg-gray-1000 border' },
  { name: '950', bg: 'bg-gray-950 border' },
  { name: '900', bg: 'bg-gray-900 border' },
  { name: '800', bg: 'bg-gray-800 border' },
  { name: '700', bg: 'bg-gray-700 border' },
  { name: '600', bg: 'bg-gray-600 border' },
  { name: '500', bg: 'bg-gray-500 border' },
  { name: '400', bg: 'bg-gray-400 border' },
  { name: '300', bg: 'bg-gray-300 border' },
  { name: '200', bg: 'bg-gray-200 border' },
  { name: '100', bg: 'bg-gray-100 border' },
  { name: '50', bg: 'bg-gray-50 border' }
];

const BackgroundExample = () => {
  const { getThemeColor } = useAppContext();

  return (
    <div>
      <DocPageHeader
        title="Background"
        description="Convey meaning through color with a handful of background utility classes. Every value below comes from a design token in src/assets/css/theme.css, so it follows the light and dark themes automatically."
        link={{
          text: 'Background on Tailwind',
          url: 'https://tailwindcss.com/docs/background-color'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid colors" noPreview>
            <p className="mb-0">
              One <code>bg-*</code> utility per semantic color token. Each color
              also has <code>-subtle</code>, <code>-lighter</code>,{' '}
              <code>-light</code>, <code>-dark</code> and <code>-darker</code>{' '}
              steps — <code>bg-primary-subtle</code>,{' '}
              <code>bg-danger-dark</code>, and so on. The hex shown is the
              light-theme value.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <Row className="g-0">
              {solidColors.map(color => (
                <Col xs={6} sm={4} lg={3} key={color.name}>
                  <div className={cn('p-4 flex flex-center h-45', color.bg)}>
                    <pre className="text-center">
                      <code className="text-white">.bg-{color.name}</code>
                      <br />
                      <code className="text-white mt-2 dark:hidden">
                        {getThemeColor(`color-${color.name}`)}
                      </code>
                    </pre>
                  </div>
                </Col>
              ))}
            </Row>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Body colors" noPreview>
            <p className="mb-0">
              The surface ramp. These are the backgrounds the layout itself is
              painted with, and they invert under{' '}
              <code>data-hb-theme=&quot;dark&quot;</code> — use one of these
              instead of a literal gray so a component keeps working in both
              themes. The matching text utilities are <code>text-default</code>,{' '}
              <code>text-soft</code>, <code>text-subtle</code>,{' '}
              <code>text-muted</code>, <code>text-highlight</code> and{' '}
              <code>text-emphasis</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <Row className="g-0">
              {surfaces.map(surface => (
                <Col xs={6} sm={4} lg={3} key={surface.name}>
                  <div className={cn('p-4 h-45 border', surface.bg)}>
                    <code className="text-default">.bg-{surface.name}</code>
                    <p className="mb-0 mt-2 text-md text-muted">
                      {surface.note}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Grays" noPreview>
            <p className="mb-0">
              The raw gray ramp. These values are fixed — they do not change
              with the theme, so reach for the body colors above unless you
              really do want one specific shade.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <Row className="g-0">
              {grays.map(gray => {
                const light = Number(gray.name) <= 400;
                const text = light ? 'text-gray-1000' : 'text-gray-100';
                return (
                  <Col xs={6} sm={4} lg={3} key={gray.name}>
                    <div className={cn('p-4 flex flex-center h-45', gray.bg)}>
                      <pre className="text-center">
                        <code className={text}>.bg-gray-{gray.name}</code>
                        <br />
                        <code className={cn(text, 'mt-2 dark:hidden')}>
                          {getThemeColor(`color-gray-${gray.name}`)}
                        </code>
                      </pre>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BackgroundExample;
