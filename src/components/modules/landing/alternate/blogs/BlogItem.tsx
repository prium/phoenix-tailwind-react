import type { Blog } from 'data/landing/alternate-landing-data';

/** `+Blogs` card in landing-2/Blogs.pug */
const BlogItem = ({ blog }: { blog: Blog }) => (
  <div className="blog-card">
    <img className="w-full rounded-lg" src={blog.image} alt="" />
    {/* the gold misspells its items-center utility here, so it is dead */}
    <div className="flex mt-4">
      <a
        className="btn-link no-underline text-muted flex items-center me-4"
        href="#!"
      >
        <span className="fa-solid fa-eye text-md" />
        <span className="text-sm ms-1 leading-none">{blog.views}</span>
      </a>
      <a
        className="btn-link no-underline text-muted flex items-center me-4"
        href="#!"
      >
        <span className="fa-solid fa-heart text-md" />
        <span className="ms-1 text-sm leading-non">{blog.like}</span>
      </a>
      <a
        className="btn-link no-underline text-muted flex items-center"
        href="#!"
      >
        <span className="fa-solid fa-comment text-md" />
        <span className="ms-1 text-sm leading-non">{blog.comments}</span>
      </a>
    </div>
    <span className="badge text-white bg-primary mb-2 mt-5">
      {blog.category}
    </span>
    <h4 className="mb-4 sm:pe-8 leading-lg">{blog.title}</h4>
    <a
      className="btn-link px-0 flex items-center text-md font-bold"
      href="#!"
      role="button"
    >
      See more
      <span className="fa-solid fa-angle-right ms-2" />
    </a>
  </div>
);

export default BlogItem;
