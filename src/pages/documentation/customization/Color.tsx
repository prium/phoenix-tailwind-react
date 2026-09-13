import { Fragment, useEffect, useState } from 'react';
import { Table, cn } from '@hummingbirdui/react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { getColor } from 'helpers/utils';
import { Link } from 'react-router';

/*
 * Everything on this page is generated from the tokens in
 * `src/assets/css/theme.css`; the swatch values are read back off <html> at
 * runtime with `getColor`, so the page cannot drift from the stylesheet.
 *
 * Tailwind only sees literal class strings, so every utility used as a swatch
 * is spelled out in full instead of being interpolated from the token name.
 */

interface Step {
  /** custom property, without the leading `--` */
  token: string;
  /** literal utility used to paint the swatch */
  bg: string;
}

const step = (name: string, bg: string): Step => ({
  token: `color-${name}`,
  bg
});

/** The six theme colors and their five extra steps (`theme.css`). */
const themeColors: { name: string; steps: Step[] }[] = [
  {
    name: 'primary',
    steps: [
      step('primary-subtle', 'bg-primary-subtle'),
      step('primary-lighter', 'bg-primary-lighter'),
      step('primary-light', 'bg-primary-light'),
      step('primary', 'bg-primary'),
      step('primary-dark', 'bg-primary-dark'),
      step('primary-darker', 'bg-primary-darker')
    ]
  },
  {
    name: 'secondary',
    steps: [
      step('secondary-subtle', 'bg-secondary-subtle'),
      step('secondary-lighter', 'bg-secondary-lighter'),
      step('secondary-light', 'bg-secondary-light'),
      step('secondary', 'bg-secondary'),
      step('secondary-dark', 'bg-secondary-dark'),
      step('secondary-darker', 'bg-secondary-darker')
    ]
  },
  {
    name: 'success',
    steps: [
      step('success-subtle', 'bg-success-subtle'),
      step('success-lighter', 'bg-success-lighter'),
      step('success-light', 'bg-success-light'),
      step('success', 'bg-success'),
      step('success-dark', 'bg-success-dark'),
      step('success-darker', 'bg-success-darker')
    ]
  },
  {
    name: 'info',
    steps: [
      step('info-subtle', 'bg-info-subtle'),
      step('info-lighter', 'bg-info-lighter'),
      step('info-light', 'bg-info-light'),
      step('info', 'bg-info'),
      step('info-dark', 'bg-info-dark'),
      step('info-darker', 'bg-info-darker')
    ]
  },
  {
    name: 'warning',
    steps: [
      step('warning-subtle', 'bg-warning-subtle'),
      step('warning-lighter', 'bg-warning-lighter'),
      step('warning-light', 'bg-warning-light'),
      step('warning', 'bg-warning'),
      step('warning-dark', 'bg-warning-dark'),
      step('warning-darker', 'bg-warning-darker')
    ]
  },
  {
    name: 'danger',
    steps: [
      step('danger-subtle', 'bg-danger-subtle'),
      step('danger-lighter', 'bg-danger-lighter'),
      step('danger-light', 'bg-danger-light'),
      step('danger', 'bg-danger'),
      step('danger-dark', 'bg-danger-dark'),
      step('danger-darker', 'bg-danger-darker')
    ]
  }
];

/** `--color-light|dark|contrast|inverse` — fixed aliases used by the skin. */
const aliasColors: Step[] = [
  step('light', 'bg-light'),
  step('dark', 'bg-dark'),
  step('contrast', 'bg-contrast'),
  step('inverse', 'bg-inverse')
];

/** The gray ramp, light → dark. */
const grays: Step[] = [
  step('gray-50', 'bg-gray-50'),
  step('gray-100', 'bg-gray-100'),
  step('gray-200', 'bg-gray-200'),
  step('gray-300', 'bg-gray-300'),
  step('gray-400', 'bg-gray-400'),
  step('gray-500', 'bg-gray-500'),
  step('gray-600', 'bg-gray-600'),
  step('gray-700', 'bg-gray-700'),
  step('gray-800', 'bg-gray-800'),
  step('gray-900', 'bg-gray-900'),
  step('gray-950', 'bg-gray-950'),
  step('gray-1000', 'bg-gray-1000')
];

