import {
  faCalendarAlt,
  faChevronRight,
  faFilter,
  faRotate,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import RoomCard from 'components/modules/travel-agency/hotel/search-room/RoomCard';
import RoomFilterOffcanvas from 'components/modules/travel-agency/hotel/search-room/RoomFilterOffcanvas';
import RoomFilterOffcanvasContent from 'components/modules/travel-agency/hotel/search-room/RoomFilterOffcanvasContent';
import { defaultBreadcrumbItems } from 'data/commonData';
import { useState } from 'react';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router';
import { roomsSearchData } from 'data/travel-agency/customer/hotel';

const SearchRoom = () => {
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
      <div className="mb-16">
        <Row className="items-end mb-8 gy-4">
          <Col style={{ maxWidth: 290 }}>
            <h2>Rooms</h2>
          </Col>
          <Col xl>
            <Row className="gx-2 xl:gx-4 gy-4">
              <Col
                xs={{ order: 1 }}
                sm={{ span: 'auto', order: 0 }}
                className="sm:me-2 xl:hidden"
              >
                <Button
                  variant="phoenix-secondary"
                  size="lg"
                  className="text-subtle w-full"
                  onClick={() => setOpenOffcanvas(true)}
                >
                  <FontAwesomeIcon icon={faFilter} className="me-2" />
                  Filter
                </Button>
              </Col>
              <Col xs sm={5} xxl={3}>
                <DatePicker
                  render={(_, ref) => {
                    return (
                      <FloatingLabel
                        label="Select Time Range"
                        className="w-auto"
                      >
                        <Form.Control
                          type="text"
                          placeholder="start date"
                          ref={ref}
                          id="startDatepicker"
                          className="ps-4"
                        />

                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="absolute top-0 end-0 mt-4 me-4"
                        />
                      </FloatingLabel>
                    );
                  }}
                  hideIcon={true}
                  options={{
                    mode: 'range',
                    minDate: 'today',
                    dateFormat: 'Y-m-d'
                  }}
                />
              </Col>
              <Col xs sm="auto" className="grow-0">
                <Button
                  variant="phoenix-primary"
                  size="lg"
                  className="2xl:px-10 whitespace-nowrap"
                >
                  <span className="hidden xl:inline-block">Update</span>
                  <FontAwesomeIcon icon={faSearch} className="text-md xl:ms-2" />
                </Button>
              </Col>
              <Col xs sm="auto" className="ms-auto grow-0">
                <Button
                  variant="phoenix-secondary"
                  size="lg"
                  className="ms-auto whitespace-nowrap"
                >
                  <span className="hidden xl:inline-block">Refresh</span>
                  <FontAwesomeIcon icon={faRotate} className="text-md xl:ms-2" />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* header section end */}

        <Row className="gx-10">
          {/* offcanvas start */}
          <Col xl="auto" className="hidden xl:block">
            <div className="phoenix-room-filter-offcanvas bg-default scrollbar">
              <RoomFilterOffcanvasContent />
            </div>
          </Col>
          {/* offcanvas end */}
          <Col className="xl:w-1/4">
            {roomsSearchData.map((item, index) => (
              <RoomCard
                key={index}
                data={item}
                isLastItem={roomsSearchData.length - 1 === index}
              />
            ))}
            <div className="border p-4 rounded-lg mt-8 flex flex-end-center gap-4 sm:gap-10 flex-wrap">
              <h2 className="text-default mb-0">
                <span className="text-md text-subtle font-bold me-2">
                  Total :
                </span>
                04
              </h2>
              <Link to="#!">
                <Button variant="primary" className="sm:px-12">
                  Confirm Booking
                  <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <RoomFilterOffcanvas open={openOffcanvas} setOpen={setOpenOffcanvas} />
      </div>
    </>
  );
};

export default SearchRoom;
