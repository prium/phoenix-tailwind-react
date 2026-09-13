import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <span className="align-baseline">baseline</span>{' '}
  <span className="align-top">top</span>{' '}
  <span className="align-middle">middle</span>{' '}
  <span className="align-bottom">bottom</span>{' '}
  <span className="align-text-top">text-top</span>{' '}
  <span className="align-text-bottom">text-bottom</span>
</>
`;

const tableCellsCode = `
<div className="table-responsive scrollbar">
  <table className="table table-bordered h-25">
    <tbody>
      <tr>
        <td className="align-baseline">baseline</td>
        <td className="align-top">top</td>
        <td className="align-middle">middle</td>
        <td className="align-bottom">bottom</td>
        <td className="align-text-top">text-top</td>
        <td className="align-text-bottom">text-bottom</td>
      </tr>
    </tbody>
  </table>
</div>
`;

const VerticalAlignExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Vertical Align"
        description="Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."
        link={{
          text: 'Vertical align on Tailwind',
          url: 'https://tailwindcss.com/docs/vertical-align'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0 pt-1 mt-2 text-muted">
              Change the alignment of elements with the vertical-alignment
              utilities. Please note that <code>vertical-align</code> only
              affects inline, inline-block, inline-table and table cell elements
              — it has no effect on flex or grid items.
              <br />
              Choose from <code>align-baseline</code>, <code>align-top</code>,{' '}
              <code>align-middle</code>, <code>align-bottom</code>,{' '}
              <code>align-text-top</code> and <code>align-text-bottom</code> as
              needed. <code>align-sub</code> and <code>align-super</code> are
              available for the two remaining CSS keywords.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Vertical Alignment With Table Cells">
            <p className="mb-0 mt-2 text-muted">
              The same utilities apply to <code>&lt;td&gt;</code> and{' '}
              <code>&lt;th&gt;</code>. The row needs a height taller than its
              content for the difference to be visible — <code>h-25</code> on
              the table is what spreads the cells out here.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={tableCellsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default VerticalAlignExample;
