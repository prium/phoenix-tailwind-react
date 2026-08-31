import {
  faFileExport,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import { defaultBreadcrumbItems } from 'data/commonData';
import { dealColumnsData } from 'data/crm/deals';
import { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import DealColumn from 'components/modules/crm/deals/DealColumn';
import AddDealModal from 'components/modules/crm/deals/AddDealModal';
import FilterDealsModal from 'components/modals/FilterDealsModal';
import DealsAddStageModal from 'components/modals/DealsAddStageModal';
import DealsProvider, { useDealsContext } from 'providers/CrmDealsProvider';
import { DndContext, closestCorners, DragOverlay } from '@dnd-kit/core';
import DealCard from 'components/cards/DealCard';
import { useGetDndSensor } from 'hooks/useGetDndSensor';

const index = () => {
  return (
    <DealsProvider data={dealColumnsData}>
      <Deals />
    </DealsProvider>
  );
};

const Deals = () => {
  const { setContentClass } = useMainLayoutContext();
  const {
    dealColumns,
    openAddDealModal,
    setOpenAddDealModal,
    openFilterDealModal,
    setOpenFilterDealModal,
    openAddStageModal,
    setOpenAddStageModal,
    activeDeal,
    activeColumnId,
    handleDragStart,
    handleDragOver,
    handleDragEnd
  } = useDealsContext();
  const sensors = useGetDndSensor();
  useEffect(() => {
    setContentClass('vh-100');

    return () => {
      setContentClass('');
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-10">
        <h2 className="mb-8">Deals</h2>
        <Row className="g-4 justify-between">
          <Col xs="auto">
            <Button
              variant="primary"
              className="me-6"
              startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
              onClick={() => setOpenAddDealModal(true)}
            >
              Add Deal
            </Button>
            <Button
              variant="link"
              className="text-default px-0"
              startIcon={
                <FontAwesomeIcon icon={faFileExport} className="text-md me-2" />
              }
            >
              Export
            </Button>
          </Col>
          <Col xs="auto">
            <div className="flex">
              <SearchBox placeholder="Search by name" className="me-2" />
              <Form.Select className="w-auto">
                <option value="deals">Deals</option>
              </Form.Select>
              <Button
                variant="phoenix-secondary"
                className="px-4 ms-2"
                onClick={() => setOpenFilterDealModal(true)}
              >
                <FontAwesomeIcon
                  icon={faFilter}
                  transform="down-3"
                  className="text-primary"
                />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 flex-1 flex gap-6 scrollbar">
          {dealColumns.map(col => (
            <DealColumn
              column={col}
              handleOpenAddModal={() => setOpenAddDealModal(true)}
              key={col.id}
            />
          ))}
          <div className="deals-column flex-center shrink-0">
            <h3 className="mb-6">Add new stage</h3>
            <Button
              variant="primary"
              size="sm"
              startIcon={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => setOpenAddStageModal(true)}
            >
              New Stage
            </Button>
          </div>
        </div>
        <DragOverlay>
          {activeColumnId && activeDeal && (
            <DealCard
              deal={activeDeal}
              columnId={activeColumnId}
              cursor={true}
            />
          )}
        </DragOverlay>
      </DndContext>

      <AddDealModal
        show={openAddDealModal}
        handleClose={() => setOpenAddDealModal(false)}
      />
      <FilterDealsModal
        show={openFilterDealModal}
        handleClose={() => setOpenFilterDealModal(false)}
      />
      <DealsAddStageModal
        show={openAddStageModal}
        handleClose={() => setOpenAddStageModal(false)}
      />
    </div>
  );
};

export default index;
