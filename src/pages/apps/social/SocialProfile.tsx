import { Col, Row } from '@hummingbirdui/react';
import SocialCoverCard from 'components/cards/SocialCoverCard';
import SocialPhotos from 'components/image-gallery/SocialPhotos';
import MutualNavigation from 'components/list-items/MutualNavigation';
import ProfileNavigation from 'components/list-items/ProfileNavigation';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import SocialPosts from 'components/modules/social/SocialPosts';
import { profilePosts, socialPhotos } from 'data/social/postsData';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect } from 'react';

/** apps/social/profile.pug */
const SocialProfile = () => {
  const { setFooterClass } = useMainLayoutContext();

  useEffect(() => {
    setFooterClass('hidden xl:block');
    return () => {
      setFooterClass('');
    };
  }, []);

  return (
    <>
      <div className="pb-16">
        <SocialCoverCard />
        <Row className="gy-4 gx-8 2xl:gx-10">
          <Col xl={4} className="hidden xl:block">
            <div className="mb-14">
              <ProfileNavigation />
            </div>
            <div className="mb-14">
              <SocialPhotos photos={socialPhotos} />
            </div>
            <MutualNavigation />
          </Col>
          <Col xs={12} xl={8}>
            <SocialPosts posts={profilePosts} />
          </Col>
        </Row>
      </div>
      <NavbarBottom active="profile" className="xl:hidden!" />
    </>
  );
};

export default SocialProfile;
