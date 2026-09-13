import { gantt } from 'dhtmlx-gantt';
import { useEffect, useState } from 'react';
import GanttConfirmDeleteModal from './GanttConfirmDeleteModal';

/** `+DeleteLinkModal` (#ganttDeleteLinkModal) in mixins/gantt-chart/GanttChart.pug */
const GanttDeleteLinkModal = () => {
  const [show, setShow] = useState(false);
  const [currentLinkId, setCurrentLinkId] = useState<string | number>();

  const handleClose = () => setShow(false);

  const handleDelete = () => {
    if (currentLinkId) {
      gantt.deleteLink(currentLinkId);
    }
    handleClose();
  };

  useEffect(() => {
    const id = gantt.attachEvent('onLinkDblClick', linkId => {
      setShow(true);
      setCurrentLinkId(linkId);
      return false; // Prevent default lightbox
    });
    return () => gantt.detachEvent(id);
  }, []);

  return (
    <GanttConfirmDeleteModal
      show={show}
      onHide={handleClose}
      labelId="deleteLinkModal"
      title="Delete Link"
      body="Are you sure you want to delete this link permanently? Once deleted, it cannot be recovered or undone."
      confirmId="ganttDeleteLinkBtn"
      confirmLabel="Delete link"
      onConfirm={handleDelete}
    />
  );
};

export default GanttDeleteLinkModal;
