import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixDocProvider from 'providers/PhoenixDocProvider';

const flexCode = `
<>
  <div className="flex p-2 bg-muted mb-2">Flexbox container!</div>
  <div className="inline-flex p-2 bg-muted">Inline flexbox container!</div>
</>`;

const flexDirectionRowCode = `<>
  <div className="flex flex-row bg-muted mb-4">
    <div className="p-2 bg-muted border">Flex item 1</div>
    <div className="p-2 bg-muted border">Flex item 2</div>
    <div className="p-2 bg-muted border">Flex item 3</div>
  </div>
  <div className="flex flex-row-reverse bg-muted mb-4">
    <div className="p-2 bg-muted border">Flex item 1</div>
    <div className="p-2 bg-muted border">Flex item 2</div>
    <div className="p-2 bg-muted border">Flex item 3</div>
  </div>
  <div className="flex lg:flex-row-reverse bg-muted">
    <div className="p-2 bg-muted border">
      Flex item (<code>flex-direction: row-reverse</code> from <code>lg</code> up)
    </div>
  </div>
</>`;

const flexDirectionColumnCode = `<>
  <div className="flex flex-col bg-muted mb-4">
    <div className="p-2 bg-muted border">Flex item 1</div>
    <div className="p-2 bg-muted border">Flex item 2</div>
    <div className="p-2 bg-muted border">Flex item 3</div>
  </div>
  <div className="flex flex-col-reverse bg-muted mb-4">
    <div className="p-2 bg-muted border">Flex item 1</div>
    <div className="p-2 bg-muted border">Flex item 2</div>
    <div className="p-2 bg-muted border">Flex item 3</div>
  </div>
  <div className="flex flex-col lg:flex-col-reverse bg-muted">
    <div className="p-2 bg-muted border">Flex item 1 (<code>column-reverse</code> from <code>lg</code> up)</div>
    <div className="p-2 bg-muted border">Flex item 2 (<code>column-reverse</code> from <code>lg</code> up)</div>
    <div className="p-2 bg-muted border">Flex item 3 (<code>column-reverse</code> from <code>lg</code> up)</div>
  </div>
</>`;

const justifyContentCode = `<>
  <div className="flex justify-start bg-muted mb-2">
    <div className="p-2 bg-muted border">Flex Item</div>
  </div>
  <div className="flex justify-end bg-muted mb-2">
    <div className="p-2 bg-muted border">Flex Item</div>
  </div>
  <div className="flex justify-center bg-muted mb-2">
    <div className="p-2 bg-muted border">Flex Item</div>
  </div>
  <div className="flex justify-between bg-muted mb-2">
    <div className="p-2 bg-muted border">Flex Item</div>
  </div>
  <div className="flex justify-around bg-muted mb-2">
    <div className="p-2 bg-muted border">Flex Item</div>
  </div>
</>`;

const alignItemsCode = `<>
  <div className="flex items-start bg-muted mb-2 h-20">
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex items-end bg-muted mb-2 h-20">
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex items-center bg-muted mb-2 h-20">
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex items-baseline bg-muted mb-2 h-20">
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex items-stretch bg-muted mb-2 h-20">
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex lg:items-center bg-muted mb-2 h-20">
    <div className="p-2 bg-muted border">Flex item (<code>align-items: center</code> from <code>lg</code> up)</div>
  </div>
</>`;

const alignSelfCode = `<>
  <div className="flex bg-muted mb-2 h-20">
    <div className="border p-2 bg-muted">Flex Item</div>
    <div className="border p-2 bg-muted self-start">Align self start</div>
    <div className="border p-2 bg-muted">Flex Item</div>
  </div>
  <div className="flex bg-muted mb-2 h-20">
    <div className="border p-2 bg-muted">Flex Item</div>
    <div className="border p-2 bg-muted self-end">Align self end</div>
    <div className="border p-2 bg-muted">Flex Item</div>
  </div>
  <div className="flex bg-muted mb-2 h-20">
    <div className="border p-2 bg-muted">Flex Item</div>
    <div className="border p-2 bg-muted self-center">Align self center</div>
    <div className="border p-2 bg-muted">Flex Item</div>
  </div>
  <div className="flex bg-muted mb-2 h-20">
    <div className="border p-2 bg-muted">Flex Item</div>
    <div className="border p-2 bg-muted self-baseline">Align self baseline</div>
    <div className="border p-2 bg-muted">Flex Item</div>
  </div>
  <div className="flex bg-muted mb-2 h-20">
    <div className="border p-2 bg-muted">Flex Item</div>
    <div className="border p-2 bg-muted self-stretch">Align self stretch</div>
    <div className="border p-2 bg-muted">Flex Item</div>
  </div>
</>`;

