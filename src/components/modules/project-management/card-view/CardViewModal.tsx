import { attachments, todoList } from 'data/project-management/todoListData';
import { Col, Dialog, Row, cn } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from 'data/project-management/projects';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { Link } from 'react-router';
import { comments } from 'data/project-management/comments';
import TodoListItem from '../todo-list/TodoListItem';
import FileListItem from '../todo-list/FileListItem';
import CommentForm from 'components/common/CommentForm';
import CoverImage from '../board-view/CoverImage';
import DatePicker from 'components/base/DatePicker';
import { actionItems, addToCardItems } from 'data/project-management/actions';
import Comment from 'components/common/Comment';
import EditableDetailsField from 'components/common/EditableDetailsField';
import useProjectProgress from '../useProjectProgress';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProjectModalLabels from '../board-view/ProjectModalLabels';
import ProjectModalProgress from '../board-view/ProjectModalProgress';
import TodoSearchBar from '../board-view/TodoSearchBar';

interface CardViewModalProps {
  handleClose: () => void;
  project: Project;
  show: boolean;
}

/** `+ProjectsCardViewModal` in project-management/ProjectDetailsModal.pug */
const CardViewModal = ({ handleClose, show, project }: CardViewModalProps) => {
  const { progress, bgClassName, variant } = useProjectProgress(project);
  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        size="md"
        dialogClassName="modal-md"
        className="overflow-hidden"
        aria-describedby={undefined}
      >
        <Dialog.Title className="sr-only">{project.name}</Dialog.Title>
        <Dialog.Header className="relative p-0">
          <CoverImage handleClose={handleClose} />
        </Dialog.Header>
        <Dialog.Body className="p-8 md:px-10">
          <Row className="g-8">
            <Col xs={12} md={9}>
              <div className="mb-6">
                <h3 className="font-extrabold leading-sm">{project.name}</h3>
                <p className="text-highlight font-semibold mb-0">
                  In list
                  <Link className="ms-1 font-bold" to="#!">
                    Review
                  </Link>
                </p>
              </div>
              <ProjectModalProgress
                progress={progress}
                barClassName={variant}
                trackClassName={bgClassName}
                className="mb-6"
              />
              <h6 className="text-muted mb-2">Due date</h6>
              <div className="w-1/2 mb-4">
                <DatePicker
                  placeholder="Set the due date"
                  options={{
                    defaultDate: 'Mar 1, 2022'
                  }}
                />
              </div>

              <div className="mb-4">
                <h6 className="text-muted mb-2">Assignees</h6>
                <div className="flex">
                  {project.assigness.slice(0, 4).map(member => (
                    <AvatarDropdown
                      user={member}
                      size="m"
                      className="me-1"
                      key={member.id}
                    />
                  ))}
                  <button
                    type="button"
                    className="btn btn-sm btn-phoenix-secondary btn-circle"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <ProjectModalLabels />
              </div>

              <EditableDetailsField className="mb-10">
                The female circus horse-rider is a recurring subject in
                Chagall’s work. In 1926 the art dealer Ambroise Vollard invited
                Chagall to make a project based on the circus. They visited
                Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent
                Chagall his private box seats. Chagall completed 19 gouaches
              </EditableDetailsField>

              <div className="bg-subtle rounded-md p-6 mb-4">
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
              <div className="pb-4 border-b border-subtle mb-10">
                <CommentForm />
              </div>

              <div className="mb-10">
                <div className="mb-12">
                  <h4 className="mb-6">
                    To do list{' '}
                    <span className="text-subtle font-normal text-xl">
                      (23)
                    </span>
                  </h4>
                  <TodoSearchBar className="mb-4" />
                  <div className="mb-4">
                    {todoList.map((todo, index) => (
                      <TodoListItem
                        key={todo.task}
                        todo={todo}
                        className={cn('py-4', {
                          'border-t border-subtle': index === 0
                        })}
                      />
                    ))}
                  </div>
                  <Link to="#!" className="font-bold text-md mt-6">
                    <FontAwesomeIcon icon={faPlus} className="me-1" />
                    Add new task
                  </Link>
                </div>
              </div>

              <h4 className="mb-4">Files</h4>
              <div className="mb-4">
                {attachments.map((attachment, index) => (
                  <FileListItem
                    key={attachment.name}
                    attachment={attachment}
                    className={cn({ 'border-t': index === 0 })}
                  />
                ))}
              </div>
              <label className="btn btn-link p-0" htmlFor="cardViewModalFile">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                Add file(s)
              </label>
              <input className="hidden" id="cardViewModalFile" type="file" />
            </Col>

            <Col xs={12} md={3}>
              <h5 className="text-muted mb-4">Add to card</h5>
              <div className="mb-10">
                {addToCardItems.map(item => (
                  <button
                    type="button"
                    key={item.label}
                    className="btn btn-sm btn-subtle-secondary rounded-lg mb-2 flex items-center justify-start w-full"
                  >
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                    {item.label}
                  </button>
                ))}
              </div>
              <h5 className="text-muted mb-4">Actions</h5>
              <div className="mb-10">
                {actionItems.map(item => (
                  <button
                    type="button"
                    key={item.label}
                    className="btn btn-sm btn-subtle-secondary rounded-lg mb-2 flex items-center justify-start w-full"
                  >
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                    {item.label}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  );
};

export default CardViewModal;
