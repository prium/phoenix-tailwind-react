import { useState } from 'react';
import { Card, Col, Dropdown, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import behance from 'assets/img/nav-icons/behance.webp';
import googleCloud from 'assets/img/nav-icons/google-cloud.webp';
import slack from 'assets/img/nav-icons/slack.webp';
import gitlab from 'assets/img/nav-icons/gitlab.webp';
import bitbucket from 'assets/img/nav-icons/bitbucket.webp';
import googleDrive from 'assets/img/nav-icons/google-drive.webp';
import trello from 'assets/img/nav-icons/trello.webp';
import figma from 'assets/img/nav-icons/figma.webp';
import twitter from 'assets/img/nav-icons/twitter.webp';
import pinterest from 'assets/img/nav-icons/pinterest.webp';
import ln from 'assets/img/nav-icons/ln.webp';
import googleMaps from 'assets/img/nav-icons/google-maps.webp';
import googlePhotos from 'assets/img/nav-icons/google-photos.webp';
import spotify from 'assets/img/nav-icons/spotify.webp';

/** `+NineDotsDropdown` in phoenix-tailwind Mixins.pug */
const NineDotMenu = () => {
  const [items] = useState([
    { img: behance, title: 'Behance' },
    { img: googleCloud, title: 'Cloud' },
    { img: slack, title: 'Slack' },
    { img: gitlab, title: 'Gitlab' },
    { img: bitbucket, title: 'BitBucket' },
    { img: googleDrive, title: 'Drive' },
    { img: trello, title: 'Trello' },
    { img: figma, title: 'Figma', width: '20' },
    { img: twitter, title: 'Twitter' },
    { img: pinterest, title: 'Pinterest' },
    { img: ln, title: 'Linkedin' },
    { img: googleMaps, title: 'Maps' },
    { img: googlePhotos, title: 'Photos' },
    { img: spotify, title: 'Spotify' }
  ]);
  return (
    <Dropdown.Content
      align="end"
      sideOffset={8}
      className="navbar-dropdown-caret py-0 dropdown-nine-dots shadow border"
    >
      <Card className="bg-soft relative border-0">
        <Card.Body className="pt-4 px-4 pb-0 overflow-auto scrollbar h-80">
          <Row className="text-center items-center gx-0 gy-0">
            {items.map(item => (
              <Col xs={4} key={item.title}>
                <Link
                  to="#!"
                  className="block hover:bg-muted p-2 rounded-lg text-center no-underline mb-4"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    width={item.width || 30}
                    className="inline-block"
                  />
                  <p className="pt-1 mb-0 text-emphasis truncate text-sm mt-1">
                    {item.title}
                  </p>
                </Link>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Dropdown.Content>
  );
};

export default NineDotMenu;
