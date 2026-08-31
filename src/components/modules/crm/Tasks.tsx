import TodoListItem from '../project-management/todo-list/TodoListItem';
import classNames from 'classnames';
import { leadTasks } from 'data/crm/leadsData';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBox from 'components/common/SearchBox';
import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';

const Tasks = () => {
  return (
    <div>
      <h2 className="mb-6"> Tasks</h2>
      <div className="flex items-center flex-wrap gap-x-4 gap-y-4 mb-4">
        <SearchBox placeholder="Search tasks" style={{ maxWidth: '30rem' }} />
        <div>
          <Button
            variant="link"
            className="p-0 text-md text-subtle no-underline me-4"
            startIcon={
              <FontAwesomeIcon icon={faFilter} className="text-sm me-1" />
            }
          >
            23 tasks
          </Button>
          <Button
            variant="link"
            className="p-0 text-md text-primary no-underline"
            startIcon={<FontAwesomeIcon icon={faSort} className="text-sm" />}
          >
            Sorting
          </Button>
        </div>
      </div>
      {leadTasks.map((todo, index) => (
        <TodoListItem
          key={todo.task}
          todo={todo}
          className={classNames('border-subtle', {
            'border-t': index === 0,
            'border-b-0': index === leadTasks.length - 1
          })}
          fullLayoutBreakpoints={['md', 'xxl']}
          halfLayoutBreakpoints={['xl']}
          // onClick={setSelectedItem}
        />
      ))}{' '}
      <Button
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        variant="link"
        className="no-underline p-0"
      >
        Add new task
      </Button>
    </div>
  );
};
export default Tasks;
