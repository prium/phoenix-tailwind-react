import { Col, Row } from '@hummingbirdui/react';
import profileImage from 'assets/img/team/59.webp';
import SocialProfileCard from 'components/cards/SocialProfileCard';
import SocialPhotos from 'components/image-gallery/SocialPhotos';
import FeedTextarea from 'components/forms/FeedTextarea';
import ProfileNavigation from 'components/list-items/ProfileNavigation';
import SocialMessages from 'components/list-items/SocialMessages';
import Events from 'components/modules/events/Events';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import SocialPosts from 'components/modules/social/SocialPosts';
import { events } from 'data/eventsData';
import { messages } from 'data/social/messages';
import { feedPosts, socialPhotos } from 'data/social/postsData';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect } from 'react';

/** apps/social/feed.pug */
const Feed = () => {
  const { setFooterClass } = useMainLayoutContext();

  useEffect(() => {
    setFooterClass('hidden lg:block');
    return () => {
      setFooterClass('');
    };
  }, []);

  return (
    <>
      <div className="pb-18">
        <Row className="gy-4 gx-8 2xl:gx-10">
          <Col lg={5} xl={4} className="hidden lg:block">
            <SocialProfileCard
              showAbout={true}
              avatar={profileImage}
              className="mb-8"
            />
            <ProfileNavigation />
            <div className="mb-14 mt-10">
              <SocialMessages messages={messages} />
            </div>
            <div className="mb-14">
              <SocialPhotos photos={socialPhotos} />
            </div>
            <div className="flex pb-6 border-b border-dashed items-end">
              <h3 className="flex-1 mb-0">Events</h3>
              <a href="#!" className="font-bold text-md">
                See more
              </a>
            </div>
            <Events events={events} />
          </Col>
          <Col lg={7} xl={8}>
            <FeedTextarea className="mb-8" />
            <SocialPosts posts={feedPosts} loadMoreClassName="text-primary" />
          </Col>
        </Row>
      </div>
      <NavbarBottom active="home" className="lg:hidden!" />
    </>
  );
};

export default Feed;
