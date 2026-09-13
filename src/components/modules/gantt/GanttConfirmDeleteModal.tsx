import { Dialog } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { ReactNode } from 'react';

interface GanttConfirmDeleteModalProps {
  show: boolean;
  onHide: () => void;
  /** id of the gold `h3` (`deleteTaskModal` / `deleteLinkModal`) */
  labelId: string;
  title: string;
  body: ReactNode;
  confirmId: string;
  confirmLabel: string;
  onConfirm: () => void;
}

/**
 * The shared body of `+DeleteTaskModal` (#ganttDeleteTaskModal) and
 * `+DeleteLinkModal` (#ganttDeleteLinkModal) in
 * mixins/gantt-chart/GanttChart.pug — identical markup, different copy.
 */
const GanttConfirmDeleteModal = ({
  show,
  onHide,
  labelId,
  title,
  body,
  confirmId,
  confirmLabel,
  onConfirm
}: GanttConfirmDeleteModalProps) => (
  <Dialog open={show} onOpenChange={open => !open && onHide()}>
    <Dialog.Content centered aria-describedby={undefined}>
      {/* the gold heading is a plain h3, not `.modal-title` */}
      <Dialog.Title className="sr-only">{title}</Dialog.Title>
      <div className="modal-header p-6 pb-4 items-start">
        <h3 className="mb-2 text-highlight" id={labelId}>
          {title}
        </h3>
        <button
          type="button"
          aria-label="Close"
          className="btn btn-close"
          onClick={onHide}
        />
      </div>

      <div className="modal-body px-6">
        <p>{body}</p>
      </div>
      <div className="modal-footer px-6 pb-4">
        <Button id={confirmId} variant="subtle-danger" onClick={onConfirm}>
          {confirmLabel}
        </Button>
        <Button variant="phoenix-secondary" onClick={onHide}>
          Cancel
        </Button>
      </div>
    </Dialog.Content>
  </Dialog>
);

export default GanttConfirmDeleteModal;
