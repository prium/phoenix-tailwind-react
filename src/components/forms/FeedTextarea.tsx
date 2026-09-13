import {
  faCalendarAlt,
  faCaretDown,
  faGlobeAsia,
  faImage,
  faMapMarkerAlt,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Dropdown, Textarea, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { useState } from 'react';

/** `+FeedTextarea` in mixins/social/Feed.pug */
const FeedTextarea = ({ className }: { className?: string }) => {
  const [privacy, setPrivacy] = useState('Public');
  return (
    <Card className={cn(className, 'flex flex-col')}>
      <Textarea
        className="border-subtle rounded-b-none border-0 flex-1 text-base"
        rows={7}
        placeholder="Write something..."
      />
      <Card.Footer className="p-4">
        <div className="flex justify-between items-center">
          <button type="button" className="btn p-0 me-4">
            <FontAwesomeIcon icon={faImage} className="text-base" />
          </button>
          <button type="button" className="btn p-0 me-4">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-base" />
          </button>
          <button type="button" className="btn p-0 me-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-base" />
          </button>
          <button type="button" className="btn p-0 me-4">
            <FontAwesomeIcon icon={faTag} className="text-base" />
          </button>
          <div className="dropdown me-4 inline-block flex-1">
            <Dropdown>
              <Dropdown.Trigger asChild>
                <button
                  type="button"
                  className="btn p-0 dropdown-toggle dropdown-caret-none flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faGlobeAsia}
                    className="text-base me-1"
                  />
                  <span className="me-1 leading-[1.5] hidden sm:block">
                    {privacy}
                  </span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="text-sm text-soft"
                  />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Item onClick={() => setPrivacy('Public')}>
                  Public
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPrivacy('Private')}>
                  Private
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPrivacy('Draft')}>
                  Draft
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
          <div className="flex items-center">
            <Button variant="primary" size="sm" className="px-10 sm:px-14">
              Post
            </Button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default FeedTextarea;
