import { Col, Row } from 'react-bootstrap';
import boardIcon from 'assets/img/kanban/board.png';
import boardIllustration from 'assets/img/kanban/board-light.png';
import boardIllustrationDark from 'assets/img/kanban/board-dark.png';
import CreateBoardWizardForm from 'components/modules/kanban/create-board/CreateBoardWizardForm';

const CreateBoard = () => {
  return (
    <div className="mb-16">
      <div className="xl:mb-14">
        <div className="flex items-center mb-4">
          <img src={boardIcon} alt="" className="me-4" />
          <h1 className="mb-0 text-emphasis font-semibold">
            Phoenix Kanban
          </h1>
        </div>
        <p className="mb-0">
          Create a Kanban board by following the steps below
        </p>
      </div>
      <Row className="kanban-create-board">
        <Col
          xs={12}
          xl={6}
          xxl={7}
          className="text-center kanban-board-bg xl:order-1"
        >
          <img
            src={boardIllustration}
            alt=""
            className="dark:hidden mt-8 mb-10 xl:mb-0 sticky"
          />
          <img
            src={boardIllustrationDark}
            alt=""
            className="hidden dark:block mt-8 mb-10 xl:mb-0 sticky"
          />
        </Col>
        <Col xs={12} xl={6} xxl={5}>
          <CreateBoardWizardForm />
        </Col>
      </Row>
    </div>
  );
};

export default CreateBoard;
