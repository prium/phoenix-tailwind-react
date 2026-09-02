import { blogs } from 'data/landing/alternate-landing-data';
import { Col, Row } from 'react-bootstrap';
import BlogItem from './BlogItem';

const Blogs = () => {
  return (
    <section id="blog" className="pt-18">
      <div className="container-small lg:px-12 2xl:px-4">
        <div className="text-center mb-8 mb-14">
          <h5 className="text-info mb-4">Blogs</h5>
          <h2 className="mb-2">Our most viewed articles</h2>
        </div>
        <Row className="gx-4 gy-12">
          {blogs.map(blog => (
            <Col key={blog.id} lg={4}>
              <BlogItem blog={blog} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Blogs;
