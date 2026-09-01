import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilter, faGear } from '@fortawesome/free-solid-svg-icons';
import { Select } from '@hummingbirdui/react';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { gantt, Task } from 'dhtmlx-gantt';
import Button from 'components/base/Button';
import GanttFilterModal from './GanttFilterModal';
import GanttOptionsModal from './GanttOptionsModal';
import GanttAddTaskModal from './GanttAddTaskModal';
import GanttSearchBox from './GanttSearchBox';

/** `+GanttChartActions` (`.gantt-header`) in mixins/gantt-chart/GanttChart.pug */
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
    const eventId = gantt.attachEvent('onBeforeTaskDisplay', (_id, task) => {
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
        <div className="row gx-0 gy-4 justify-between">
          <div className="md:col-auto flex items-center">
            <h3 className="mb-0">Gantt Chart </h3>
            <Button
              variant="primary"
              size="sm"
              className="ms-auto md:ms-4"
              data-gantt-add-task
              onClick={() => setShowAddTask(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="ms-2 md:hidden xl:inline">Add Task</span>
            </Button>
          </div>

          <div className="md:col-auto">
            <div className="row items-center gy-4 gx-0">
              <div className="sm:col-auto">
                <GanttSearchBox
                  value={filterValue}
                  onChange={handleSearchInputChange}
                  onClear={() => setFilterValue('')}
                />
              </div>

              <div className="col-auto flex items-center sm:ms-auto">
                <div className="h-5 w-0.5 border-s hidden md:inline md:ms-4" />
                <div className="form-check form-switch mb-0 sm:ms-4">
                  <input
                    className="form-check-input"
                    data-gantt-zoom="fit"
                    id="ganttZoomToFit"
                    defaultChecked
                    type="checkbox"
                    onChange={e =>
                      setCurrentView(e.target.checked ? 'months' : 'days')
                    }
                  />
                  <label
                    className="form-check-label text-nowrap"
                    htmlFor="ganttZoomToFit"
                  >
                    Auto Fit
                  </label>
                </div>
                <Select
                  size="sm"
                  className="ms-4"
                  aria-label="Default select example"
                  data-gantt-view
                  defaultValue="months"
                  onChange={e => setCurrentView(e.target.value)}
                >
                  <option value="days">Day</option>
                  <option value="weeks">Weekly</option>
                  <option value="months">Monthly</option>
                  <option value="years">Year</option>
                </Select>
              </div>

              <div className="col-auto flex items-center ms-auto sm:ms-4">
                <div className="h-5 w-0.5 border-s hidden sm:inline me-4" />
                <Button
                  variant="link"
                  size="sm"
                  className="text-default px-0 text-nowrap -ms-1"
                  onClick={() => setShowFilter(true)}
                >
                  <FontAwesomeIcon icon={faFilter} className="text-md" />
                  <span className="hidden xl:inline ms-2">Filter</span>
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-default px-0 text-nowrap ms-4"
                  onClick={() => setShowOptions(true)}
                >
                  <FontAwesomeIcon icon={faGear} className="text-md" />
                  <span className="hidden xl:inline ms-2">Options </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GanttAddTaskModal show={showAddTask} setShow={setShowAddTask} />
      <GanttFilterModal show={showFilter} setShow={setShowFilter} />
      <GanttOptionsModal show={showOptions} setShow={setShowOptions} />
    </>
  );
};

export default GanttChartActions;
