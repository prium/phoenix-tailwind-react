import { attachments, todoList } from 'data/project-management/todoListData';
import { Col, Modal, ProgressBar, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from 'data/project-management/projects';
import AvatarDropdown from 'components/common/AvatarDropdown';
import Badge from 'components/base/Badge';
import { Link } from 'react-router';
import { comments } from 'data/project-management/comments';
import SearchBox from 'components/common/SearchBox';
import TodoListItem from '../todo-list/TodoListItem';
import classNames from 'classnames';
import FileListItem from '../todo-list/FileListItem';
import CommentForm from 'components/common/CommentForm';
import CoverImage from '../board-view/CoverImage';
import DatePicker from 'components/base/DatePicker';
import { actionItems, addToCardItems } from 'data/project-management/actions';
import Comment from 'components/common/Comment';
import EditableDetailsField from 'components/common/EditableDetailsField';
import useProjectProgress from '../useProjectProgress';
import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';

interface BoardViewModalModalProps {
  handleClose: () => void;
  project: Project;
  show: boolean;
}

const CardViewModal = ({
  handleClose,
  show,
  project
}: BoardViewModalModalProps) => {
  const { progress, bgClassName, variant } = useProjectProgress(project);
  return (
    <Modal show={show} onHide={handleClose} size="lg" className="p-0">
      <Modal.Header className="relative p-0 overflow-hidden">
        <CoverImage handleClose={handleClose} />
      </Modal.Header>
      <Modal.Body className="p-8 md:px-10 md:pb-10">
        {/* <ActionSection /> */}
        <Row className="g-8">
          <Col xs={12} xl={9}>
            <div className="mb-6">
              <h3 className="font-black leading-sm">{project.name}</h3>
              <p className="text-highlight font-semibold mb-0">
                In list
                <Link className="ms-1 font-bold" to="#!">
                  Review
                </Link>
              </p>
            </div>

            <div className="flex items-center mb-6">
              <p className="text-highlight fw-700 mb-0 me-2">
                {progress}%
              </p>

              <ProgressBar
                now={progress}
                className={classNames('flex-1', bgClassName)}
                variant={variant}
              />
            </div>
            <h6 className="text-muted mb-2">Due date</h6>
            <div className="mb-4">
              <div className="w-1/2">
                <DatePicker
                  placeholder="Set the due date"
                  options={{
                    defaultDate: 'May 1, 2023'
                  }}
                />
              </div>
            </div>

            <div className="mb-4">
              <h6 className="text-muted mb-2">Assigness</h6>
              <div className="flex gap-1">
                {project.assigness.slice(0, 5).map(member => (
                  <AvatarDropdown user={member} size="m" key={member.id} />
                ))}
                <Button
                  variant="phoenix-secondary"
                  className="btn-circle"
                  size="sm"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </div>
            </div>

            <div className="mb-8">
              <h6 className="text-muted mb-2">Labels</h6>
              <div className="flex gap-2 items-center">
                <Badge variant="phoenix" bg="info" className="text-sm">
                  Info
                </Badge>
                <Badge variant="phoenix" bg="warning" className="text-sm">
                  Urgent
                </Badge>
                <Badge variant="phoenix" bg="success" className="text-sm">
                  Done
                </Badge>
                <Button
                  variant="link"
                  className="p-0 text-md text-default font-black no-underline leading-none"
                  startIcon={<FontAwesomeIcon icon={faPlus} />}
                >
                  Add another
                </Button>
              </div>
            </div>

            <EditableDetailsField className="mb-10">
              The female circus horse-rider is a recurring subject in Chagall’s
              work. In 1926 the art dealer Ambroise Vollard invited Chagall to
              make a project based on the circus. They visited Paris’s historic
              Cirque d’Hiver Bouglione together; Vollard lent Chagall his
              private box seats. Chagall completed 19 gouaches
            </EditableDetailsField>

            <div className="bg-subtle rounded-md px-6 mb-4">
              <div className="mb-1">
                {comments.map((comment, index) => (
                  <Comment
                    comment={comment}
                    className={
                      index !== comments.length - 1
                        ? 'border-b border-subtle'
                        : undefined
                    }
                    key={comment.id}
                  />
                ))}
              </div>
            </div>
            <div className="pb-4 border-b border-subtle mb-10">
              <CommentForm />
            </div>

            <div className="mb-12">
              <h4 className="mb-6">
                To do list{' '}
                <span className="text-subtle font-normal text-xl">(23)</span>
              </h4>
              <div className="flex justify-between items-center flex-wrap gap-x-8 gap-y-4 mb-4">
                <SearchBox
                  placeholder="Search tasks"
                  style={{ maxWidth: '30rem' }}
                />
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
                    startIcon={
                      <FontAwesomeIcon icon={faSort} className="text-sm" />
                    }
                  >
                    Sorting
                  </Button>
                </div>
              </div>
              <div className="mb-6">
                {todoList.map((todo, index) => (
                  <TodoListItem
                    key={todo.task}
                    todo={todo}
                    className={classNames('py-6', {
                      'border-t border-subtle': index === 0
                    })}
                    // fullLayoutBreakpoints={['lg']}
                    // onClick={setSelectedItem}
                  />
                ))}
              </div>
              <Button
                startIcon={<FontAwesomeIcon icon={faPlus} />}
                variant="link"
                className="no-underline p-0"
              >
                Add new task
              </Button>
            </div>

            <div>
              <h4 className="mb-4">Files</h4>
              <div className="mb-4">
                {attachments.map((attachment, index) => (
                  <FileListItem
                    key={attachment.name}
                    attachment={attachment}
                    className={classNames({
                      'border-t': index === 0
                    })}
                  />
                ))}
              </div>
              <div className="">
                <Button
                  variant="link"
                  className="no-underline p-0"
                  startIcon={<FontAwesomeIcon icon={faPlus} className="me-1" />}
                >
                  Add file(s)
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={12} xl={3}>
            <h5 className="text-muted mb-4">Add to card</h5>
            <div className="mb-10 flex flex-col gap-2">
              {addToCardItems.map(item => (
                <Button
                  key={item.label}
                  variant="subtle-secondary"
                  startIcon={
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                  }
                  className="w-full text-start"
                  size="sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <h5 className="text-muted mb-4">Actions</h5>
            <div className="flex flex-col gap-2">
              {actionItems.map(item => (
                <Button
                  variant="subtle-secondary"
                  startIcon={
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                  }
                  className="w-full text-start"
                  size="sm"
                  key={item.label}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CardViewModal;
