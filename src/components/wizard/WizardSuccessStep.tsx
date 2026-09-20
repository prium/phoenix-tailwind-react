import Button from 'components/base/Button';
import { Col, Row } from '@hummingbirdui/react';
import illus38 from 'assets/img/spot-illustrations/38.webp';
import illusDark38 from 'assets/img/spot-illustrations/dark_38.webp';
import { useWizardFormContext } from 'providers/WizardFormProvider';

const WizardSuccessStep = () => {
  const { startOver } = useWizardFormContext();
  return (
    <Row className="flex-center pb-8 pt-4 gx-4 gy-6">
      <Col xs={12} sm="auto" className="text-center sm:text-start">
        <img src={illus38} alt="" width={220} className="dark:hidden" />
        <img
          src={illusDark38}
          alt=""
          width={220}
          className="hidden dark:block"
        />
      </Col>
      <Col xs={12} sm="auto" className="text-center sm:text-start">
        <h5 className="mb-4">You are all set!</h5>
        <p className="text-emphasis text-md">
          Now you can access your account
          <br />
          anytime anywhere
        </p>
        <Button variant="primary" className="px-6" onClick={() => startOver()}>
          Start Over
        </Button>
      </Col>
    </Row>
  );
};

export default WizardSuccessStep;
