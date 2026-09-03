import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';

const exampleCode = `
<ListGroup>
  <ListGroup.Item>News Feed</ListGroup.Item>
  <ListGroup.Item>Messages</ListGroup.Item>
  <ListGroup.Item>Events</ListGroup.Item>
  <ListGroup.Item>Groups</ListGroup.Item>
  <ListGroup.Item>Pages</ListGroup.Item>
</ListGroup>
`;

const activeExampleCode = `
<ListGroup>
  <ListGroup.Item active>News Feed</ListGroup.Item>
  <ListGroup.Item>Messages</ListGroup.Item>
  <ListGroup.Item disabled>Events</ListGroup.Item>
  <ListGroup.Item>Groups</ListGroup.Item>
  <ListGroup.Item>Pages</ListGroup.Item>
</ListGroup>
`;

const numberedCode = `
<ListGroup numbered>
  <ListGroup.Item>News Feed</ListGroup.Item>
  <ListGroup.Item>Messages</ListGroup.Item>
  <ListGroup.Item>Events</ListGroup.Item>
  <ListGroup.Item>Groups</ListGroup.Item>
  <ListGroup.Item>Pages</ListGroup.Item>
</ListGroup>
`;

const badgeCode = `
<ListGroup>
  {[
    ['Messages', 14],
    ['Events', 2],
    ['Groups', 1],
    ['Pages', 9],
    ['Notifications', 7]
  ].map(([label, count]) => (
    <ListGroup.Item key={label} className="flex items-center justify-between">
      {label}
      <Badge variant="subtle" color="primary">{count}</Badge>
    </ListGroup.Item>
  ))}
</ListGroup>
`;

const actionableCode = `
function ActionableListItems() {
  const [active, setActive] = useState('link1');

  return (
    <ListGroup>
      <ListGroup.Item action active={active === 'link1'} asChild>
        <a href="#!" onClick={() => setActive('link1')}>Link 1</a>
      </ListGroup.Item>
      <ListGroup.Item action disabled asChild>
        <a href="#!">Link 2</a>
      </ListGroup.Item>
      <ListGroup.Item action active={active === 'button'} asChild>
        <button type="button" onClick={() => setActive('button')}>
          This one is a button
        </button>
      </ListGroup.Item>
      <ListGroup.Item action active={active === 'link3'} asChild>
        <a href="#!" onClick={() => setActive('link3')}>Link 3</a>
      </ListGroup.Item>
      <ListGroup.Item action active={active === 'link4'} asChild>
        <a href="#!" onClick={() => setActive('link4')}>Link 4</a>
      </ListGroup.Item>
    </ListGroup>
  );
}
`;

const pinnedCode = `
<ListGroup className="max-h-56 overflow-y-auto py-0">
  <ListGroup.Item pinned>Pinned heading</ListGroup.Item>
  <ListGroup.Item>News Feed</ListGroup.Item>
  <ListGroup.Item>Messages</ListGroup.Item>
  <ListGroup.Item>Events</ListGroup.Item>
  <ListGroup.Item>Groups</ListGroup.Item>
  <ListGroup.Item>Pages</ListGroup.Item>
  <ListGroup.Item>Notifications</ListGroup.Item>
  <ListGroup.Item>Marketplace</ListGroup.Item>
</ListGroup>
`;

const customContentCode = `
<ListGroup>
  <ListGroup.Item className="py-3">
    <div className="flex w-full items-center justify-between">
      <ListGroup.Text>List group item heading</ListGroup.Text>
      <small className="text-muted">3 days ago</small>
    </div>
    <ListGroup.Text variant="secondary">
      Some supporting, secondary copy for this list item.
    </ListGroup.Text>
  </ListGroup.Item>
  <ListGroup.Item className="py-3">
    <div className="flex w-full items-center justify-between">
      <ListGroup.Text>Another heading</ListGroup.Text>
      <small className="text-muted">1 week ago</small>
    </div>
    <ListGroup.Text variant="secondary">More supporting text.</ListGroup.Text>
  </ListGroup.Item>
</ListGroup>
`;

