import {
  faAngleRight,
  faComment,
  faEye,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import { Blog } from 'data/landing/alternate-landing-data';

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt="" className="w-full rounded-lg" />
      <div className="flex align-items-cente mt-4">
        <Button
          variant="link"
          href="#!"
          className="no-underline text-muted flex items-center me-4 text-sm p-0"
          startIcon={<FontAwesomeIcon icon={faEye} className="text-md" />}
        >
          {blog.views}
        </Button>
        <Button
          variant="link"
          href="#!"
          className="no-underline text-muted flex items-center me-4 text-sm p-0"
          startIcon={<FontAwesomeIcon icon={faHeart} className="text-md" />}
        >
          {blog.like}
        </Button>
        <Button
          variant="link"
          href="#!"
          className="no-underline text-muted flex items-center text-sm p-0"
          startIcon={<FontAwesomeIcon icon={faComment} className="text-md" />}
        >
          {blog.comments}
        </Button>
      </div>
      <Badge bg="primary" className="mb-2 mt-6">
        {blog.category}
      </Badge>
      <h4 className="mb-4 sm:pe-8 leading-lg">{blog.title}</h4>
      <Button
        variant="link"
        className="px-0 flex items-center text-md font-bold"
        endIcon={<FontAwesomeIcon icon={faAngleRight} />}
      >
        See more
      </Button>
    </div>
  );
};

export default BlogItem;
