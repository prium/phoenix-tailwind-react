import Button from 'components/base/Button';
import { useWizardFormContext } from 'providers/WizardFormProvider';

/** gold `[data-wizard-footer]` of add-room.pug */
const RoomWizardFooter = ({
  nextBtnLabel = 'Continue',
  handleSubmit
}: {
  nextBtnLabel?: string;
  handleSubmit?: () => void;
}) => {
  const { selectedStep, goToStep, getCanNextPage } = useWizardFormContext();

  return (
    <div className="mt-10 flex flex-wrap gap-2">
      <Button variant="phoenix-danger">Discard</Button>
      <Button variant="phoenix-primary">Save draft</Button>
      <Button
        type="submit"
        variant="primary"
        className="px-10 sm:px-20"
        onClick={() => {
          if (getCanNextPage) {
            goToStep(selectedStep + 1);
          } else if (handleSubmit) {
            handleSubmit();
          }
        }}
      >
        {nextBtnLabel}
      </Button>
    </div>
  );
};

export default RoomWizardFooter;
