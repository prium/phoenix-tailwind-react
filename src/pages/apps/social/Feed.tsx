import SocialProfileCard from 'components/cards/SocialProfileCard';
import Events from 'components/modules/events/Events';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import SocialMessages from 'components/list-items/SocialMessages';
import SocialPhotos from 'components/image-gallery/SocialPhotos';
import SocialPosts from 'components/modules/social/SocialPosts';
import { events } from 'data/eventsData';
import { messages } from 'data/social/messages';
import { feedPosts, socialPhotos } from 'data/social/postsData';
import { Col, Row } from 'react-bootstrap';
import ProfileNavigation from 'components/list-items/ProfileNavigation';
import FeedTextarea from 'components/forms/FeedTextarea';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect } from 'react';
import profileImage from 'assets/img/team/59.webp';

const Feed = () => {
  const { setFooterClass } = useMainLayoutContext();

  useEffect(() => {
    setFooterClass('hidden d-lg-block');
    return () => {
      setFooterClass('');
    };
  }, []);

  return (
    <>
      <div className="mb-16">
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
            <Events events={events} title="Events" />
          </Col>
          <Col lg={7} xl={8}>
            <FeedTextarea className="mb-8" />
            <SocialPosts posts={feedPosts} />
          </Col>
        </Row>
      </div>
      <NavbarBottom active="home" className="lg:hidden" />
    </>
  );
};

export default Feed;
