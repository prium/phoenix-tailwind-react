import boardIcon from 'assets/img/kanban/board.png';
import boardIllustration from 'assets/img/kanban/board-light.png';
import boardIllustrationDark from 'assets/img/kanban/board-dark.png';
import CreateBoardWizardForm from 'components/modules/kanban/create-board/CreateBoardWizardForm';

/**
 * Gold: ../phoenix-tailwind/src/pug/apps/kanban/create-kanban-board.pug
 * (the light illustration keeps the gold's `board-ligth.png` content under the
 * corrected `board-light.png` filename).
 */
const CreateBoard = () => {
  return (
    <>
      <div className="flex items-center">
        <img src={boardIcon} alt="" className="me-4" />
        <h1 className="mb-0 text-emphasis font-semibold">Phoenix Kanban</h1>
      </div>
      <p className="mt-4">
        Create a Kanban board by following <br className="md:hidden" />
        the steps below
      </p>
      <div className="kanban-create-board row">
        <div className="2xl:col-5 xl:col-6 col-12 pb-14 order-1 xl:order-0">
          <CreateBoardWizardForm />
        </div>
        <div className="2xl:col-7 xl:col-6 col-12 text-center kanban-board-bg">
          <img
            src={boardIllustration}
            alt=""
            className="sticky top-50 dark:hidden mt-8"
          />
          <img
            src={boardIllustrationDark}
            alt=""
            className="sticky top-50 hidden dark:block mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default CreateBoard;
