import { blogs } from 'data/landing/alternate-landing-data';
import BlogItem from './BlogItem';

/** `+Blogs` in landing-2/Blogs.pug */
const Blogs = () => (
  <section className="pt-18" id="blog">
    <div className="container-small lg:px-12 2xl:px-4">
      <div className="text-center mb-8 mb-14">
        <h5 className="text-info mb-4">Blogs</h5>
        <h2 className="mb-2">Our most viewed articles</h2>
      </div>
      <div className="row gx-4 gy-12">
        {blogs.map(blog => (
          <div className="lg:col-4" key={blog.id}>
            <BlogItem blog={blog} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;
