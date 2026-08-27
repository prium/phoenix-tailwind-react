import CoverUpload from 'components/common/CoverUpload';
import coverImage from 'assets/img/generic/59.png';
import AvatarUpload from 'components/common/AvatarUpload';
import { Card, Col, Row } from 'react-bootstrap';
import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import {
  faPencil,
  faUserCheck,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';

interface SocialProfileCardProps {
  showAbout?: boolean;
  avatar: string;
  className?: string;
}

const SocialProfileCard = ({
  showAbout,
  avatar,
  className
}: SocialProfileCardProps) => {
  return (
    <Card className={className}>
      <Card.Header
        className="relative mb-10"
        style={{ minHeight: '130px' }}
      >
        <CoverUpload
          src={coverImage}
          gradient={
            'linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%)' as CSSProperties
          }
        />
        <AvatarUpload
          size="4xl"
          src={avatar}
          status="online"
          thumbnail
          className="feed-avatar-profile"
          imageClassName="border-0"
        />
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <div className="flex flex-wrap mb-2 items-center">
              <h3 className="me-2">Ansolo Lazinatov</h3>
              <span className="font-normal text-base">u/hansolo</span>
            </div>
            <div className="flex flex-wrap gap-y-2 gap-x-6 xl:block 2xl:flex items-center">
              <div className="flex xl:mb-2 2xl:mb-0">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className="text-sm me-2 lg:me-1 xl:me-2"
                />
                <h6 className="mb-0">
                  1297
                  <span className="font-semibold ms-1">Followers</span>
                </h6>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faUserCheck}
                  className="text-sm me-2 lg:me-1 xl:me-2"
                />
                <h6 className="mb-0">
                  3971
                  <span className="font-semibold ms-1">Following</span>
                </h6>
              </div>
            </div>
            {showAbout && (
              <div className="mt-6">
                <p className="font-semibold mb-0">
                  About me
                  <Link to="#!">
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="text-sm text-soft ms-4"
                    />
                  </Link>
                </p>
                <p className="text-subtle mb-0">
                  “Le capitalisme exploite. Et le capitalisme exploite les gens
                  de couleur. Comme il exploite les hommes. Ou comme il exploite
                  les femmes.”
                </p>
              </div>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SocialProfileCard;
