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
      <Card className="h-full hover-actions-trigger">
        <Card.Body>
          <div className="flex items-center">
            <h4 className="mb-2 line-clamp-1 leading-sm flex-1 me-8">
              {project.name}
            </h4>
            <div className="hover-actions top-0 end-0 mt-6 me-6">
              <Button
                variant="primary"
                className="btn-icon shrink-0"
                onClick={() => setOpenDetailsModal(true)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
          <Badge
            variant="phoenix"
            bg={project.status.type}
            className="text-sm mb-6"
          >
            {project.status.label}
          </Badge>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={faUser}
              className="me-2 text-subtle text-md fw-extra-bold"
            />
            <p className="font-bold mb-0 text-truncate leading-none">
              Client :{' '}
              <span className="font-semibold text-primary ms-1">
                {' '}
                Gusteau’s Restaurant
              </span>
            </p>
          </div>
          <div className="flex items-center mb-6">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="me-2 text-subtle text-md fw-extra-bold"
            />
            <p className="font-bold mb-0 text-truncate leading-none">
              Budget :{' '}
              <span className="text-emphasis ms-1">
                {currencyFormat(project.budget)}
              </span>
            </p>
          </div>
          <div className="flex justify-between text-subtle font-semibold">
            <p className="mb-2"> Progress</p>
            <p className="mb-2 text-emphasis">{progress}%</p>
          </div>
          <ProgressBar
            now={progress}
            className={classNames('flex-1', bgClassName)}
            variant={variant}
          />

          <div>
            <div className="flex items-center mt-6">
              <p className="mb-0 font-bold text-md">
                Started :
                <span className="font-semibold text-subtle text-opactity-85 ms-1">
                  {project.start}
                </span>
              </p>
            </div>
            <div className="flex items-center mt-2">
              <p className="mb-0 font-bold text-md">
                Deadline :{' '}
                <span className="font-semibold text-subtle text-opactity-85 ms-1">
                  {project.deadline}
                </span>
              </p>
            </div>

            <div className="flex lg:block xl:flex justify-between items-center mt-4">
              <div className="flex gap-1">
                <Avatar.Group total={project.assigness.length} size="m">
                  {project.assigness.slice(0, 4).map(assigne => (
                    <AvatarDropdown user={assigne} size="m" key={assigne.id} />
                  ))}
                </Avatar.Group>
              </div>

              <div className="lg:mt-4 xl:mt-0">
                <FontAwesomeIcon icon={faListCheck} className="me-1" />

                <p className="inline-block font-bold mb-0">
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
