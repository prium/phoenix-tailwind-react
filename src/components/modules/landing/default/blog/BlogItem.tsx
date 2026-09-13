import type { Blog } from 'data/landing/default-landing-data';

const Stat = ({ icon, value }: { icon: string; value: number }) => (
  <a className="btn-link no-underline flex items-center" href="#!">
    <span className={`fa-solid ${icon} text-soft me-1`} />
    <span className="text-default text-sm lh-1">{value}</span>
  </a>
);

/** `+BlogItems` in landing-1/Blog.pug */
const BlogItem = ({ blog }: { blog: Blog }) => (
  <div className="sm:col-6 lg:col-3 mb-4 md:mb-0">
    <div className="card text-contrast h-full">
      <img
        className="rounded-t-md h-full object-cover"
        src={blog.image}
        alt="..."
      />
      <div className="card-body rounded-t-md">
        <div className="flex items-center mb-4.5">
          <div className="flex items-center me-4">
            <Stat icon="fa-eye" value={blog.views} />
          </div>
          <div className="flex items-center me-4">
            <Stat icon="fa-heart" value={blog.likes} />
          </div>
          <div className="flex items-center">
            <Stat icon="fa-comment" value={blog.comments} />
          </div>
        </div>
        <span className="badge badge-phoenix-primary mb-2">
          {blog.category}
        </span>
        <h4 className="font-bold mb-4 leading-sm line-clamp-2">{blog.title}</h4>
        <a
          className="btn-link px-0 flex items-center text-md font-bold"
          href="#!"
          role="button"
        >
          Read more
          <span className="fa-solid fa-angle-right ms-2" />
        </a>
      </div>
    </div>
  </div>
);

export default BlogItem;
