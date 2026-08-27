import { useState } from 'react';
import { Card, Col, Pagination, Row, Tabs } from '@hummingbirdui/react';
import { Link } from 'react-router';
import product23 from 'assets/img/products/23.png';
import ProductSpecificationTables from './ProductSpecificationTables';
import Rating from 'components/base/Rating';
import Button from 'components/base/Button';
import { productReviews } from 'data/e-commerce';
import ProductReview from 'components/list-items/ProductReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewModal from 'components/modals/ReviewModal';
import UsuallyBoughtTogetherCard from 'components/cards/UsuallyBoughtTogetherCard';
import { suggestedProducts } from 'data/e-commerce/products';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const ProductDetailsTab = () => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const { lightboxProps, openLightbox } = useLightbox([product23]);
  return (
    <>
      <Tabs defaultValue="description">
        <Tabs.List variant="underline" className="text-md mb-6">
          <Tabs.Trigger value="description">Description</Tabs.Trigger>
          <Tabs.Trigger value="specification">Specification</Tabs.Trigger>
          <Tabs.Trigger value="reviews">Ratings & reviews</Tabs.Trigger>
        </Tabs.List>
        <Row className="gx-4 gy-12">
          <Col xs={12} lg={7} xl={8}>
            <div className="tab-content">
              <Tabs.Content
                value="description"
                className="text-emphasis lg:pe-10 xl:pe-24"
              >
                <p className="mb-8">
                  CUPERTINO, CA , The M1 CPU allows Apple to deliver an all-new
                  iMac with a lot more compact and impressively thin design. The
                  new iMac delivers tremendous performance in an
                  11.5-millimeter-thin design with a stunning side profile that
                  almost vanishes. iMac includes a 24-inch 4.5K Retina display
                  with 11.3 million pixels, 500 nits of brightness, and over a
                  billion colors, giving a beautiful and vivid viewing
                  experience. It is available in a variety of striking colors to
                  match a user's own style and brighten any area. A 1080p
                  FaceTime HD camera, studio-quality mics, and a six-speaker
                  sound system are all included in the new iMac, making it the
                  greatest camera and audio system ever in a Mac. Touch ID is
                  also making its debut on the iMac, making it easier than ever
                  to securely log in, make Apple Pay transactions, and switch
                  user accounts with the touch of a finger. Apps launch at
                  lightning speed, everyday chores seem astonishingly fast and
                  fluid, and demanding workloads like editing 4K video and
                  working with large photos are faster than ever before thanks
                  to the power and performance of M1 and macOS Big Sur.
                </p>
                <Lightbox {...lightboxProps} />
                <Link to="#!">
                  <img
                    src={product23}
                    alt=""
                    className="mb-8 rounded-lg"
                    onClick={() => openLightbox(1)}
                  />
                </Link>
                <p className="mb-0">
                  The new iMac joins Apple's fantastic M1-powered Mac family,
                  which includes the MacBook Air, 13-inch MacBook Pro, and Mac
                  mini, and represents yet another step ahead in the company's
                  shift to Apple silicon. Customers may order iMac starting
                  Friday, April 30. It's the most personal, powerful, capable,
                  and enjoyable it's ever been. In the second half of May, the
                  iMac will be available."M1 is a huge step forward for the
                  Mac," said Greg Joswiak, Apple's senior vice president of
                  Worldwide Marketing. "Today, we're delighted to present the
                  all-new iMac, the first Mac developed around the
                  groundbreaking M1 processor." "The new iMac takes everything
                  people love about iMac to an entirely new level, with its
                  beautiful design in seven breathtaking colors, its immersive
                  4.5K Retina display, the greatest camera, mics, and speakers
                  ever in a Mac, and Touch ID, combined with M1's incredible
                  performance and macOS Big Sur's power."
                </p>
              </Tabs.Content>
              <Tabs.Content value="specification" className="lg:pe-10 xl:pe-24">
                <ProductSpecificationTables />
              </Tabs.Content>
              <Tabs.Content value="reviews">
                <Card className="bg-soft border border-light">
                  <Card.Header className="pb-0 border-b-0">
                    <div className="flex flex-wrap justify-between gap-4">
                      <div className="flex items-center flex-wrap">
                        <h2 className="font-black me-4">
                          4.9
                          <span className="text-base text-soft font-bold">
                            /5
                          </span>
                        </h2>
                        <div className="me-4">
                          <Rating
                            initialValue={4.5}
                            readonly
                            iconClass="text-xl"
                          />
                        </div>
                        <p className="text-default mb-0 font-semibold text-lg">
                          6548 ratings and 567 reviews
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        className="rounded-full"
                        onClick={() => setOpenReviewModal(true)}
                      >
                        Rate this product
                      </Button>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    {productReviews.map(review => (
                      <ProductReview key={review.id} review={review} />
                    ))}

                    <div className="flex justify-center">
                      <Pagination>
                        <Pagination.Content className="mb-0">
                          <Pagination.Item>
                            <Pagination.Link href="#!">
                              <FontAwesomeIcon icon={faChevronLeft} />
                            </Pagination.Link>
                          </Pagination.Item>
                          {[1, 2, 3, 4, 5].map(page => (
                            <Pagination.Item key={page} active={page === 4}>
                              <Pagination.Link href="#!">{page}</Pagination.Link>
                            </Pagination.Item>
                          ))}
                          <Pagination.Item>
                            <Pagination.Link href="#!">
                              <FontAwesomeIcon icon={faChevronRight} />
                            </Pagination.Link>
                          </Pagination.Item>
                        </Pagination.Content>
                      </Pagination>
                    </div>
                  </Card.Body>
                </Card>
              </Tabs.Content>
            </div>
          </Col>
          <Col xs={12} lg={5} xl={4}>
            <UsuallyBoughtTogetherCard products={suggestedProducts} />
          </Col>
        </Row>
      </Tabs>
      <ReviewModal
        show={openReviewModal}
        handleClose={() => setOpenReviewModal(false)}
      />
    </>
  );
};

export default ProductDetailsTab;
