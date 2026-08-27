import Badge from 'components/base/Badge';
import React, { useState } from 'react';
import { Project } from 'data/project-management/projects';
import { Card, ProgressBar } from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarDropdown from 'components/common/AvatarDropdown';
import Avatar from 'components/base/Avatar';
import classNames from 'classnames';
import CardViewModal from './CardViewModal';
import { currencyFormat } from 'helpers/utils';
import useProjectProgress from '../useProjectProgress';
import {
  faChevronRight,
  faCreditCard,
  faListCheck,
  faUser
} from '@fortawesome/free-solid-svg-icons';

const CardViewItem = ({ project }: { project: Project }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const { progress, bgClassName, variant } = useProjectProgress(project);

  return (
    <>
      <Card className="h-100 hover-actions-trigger">
        <Card.Body>
          <div className="flex align-items-center">
            <h4 className="mb-2 line-clamp-1 lh-sm flex-1 me-5">
              {project.name}
            </h4>
            <div className="hover-actions top-0 end-0 mt-4 me-4">
              <Button
                variant="primary"
                className="btn-icon flex-shrink-0"
                onClick={() => setOpenDetailsModal(true)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
          <Badge
            variant="phoenix"
            bg={project.status.type}
            className="text-sm mb-4"
          >
            {project.status.label}
          </Badge>
          <div className="flex align-items-center mb-2">
            <FontAwesomeIcon
              icon={faUser}
              className="me-2 text-subtle text-md fw-extra-bold"
            />
            <p className="font-bold mb-0 text-truncate lh-1">
              Client :{' '}
              <span className="font-semibold text-primary ms-1">
                {' '}
                Gusteau’s Restaurant
              </span>
            </p>
          </div>
          <div className="flex align-items-center mb-4">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="me-2 text-subtle text-md fw-extra-bold"
            />
            <p className="font-bold mb-0 text-truncate lh-1">
              Budget :{' '}
              <span className="text-emphasis ms-1">
                {currencyFormat(project.budget)}
              </span>
            </p>
          </div>
          <div className="flex justify-content-between text-subtle font-semibold">
            <p className="mb-2"> Progress</p>
            <p className="mb-2 text-emphasis">{progress}%</p>
          </div>
          <ProgressBar
            now={progress}
            className={classNames('flex-1', bgClassName)}
            variant={variant}
          />

          <div>
            <div className="flex align-items-center mt-4">
              <p className="mb-0 font-bold text-md">
                Started :
                <span className="font-semibold text-subtle text-opactity-85 ms-1">
                  {project.start}
                </span>
              </p>
            </div>
            <div className="flex align-items-center mt-2">
              <p className="mb-0 font-bold text-md">
                Deadline :{' '}
                <span className="font-semibold text-subtle text-opactity-85 ms-1">
                  {project.deadline}
                </span>
              </p>
            </div>

            <div className="flex d-lg-block d-xl-flex justify-content-between align-items-center mt-3">
              <div className="flex gap-1">
                <Avatar.Group total={project.assigness.length} size="m">
                  {project.assigness.slice(0, 4).map(assigne => (
                    <AvatarDropdown user={assigne} size="m" key={assigne.id} />
                  ))}
                </Avatar.Group>
              </div>

              <div className="mt-lg-3 mt-xl-0">
                <FontAwesomeIcon icon={faListCheck} className="me-1" />

                <p className="d-inline-block font-bold mb-0">
                  {project.task}
                  <span className="font-normal"> Task</span>
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      <CardViewModal
        show={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        project={project}
      />
    </>
  );
};

export default CardViewItem;
