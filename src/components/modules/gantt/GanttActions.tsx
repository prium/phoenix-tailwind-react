import { Row, Col, Button, FormCheck, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilter, faGear } from '@fortawesome/free-solid-svg-icons';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { gantt, Task } from 'dhtmlx-gantt';
import GanttFilterModal from './GanttFilterModal';
import GanttOptionsModal from './GanttOptionsModal';
import SearchBox from 'components/common/SearchBox';
import GanttAddTaskModal from './GanttAddTaskModal';

const GanttChartActions = ({
  setCurrentView
}: {
  setCurrentView: Dispatch<SetStateAction<string>>;
}) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const [filterValue, setFilterValue] = useState<string>('');

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value || '');
  };
  const filterLogic = (task: Task, match = false): boolean => {
    gantt.eachTask(child => {
      if (filterLogic(child)) {
        match = true;
      }
    }, task.id);

    // Check if current task text matches filter
    if (
      filterValue &&
      task.text?.toLowerCase().includes(filterValue.toLowerCase())
    ) {
      match = true;
    }
    return match;
  };

  useEffect(() => {
    const eventId = gantt.attachEvent('onBeforeTaskDisplay', (id, task) => {
      if (!filterValue) {
        return true;
      }
      return filterLogic(task);
    });

    gantt.render();
    return () => {
      gantt.detachEvent(eventId);
    };
  }, [filterValue]);

  return (
    <>
      <div className="gantt-header p-6 lg:px-10 sm:py-4">
        <Row className="gx-0 gy-4 justify-between">
          <Col md="auto" className="flex items-center">
            <h3 className="mb-0">Gantt Chart</h3>
            <Button
              className="btn-sm ms-auto md:ms-4"
              variant="primary"
              onClick={() => setShowAddTask(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="ms-2 md:hidden xl:inline">Add Task</span>
            </Button>
          </Col>

          <Col md="auto">
            <Row className="items-center gy-4 gx-0">
              <Col sm="auto">
                <SearchBox
                  placeholder="Search..."
                  className="gantt-search-box"
                  inputClassName='form-control-sm'
                  onChange={handleSearchInputChange}
                />
              </Col>

              <Col className="flex items-center sm:ms-auto" xs="auto">
                <div
                  className="border-s hidden md:inline md:ms-4"
                  style={{ height: '20px', width: '2px' }}
                />
                <FormCheck
                  type="switch"
                  id="ganttZoomToFit"
                  className="mb-0 sm:ms-4"
                >
                  <FormCheck.Input
                    onChange={e => {
                      const view = e.target.checked ? 'months' : 'days';
                      setCurrentView(view);
                    }}
                    defaultChecked
                  />
                  <FormCheck.Label className="whitespace-nowrap">
                    Auto Fit
                  </FormCheck.Label>
                </FormCheck>

                <FormSelect
                  size="sm"
                  className="ms-4"
                  defaultValue="months"
                  onChange={e => setCurrentView(e.target.value)}
                >
                  <option value="days">Day</option>
                  <option value="weeks">Weekly</option>
                  <option value="months">Monthly</option>
                  <option value="years">Year</option>
                </FormSelect>
              </Col>

              <Col
                className="flex items-center ms-auto sm:ms-4"
                xs="auto"
              >
                <div
                  className="border-s hidden sm:inline me-4"
                  style={{ height: '20px', width: '2px' }}
                />
                <Button
                  variant="link"
                  size="sm"
                  className="text-default px-0 whitespace-nowrap -ms-1"
                  onClick={() => setShowFilter(true)}
                >
                  <FontAwesomeIcon icon={faFilter} className="text-md" />
                  <span className="hidden xl:inline ms-2">Filter</span>
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-default px-0 whitespace-nowrap ms-4"
                  onClick={() => setShowOptions(true)}
                >
                  <FontAwesomeIcon icon={faGear} className="text-md" />
                  <span className="hidden xl:inline ms-2">Options</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <GanttAddTaskModal show={showAddTask} setShow={setShowAddTask} />
      <GanttFilterModal show={showFilter} setShow={setShowFilter} />
      <GanttOptionsModal show={showOptions} setShow={setShowOptions} />
    </>
  );
};

export default GanttChartActions;