const listGroupBackgroundCode = `
<ListGroup>
  <ListGroup.Item className="py-3">Example with background</ListGroup.Item>
  <ListGroup.Item className="py-3 list-group-item-primary">Primary</ListGroup.Item>
  <ListGroup.Item className="py-3 list-group-item-secondary">Secondary</ListGroup.Item>
  <ListGroup.Item className="py-3 list-group-item-success">Success</ListGroup.Item>
  <ListGroup.Item className="py-3 list-group-item-danger">Danger</ListGroup.Item>
  <ListGroup.Item className="py-3 list-group-item-warning">Warning</ListGroup.Item>
  <ListGroup.Item className="py-3 list-group-item-info">Info</ListGroup.Item>
  <ListGroup.Item className="py-3 list-group-item-light">Light</ListGroup.Item>
  <ListGroup.Item className="py-3 list-group-item-dark">Dark</ListGroup.Item>
</ListGroup>
`;

const linkCode = `
<ListGroup>
  <ListGroup.Item action active className="p-3 sm:p-4" asChild>
    <Link to="#!">
      <div className="flex justify-between">
        <h5 className="mb-1 text-white">List group · Hummingbird</h5>
        <small>3 days ago</small>
      </div>
      <p className="mb-1">
        The most basic list group is an unordered list with list items and the
        proper classes. Build upon it with the options that follow, or with your
        own CSS as needed.
      </p>
      <small>The most basic list group</small>
    </Link>
  </ListGroup.Item>
  <ListGroup.Item action className="p-3 sm:p-4" asChild>
    <Link to="#!">
      <div className="flex justify-between">
        <h5 className="mb-1">What is list group?</h5>
        <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1">
        The list groups are a very useful and flexible component for displaying
        lists of elements in a beautiful manner.
      </p>
      <small className="text-muted">Donec id elit non mi porta.</small>
    </Link>
  </ListGroup.Item>
  <ListGroup.Item action className="p-3 sm:p-4" asChild>
    <Link to="#!">
      <div className="flex justify-between">
        <h5 className="mb-1">What is ordered list?</h5>
        <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1">
        An ordered list typically is a numbered list of items. HTML gives you
        the ability to control the sequence number — to continue where the
        previous list left off, or to start at a particular number.
      </p>
      <small className="text-muted">An ordered list</small>
    </Link>
  </ListGroup.Item>
</ListGroup>
`;

const ListGroupExample = () => {
  return (
    <div>
      <DocPageHeader
        title="List group"
        description="A flexible container for displaying a series of related content as a vertical list. Modify and extend them to support just about any content within."
        link={{
          text: 'List Group on hb-react',
          url: 'https://react.hbui.dev/docs/components/list-group'
        }}
      />

      <DocPagesLayout>
        <Row className="g-3">
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header
                title="Basic Example"
                description="A ListGroup renders an unordered list of ListGroup.Item elements."
              />
              <PhoenixDocCard.Body code={exampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header
                title="Active Item"
                description="The active prop marks the current item; disabled mutes it and blocks interaction."
              />
              <PhoenixDocCard.Body code={activeExampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header
                title="Numbered"
                description="The numbered prop prefixes each item with an incrementing counter."
              />
              <PhoenixDocCard.Body code={numberedCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="List group with badge" />
              <PhoenixDocCard.Body code={badgeCode} />
            </PhoenixDocCard>
          </Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Actionable items">
            <p>
              Set the <code>action</code> prop to create <em>actionable</em>{' '}
              list group items, with hover, active and disabled styles.{' '}
              <code>ListGroup.Item</code> renders an <code>&lt;li&gt;</code> by
              default; add <code>asChild</code> to render your own{' '}
              <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> in its
              place.
            </p>
            <p className="mb-0">
              Actionable items are distinct from plain items so that click or
              tap affordances aren&apos;t applied to non-interactive rows.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={actionableCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pinned">
            <p className="mb-0">
              The <code>pinned</code> prop keeps an item stuck to the top of the
              list while the rest of it scrolls — give the{' '}
              <code>ListGroup</code> a max height and{' '}
              <code>overflow-y-auto</code> and scroll the preview below.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={pinnedCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Custom content">
            <p className="mb-0">
              <code>ListGroup.Text</code> provides the title and subtitle text
              for richer item layouts — <code>variant="primary"</code> is the
              heading and <code>variant="secondary"</code> the supporting copy.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={customContentCode} />
        </PhoenixDocCard>

        <Row className="g-3">
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="List Group Background">
                <p className="mb-0">
                  Contextual backgrounds are plain classes rather than a prop:
                  add <code>list-group-item-*</code> to a{' '}
                  <code>ListGroup.Item</code>.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={listGroupBackgroundCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="List Group With Link" />
              <PhoenixDocCard.Body code={linkCode} scope={{ Link }} />
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default ListGroupExample;
