import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faAngleLeft,
  faAnglesLeft,
  faAngleRight,
  faAnglesRight
} from '@fortawesome/free-solid-svg-icons';

const exampleCode = `
<Pagination>
  <Pagination.Content className="mb-0 justify-center">
    <Pagination.Item disabled>
      <Pagination.Link href="#!">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#!">1</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#!">2</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#!">3</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item active>
      <Pagination.Link href="#!">4</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#!">5</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#!">
        <FontAwesomeIcon icon={faChevronRight} />
      </Pagination.Link>
    </Pagination.Item>
  </Pagination.Content>
</Pagination>
`;

const moreOptionsCode = `
<div className="flex flex-col gap-6">
  <Pagination>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.Link href="#!">
          <FontAwesomeIcon icon={faAnglesLeft} />
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item disabled>
        <Pagination.Link href="#!">&hellip;</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">11</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item active>
        <Pagination.Link href="#!">12</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">13</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item disabled>
        <Pagination.Link href="#!">&hellip;</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">20</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">
          <FontAwesomeIcon icon={faAngleRight} />
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">
          <FontAwesomeIcon icon={faAnglesRight} />
        </Pagination.Link>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>

  <Pagination size="sm" shape="circle">
    <Pagination.Content>
      <Pagination.Item disabled>
        <Pagination.Link href="#!">Prev</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item active>
        <Pagination.Link href="#!">2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">Next</Pagination.Link>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>

  <Pagination size="lg">
    <Pagination.Content>
      <Pagination.Item disabled>
        <Pagination.Link href="#!">Prev</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item active>
        <Pagination.Link href="#!">2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#!">Next</Pagination.Link>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>
</div>
`;

const PaginationExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Pagination"
        description="Navigation that splits content across a sequence of numbered pages."
        link={{
          text: 'Pagination on hb-react',
          url: 'https://react.hbui.dev/docs/components/pagination'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pagination Example">
            <p className="mb-0">
              <code>Pagination</code> is an accessible <code>&lt;nav&gt;</code>{' '}
              wrapping a <code>Pagination.Content</code> list of{' '}
              <code>Pagination.Item</code>s. Mark the current page with{' '}
              <code>active</code> and a dead control with <code>disabled</code>;
              alignment and spacing classes go on{' '}
              <code>Pagination.Content</code>, which is the list itself.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ FontAwesomeIcon, faChevronLeft, faChevronRight }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="More options">
            <p>
              There are no separate first, previous, next, last or ellipsis
              parts — every control is a <code>Pagination.Item</code> whose{' '}
              <code>Pagination.Link</code> holds an icon, a label or an
              ellipsis, and a non-clickable step is just a <code>disabled</code>{' '}
              item.
            </p>
            <p className="mb-0">
              The look is set on the <code>Pagination</code> root:{' '}
              <code>size</code> (<code>sm</code>, <code>md</code>,{' '}
              <code>lg</code>) and <code>shape="circle"</code>. The root also
              takes <code>variant</code> and <code>color</code>, but the Phoenix
              skin pins the active page to its own blue, so neither changes
              anything here.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={moreOptionsCode}
            scope={{
              FontAwesomeIcon,
              faAngleLeft,
              faAnglesLeft,
              faAngleRight,
              faAnglesRight
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default PaginationExample;
