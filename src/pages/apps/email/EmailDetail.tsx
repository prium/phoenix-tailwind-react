import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import EmailLayout from 'layouts/EmailLayout';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import team60 from 'assets/img/team/60.webp';
import generic41 from 'assets/img/generic/41.png';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Link } from 'react-router';
import TooltipIconButton from 'components/common/TooltipIconButton';
import AttachmentPreview from 'components/common/AttachmentPreview';
import {
  faAngleLeft,
  faArchive,
  faPaperclip,
  faPrint,
  faReply,
  faReplyAll,
  faShare,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const EmailDetail = () => {
  return (
    <EmailLayout page="detail">
      <Col>
        <Card className="email-content">
          <Card.Header className="border-0">
            <div className="flex flex-between-center pb-4 border-b border-subtle">
              <Button
                as={Link}
                to="/apps/email/inbox"
                variant="link"
                className="p-0 text-muted me-4"
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="font-black text-base"
                />
              </Button>
              <h3 className="flex-1 mb-0 leading-sm line-clamp-1">
                Query about recently purchased soccer socks
              </h3>

              <RevealDropdownTrigger>
                <RevealDropdown>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                  <Dropdown.Item>Download</Dropdown.Item>
                  <Dropdown.Item>Report abuse</Dropdown.Item>
                </RevealDropdown>
              </RevealDropdownTrigger>
            </div>
          </Card.Header>
          <Card.Body className="p-0 pb-6 scrollbar">
            <div className="email-detail-content px-6">
              <Row className="items-center gy-4 gx-2 mb-18">
                <Col
                  xs={12}
                  sm="auto"
                  lg={12}
                  xl="auto"
                  className="flex gap-6 lg:gap-4 xl:gap-6 sm:order-1 lg:order-0 xl:order-1"
                >
                  <TooltipIconButton title="Reply" icon={faReply} />
                  <TooltipIconButton title="Remove" icon={faTrashCan} />
                  <TooltipIconButton title="Archive" icon={faArchive} />
                  <TooltipIconButton title="Print" icon={faPrint} />
                  <TooltipIconButton title="Star" icon={faStar} />
                </Col>
                <Col xs="auto">
                  <Avatar src={team60} size="xl" />
                </Col>
                <Col xs="auto" className="flex-1">
                  <div className="flex mb-1">
                    <h5 className="mb-0 text-highlight me-2">
                      Jessica Ball
                    </h5>
                    <p className="mb-0 leading-sm text-subtle text-md hidden md:block whitespace-nowrap">
                      &lt; jessica.ball@email.com &gt;
                    </p>
                  </div>
                  <p className="mb-0 text-md">
                    <span className="text-subtle me-1">to</span>
                    <span className="font-bold text-muted me-1">Me</span>
                    <span className="text-highlight font-semibold text-sm me-1">
                      28 Aug, 2021
                    </span>
                    <span className="font-semibold text-default text-sm me-1">
                      6:32 PM
                    </span>
                    <FontAwesomeIcon
                      icon={farStar}
                      className="text-soft"
                    />
                  </p>
                </Col>
              </Row>
              <div className="text-highlight text-md w-full md:w-3/4 mb-14">
                <p>Dear Simp sons,</p>
                <p>
                  Something in a thirty-acre thermal thicket of thorns and
                  thistles thumped and thundered threatening the three-D
                  thoughts of Matthew the thug - although, theatrically, it was
                  only the thirteen-thousand thistles and thorns through the
                  underneath of his thigh that the thirty year old thug thought
                  of that morning.
                </p>
                <p>
                  How much caramel can a canny canonball cram in a camel if a
                  canny canonball can cram caramel in a camel? If practice makes
                  perfect and perfect needs practice, I’m perfectly practiced
                  and practically perfect.
                </p>
                <p className="mb-0">Best regards,</p>
                <p>Jess</p>
              </div>
              <div className="flex items-center mb-8">
                <Button
                  variant="link"
                  className="text-highlight text-base no-underline p-0"
                  type="button"
                  startIcon={
                    <FontAwesomeIcon icon={faPaperclip} className="me-2" />
                  }
                >
                  2 Attachments
                </Button>
              </div>
              <Row className="pb-20 border-b border-subtle mb-6 gx-0 gy-2">
                <Col xs="auto" className="me-4">
                  <AttachmentPreview
                    attachment={{
                      name: 'workflow-data.pdf',
                      size: '53.34 KB',
                      format: 'pdf'
                    }}
                    size="xl"
                  />
                </Col>

                <Col xs="auto" className="me-4">
                  <AttachmentPreview
                    attachment={{
                      name: 'forest.jpg',
                      size: '123.34 KB',
                      format: 'jpg',
                      preview: generic41
                    }}
                    size="xl"
                  />
                </Col>
              </Row>
              <div className="flex justify-between">
                <Button
                  variant="phoenix-secondary"
                  className="me-1 whitespace-nowrap px-2 sm:px-6"
                  endIcon={
                    <FontAwesomeIcon icon={faReply} className="ms-2 text-sm" />
                  }
                >
                  Reply
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="me-1 whitespace-nowrap px-2 sm:px-6"
                  endIcon={
                    <FontAwesomeIcon icon={faReplyAll} className="ms-2 text-sm" />
                  }
                >
                  Reply All
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="ms-auto whitespace-nowrap px-2 sm:px-6"
                  endIcon={
                    <FontAwesomeIcon icon={faShare} className="ms-2 text-sm" />
                  }
                >
                  Forward
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </EmailLayout>
  );
};

export default EmailDetail;
