import SocialCoverCard from 'components/cards/SocialCoverCard';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import MutualNavigation from 'components/list-items/MutualNavigation';
import SocialPhotos from 'components/image-gallery/SocialPhotos';
import SocialPosts from 'components/modules/social/SocialPosts';
import { profilePosts, socialPhotos } from 'data/social/postsData';
import { Col, Row } from 'react-bootstrap';
import ProfileNavigation from 'components/list-items/ProfileNavigation';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect } from 'react';

const SocialProfile = () => {
  const { setFooterClass, setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setFooterClass('hidden d-lg-block');
    setContentClass('widget-gap-large');
    return () => {
      setFooterClass('');
    };
  }, []);

  return (
    <>
      <div className="mb-16">
        <SocialCoverCard />
        <Row className="gy-4 gx-8 2xl:gx-10">
          <Col xl={4} className="hidden xl:block">
            <ProfileNavigation className="mb-14" />
            <SocialPhotos className="mb-14" photos={socialPhotos} />
            <MutualNavigation />
          </Col>
          <Col xl={8}>
            <SocialPosts posts={profilePosts} />
          </Col>
        </Row>
      </div>
      <NavbarBottom active="profile" className="xl:hidden" />
    </>
  );
};

export default SocialProfile;
