import {
  faAngleRight,
  faComment,
  faEye,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import { Blog } from 'data/landing/default-landing-data';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router';

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Card className="text-white h-full">
      <Card.Img
        variant="top"
        src={blog.image}
        alt="..."
        className="rounded-t-md h-full fit-cover"
      />
      <Card.Body className="rounded-t-md">
        <div className="flex items-center mb-4">
          <div className="flex items-center me-4">
            <Link
              to="#!"
              className="btn-link no-underline flex items-center"
            >
              <FontAwesomeIcon
                icon={faEye}
                className="text-soft me-1"
              />
              <span className="text-default text-sm leading-none">{blog.views}</span>
            </Link>
          </div>
          <div className="flex items-center me-4">
            <Link
              to="#!"
              className="btn-link no-underline flex items-center"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="text-soft me-1"
              />
              <span className="text-default text-sm leading-none">{blog.likes}</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="#!"
              className="btn-link no-underline flex items-center"
            >
              <FontAwesomeIcon
                icon={faComment}
                className="text-soft me-1"
              />
              <span className="text-default text-sm leading-none">{blog.comments}</span>
            </Link>
          </div>
        </div>
        <Badge variant="phoenix" bg="primary" className="mb-2">
          {blog.category}
        </Badge>
        <h4 className="font-bold mb-4 leading-sm line-clamp-2">{blog.title}</h4>
        <Button as={Link} to="#!" className="p-0" variant="link">
          Read more
          <FontAwesomeIcon icon={faAngleRight} className="ms-2" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
