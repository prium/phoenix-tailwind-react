import { Col, Row } from '@hummingbirdui/react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import generic66 from 'assets/img/generic/66.jpg';
import generic44 from 'assets/img/generic/44.png';
import generic45 from 'assets/img/generic/45.png';
import generic46 from 'assets/img/generic/46.png';
import generic54 from 'assets/img/generic/54.png';
import generic36 from 'assets/img/generic/36.png';

const exampleCode = `
<Card className="max-w-80">
  <Card.Image position="top" src={generic66} alt="..." />
  <Card.Body>
    <Card.Title>Title goes here</Card.Title>
    <Card.Text>
      Here is the example of the Multiple Container Sortable feature of the
    </Card.Text>
    <Button>Go somewhere</Button>
  </Card.Body>
</Card>
`;

const headerFooterCode = `
<Card className="max-w-80">
  <Card.Header>
    <Card.Title>Card title</Card.Title>
    <Card.Subtitle className="mb-0 text-muted">Subtitle</Card.Subtitle>
  </Card.Header>
  <Card.Body>
    <Card.Text className="mb-0">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <Button variant="text" size="sm">Learn more</Button>
  </Card.Footer>
</Card>
`;

const imageOverlaysCode = `
<Card className="max-w-120">
  <Card.ImageOverlay>
    <Card.Image position="full" src={generic46} alt="..." />
    <Card.Body className="flex items-end">
      <div>
        <Card.Title>Card title</Card.Title>
        <Card.Text className="mb-0">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </div>
    </Card.Body>
  </Card.ImageOverlay>
</Card>
`;

const horizontalCode = `
<Card aside className="max-w-lg max-sm:flex-col">
  <Card.Image
    position="left"
    src={generic36}
    alt="..."
    className="sm:w-1/3 object-cover"
  />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className="mb-0">
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Text>
  </Card.Body>
</Card>
`;

const clickableCode = `
<Card action asChild className="max-w-80">
  <a href="#!">
    <Card.Image position="top" src={generic54} alt="..." />
    <Card.Body>
      <Card.Title>Title goes here</Card.Title>
      <Card.Text className="mb-0">
        The whole card is the hit area — action adds the interactive hover surface
        and asChild renders the anchor in place of the card's div.
      </Card.Text>
    </Card.Body>
  </a>
</Card>
`;

const cardGroupCode = `
() => {
  const items = [generic54, generic44, generic46, generic45];
  return (
    <Card.Group>
      {items.map((item, index) => (
        <Card key={index}>
          <Card.Image position="top" src={item} alt="..." />
          <Card.Body>
            <Card.Title>Title goes here</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text className="mb-0">
              <small className="text-muted">Last updated 45 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Card.Group>
  );
};
`;

const backgroundStylesCode = `
() => {
  const variants = [
    { name: 'Primary', className: 'text-white bg-primary' },
    { name: 'Secondary', className: 'text-white bg-secondary' },
    { name: 'Success', className: 'text-white bg-success' },
    { name: 'Danger', className: 'text-white bg-danger' },
    { name: 'Warning', className: 'text-white bg-warning' },
    { name: 'Info', className: 'text-white bg-info' },
    { name: 'Light', className: 'text-dark bg-light' },
    { name: 'Dark', className: 'text-white bg-dark' }
  ];
  return (
    <Row className="g-6">
      {variants.map(variant => (
        <Col key={variant.name} sm={6} md={4} lg={3}>
          <Card className={variant.className}>
            <Card.Body>
              <Card.Title className="text-inherit">{variant.name} Card</Card.Title>
              <Card.Text className="mb-0">
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
`;

const borderCode = `
() => {
  const variants = [
    { name: 'Primary', className: 'border border-primary' },
    { name: 'Secondary', className: 'border border-secondary' },
    { name: 'Success', className: 'border border-success' },
    { name: 'Danger', className: 'border border-danger' },
    { name: 'Warning', className: 'border border-warning' },
    { name: 'Info', className: 'border border-info' },
    { name: 'Light', className: 'border border-subtle' },
    { name: 'Dark', className: 'border border-emphasis' }
  ];
  return (
    <Row className="g-6">
      {variants.map(variant => (
        <Col key={variant.name} sm={6} md={4} lg={3}>
          <Card className={variant.className}>
            <Card.Body>
              <Card.Title>{variant.name} Border Card</Card.Title>
              <Card.Text className="mb-0">
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
`;

const CardExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Cards"
        description="Cards provide a flexible and extensible content container with multiple variants and options."
        link={{
          text: 'Card on hb-react',
          url: 'https://react.hbui.dev/docs/components/card'
        }}
      />

      <DocPagesLayout>
        <Row>
          <Col lg={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Basic Example">
                <p className="mb-0">
                  A card is a <code>Card</code> holding any of{' '}
                  <code>Card.Image</code>, <code>Card.Header</code>,{' '}
                  <code>Card.Body</code> and <code>Card.Footer</code>. Inside
                  the body, <code>Card.Title</code> and <code>Card.Text</code>{' '}
                  carry the theme&apos;s type styles.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={exampleCode} scope={{ generic66 }} />
            </PhoenixDocCard>
          </Col>
          <Col lg={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Header and footer">
                <p className="mb-0">
                  <code>Card.Header</code> and <code>Card.Footer</code> bracket
                  the body with their own padding and dividers;{' '}
                  <code>Card.Subtitle</code> sits under the title.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body code={headerFooterCode} />
            </PhoenixDocCard>
          </Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Image overlays">
            <p className="mb-0">
              Wrap the image and the body in <code>Card.ImageOverlay</code> and
              give the image <code>position="full"</code> to lay the body over
              it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={imageOverlaysCode} scope={{ generic46 }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal">
            <p className="mb-0">
              The <code>aside</code> prop lays the card out as a row, so an
              image with <code>position="left"</code> sits alongside the body
              instead of above it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalCode} scope={{ generic36 }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Clickable">
            <p className="mb-0">
              <code>action</code> turns the whole card into an interactive hover
              surface. Pair it with <code>asChild</code> to render the card as a
              link.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={clickableCode} scope={{ generic54 }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Card Groups"
            description="Card.Group attaches a row of equal-height cards, dropping the borders and rounded corners between them."
          />
          <PhoenixDocCard.Body
            code={cardGroupCode}
            scope={{ generic54, generic44, generic46, generic45 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Card Background Styles"
            description="Card takes no colour prop — reach for the theme's background and text utilities instead."
          />
          <PhoenixDocCard.Body code={backgroundStylesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Card Border Styles"
            description="Border colours work the same way, through the border utilities."
          />
          <PhoenixDocCard.Body code={borderCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default CardExample;