/** The five raw palettes the theme colors are built from. */
const palettes = [
  {
    name: 'blue',
    swatches: [
      step('blue-50', 'bg-blue-50'),
      step('blue-100', 'bg-blue-100'),
      step('blue-200', 'bg-blue-200'),
      step('blue-300', 'bg-blue-300'),
      step('blue-400', 'bg-blue-400'),
      step('blue-500', 'bg-blue-500'),
      step('blue-600', 'bg-blue-600'),
      step('blue-700', 'bg-blue-700'),
      step('blue-800', 'bg-blue-800'),
      step('blue-900', 'bg-blue-900'),
      step('blue-950', 'bg-blue-950')
    ]
  },
  {
    name: 'red',
    swatches: [
      step('red-50', 'bg-red-50'),
      step('red-100', 'bg-red-100'),
      step('red-200', 'bg-red-200'),
      step('red-300', 'bg-red-300'),
      step('red-400', 'bg-red-400'),
      step('red-500', 'bg-red-500'),
      step('red-600', 'bg-red-600'),
      step('red-700', 'bg-red-700'),
      step('red-800', 'bg-red-800'),
      step('red-900', 'bg-red-900'),
      step('red-950', 'bg-red-950')
    ]
  },
  {
    name: 'green',
    swatches: [
      step('green-50', 'bg-green-50'),
      step('green-100', 'bg-green-100'),
      step('green-200', 'bg-green-200'),
      step('green-300', 'bg-green-300'),
      step('green-400', 'bg-green-400'),
      step('green-500', 'bg-green-500'),
      step('green-600', 'bg-green-600'),
      step('green-700', 'bg-green-700'),
      step('green-800', 'bg-green-800'),
      step('green-900', 'bg-green-900'),
      step('green-950', 'bg-green-950')
    ]
  },
  {
    name: 'orange',
    swatches: [
      step('orange-50', 'bg-orange-50'),
      step('orange-100', 'bg-orange-100'),
      step('orange-200', 'bg-orange-200'),
      step('orange-300', 'bg-orange-300'),
      step('orange-400', 'bg-orange-400'),
      step('orange-500', 'bg-orange-500'),
      step('orange-600', 'bg-orange-600'),
      step('orange-700', 'bg-orange-700'),
      step('orange-800', 'bg-orange-800'),
      step('orange-900', 'bg-orange-900'),
      step('orange-950', 'bg-orange-950')
    ]
  },
  {
    name: 'cyan',
    swatches: [
      step('cyan-50', 'bg-cyan-50'),
      step('cyan-100', 'bg-cyan-100'),
      step('cyan-200', 'bg-cyan-200'),
      step('cyan-300', 'bg-cyan-300'),
      step('cyan-400', 'bg-cyan-400'),
      step('cyan-500', 'bg-cyan-500'),
      step('cyan-600', 'bg-cyan-600'),
      step('cyan-700', 'bg-cyan-700'),
      step('cyan-800', 'bg-cyan-800'),
      step('cyan-900', 'bg-cyan-900'),
      step('cyan-950', 'bg-cyan-950')
    ]
  }
];

/**
 * The six semantic levels. Each name exists twice — once as a text color and
 * once as a background color — and the two are different values.
 */
const semantic = [
  { name: 'default', bg: 'bg-default', note: 'page background / body text' },
  { name: 'soft', bg: 'bg-soft', note: 'cards, modals, dropdowns' },
  { name: 'subtle', bg: 'bg-subtle', note: 'wells, table stripes' },
  { name: 'muted', bg: 'bg-muted', note: 'inactive controls, secondary text' },
  { name: 'highlight', bg: 'bg-highlight', note: 'dividers, selected rows' },
  { name: 'emphasis', bg: 'bg-emphasis', note: 'strongest surface / headings' }
];

/** `--border-color-*` tokens. */
const borders = [
  { token: 'border-color-default', cls: 'border-default' },
  { token: 'border-color-subtle', cls: 'border-subtle' },
  { token: 'border-color-primary-subtle', cls: 'border-primary-subtle' },
  { token: 'border-color-secondary-subtle', cls: 'border-secondary-subtle' },
  { token: 'border-color-success-subtle', cls: 'border-success-subtle' },
  { token: 'border-color-info-subtle', cls: 'border-info-subtle' },
  { token: 'border-color-warning-subtle', cls: 'border-warning-subtle' },
  { token: 'border-color-danger-subtle', cls: 'border-danger-subtle' },
  { token: 'border-color-light-subtle', cls: 'border-light-subtle' },
  { token: 'border-color-dark-subtle', cls: 'border-dark-subtle' }
];

