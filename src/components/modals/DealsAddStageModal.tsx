import { Dialog } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { DealColumn } from 'data/crm/deals';
import usePhoenixForm from 'hooks/usePhoenixForm';
import { useDealsContext } from 'providers/CrmDealsProvider';
import { FormEvent, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

interface DealsAddStageModalProps {
  show: boolean;
  handleClose: () => void;
}

const initFormData = {
  id: parseInt(uuid().replace(/-/g, '').slice(0, 12), 16),
  title: '',
  revenue: '',
  deals: []
};

/** `+AddStageModal` in mixins/crm/Deals.pug (`#addStageModal`) */
const DealsAddStageModal = ({ show, handleClose }: DealsAddStageModalProps) => {
  const { onChange, formData, setFormData } = usePhoenixForm<DealColumn>();
  const { handleAddStage, setOpenAddStageModal } = useDealsContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddStage(formData);
    setFormData(initFormData);
    setOpenAddStageModal(false);
  };

  useEffect(() => {
    setFormData(initFormData);
  }, []);

  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content centered aria-describedby={undefined}>
        <form onSubmit={handleSubmit}>
          <div className="modal-body p-6">
            {/* gold's h3 has no `.modal-title` styling, so keep the a11y title visually hidden */}
            <Dialog.Title className="sr-only">Create New Stage</Dialog.Title>
            <h3 className="mb-8 text-highlight">Create New Stage</h3>
            <div className="mb-6">
              <label className="mb-2 font-bold text-highlight">
                Column Name
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter stage name"
                value={formData.title ?? ''}
                name="title"
                onChange={onChange}
                required
              />
            </div>
            <label className="mb-2 font-bold text-highlight">
              Forecast Revenue
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="$  Enter amount"
              value={formData.revenue ?? ''}
              name="revenue"
              onChange={onChange}
              required
            />
          </div>
          <div className="modal-footer border-0 pt-4 px-6 pb-6">
            <Button
              variant="link"
              className="text-danger px-6 m-0"
              aria-label="Close"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="px-10 m-0">
              Create New Stage
            </Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog>
  );
};

export default DealsAddStageModal;
