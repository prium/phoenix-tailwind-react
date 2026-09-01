import boardIcon from 'assets/img/kanban/board.png';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dialog, Input, Select } from '@hummingbirdui/react';
import { Link } from 'react-router';

const KanbanInviteModal = ({
  show,
  handleClose
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content centered aria-describedby={undefined}>
        <div className="modal-header p-6 flex gap-2 border-0">
          <img src={boardIcon} height={24} width={18} alt="" />
          <Dialog.Title asChild>
            <h3 className="mb-0 text-emphasis font-semibold flex-1">
              Phoenix Kanban
            </h3>
          </Dialog.Title>
          <Button className="p-0 ms-auto" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </Button>
        </div>
        <div className="modal-body p-6 pt-0">
          <p className="text-subtle font-semibold text-md">
            Add the <strong className="font-black">Members</strong> or{' '}
            <strong className="font-black">Guests</strong> to your Kanban board.
            They can add, edit, or move tasks in your board. Tasks can also be
            assigned to them.{' '}
            <Link to="#!" className="font-semibold">
              Learn more
            </Link>
          </p>
          <div className="row g-2 mb-2">
            <div className="col-6">
              <Input
                type="text"
                placeholder="Phoenix id or email address"
                name="email"
              />
            </div>
            <div className="col-auto sm:col-3 flex-1">
              <Select>
                <option value="guest">Guest</option>
                <option value="member">Member</option>
              </Select>
            </div>
            <div className="col-auto sm:col-3">
              <Button variant="primary">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sm sm:me-2"
                />
                <span className="hidden sm:inline-block">Invite</span>
              </Button>
            </div>
          </div>
          <div className="py-2 border-b border-subtle border-dashed relative mb-6">
            <span className="bg-soft px-1 absolute top-1/2 start-1/2 -translate-x-1/2 text-md font-semibold">
              Or,
            </span>
          </div>
          <div className="row g-2">
            <div className="col-auto sm:col-9 flex-1">
              <Button
                variant="phoenix-secondary"
                startIcon={
                  <FontAwesomeIcon icon={faLink} className="ms-2 text-md" />
                }
                className="w-full"
              >
                <span className="hidden sm:inline">Create &amp; Copy</span>{' '}
                <span>Shareable link</span>
              </Button>
            </div>
            <div className="col-auto sm:col-3">
              <Select>
                <option value="guest">Guest</option>
                <option value="member">Member</option>
              </Select>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default KanbanInviteModal;
