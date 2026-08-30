import Badge from 'components/base/Badge';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { useState } from 'react';
import BoardViewModal from './BoardViewModal';
import { Project } from 'data/project-management/projects';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

/** Board card in project-management/ProjectBoardView.pug */
const BoardViewItem = ({ project }: { project: Project }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  return (
    <>
      <RevealDropdownTrigger className="relative rounded-md overflow-hidden p-6 h-59">
        <div
          className="bg-holder"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(${project.bg})`
          }}
        />
        <div className="relative h-full flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <Badge
              variant="phoenix"
              bg={project.status.type}
              className="text-sm"
              data-hb-theme="light"
            >
              {project.status.label}
            </Badge>
            <div className="z-2">
              <RevealDropdown
                btnClassName="btn-square h-8 w-8"
                icon={faEllipsisV}
              >
                <ActionDropdownItems />
              </RevealDropdown>
            </div>
          </div>
          <h3 className="text-white font-bold line-clamp-2">{project.name}</h3>
        </div>
        <a
          className="stretched-link"
          href="#!"
          onClick={e => {
            e.preventDefault();
            setOpenDetailsModal(true);
          }}
        />
      </RevealDropdownTrigger>

      <BoardViewModal
        show={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        project={project}
      />
    </>
  );
};

export default BoardViewItem;
