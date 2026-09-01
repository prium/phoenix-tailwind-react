import {
  faCircle,
  faEdit,
  faPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, cn } from '@hummingbirdui/react';
import AvatarDropdown from 'components/common/AvatarDropdown';
import {
  KanbanBoardItem,
  KanbanBoardTask,
  kanbanActions,
  kanbanActivities,
  kanbanAttachments,
  kanbanHeaderUsers
} from 'data/kanban';
import modalBg from 'assets/img/kanban/modal-bg.jpg';
import KanbanAttachment from './KanbanAttachment';
import KanbanEditTaskModal from './KanbanEditTaskModal';
import { useState } from 'react';

interface KanbanTaskDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  task: KanbanBoardTask;
  list: KanbanBoardItem;
}

/** literal priority circle classes (gold static shows `text-warning` for High) */
const priorityClass: Record<KanbanBoardTask['priority'], string> = {
  High: 'text-warning',
  Medium: 'text-success',
  Low: 'text-info'
};

/** `+KanbanItemDetailsModal` in mixins/kanban/kanban/KanbanModal.pug */
const KanbanTaskDetailsModal = ({
  show,
  handleClose,
  task,
  list
}: KanbanTaskDetailsModalProps) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const assignedUsers = kanbanHeaderUsers.slice(0, 3);

  return (
    <>
      <Dialog open={show} onOpenChange={open => !open && handleClose()}>
        <Dialog.Content
          centered
          fullscreen="md-down"
          dialogClassName="modal-md"
          className="overflow-hidden"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">Task details</Dialog.Title>
          <div className="modal-body p-0">
            <div className="relative h-50 w-full">
              <div
                className="bg-holder"
                style={{
                  backgroundImage: `url(${task.coverImage ?? modalBg})`
                }}
              />
            </div>
            <div className="row gy-6 py-0 gx-0">
              <div className="lg:col-8 col-12">
                <div className="row mt-0 gy-6 pb-4 gx-0 px-4">
                  <div className="col-4 sm:col-3">
                    <h6 className="text-subtle font-black leading-sm mt-1">
                      TITLE
                    </h6>
                  </div>
                  <div className="col-8 sm:col-9">
                    <h4 className="mb-0 text-emphasis leading-sm">
                      {task.title}
                    </h4>
                  </div>

                  <div className="col-4 sm:col-3">
                    <h6 className="text-subtle font-black leading-sm mt-1">
                      DESCRIPTION
                    </h6>
                  </div>
                  <div className="col-8 sm:col-9">
                    <p className="text-md mb-0">
                      {task.desctiption ??
                        'Reproduced below for those interested" is a phrase used to provide additional content or details for individuals who have expressed interest in a particular topic. It signals that what follows is optional and caters specifically to those who want to delve deeper into the subject matter.'}
                    </p>
                  </div>

                  <div className="col-4 sm:col-3">
                    <h6 className="text-subtle font-black leading-sm mt-1">
                      BOARD
                    </h6>
                  </div>
                  <div className="col-8 sm:col-9">
                    <p className="mb-0 text-emphasis font-semibold">Phoenix</p>
                  </div>

                  <div className="col-4 sm:col-3">
                    <h6 className="text-subtle font-black leading-sm mt-1">
                      COLUMN
                    </h6>
                  </div>
                  <div className="col-8 sm:col-9">
                    <p
                      className={cn(
                        "mb-0 text-emphasis font-semibold inline-block relative after:absolute after:content-[''] after:top-full after:left-0 after:h-1 after:w-full after:rounded-md",
                        list.underlineClass
                      )}
                    >
                      {list.title}
                    </p>
                  </div>

                  <div className="col-4 sm:col-3">
                    <h6 className="text-subtle font-black leading-sm mt-1">
                      ASSAIGNED TO
                    </h6>
                  </div>
                  <div className="col-8 sm:col-9">
                    <div className="flex items-center">
                      {assignedUsers.map(user => (
                        <AvatarDropdown
                          user={user}
                          size="s"
                          className="me-1"
                          key={user.id}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="col-4 sm:col-3">
                    <h6 className="text-subtle font-black leading-sm mt-1">
                      PRIORITY
                    </h6>
                  </div>
                  <div className="col-8 sm:col-9">
                    <p className="mb-0 text-emphasis font-semibold">
                      <FontAwesomeIcon
                        icon={faCircle}
                        transform="shrink-6 down-1"
                        className={priorityClass[task.priority]}
                      />
                      {task.priority}
                    </p>
                  </div>

                  <div className="col-4 sm:col-3">
                    <h6 className="text-subtle font-black leading-sm mt-1">
                      CATEGORY
                    </h6>
                  </div>
                  <div className="col-8 sm:col-9">
                    <span
                      className={cn(task.status.badgeClass, 'badge text-sm')}
                    >
                      <span>{task.status.label}</span>
                      <FontAwesomeIcon
                        icon={task.status.icon}
                        className="size-[7.8px] ms-1"
                      />
                    </span>
                  </div>

                  <div className="col-4 sm:col-3">
                    <h6 className="text-subtle font-black leading-sm mt-1">
                      ATTACHMENTS
                    </h6>
                  </div>
                  <div className="col-8 sm:col-9">
                    {kanbanAttachments.map((attachment, index) => (
                      <KanbanAttachment
                        attachment={attachment}
                        className={cn({ 'mt-4': index > 0 })}
                        key={attachment.name}
                      />
                    ))}
                    <button className="btn btn-link ps-0" type="button">
                      <FontAwesomeIcon
                        icon={faPlus}
                        transform="shrink-3"
                        className="me-2"
                      />
                      Add an Attachment
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-4 lg:border-s">
                <div className="scrollbar max-h-166.75">
                  <div className="px-4">
                    <h5 className="mb-4 mt-6">Actions</h5>
                    <ul className="nav flex-col sm:flex-row lg:flex-col list-none">
                      {kanbanActions.map(action => (
                        <li
                          className="kanban-action-item leading-sm nav-item me-2"
                          key={action.label}
                        >
                          <a
                            href="#!"
                            className="nav-link text-emphasis font-semibold text-md stretched-link"
                          >
                            <FontAwesomeIcon
                              icon={action.icon}
                              className="me-2"
                            />
                            {action.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <h5 className="mt-10">Activities</h5>
                    {kanbanActivities.map((activity, index) => (
                      <div
                        className={cn('flex', {
                          'border-bottom': index !== kanbanActivities.length - 1
                        })}
                        key={activity.id}
                      >
                        <div className={cn('pt-4', activity.iconColorClass)}>
                          <FontAwesomeIcon
                            icon={activity.icon}
                            transform="shrink-4"
                            className="border border-subtle rounded-full p-1"
                          />
                        </div>
                        <div className="activity-item ps-2 py-4">
                          <p
                            className="mb-1 text-md"
                            dangerouslySetInnerHTML={{
                              __html: activity.task
                            }}
                          />
                          <div className="flex">
                            <p className="mb-0 text-md me-4">
                              <FontAwesomeIcon
                                icon={faClock}
                                className="me-1"
                              />
                              {activity.time}
                            </p>
                            <p className="mb-0 text-md">{activity.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-between">
            <button className="btn p-1" type="button" onClick={handleClose}>
              <FontAwesomeIcon
                icon={faTimes}
                transform="up-1"
                className="text-sm me-1"
              />
              Close
            </button>
            <button
              className="btn btn-phoenix-primary px-10"
              type="button"
              onClick={() => {
                handleClose();
                setOpenEditModal(true);
              }}
            >
              Edit
              <FontAwesomeIcon
                icon={faEdit}
                transform="shrink-3"
                className="ms-2"
              />
            </button>
          </div>
        </Dialog.Content>
      </Dialog>
      <KanbanEditTaskModal
        show={openEditModal}
        handleClose={() => setOpenEditModal(false)}
      />
    </>
  );
};

export default KanbanTaskDetailsModal;
