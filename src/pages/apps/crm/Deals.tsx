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
import { Fragment, useEffect } from 'react';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import DealColumn from 'components/modules/crm/deals/DealColumn';
import AddDealModal from 'components/modules/crm/deals/AddDealModal';
import FilterDealsModal from 'components/modals/FilterDealsModal';
import DealsAddStageModal from 'components/modals/DealsAddStageModal';
import CrmDealsProvider, { useDealsContext } from 'providers/CrmDealsProvider';
import { DndContext, closestCorners, DragOverlay } from '@dnd-kit/core';
import DealCard from 'components/cards/DealCard';
import { useGetDndSensor } from 'hooks/useGetDndSensor';

const Deals = () => {
  return (
    <CrmDealsProvider data={dealColumnsData}>
      <DealsContent />
    </CrmDealsProvider>
  );
};

/** apps/crm/deals.pug — the fixed `.content.kanban-deals-content` layout and
 *  the `.deals` board sizing live in assets/css/components/{crm,kanban}.css. */
const DealsContent = () => {
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
    setContentClass('kanban-deals-content');

    return () => {
      setContentClass('');
    };
  }, []);

  return (
    <>
      <PageBreadcrumb
        items={defaultBreadcrumbItems}
        className="crm-deals-breadcrumb"
      />
      <div>
        <div className="px-6 lg:px-10">
          <h2 className="mb-8">Deals</h2>
          <div className="xl:flex justify-between">
            <div className="mb-4">
              <Button
                variant="primary"
                className="me-6"
                startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
                onClick={() => setOpenAddDealModal(true)}
              >
                Add Deal
              </Button>{' '}
              <Button
                variant="link"
                className="text-default px-0"
                startIcon={
                  <FontAwesomeIcon
                    icon={faFileExport}
                    className="text-md me-2"
                  />
                }
              >
                Export
              </Button>
            </div>
            <div className="flex mb-6">
              <SearchBox placeholder="Search by name" />
              <select
                className="form-select w-auto mx-2"
                id="select-deals"
                defaultValue="Deals"
              >
                <option>Deals</option>
              </select>
              <Button
                variant="phoenix-secondary"
                className="px-4"
                onClick={() => setOpenFilterDealModal(true)}
              >
                <FontAwesomeIcon
                  icon={faFilter}
                  transform="down-3"
                  className="text-primary"
                />
              </Button>
            </div>
          </div>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <div className="px-6 lg:px-10 scrollbar">
            <div className="deals">
              {/* the `{' '}` text nodes matter: `.deals-col` is inline-block,
                  so the gold's inter-tag whitespace adds ~4px per gap */}
              {dealColumns.map(col => (
                <Fragment key={col.id}>
                  <DealColumn
                    column={col}
                    handleOpenAddModal={() => setOpenAddDealModal(true)}
                  />{' '}
                </Fragment>
              ))}
              <div className="deals-col relative">
                <div className="flex flex-center flex-col h-full">
                  <h3 className="mb-6">Add new stage</h3>
                  <Button
                    variant="primary"
                    size="sm"
                    startIcon={
                      <FontAwesomeIcon icon={faPlus} className="me-2" />
                    }
                    onClick={() => setOpenAddStageModal(true)}
                  >
                    New Stage
                  </Button>
                </div>
              </div>
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
      </div>

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
    </>
  );
};

export default Deals;
