import { blogs } from 'data/landing/default-landing-data';
import BlogItem from './BlogItem';

/** `+Blog` in landing-1/Blog.pug */
const Blog = () => (
  <section className="bg-soft" id="blog">
    <div className="container-small relative lg:px-12 2xl:px-4">
      <div className="mb-6 text-center sm:text-start">
        <h4 className="text-primary font-extrabold mb-4">Blog</h4>
        <h2>Latest articles</h2>
      </div>
      <p className="md:columns-2">
        See the latest articles we published with this dashboard. Your customers
        will be happy to find all the latest posts in one place. This menu
        efficiently shows all related topics from search filters and provides
        the customers with what they need. Also you can just educate your
        customers about everything they need to know and follow to avail a
        service with you. This menu is the one to show them that.
      </p>

      <div className="row h-full g-4 justify-center">
        {blogs.map(blog => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </div>
      <div className="text-center mt-10">
        <a className="btn btn-outline-primary" href="#!">
          View All
          <span className="fa-solid fa-angle-right ms-2" />
        </a>
      </div>
    </div>
  </section>
);

export default Blog;
