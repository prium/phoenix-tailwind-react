import Badge from 'components/base/Badge';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import FeatherIcon from 'feather-icons-react';

const phoenixBadgesCode = `
import Badge from 'components/base/Badge';

  <div className="flex gap-1">
    <Badge bg="primary" variant="phoenix">
      Primary
    </Badge>
    <Badge bg="secondary" variant="phoenix">
      Secondary
    </Badge>
    <Badge bg="success" variant="phoenix">
      Success
    </Badge>
    <Badge bg="info" variant="phoenix">
      Info
    </Badge>
    <Badge bg="warning" variant="phoenix">
      Warning
    </Badge>
    <Badge bg="danger" variant="phoenix" pill>
      Danger
    </Badge>
  </div>
`;

const phoenixBadgesWithIconCode = `
import Badge from 'components/base/Badge';

  <div className="flex gap-1">
    <Badge
        bg="primary"
        variant="phoenix"
        iconPosition="end"
        className="text-sm"
        icon={<FeatherIcon icon="package" size={12} className="ms-1" />}
    >
      Primary
    </Badge>
    <Badge
        bg="secondary"
        variant="phoenix"
        iconPosition="end"
        className="text-sm"
        icon={<FeatherIcon icon="plus" size={12} className="ms-1" />}
    >
      Secondary
    </Badge>
    <Badge
        bg="success"
        variant="phoenix"
        iconPosition="end"
        className="text-sm"
        icon={<FeatherIcon icon="check" size={12} className="ms-1" />}
    >
      Success
    </Badge>
    <Badge
        bg="info"
        variant="phoenix"
        iconPosition="end"
        className="text-sm"
        icon={<FeatherIcon icon="info" size={12} className="ms-1" />}
    >
      Info
    </Badge>
    <Badge
        bg="warning"
        variant="phoenix"
        iconPosition="end"
        className="text-sm"
        icon={<FeatherIcon icon="alert-octagon" size={12} className="ms-1" />}
    >
      Warning
    </Badge>
    <Badge
        bg="danger"
        variant="phoenix"
        iconPosition="end"
        className="text-sm"
        icon={<FeatherIcon icon="x" size={12} className="ms-1" />}
    >
      Danger
    </Badge>
  </div>
`;

const variantsCode = `
<div className="flex gap-2">
  <Badge variant="filled">Filled</Badge>
  <Badge variant="subtle">Subtle</Badge>
  <Badge variant="outline">Outline</Badge>
</div>
`;

const colorsCode = `
() => {
  const colors = [
    'neutral',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger'
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map(color => (
        <Badge key={color} color={color}>
          {color}
        </Badge>
      ))}
    </div>
  );
}
`;

const sizesCode = `
<div className="flex items-center gap-2">
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</div>
`;

const linkCode = `
<div className="flex items-center gap-2">
  <Badge link asChild>
    <a href="#!">Link badge</a>
  </Badge>
  <Badge link variant="subtle" color="info" asChild>
    <a href="#!">Subtle link badge</a>
  </Badge>
</div>
`;

const actionButtonCode = `
<div className="flex items-center gap-2">
  <Badge color="primary" className="inline-flex">
    Dismissible
    <Badge.ActionButton aria-label="Remove">
      <FeatherIcon icon="x" size={10} />
    </Badge.ActionButton>
  </Badge>
  <Badge variant="subtle" color="success" size="md" className="inline-flex">
    Approved
    <Badge.ActionButton aria-label="Remove">
      <FeatherIcon icon="x" size={12} />
    </Badge.ActionButton>
  </Badge>
</div>
`;

const exampleCode = `
<div>
  <h1>
    Example heading <Badge color="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge color="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge color="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge color="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge color="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge color="secondary">New</Badge>
  </h6>
</div>
`;

const BadgeExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Badges"
        description="Documentation and examples for badges, the small count and labeling component."
        link={{
          text: 'Badge on hb-react',
          url: 'https://react.hbui.dev/docs/components/badge'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Badges">
            <p className="mb-0">
              The phoenix soft badge is not an hb-react variant, so it comes
              from this theme&apos;s <code>components/base/Badge</code> wrapper:
              pass <code>variant="phoenix"</code> with a <code>bg</code> colour.
              Add <code>pill</code> for a fully rounded badge, as the last one
              below does.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={phoenixBadgesCode} scope={{ Badge }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Badge with icons">
            <p className="mb-0">
              The wrapper also takes an <code>icon</code> element and an{' '}
              <code>iconPosition</code> of <code>start</code> or{' '}
              <code>end</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={phoenixBadgesWithIconCode}
            scope={{ Badge, FeatherIcon }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Variants">
            <p className="mb-0">
              Everything below is hb-react&apos;s own <code>Badge</code>. Its{' '}
              <code>variant</code> prop picks the visual style:{' '}
              <code>filled</code> (the default), <code>subtle</code> or{' '}
              <code>outline</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={variantsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Colors"
            description="The color prop conveys the intent: primary (the default), neutral, secondary, info, success, warning or danger."
          />
          <PhoenixDocCard.Body code={colorsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Sizes"
            description="Badges come in three sizes: sm (the default), md and lg."
          />
          <PhoenixDocCard.Body code={sizesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Link">
            <p className="mb-0">
              The <code>link</code> prop styles the badge as an interactive
              link. Pair it with <code>asChild</code> so the badge renders your
              own anchor instead of a <code>span</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={linkCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="With action button">
            <p className="mb-0">
              <code>Badge.ActionButton</code> appends a trailing button to the
              badge — a dismiss control for filter chips and the like. The
              phoenix badge skin lays the badge out as <code>inline-block</code>
              , so add an <code>inline-flex</code> utility to keep the label and
              the button on one line.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={actionButtonCode}
            scope={{ FeatherIcon }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Examples"
            description="Badges scale to match the size of the immediate parent element by using relative font sizing and em units."
          />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BadgeExample;
