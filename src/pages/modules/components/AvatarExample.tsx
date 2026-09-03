import { Col, Row } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import team30 from 'assets/img/team/30.webp';
import team57 from 'assets/img/team/57.webp';
import team25 from 'assets/img/team/25.webp';
import team8 from 'assets/img/team/8.webp';
import team58 from 'assets/img/team/58.webp';

const circularCode = `
import Avatar from 'components/base/Avatar';

  <Avatar src={team30} size="xl" />
`;

const squareCode = `
import Avatar from 'components/base/Avatar';

  <Avatar src={team30} size="xl" rounded="square" />
`;

const softCode = `
import Avatar from 'components/base/Avatar';

  <Avatar src={team30} size="xl" rounded="soft" />
`;

const contentCode = `
import Avatar from 'components/base/Avatar';

  <Avatar size="xl" variant="name">+2</Avatar>
`;

const nameCode = `
import Avatar from 'components/base/Avatar';

  <Avatar size="xl" variant="name">A</Avatar>
`;

const emojiCode = `
import Avatar from 'components/base/Avatar';

  <Avatar size="xl" variant="emoji">🎁</Avatar>
`;

const statusCode = `
import Avatar from 'components/base/Avatar';

  <div className="flex gap-4">
    <Avatar src={team30} size="xl" status="online" />
    <Avatar src={team30} size="xl" status="offline" />
    <Avatar src={team30} size="xl" status="away" />
    <Avatar src={team30} size="xl" status="do-not-disturb" />
  </div>
`;

const sizesCode = `
import Avatar from 'components/base/Avatar';

  <div className="flex items-center gap-2 flex-wrap">
    <Avatar src={team30} size="5xl" />
    <Avatar src={team30} size="4xl" />
    <Avatar src={team30} size="3xl" />
    <Avatar src={team30} size="2xl" />
    <Avatar src={team30} size="xl" />
    <Avatar src={team30} size="l" />
    <Avatar src={team30} size="m" />
    <Avatar src={team30} size="s" />
  </div>
`;

const avatarGroupCode = `
import Avatar from 'components/base/Avatar';

() => {
  const sizes = ['5xl', '4xl', '3xl', '2xl', 'xl', 'l', 'm', 's'];
  return (
    <div className="flex flex-col gap-4">
      {sizes.map(size => (
        <Avatar.Group key={size} size={size} total={8}>
          <Avatar src={team30} size={size} />
          <Avatar src={team57} size={size} />
          <Avatar src={team25} size={size} />
          <Avatar src={team8} size={size} />
          <Avatar src={team58} size={size} />
        </Avatar.Group>
      ))}
    </div>
  );
};
`;

const AvatarExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Avatars"
        description="Use avatars of different shapes and sizes with a single component."
        link={{
          text: 'Avatar on hb-react',
          url: 'https://react.hbui.dev/docs/components/avatar'
        }}
      >
        <p className="mb-2">
          Every example below uses this theme&apos;s{' '}
          <code>components/base/Avatar</code> wrapper, which renders
          phoenix&apos;s own avatar markup and adds the <code>name</code> and{' '}
          <code>emoji</code> variants, the eight-step size scale and{' '}
          <code>Avatar.Group</code>. hb-react&apos;s <code>Avatar</code> is a
          different, Radix-backed component built from <code>Avatar.Image</code>{' '}
          and <code>Avatar.Fallback</code>.
        </p>
      </DocPageHeader>

      <DocPagesLayout>
        <Row>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Circular" />
              <PhoenixDocCard.Body
                code={circularCode}
                scope={{ Avatar, team30 }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Square" />
              <PhoenixDocCard.Body
                code={squareCode}
                scope={{ Avatar, team30 }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Soft" />
              <PhoenixDocCard.Body code={softCode} scope={{ Avatar, team30 }} />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Content" />
              <PhoenixDocCard.Body code={contentCode} scope={{ Avatar }} />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Name" />
              <PhoenixDocCard.Body code={nameCode} scope={{ Avatar }} />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Emoji" />
              <PhoenixDocCard.Body code={emojiCode} scope={{ Avatar }} />
            </PhoenixDocCard>
          </Col>
          <Col lg={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Status" />
              <PhoenixDocCard.Body
                code={statusCode}
                scope={{ Avatar, team30 }}
              />
            </PhoenixDocCard>
          </Col>
          <Col lg={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Sizes" />
              <PhoenixDocCard.Body
                code={sizesCode}
                scope={{ Avatar, team30 }}
              />
            </PhoenixDocCard>
          </Col>
          <Col xs={12}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Avatar Group">
                <p className="mb-0">
                  <code>Avatar.Group</code> overlaps its avatars into a single
                  row. Give it the same <code>size</code> as its children and a{' '}
                  <code>total</code>, and it appends a counted <code>+n</code>{' '}
                  avatar for the members it does not show.
                </p>
              </PhoenixDocCard.Header>
              <PhoenixDocCard.Body
                code={avatarGroupCode}
                scope={{ Avatar, team30, team57, team25, team8, team58 }}
              />
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default AvatarExample;
