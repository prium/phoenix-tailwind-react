import { cn } from '@hummingbirdui/react';
import useWizardForm from 'hooks/useWizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import WizardTabPane from 'components/wizard/WizardTabPane';
import StepProgressBoard from './StepProgressBoard';
import WizardPager from './WizardPager';
import BoardForm from './BoardForm';
import ColumnForm from './ColumnForm';
import BackgroundColorForm from './BackgroundColorForm';
import TagsForm from './TagsForm';
import AccessForm from './AccessForm';
import type { UniqueIdentifier } from '@dnd-kit/core';

export interface CreateBoardTag {
  label: string;
  icon: string;
  color: string;
}
export interface CreateBoardFormData {
  name: string;
  type: string;
  description?: string;
  columns: {
    id: UniqueIdentifier;
    name: string;
    color: string;
  }[];
  backgroundColor?: string;
  backgroundImage?: string;
  tags: CreateBoardTag[];
}

/* gold demo defaults — `Step1`/`Step2`/`Step4` in
 * ../phoenix-tailwind/src/pug/mixins/kanban/KanbanWizardForm.pug
 * ('Unassaigned', 'issue' and 'bug' keep the gold typos/casing) */
const defaultColumns = [
  {
    id: 1,
    name: 'Unassaigned',
    color: '#6E7891'
  },
  {
    id: 2,
    name: 'To Do',
    color: '#25B003'
  },
  {
    id: 3,
    name: 'Doing',
    color: '#EC1F00'
  }
];

const defaultTags: CreateBoardTag[] = [
  {
    label: 'Feature',
    icon: 'package',
    color: 'primary'
  },
  {
    label: 'Completed',
    icon: 'check',
    color: 'success'
  },
  {
    label: 'issue',
    icon: 'alert-triangle',
    color: 'warning'
  },
  {
    label: 'bug',
    icon: 'alert-octagon',
    color: 'danger'
  }
];

/**
 * Gold `.theme-wizard.theme-wizard-progress` create-board wizard.
 * Pug: `../phoenix-tailwind/src/pug/apps/kanban/create-kanban-board.pug` +
 * `mixins/kanban/KanbanCreateBoard.pug` (WizardHeader/WizardContent).
 * The shared footer hides on the last step (the gold wizard JS adds `hidden`
 * to `[data-wizard-footer]` there — Step5 carries its own pager).
 */
const CreateBoardWizardForm = () => {
  const form = useWizardForm<CreateBoardFormData>(
    {
      totalStep: 5
    },
    {
      name: 'New Kanban Board',
      type: '',
      columns: defaultColumns,
      backgroundColor: '#ffffff',
      tags: defaultTags
    }
  );
  return (
    <WizardFormProvider {...form}>
      <div
        className="theme-wizard theme-wizard-progress"
        data-theme-wizard=""
        data-create-board=""
        data-wizard-modal-disabled=""
      >
        <StepProgressBoard className="mt-10 border-b-0" />
        <div className="mt-10">
          <div className="pt-6 pb-0">
            <div className="tab-content">
              <WizardTabPane step={1}>
                <BoardForm />
              </WizardTabPane>
              <WizardTabPane step={2}>
                <ColumnForm />
              </WizardTabPane>
              <WizardTabPane step={3}>
                <BackgroundColorForm />
              </WizardTabPane>
              <WizardTabPane step={4}>
                <TagsForm />
              </WizardTabPane>
              <WizardTabPane step={5}>
                <AccessForm />
              </WizardTabPane>
            </div>
          </div>
        </div>
        <div
          className={cn('border-t-0 mt-18', {
            hidden: !form.getCanNextPage
          })}
          data-wizard-footer=""
        >
          <WizardPager
            nextLabel="Next"
            prevHidden={!form.getCanPreviousPage}
            onPrev={() => form.goToStep(form.selectedStep - 1)}
            onNext={() => form.goToStep(form.selectedStep + 1)}
            prevButtonProps={{ 'data-wizard-prev-btn': '' }}
            nextButtonProps={{ 'data-wizard-next-btn': '' }}
          />
        </div>
      </div>
    </WizardFormProvider>
  );
};

export default CreateBoardWizardForm;
