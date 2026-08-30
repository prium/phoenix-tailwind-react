import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import TodoItemDetailsOffcanvas from 'components/modules/project-management/todo-list/TodoItemDetailsOffcanvas';
import TodoListItem from 'components/modules/project-management/todo-list/TodoListItem';
import { ToDoItem, todoList } from 'data/project-management/todoListData';
import { useEffect, useState } from 'react';

const ProjectTodoList = () => {
  const [selectedItem, setSelectedItem] = useState<ToDoItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedItem]);

  return (
    <div className="mb-16">
      <h2 className="mb-6">
        Todo list<span className="text-subtle font-normal">(23)</span>
      </h2>
      <div className="flex items-center flex-wrap gap-x-8 gap-y-4 mb-4">
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
      <div className="todolist-container -ms-1 ps-1 scrollbar">
        {todoList.map((todo, index) => (
          <TodoListItem
            key={todo.task}
            todo={todo}
            className={classNames({
              'border-t': index === 0
            })}
            fullLayoutBreakpoints={['md']}
            onClick={item => setSelectedItem(item)}
          />
        ))}
      </div>
      <Button
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        variant="link"
        className="no-underline p-0 mt-6"
      >
        Add new task
      </Button>
      <TodoItemDetailsOffcanvas
        handleClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </div>
  );
};

export default ProjectTodoList;
