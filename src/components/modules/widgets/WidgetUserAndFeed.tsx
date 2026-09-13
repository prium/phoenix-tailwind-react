import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@hummingbirdui/react';
import profileImage from 'assets/img/team/59.webp';
import EventTitleCard from 'components/cards/EventTitleCard';
import SocialCoverCard from 'components/cards/SocialCoverCard';
import SocialProfileCard from 'components/cards/SocialProfileCard';
import SocialPhotos from 'components/image-gallery/SocialPhotos';
import ProfileNavigation from 'components/list-items/ProfileNavigation';
import SocialMessages from 'components/list-items/SocialMessages';
import { events } from 'data/eventsData';
import { messages } from 'data/social/messages';
import { feedPosts, socialPhotos } from 'data/social/postsData';
import Events from '../events/Events';
import PostCard from '../social/PostCard';
import WidgetsSectionTitle from './WidgetsSectionTitle';

/** `+Users` in mixins/widgets/Users.pug */
const WidgetUserAndFeed = () => {
  return (
    <>
      <WidgetsSectionTitle
        title="Users & Feed"
        subtitle="User engagement and personalized content presentation."
        icon={faUserFriends}
        transform="shrink-4"
        className="mb-8 pt-12"
      />
      {/* `+ProfileCard.mb-8` — SocialCoverCard already carries the gold `mb-8` */}
      <SocialCoverCard />
      <Row className="gx-8">
        <Col xxl={8}>
          {/* `+PostList(1)` — the first feed post only, no "Load more" */}
          <PostCard post={feedPosts[0]} />
        </Col>
        <Col xxl={4}>
          <Events events={events} title="Upcoming events" />
        </Col>
      </Row>
      <Row className="g-8">
        <Col xxl={8}>
          <EventTitleCard className="mb-0" />
        </Col>
        <Col xxl={4}>
          <SocialProfileCard
            showAbout
            avatar={profileImage}
            className="h-full"
          />
        </Col>
      </Row>
      <div className="mt-8">
        <Row className="g-8">
          <Col xl={4}>
            <SocialMessages messages={messages} />
          </Col>
          <Col xl={4}>
            <SocialPhotos photos={socialPhotos} />
          </Col>
          <Col xl={4}>
            <ProfileNavigation />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WidgetUserAndFeed;
