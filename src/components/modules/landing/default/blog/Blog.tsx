import Button from 'components/base/Button';
import { blogs } from 'data/landing/default-landing-data';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router';
import BlogItem from './BlogItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <section id="blog">
      <div className="container-small lg:px-12 2xl:px-4">
        <Row className="row">
          <Col xs={12} className="mb-6 text-center sm:text-start">
            <h4 className="text-primary font-black mb-4">Blog</h4>
            <h2>Latest articles</h2>
          </Col>
          <Col lg={6} className="text-center sm:text-start">
            <p>
              See the latest articles we published with this dashboard. Your
              customers will be happy to find all the latest posts in one place.
              This menu efficiently shows all related topics from search filters
              and provides the customers with what they need.
            </p>
          </Col>
          <Col lg={6} className="text-center sm:text-start">
            <p>
              Also, you can just educate your customers about everything they
              need to know and follow to avail a service with you. This menu is
              the one to show them that.
            </p>
          </Col>
        </Row>
        <Row className="h-full g-4 justify-center">
          {blogs.map(blog => (
            <Col sm={6} lg={3} key={blog.id}>
              <BlogItem blog={blog} />
            </Col>
          ))}
        </Row>
        <div className="text-center mt-10">
          <Button
            as={Link}
            variant="outline-primary"
            to="#!"
            endIcon={<FontAwesomeIcon icon={faAngleRight} className="ms-2" />}
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
