import { attachments, todoList } from 'data/project-management/todoListData';
import { Col, Dialog, Row, cn } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from 'data/project-management/projects';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { comments } from 'data/project-management/comments';
import TodoListItem from '../todo-list/TodoListItem';
import FileListItem from '../todo-list/FileListItem';
import CoverImage from './CoverImage';
import ActionSection from './ActionSection';
import CommentForm from 'components/common/CommentForm';
import Comment from 'components/common/Comment';
import EditableDetailsField from 'components/common/EditableDetailsField';
import useProjectProgress from '../useProjectProgress';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProjectModalLabels from './ProjectModalLabels';
import ProjectModalProgress from './ProjectModalProgress';
import TodoSearchBar from './TodoSearchBar';

interface BoardViewModalProps {
  handleClose: () => void;
  project: Project;
  show: boolean;
}

/** `+ProjectsBoardViewModal` in project-management/ProjectDetailsModal.pug */
const BoardViewModal = ({
  handleClose,
  show,
  project
}: BoardViewModalProps) => {
  const { progress, bgClassName, variant } = useProjectProgress(project);
  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        size="xl"
        className="overflow-hidden"
        aria-describedby={undefined}
      >
        <Dialog.Title className="sr-only">{project.name}</Dialog.Title>
        <Dialog.Header className="relative p-0">
          <CoverImage
            handleClose={handleClose}
            imgClassName="min-h-37.5 max-h-70"
          />
        </Dialog.Header>
        <Dialog.Body className="p-0">
          <ActionSection />
          <Row className="g-0">
            <Col xs={12} xl={5} className="border-e">
              <div className="px-8 lg:px-10 py-6">
                <h3 className="font-extrabold leading-sm mb-8">
                  {project.name}
                </h3>
                <ProjectModalProgress
                  progress={progress}
                  barClassName={variant}
                  trackClassName={bgClassName}
                  className="mb-8"
                />
                <div className="mb-6">
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
                <EditableDetailsField className="mb-4">
                  The female circus horse-rider is a recurring subject in
                  Chagall’s work. In 1926 the art dealer Ambroise Vollard
                  invited Chagall to make a project based on the circus. They
                  visited Paris’s historic Cirque d’Hiver Bouglione together;
                  Vollard lent Chagall his private box seats. Chagall completed
                  19 gouaches
                </EditableDetailsField>
              </div>
              <div className="bg-subtle px-8 lg:px-10 py-6">
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
                <div className="mt-6">
                  <CommentForm />
                </div>
              </div>
            </Col>

            <Col xs={12} xl={7}>
              <div className="px-8 lg:px-10 py-6">
                <div className="mb-12">
                  <h4 className="mb-6">
                    To do list{' '}
                    <span className="text-subtle font-normal text-xl">
                      (23)
                    </span>
                  </h4>
                  <TodoSearchBar className="mb-4" />
                  {todoList.slice(0, 6).map((todo, index) => (
                    <TodoListItem
                      key={todo.task}
                      todo={todo}
                      className={cn('py-6', {
                        'border-t': index === 0
                      })}
                      fullLayoutBreakpoints={['lg']}
                    />
                  ))}
                  <a href="#!" className="font-bold text-md mt-6">
                    <FontAwesomeIcon icon={faPlus} className="me-1" />
                    Add new task
                  </a>
                </div>

                <h4 className="mb-4">Files</h4>
                <div className="mb-4">
                  {attachments.map((attachment, index) => (
                    <FileListItem
                      key={attachment.name}
                      attachment={attachment}
                      className={cn({
                        'border-t border-subtle': index === 0
                      })}
                    />
                  ))}
                </div>
                <label
                  className="btn btn-link p-0"
                  htmlFor="boardViewModalFile"
                >
                  <FontAwesomeIcon icon={faPlus} className="me-1" />
                  Add file(s)
                </label>
                <input className="hidden" id="boardViewModalFile" type="file" />
              </div>
            </Col>
          </Row>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  );
};

export default BoardViewModal;
