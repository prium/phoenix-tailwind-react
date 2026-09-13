import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const textSelectionCode = `
<>
  <p className="select-all">This paragraph will be entirely selected when clicked by the user.</p>
  <p className="select-auto">This paragraph has default select behavior.</p>
  <p className="select-text">This paragraph will select text in an element and its children.</p>
  <p className="select-none">This paragraph will not be selectable when clicked by the user.</p>
</>
`;

const pointerEventsCode = `
<>
  <p>
    <a className="pointer-events-none" href="#!" tabIndex={-1} aria-disabled="true">
      This link
    </a>{' '}
    can not be clicked.
  </p>
  <p>
    <a className="pointer-events-auto" href="#!">This link</a>{' '}
    can be clicked (this is default behavior).
  </p>
  <p className="pointer-events-none">
    <a href="#!" tabIndex={-1} aria-disabled="true">This link</a> can not be clicked
    because the <code>pointer-events</code> property is inherited from its parent.
    However, <a className="pointer-events-auto" href="#!">this link</a> has a{' '}
    <code>pointer-events-auto</code> class and can be clicked.
  </p>
</>
`;

const InteractionsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Interactions"
        description="Utility classes that change how users interact with contents of a website."
        link={{
          text: 'Interactions on Tailwind',
          url: 'https://tailwindcss.com/docs/user-select'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Text selection">
            <p className="mb-0 mt-2 text-muted">
              Change the way in which the content is selected when the user
              interacts with it. Tailwind ships four <code>user-select</code>{' '}
              utilities: <code>select-all</code>, <code>select-auto</code>,{' '}
              <code>select-text</code> and <code>select-none</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={textSelectionCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pointer events">
            <p className="mb-0 mt-2 text-muted">
              Tailwind provides <code>pointer-events-none</code> and{' '}
              <code>pointer-events-auto</code> classes to prevent or add element
              interactions. <code>pointer-events</code> is inherited, so{' '}
              <code>pointer-events-auto</code> on a child re-enables it inside a
              disabled subtree.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={pointerEventsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default InteractionsExample;
