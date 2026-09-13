import { ChangeEvent, useState } from 'react';
import {
  faCamera,
  faPencil,
  faUserCheck,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Row } from '@hummingbirdui/react';
import coverImage from 'assets/img/generic/59.png';
import { Link } from 'react-router';

interface SocialProfileCardProps {
  showAbout?: boolean;
  avatar: string;
  className?: string;
}

const usePreview = (initial: string) => {
  const [src, setSrc] = useState(initial);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setSrc(URL.createObjectURL(e.target.files[0]));
  };
  return { src, onChange };
};

/** `+FeedProfileCard` in mixins/social/Feed.pug */
const SocialProfileCard = ({
  showAbout,
  avatar,
  className
}: SocialProfileCardProps) => {
  const cover = usePreview(coverImage);
  const profile = usePreview(avatar);

  return (
    <Card className={className}>
      <Card.Header className="hover-actions-trigger relative mb-12 min-h-32.5">
        <div
          className="bg-holder rounded-t-md"
          style={{
            backgroundImage: `linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%), url(${cover.src})`
          }}
        >
          <input
            className="hidden"
            id="upload-feed-cover-image"
            type="file"
            accept="image/*"
            onChange={cover.onChange}
          />
          <label
            className="cover-image-file-input"
            htmlFor="upload-feed-cover-image"
          />
          <div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
            <FontAwesomeIcon icon={faCamera} className="me-2 overlay-icon" />
          </div>
        </div>
        <input
          className="hidden"
          id="upload-feed-porfile-picture"
          type="file"
          accept="image/*"
          onChange={profile.onChange}
        />
        <label
          className="avatar avatar-3xl avatar-status-online feed-avatar-profile cursor-pointer"
          htmlFor="upload-feed-porfile-picture"
        >
          <img
            className="rounded-full img-thumbnail shadow-sm border-0"
            src={profile.src}
            width={200}
            alt=""
          />
        </label>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <div className="flex flex-wrap mb-4 items-center">
              <h3 className="me-2">Ansolo Lazinatov</h3>
              <span className="font-normal text-base">u/hansolo</span>
            </div>
            <div className="mb-4">
              <div className="flex items-center flex-wrap">
                <div className="flex me-6 mb-2">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="text-sm me-2 lg:me-1 xl:me-2"
                  />
                  <h6 className="inline-block mb-0">
                    1297 <span className="font-semibold">Followers</span>
                  </h6>
                </div>
                <div className="flex mb-2">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="text-sm me-2 lg:me-1 xl:me-2"
                  />
                  <h6 className="block xl:inline-block mb-0">
                    3971 <span className="font-semibold">Following</span>
                  </h6>
                </div>
              </div>
            </div>
            {showAbout && (
              <>
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
              </>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SocialProfileCard;
