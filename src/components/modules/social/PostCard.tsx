import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Dropdown } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import CommentField from 'components/modules/social/CommentField';
import PostComments from 'components/modules/social/PostComments';
import PostGallery from 'components/image-gallery/PostGallery';
import { Post } from 'data/social/postsData';
import { Link } from 'react-router';
import {
  faCircle,
  faComment,
  faEarthAmericas,
  faHeart,
  faShare
} from '@fortawesome/free-solid-svg-icons';

interface PostCardProps {
  post: Post;
}

/** `+Post` in mixins/social/Feed.pug */
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="mb-8">
      <Card className="mb-6">
        <Card.Body className="p-4 sm:p-6">
          <div className="border-b border-subtle mb-4">
            <div className="flex items-center mb-4">
              <Link to="/apps/social/profile">
                <Avatar size="xl" src={post.author.avatar} className="me-2" />
              </Link>
              <div className="flex-1">
                <Link
                  to="/apps/social/profile"
                  className="font-bold mb-0 text-emphasis"
                >
                  {post.author.name}
                </Link>
                <p className="text-sm mb-0 text-subtle/85 font-semibold">
                  {post.time}
                  {post.location && (
                    <>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-soft/50"
                        transform="shrink-10 down-2"
                      />
                      {post.location}
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-soft/50"
                        transform="shrink-10 down-2"
                      />
                      <FontAwesomeIcon
                        icon={faEarthAmericas}
                        className="text-default"
                      />
                    </>
                  )}
                </p>
              </div>
              <RevealDropdownTrigger>
                <RevealDropdown btnClassName="flex">
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                  <Dropdown.Item>Download</Dropdown.Item>
                  <Dropdown.Item>Report abuse</Dropdown.Item>
                </RevealDropdown>
              </RevealDropdownTrigger>
            </div>
            <p className="text-muted">{post.caption}</p>
            {post.images && <PostGallery images={post.images} />}
          </div>
          <div className="flex">
            <button
              type="button"
              className="btn btn-link text-primary p-0 me-4 text-sm font-extrabold"
            >
              <FontAwesomeIcon icon={faHeart} className="me-1" />
              {post.interactions.likes}
            </button>
            <button
              type="button"
              className="btn btn-link text-default p-0 text-sm me-4 font-extrabold"
            >
              <FontAwesomeIcon icon={faComment} className="me-1" />
              {post.interactions.comments}
            </button>
            <button
              type="button"
              className="btn btn-link text-default p-0 text-sm me-2 font-extrabold"
            >
              <FontAwesomeIcon icon={faShare} className="me-1" />
              {post.interactions.shares}
            </button>
          </div>
        </Card.Body>
        <div className="bg-subtle border-t border-subtle p-4 sm:p-6">
          {post.comments && <PostComments comments={post.comments} />}
          <CommentField avatar={post.commentInputAvatar} />
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
