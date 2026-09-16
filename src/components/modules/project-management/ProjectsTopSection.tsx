import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import SearchBox from 'components/common/SearchBox';
import ToggleViewButton from 'components/common/ToggleViewButton';
import FourGrid from 'components/icons/FourGrid';
import NineGrid from 'components/icons/NineGrid';
import { Project } from 'data/project-management/projects';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { ChangeEvent, useMemo } from 'react';

interface ProjectsTopSectionInterface {
  activeView: 'list' | 'board' | 'card';
}

/** Filter tabs + search + `+ViewButtons` row (project-management/Common.pug) */
const ProjectsTopSection = ({ activeView }: ProjectsTopSectionInterface) => {
  const { setGlobalFilter, getPrePaginationRowModel, getColumn } =
    useAdvanceTableContext<Project>();

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterItemClick('status', 'all'),
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        onClick: () => handleFilterItemClick('status', 'ongoing'),
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        onClick: () => handleFilterItemClick('status', 'cancelled'),
        count: getDataCount('cancelled')
      },
      {
        label: 'Finished',
        value: 'completed',
        onClick: () => handleFilterItemClick('status', 'completed'),
        count: getDataCount('completed')
      },
      {
        label: 'Postponed',
        value: 'critical',
        onClick: () => handleFilterItemClick('status', 'critical'),
        count: getDataCount('critical')
      }
    ];
  }, [getPrePaginationRowModel]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <Row className="g-4 justify-between items-end mb-6">
      <Col xs={12} sm="auto">
        <FilterTab
          className="-mx-2! project-tab"
          navLinkClassName="px-2 py-1"
          tabItems={tabItems}
        />
      </Col>
      <Col xs={12} sm="auto">
        <div className="flex items-center">
          <SearchBox
            onChange={handleSearchInputChange}
            placeholder="Search projects"
            className="me-4"
          />
          <ToggleViewButton
            tooltip="List view"
            active={activeView === 'list'}
            to="/apps/project-management/project-list-view"
            className="me-1"
          >
            <FontAwesomeIcon icon={faList} className="text-sm" />
          </ToggleViewButton>
          <ToggleViewButton
            tooltip="Board view"
            active={activeView === 'board'}
            to="/apps/project-management/project-board-view"
            className="me-1"
          >
            <NineGrid />
          </ToggleViewButton>
          <ToggleViewButton
            tooltip="Card view"
            active={activeView === 'card'}
            to="/apps/project-management/project-card-view"
          >
            <FourGrid />
          </ToggleViewButton>
        </div>
      </Col>
    </Row>
  );
};

export default ProjectsTopSection;
