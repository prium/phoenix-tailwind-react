import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Breadcrumb>
  <Breadcrumb.List className="mb-0">
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#!">Item 1</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#!">Item 2</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#!">Item 3</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      <Breadcrumb.Page>Item 4</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb>
`;

const separatorsCode = `
<div className="flex flex-col gap-4">
  <Breadcrumb>
    <Breadcrumb.List separator="slash" className="mb-0">
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#!">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Breadcrumb.Page>Slash</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>

  <Breadcrumb>
    <Breadcrumb.List separator="dashed" className="mb-0">
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#!">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Breadcrumb.Page>Dashed</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>

  <Breadcrumb>
    <Breadcrumb.List separator="arrow" className="mb-0">
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#!">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Breadcrumb.Page>Arrow</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>

  <Breadcrumb>
    <Breadcrumb.List
      className="mb-0"
      style={{ '--breadcrumb-item-separator': "'>>'" }}
    >
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#!">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Breadcrumb.Page>Library</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
</div>
`;

const BreadcrumbExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Breadcrumb"
        description="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
        link={{
          text: 'Breadcrumb on Hummingbird',
          url: 'https://react.hbui.dev/docs/components/breadcrumb'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Breadcrumb Example">
            <p className="mb-0">
              <code>Breadcrumb</code> renders the labelled <code>nav</code> and{' '}
              <code>Breadcrumb.List</code> the trail itself. Every step is a{' '}
              <code>Breadcrumb.Item</code> holding a{' '}
              <code>Breadcrumb.Link</code>; the last one gets{' '}
              <code>active</code> and a <code>Breadcrumb.Page</code>, which is
              not interactive and carries <code>aria-current="page"</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Separators">
            <p className="mb-0">
              The <code>separator</code> prop on <code>Breadcrumb.List</code>{' '}
              picks the divider drawn between items: <code>slash</code> (the
              default), <code>dashed</code> or <code>arrow</code>. For anything
              else, set the <code>--breadcrumb-item-separator</code> custom
              property on the list, as the last trail below does.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={separatorsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BreadcrumbExample;