const growCode = `
  <div className="flex bg-muted">
    <div className="p-2 grow bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Third flex item</div>
  </div>
`;

const shrinkCode = `
  <div className="flex bg-muted">
    <div className="p-2 w-full bg-muted border">Flex item</div>
    <div className="p-2 shrink bg-muted border">Flex item</div>
  </div>
`;

const autoMarginCode = `
<>
  <div className="flex bg-muted mb-2">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex bg-muted mb-2">
    <div className="me-auto p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex bg-muted mb-2">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="ms-auto p-2 bg-muted border">Flex item</div>
  </div>
</>
`;

const autoMarginWithAlignItemsCode = `
<>
  <div className="flex flex-col bg-muted mb-4 h-50 items-start">
    <div className="mb-auto p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex flex-col bg-muted mb-4 h-50 items-end">
    <div className="mb-auto p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
</>
`;

const wrapCode = `<>
  <div className="flex flex-nowrap mb-4 bg-muted border py-4 w-32">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex flex-wrap mb-4 bg-muted border">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex flex-wrap-reverse mb-4 bg-muted border">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
</>`;

const orderCode = `
  <div className="flex flex-nowrap bg-muted p-2">
    <div className="order-3 p-2 bg-muted border">First flex item</div>
    <div className="order-2 p-2 bg-muted border">Second flex item</div>
    <div className="order-1 p-2 bg-muted border">Third flex item</div>
  </div>
`;

const responsiveOrderCode = `
  <div className="flex flex-nowrap bg-muted p-2">
    <div className="sm:order-3 p-2 bg-muted border">
      First flex item (<code>order: 3</code> from <code>sm</code> up)
    </div>
    <div className="md:order-2 p-2 bg-muted border">
      Second flex item (<code>order: 2</code> from <code>md</code> up)
    </div>
    <div className="lg:order-1 p-2 bg-muted border">
      Third flex item (<code>order: 1</code> from <code>lg</code> up)
    </div>
  </div>
`;

const alignContentCode = `<>
  <div className="flex flex-wrap content-start bg-muted mb-4 h-75">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex flex-wrap content-end bg-muted mb-4 h-75">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex flex-wrap content-center bg-muted mb-4 h-75">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex flex-wrap content-between bg-muted mb-4 h-75">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex flex-wrap content-around bg-muted mb-4 h-75">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
  <div className="flex flex-wrap content-stretch bg-muted mb-4 h-75">
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
    <div className="p-2 bg-muted border">Flex item</div>
  </div>
</>`;

const FlexExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Flex"
        description="Quickly manage the layout, alignment and sizing of grid columns, navigation, components and more with the responsive flexbox utilities. For more complex implementations, custom CSS may still be necessary."
        link={{
          text: 'Flex on Tailwind',
          url: 'https://tailwindcss.com/docs/flex'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex Behaviors">
            <p className="mb-0">
              Apply the <code>display</code> utilities <code>.flex</code> or{' '}
              <code>.inline-flex</code> to create a flexbox container and turn
              its direct children into flex items. Containers and items can then
              be adjusted further with the utilities below.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Direction Row">
            <p className="mb-0 text-muted">
              Use <code>.flex-row</code> to set a horizontal direction (the
              browser default), or <code>.flex-row-reverse</code> to start the
              horizontal direction from the opposite side. Every direction
              utility takes a breakpoint prefix —{' '}
              <code>.lg:flex-row-reverse</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexDirectionRowCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Direction Column">
            <p className="mb-0 text-muted">
              Use <code>.flex-col</code> to set a vertical direction, or{' '}
              <code>.flex-col-reverse</code> to start the vertical direction
              from the opposite side.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexDirectionColumnCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Justify Content">
            <p className="mb-0 text-muted">
              Use the <code>justify-*</code> utilities on a flex container to
              change the alignment of its items on the main axis (the x-axis to
              start with, the y-axis if <code>flex-direction: column</code>).
              Choose from <code>start</code> (browser default), <code>end</code>
              , <code>center</code>, <code>between</code>, <code>around</code>{' '}
              or <code>evenly</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={justifyContentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Align items">
            <p className="mb-0 text-muted">
              Use the <code>items-*</code> utilities on a flex container to
              change the alignment of its items on the cross axis (the y-axis to
              start with, the x-axis if <code>flex-direction: column</code>).
              Choose from <code>start</code>, <code>end</code>,{' '}
              <code>center</code>, <code>baseline</code> or <code>stretch</code>{' '}
              (browser default).
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alignItemsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Align self">
            <p className="mb-0 text-muted">
              Use the <code>self-*</code> utilities on an individual flex item
              to change its own alignment on the cross axis. The options are the
              same as <code>items-*</code>: <code>start</code>, <code>end</code>
              , <code>center</code>, <code>baseline</code> or{' '}
              <code>stretch</code> (browser default).
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alignSelfCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex Grow">
            <p className="mb-0 text-muted">
              Use <code>.grow</code> to let a flex item grow to fill the
              available space, and <code>.grow-0</code> to stop it. In the
              example below the <code>.grow</code> element takes all the space
              it can while leaving the other two items the room they need.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={growCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex Shrink">
            <p className="mb-0 text-muted">
              Use <code>.shrink</code> to let a flex item shrink when it has to,
              and <code>.shrink-0</code> to keep it at its natural size. In the
              example below the second item with <code>.shrink</code> is forced
              to wrap its contents onto a new line, making room for the first
              item with <code>.w-full</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={shrinkCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4" noProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Auto margins">
              <p className="mb-0 text-muted">
                Flexbox can do some useful things when you mix flex alignment
                with auto margins. Shown below are three examples of controlling
                flex items with auto margins: the default (no auto margin),
                pushing two items to the right (<code>.me-auto</code>), and
                pushing two items to the left (<code>.ms-auto</code>).
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={autoMarginCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="With align-items">
              <p className="mb-0 text-muted">
                Move a single flex item to the top or bottom of its container by
                mixing <code>items-*</code>, <code>flex-col</code> and{' '}
                <code>mt-auto</code> or <code>mb-auto</code>.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={autoMarginWithAlignItemsCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Wrap">
            <p className="mb-0 text-muted">
              Change how flex items wrap in a container. Choose from no wrapping
              at all (the browser default) with <code>.flex-nowrap</code>,
              wrapping with <code>.flex-wrap</code>, or reverse wrapping with{' '}
              <code>.flex-wrap-reverse</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={wrapCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4" noProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Order">
              <p className="mb-0 text-muted">
                Change the <em>visual</em> order of specific flex items with the{' '}
                <code>order-*</code> utilities. <code>order-1</code> through{' '}
                <code>order-12</code> are generated, plus{' '}
                <code>order-first</code>, <code>order-last</code> and{' '}
                <code>order-none</code> to reset to DOM order.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={orderCode} />
          </PhoenixDocProvider>

          <PhoenixDocProvider>
            <PhoenixDocCard.Header>
              <p className="mb-0 text-muted">
                Responsive variants exist for <code>order</code> too — prefix
                the utility with a breakpoint, as in{' '}
                <code>
                  {'{breakpoint}'}:order-{'{value}'}
                </code>
                .
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={responsiveOrderCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Align content">
            <p className="mb-0 text-muted">
              Use the <code>content-*</code> utilities on a flex container to
              align its lines <em>together</em> on the cross axis. Choose from{' '}
              <code>start</code>, <code>end</code>, <code>center</code>,{' '}
              <code>between</code>, <code>around</code> or <code>stretch</code>{' '}
              (browser default). These only do anything once the container
              wraps, so the examples below force <code>flex-wrap</code> and use
              a lot of items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alignContentCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FlexExample;
