import { Card, Col, Row } from '@hummingbirdui/react';
import coverImage from 'assets/img/generic/59.png';
import avatarImage from 'assets/img/team/20.webp';

/**
 * Profile card of the social settings page.
 * Gold: mixin `SettingsProfileCard` in
 * `../phoenix-tailwind/src/pug/mixins/social/Settings.pug` — differs from the
 * feed's profile card (header mb-10, name row mb-2, follower layout, no About).
 */
const SettingsProfileCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Header className="hover-actions-trigger relative mb-10 min-h-32.5">
        <div
          className="bg-holder rounded-t-md"
          style={{
            backgroundImage: `linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%), url(${coverImage})`
          }}
        >
          <input
            className="hidden"
            id="upload-settings-cover-image"
            type="file"
          />
          <label
            className="cover-image-file-input"
            htmlFor="upload-settings-cover-image"
          />
          <div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
            <span className="fa-solid fa-camera me-2" />
          </div>
        </div>
        <input
          className="hidden"
          id="upload-settings-porfile-picture"
          type="file"
        />
        <label
          className="avatar avatar-3xl avatar-status-online feed-avatar-profile cursor-pointer"
          htmlFor="upload-settings-porfile-picture"
        >
          <img
            className="rounded-full img-thumbnail shadow-sm border-0"
            src={avatarImage}
            width={200}
            alt=""
          />
        </label>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <div className="flex flex-wrap mb-2 items-center">
              <h3 className="me-2">Ansolo Lazinatov</h3>
              <span className="font-normal text-base">u/hansolo</span>
            </div>
            <div className="flex xl:block 2xl:flex items-center">
              <div className="flex xl:mb-2 2xl:mb-0">
                <span className="fa-solid fa-user-group text-sm me-2 lg:me-1 xl:me-2" />
                <h6 className="inline-block mb-0">
                  1297
                  <span className="font-semibold ms-1 me-6">Followers</span>
                </h6>
              </div>
              <div className="flex">
                <span className="fa-solid fa-user-check text-sm me-2 lg:me-1 xl:me-2" />
                <h6 className="block xl:inline-block mb-0">
                  3971
                  <span className="font-semibold ms-1">Following</span>
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SettingsProfileCard;
