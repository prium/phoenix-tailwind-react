import {
  faAngleLeft,
  faArchive,
  faFile,
  faPaperclip,
  faPrint,
  faReply,
  faReplyAll,
  faShare,
  faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Dropdown } from '@hummingbirdui/react';
import generic41 from 'assets/img/generic/41.png';
import team60 from 'assets/img/team/60.webp';
import Button from 'components/base/Button';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import TooltipIconButton from 'components/common/TooltipIconButton';
import EmailLayout from 'layouts/EmailLayout';
import { Link } from 'react-router';

/**
 * Gold `apps/email/email-detail.pug` + `mixin EmailDetails`
 * (../phoenix-tailwind/src/pug/mixins/email/EmailDetails.pug).
 */
const EmailDetail = () => {
  return (
    <EmailLayout page="detail">
      <div className="col">
        <Card className="email-content">
          <Card.Body className="overflow-hidden">
            <div className="flex flex-between-center pb-4 border-b border-subtle mb-6">
              <Button variant="link" className="p-0 text-muted me-4" asChild>
                <Link to="/apps/email/inbox">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="font-black text-base"
                  />
                </Link>
              </Button>
              <h3 className="flex-1 mb-0 leading-sm line-clamp-1">
                Query about recently purchased soccer socks
              </h3>
              <RevealDropdownTrigger>
                <RevealDropdown>
                  <Dropdown.Item asChild>
                    <a href="#!">Edit</a>
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger" asChild>
                    <a href="#!">Delete</a>
                  </Dropdown.Item>
                  <Dropdown.Item asChild>
                    <a href="#!">Download</a>
                  </Dropdown.Item>
                  <Dropdown.Item asChild>
                    <a href="#!">Report abuse</a>
                  </Dropdown.Item>
                </RevealDropdown>
              </RevealDropdownTrigger>
            </div>
            <div className="overflow-x-hidden scrollbar email-detail-content">
              <div className="row items-center gy-4 gx-0 mb-18">
                <div className="col-12 sm:col-auto flex sm:order-1">
                  <TooltipIconButton
                    title="Reply"
                    icon={faReply}
                    className="p-0 me-6 lg:me-4 xl:me-6"
                    iconClass="text-soft"
                  />
                  <TooltipIconButton
                    title="Remove"
                    icon={faTrashCan}
                    className="p-0 me-6 lg:me-4 xl:me-6"
                    iconClass="text-soft"
                  />
                  <TooltipIconButton
                    title="Archive"
                    icon={faArchive}
                    className="p-0 me-6 lg:me-4 xl:me-6"
                    iconClass="text-soft"
                  />
                  <TooltipIconButton
                    title="Print"
                    icon={faPrint}
                    className="p-0 me-6 lg:me-4 xl:me-6"
                    iconClass="text-soft"
                  />
                  <TooltipIconButton
                    title="Star"
                    icon={faStar}
                    className="p-0"
                    iconClass="text-soft"
                  />
                </div>
                <div className="col-auto">
                  <img
                    className="me-2 rounded-full"
                    src={team60}
                    alt="..."
                    width={48}
                    height={48}
                  />
                </div>
                <div className="col-auto flex-1">
                  <div className="flex mb-1">
                    <h5 className="mb-0 text-highlight me-2">Jessica Ball</h5>
                    <p className="mb-0 leading-sm text-subtle text-md hidden md:block text-nowrap">
                      &#60; jessica.ball@email.com &#62;
                    </p>
                  </div>
                  <p className="mb-0 text-md">
                    <span className="text-subtle">to</span>
                    <span className="font-bold text-muted"> Me </span>
                    <span className="text-highlight font-semibold text-sm">
                      28 Aug, 2021{' '}
                    </span>
                    <span className="font-semibold text-default text-sm me-1">
                      {' '}
                      6:32 PM
                    </span>
                    <FontAwesomeIcon icon={faStar} className="text-soft" />
                  </p>
                </div>
              </div>

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
                >
                  <FontAwesomeIcon icon={faPaperclip} className="me-2" />2
                  Attachments
                </Button>
              </div>
              <div className="row pb-20 border-b mb-6 gx-0 gy-2 border-subtle">
                <div className="col-auto me-4">
                  <a className="no-underline flex items-center" href="#!">
                    <div className="size-12 flex flex-center border rounded-lg text-soft/75 flex-col me-2">
                      <FontAwesomeIcon
                        icon={faFile}
                        className="text-base mb-1"
                      />
                      <p className="mb-0 text-sm font-bold">PDF</p>
                    </div>
                    <div>
                      <h6 className="text-highlight">workflow-data.pdf</h6>
                      <p className="text-md mb-0 text-subtle leading-none">
                        53.34 KB
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-auto">
                  <a className="no-underline flex items-center" href="#!">
                    <img className="rounded-md" src={generic41} alt="..." />
                    <div className="ms-2">
                      <h6 className="text-highlight">forest.jpg</h6>
                      <p className="text-md mb-0 text-subtle">53.34 KB</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex justify-between">
                <Button
                  variant="phoenix-secondary"
                  className="me-1 text-nowrap px-2 sm:px-6"
                >
                  Reply
                  <FontAwesomeIcon icon={faReply} className="ms-2 text-sm" />
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="me-1 text-nowrap px-2 sm:px-6"
                >
                  Reply All
                  <FontAwesomeIcon icon={faReplyAll} className="ms-2 text-sm" />
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="ms-auto text-nowrap px-2 sm:px-6"
                >
                  Forward
                  <FontAwesomeIcon icon={faShare} className="ms-2 text-sm" />
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </EmailLayout>
  );
};

export default EmailDetail;