const valueTokens = [
  ...themeColors.flatMap(c => c.steps.map(s => s.token)),
  ...aliasColors.map(s => s.token),
  ...grays.map(s => s.token),
  ...palettes.flatMap(p => p.swatches.map(s => s.token)),
  ...semantic.flatMap(s => [
    `text-color-${s.name}`,
    `background-color-${s.name}`
  ])
];

/**
 * Resolve every token off `<html>` and re-resolve whenever the theme attribute
 * flips, so the printed values are always the ones the browser is using.
 */
const useTokenValues = (tokens: string[]) => {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const read = () =>
      setValues(Object.fromEntries(tokens.map(name => [name, getColor(name)])));
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-hb-theme']
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return values;
};

const Swatch = ({ className }: { className: string }) => (
  <div className={cn('h-10 w-30 rounded-md border border-subtle', className)} />
);

const Value = ({ value }: { value?: string }) =>
  value ? <code className="whitespace-nowrap">{value}</code> : <>&mdash;</>;

const Color = () => {
  const values = useTokenValues(valueTokens);

  return (
    <div>
      <DocPageHeader
        title="Color"
        description="Every color in the template comes from a design token in src/assets/css/theme.css. Tailwind turns each token into utilities, the dark theme re-declares the same names with different values, and JavaScript reads them back with getColor() — so a color is changed in exactly one place."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="How it works" noPreview>
            <p className="mb-0 text-muted">
              The theme is declared with Tailwind v4&apos;s CSS-first API. There
              is no <code>tailwind.config.js</code> and no Sass — the palette
              lives in a single <code>@theme</code> block.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <ul className="list-disc ps-6 mb-0 flex flex-col gap-2">
              <li>
                <code>src/assets/css/theme.css</code> declares the tokens. The{' '}
                <code>@theme</code> block at the top holds the light values; the{' '}
                <code>@layer theme</code> block underneath re-declares the
                theme-dependent ones inside <code>@variant dark</code>.
              </li>
              <li>
                Tailwind generates utilities from the token namespace:{' '}
                <code>--color-*</code> produces <code>bg-*</code>/
                <code>text-*</code>/<code>border-*</code>, while{' '}
                <code>--background-color-*</code>, <code>--text-color-*</code>{' '}
                and <code>--border-color-*</code> each produce only their own
                utility. That is why <code>subtle</code> is three different
                values depending on whether you write <code>bg-subtle</code>,{' '}
                <code>text-subtle</code> or <code>border-subtle</code>.
              </li>
              <li>
                <code>src/assets/css/root.css</code> maps the tokens onto
                component-level variables (<code>--input-bg</code>,{' '}
                <code>--navbar-top-bg-color</code>,{' '}
                <code>--theme-control-toggle-color</code>, …). Restyling one
                component means retargeting one of those, not editing the
                palette.
              </li>
              <li>
                The dark theme is the same token names with different values,
                selected by <code>data-hb-theme=&quot;dark&quot;</code> on{' '}
                <code>&lt;html&gt;</code>. See{' '}
                <Link to="/documentation/customization/dark-mode">
                  Dark mode
                </Link>
                .
              </li>
            </ul>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Theme colors" noPreview>
            <p className="mb-0 text-muted">
              Six theme colors, each with a <code>-subtle</code>,{' '}
              <code>-lighter</code>, <code>-light</code>, <code>-dark</code> and{' '}
              <code>-darker</code> step. Every token below also produces a{' '}
              <code>text-*</code> and a <code>border-*</code> utility, and is
              accepted as a <code>color</code> prop by the hb-react components (
              <code>Alert</code>, <code>Badge</code>, <code>Button</code>,{' '}
              <code>Table</code>). There is no <code>-emphasis</code> step —{' '}
              <code>emphasis</code> only exists on the text and background
              scales below.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body className="p-0">
            <div className="overflow-x-auto scrollbar p-6">
              <Table className="mb-0 align-middle">
                <Table.Header>
                  <Table.Row>
                    <Table.Head className="ps-0 min-w-25">Name</Table.Head>
                    <Table.Head className="min-w-32.5">Swatch</Table.Head>
                    <Table.Head className="min-w-62.5">Token</Table.Head>
                    <Table.Head className="min-w-25">Value</Table.Head>
                    <Table.Head className="min-w-57.5">Utilities</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {themeColors.map(color =>
                    color.steps.map((s, index) => (
                      <Table.Row key={s.token}>
                        {index === 0 && (
                          <Table.Cell className="ps-0 align-top" rowSpan={6}>
                            <strong className="capitalize">{color.name}</strong>
                          </Table.Cell>
                        )}
                        <Table.Cell className="ps-0">
                          <Swatch className={s.bg} />
                        </Table.Cell>
                        <Table.Cell>
                          <code>--{s.token}</code>
                        </Table.Cell>
                        <Table.Cell>
                          <Value value={values[s.token]} />
                        </Table.Cell>
                        <Table.Cell>
                          <code>{s.bg}</code>
                          <br />
                          <code>text-{s.token.replace('color-', '')}</code>
                          <br />
                          <code>border-{s.token.replace('color-', '')}</code>
                        </Table.Cell>
                      </Table.Row>
                    ))
                  )}
                </Table.Body>
              </Table>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Text and background colors" noPreview>
            <p className="mb-0 text-muted">
              Six semantic levels that the layout itself is painted with. Each
              name is declared twice — <code>--text-color-*</code> and{' '}
              <code>--background-color-*</code> — with deliberately different
              values, so <code>text-muted</code> is readable on{' '}
              <code>bg-muted</code>. Both invert under the dark theme, which is
              why these should be preferred over a literal gray.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body className="p-0">
            <div className="overflow-x-auto scrollbar p-6">
              <Table className="mb-0 align-middle">
                <Table.Header>
                  <Table.Row>
                    <Table.Head className="ps-0 min-w-45">Name</Table.Head>
                    <Table.Head className="min-w-32.5">Swatch</Table.Head>
                    <Table.Head className="min-w-62.5">Token</Table.Head>
                    <Table.Head className="min-w-25">Value</Table.Head>
                    <Table.Head className="min-w-45">Utility</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {semantic.map(level => (
                    <Fragment key={level.name}>
                      <Table.Row>
                        <Table.Cell className="ps-0 align-top" rowSpan={2}>
                          <strong className="capitalize block">
                            {level.name}
                          </strong>
                          <span className="text-md text-muted">
                            {level.note}
                          </span>
                        </Table.Cell>
                        <Table.Cell className="ps-0">
                          <div
                            className="h-10 w-30 rounded-md border border-subtle"
                            style={{
                              backgroundColor: `var(--text-color-${level.name})`
                            }}
                          />
                        </Table.Cell>
                        <Table.Cell>
                          <code>--text-color-{level.name}</code>
                        </Table.Cell>
                        <Table.Cell>
                          <Value value={values[`text-color-${level.name}`]} />
                        </Table.Cell>
                        <Table.Cell>
                          <code>text-{level.name}</code>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Swatch className={level.bg} />
                        </Table.Cell>
                        <Table.Cell>
                          <code>--background-color-{level.name}</code>
                        </Table.Cell>
                        <Table.Cell>
                          <Value
                            value={values[`background-color-${level.name}`]}
                          />
                        </Table.Cell>
                        <Table.Cell>
                          <code>{level.bg}</code>
                        </Table.Cell>
                      </Table.Row>
                    </Fragment>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Border colors" noPreview>
            <p className="mb-0 text-muted">
              <code>border-default</code> is the divider used across the skin
              and <code>border-subtle</code> is the same color at reduced alpha
              (54% in the light theme, 78% in the dark one), built with
              Tailwind&apos;s <code>--alpha()</code> function — so it resolves
              to a <code>color-mix()</code> rather than a hex.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body className="p-0">
            <div className="overflow-x-auto scrollbar p-6">
              <Table className="mb-0 align-middle">
                <Table.Header>
                  <Table.Row>
                    <Table.Head className="ps-0 min-w-32.5">Swatch</Table.Head>
                    <Table.Head className="min-w-82.5">Token</Table.Head>
                    <Table.Head className="min-w-57.5">Utility</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {borders.map(border => (
                    <Table.Row key={border.token}>
                      <Table.Cell className="ps-0">
                        <div
                          className={cn(
                            'h-10 w-30 rounded-md border-4 bg-soft',
                            border.cls
                          )}
                        />
                      </Table.Cell>
                      <Table.Cell>
                        <code>--{border.token}</code>
                      </Table.Cell>
                      <Table.Cell>
                        <code>{border.cls}</code>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Grays" noPreview>
            <p className="mb-0 text-muted">
              The gray ramp every other token is derived from. These twelve
              values are fixed — they do not change between themes; the dark
              theme swaps which of them the semantic tokens point at. Reach for
              a semantic token instead unless you specifically need one shade.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body className="p-0">
            <div className="overflow-x-auto scrollbar p-6">
              <Table className="mb-0 align-middle">
                <Table.Header>
                  <Table.Row>
                    <Table.Head className="ps-0 min-w-32.5">Swatch</Table.Head>
                    <Table.Head className="min-w-62.5">Token</Table.Head>
                    <Table.Head className="min-w-25">Value</Table.Head>
                    <Table.Head className="min-w-57.5">Utilities</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {grays.map(gray => (
                    <Table.Row key={gray.token}>
                      <Table.Cell className="ps-0">
                        <Swatch className={gray.bg} />
                      </Table.Cell>
                      <Table.Cell>
                        <code>--{gray.token}</code>
                      </Table.Cell>
                      <Table.Cell>
                        <Value value={values[gray.token]} />
                      </Table.Cell>
                      <Table.Cell>
                        <code>{gray.bg}</code>
                        <br />
                        <code>text-{gray.token.replace('color-', '')}</code>
                        <br />
                        <code>border-{gray.token.replace('color-', '')}</code>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Aliases" noPreview>
            <p className="mb-0 text-muted">
              Four convenience tokens the skin uses for fixed light/dark
              surfaces. <code>--color-contrast</code> is the one that flips: it
              is white in the light theme and <code>gray-1000</code> in the dark
              one, so <code>bg-contrast</code> always reads as &quot;the
              opposite of the text color&quot;. <code>--color-inverse</code> is
              an alias of it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body className="p-0">
            <div className="overflow-x-auto scrollbar p-6">
              <Table className="mb-0 align-middle">
                <Table.Header>
                  <Table.Row>
                    <Table.Head className="ps-0 min-w-32.5">Swatch</Table.Head>
                    <Table.Head className="min-w-62.5">Token</Table.Head>
                    <Table.Head className="min-w-25">Value</Table.Head>
                    <Table.Head className="min-w-57.5">Utilities</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {aliasColors.map(alias => (
                    <Table.Row key={alias.token}>
                      <Table.Cell className="ps-0">
                        <Swatch className={alias.bg} />
                      </Table.Cell>
                      <Table.Cell>
                        <code>--{alias.token}</code>
                      </Table.Cell>
                      <Table.Cell>
                        <Value value={values[alias.token]} />
                      </Table.Cell>
                      <Table.Cell>
                        <code>{alias.bg}</code>
                        <br />
                        <code>text-{alias.token.replace('color-', '')}</code>
                        <br />
                        <code>border-{alias.token.replace('color-', '')}</code>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Palettes" noPreview>
            <p className="mb-0 text-muted">
              The raw palettes the theme colors point at. They replace
              Tailwind&apos;s stock <code>blue</code>, <code>red</code>,{' '}
              <code>green</code>, <code>orange</code> and <code>cyan</code>, so{' '}
              <code>bg-blue-500</code> here is the Phoenix blue. Use these only
              when a value has to stay the same in both themes.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <div className="flex flex-col gap-6">
              {palettes.map(palette => (
                <div key={palette.name}>
                  <h6 className="mb-2 capitalize">{palette.name}</h6>
                  <div className="flex flex-wrap gap-2">
                    {palette.swatches.map(swatch => (
                      <div key={swatch.token} className="w-30">
                        <div
                          className={cn(
                            'h-10 rounded-md border border-subtle',
                            swatch.bg
                          )}
                        />
                        <code className="text-md block mt-1">{swatch.bg}</code>
                        <code className="text-md block text-muted">
                          {values[swatch.token] || ' '}
                        </code>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Opacity" noPreview>
            <p className="mb-0 text-muted">
              Tailwind v4 removed the <code>text-opacity-*</code>,{' '}
              <code>bg-opacity-*</code> and <code>border-opacity-*</code>{' '}
              utilities. Use the slash modifier instead — it works on any color
              utility, including the tokens above.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="p-4 rounded-md bg-primary/10 text-primary">
                bg-primary/10
              </div>
              <div className="p-4 rounded-md bg-primary/25 text-primary">
                bg-primary/25
              </div>
              <div className="p-4 rounded-md bg-primary/50 text-white">
                bg-primary/50
              </div>
              <div className="p-4 rounded-md bg-primary text-white">
                bg-primary
              </div>
              <div className="p-4 rounded-md border border-subtle text-default/50">
                text-default/50
              </div>
            </div>
            <p className="mb-2">
              The same thing in CSS uses Tailwind&apos;s <code>--alpha()</code>{' '}
              function, which is how <code>root.css</code> derives values such
              as <code>--input-placeholder-color</code>:
            </p>
            <PhoenixLiveEditor
              code={`--scrollbar-bg: --alpha(var(--background-color-emphasis) / 55%);
--input-placeholder-color: --alpha(var(--text-color-soft) / 80%);`}
            />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Reading colors from JavaScript"
            noPreview
          >
            <p className="mb-0 text-muted">
              Canvas-based widgets cannot use a class, so they read the token
              off <code>&lt;html&gt;</code> instead. <code>getColor(name)</code>{' '}
              in <code>src/helpers/utils.ts</code> returns the computed value of{' '}
              <code>--{'{name}'}</code>; <code>getThemeColor</code> on the app
              context is the same function exposed to components.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor
              code={`import { getColor } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';

getColor('color-primary');            // theme color
getColor('color-gray-500');           // gray ramp
getColor('background-color-default'); // surface
getColor('text-color-muted');         // text
getColor('border-color-default');     // border

// inside a component, so the value is re-read after a theme change
const { getThemeColor } = useAppContext();
const option = {
  color: [getThemeColor('color-primary'), getThemeColor('color-info')],
  tooltip: {
    backgroundColor: getThemeColor('background-color-subtle'),
    borderColor: getThemeColor('border-color-default')
  }
};`}
            />
            <ul className="list-disc ps-6 mt-4 mb-0 flex flex-col gap-2">
              <li>
                The name is the custom property without the leading{' '}
                <code>--</code>. A wrong name returns an empty string and logs{' '}
                <code>[getColor] missing token --…</code> in development;
                ECharts then paints the series black, which is the usual
                symptom.
              </li>
              <li>
                <code>src/assets/css/index.css</code> imports Tailwind as{' '}
                <code>@import &apos;tailwindcss&apos; theme(static)</code>. That
                keeps every <code>@theme</code> token in the compiled CSS even
                when no utility references it — without it these lookups would
                return an empty string for tokens only used from JavaScript.
              </li>
              <li>
                Current consumers are the ECharts options in{' '}
                <code>src/components/charts/e-charts/</code> and the TinyMCE
                skin in <code>src/components/base/TinymceEditor.tsx</code>. The
                Leaflet map is the exception — it recolors its tiles with a CSS
                filter keyed on the theme, not with tokens.
              </li>
            </ul>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Changing a color" noPreview>
            <p className="mb-0 text-muted">
              Edit the token, not the components. Changing{' '}
              <code>--color-primary</code> repaints every button, link, badge,
              chart and focus ring at once.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            <PhoenixLiveEditor
              code={`/* src/assets/css/theme.css */
@theme {
  --color-primary-subtle: var(--color-blue-100);
  --color-primary: #3874ff;   /* light theme */
  /* … */
}

@layer theme {
  :root,
  :host {
    @variant dark {
      --color-primary: var(--color-blue-300); /* dark theme */
    }
  }
}`}
            />
            <ul className="list-disc ps-6 mt-4 mb-0 flex flex-col gap-2">
              <li>
                Change both blocks. A value set only in <code>@theme</code>{' '}
                still applies in the dark theme unless the dark block overrides
                it, so check whether the token appears there before assuming one
                edit is enough.
              </li>
              <li>
                To restyle a single component rather than the whole palette,
                retarget its variable in <code>src/assets/css/root.css</code> —
                for example <code>--input-focus-border-color</code> or{' '}
                <code>--navbar-top-bg-color</code>.
              </li>
              <li>
                <strong className="text-default">
                  Everything under <code>src/assets/css</code> except{' '}
                  <code>index.css</code> is a verbatim copy of{' '}
                  <code>../phoenix-tailwind/src/css</code>
                </strong>{' '}
                (see <code>src/assets/css/SOURCE.md</code> for the commit it was
                taken from). Edits made here are lost the next time that
                directory is re-synced. Make palette changes in the upstream
                template and re-copy, or keep project overrides in{' '}
                <code>index.css</code>, which is not overwritten.
              </li>
              <li>
                New tokens follow the same rule as the built-in ones: declare{' '}
                <code>--color-brand: …</code> inside <code>@theme</code> and{' '}
                <code>bg-brand</code>, <code>text-brand</code> and{' '}
                <code>border-brand</code> exist immediately.
              </li>
            </ul>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default Color;
