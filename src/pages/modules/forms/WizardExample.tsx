import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import WizardFormProvider from 'providers/WizardFormProvider';
import useWizardForm from 'hooks/useWizardForm';
import { Card, Col, Row, cn } from '@hummingbirdui/react';
import WizardNav from 'components/wizard/WizardNav';
import WizardForm from 'components/wizard/WizardForm';
import WizardAccountForm from 'components/forms/WizardAccountForm';
import WizardPersonalForm from 'components/forms/WizardPersonalForm';
import WizardBillingForm from 'components/forms/WizardBillingForm';
import WizardSuccessStep from 'components/wizard/WizardSuccessStep';
import WizardFormFooter from 'components/wizard/WizardFormFooter';

export interface WizardFormData {
  name: string;
  accept_terms: boolean;
  email: string;
  password: string;
  confirm_password: string;
  gender: string;
  phone: string;
  dob: string;
  address: string;
  card: number;
  country: string;
  zip: number;
  date_of_expire: string;
  cvv: number;
}

const progressTabExampleCode = `
import WizardAccountForm from 'components/forms/WizardAccountForm';
import WizardBillingForm from 'components/forms/WizardBillingForm';
import WizardPersonalForm from 'components/forms/WizardPersonalForm';
import WizardFormFooter from 'components/wizard/WizardFormFooter';
import WizardForm from 'components/wizard/WizardForm';
import WizardNav from 'components/wizard/WizardNav';
import WizardSuccessStep from 'components/wizard/WizardSuccessStep';
import useWizardForm from 'hooks/useWizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import { Card, cn } from '@hummingbirdui/react';

interface WizardFormData {
  name: string;
  accept_terms: boolean;
  email: string;
  password: string;
  confirm_password: string;
  gender: string;
  phone: string;
  dob: string;
  address: string;
  card: number;
  country: string;
  zip: number;
  date_of_expire: string;
  cvv: number;
}

const ProgressTabExample = () => {
  const form = useWizardForm<WizardFormData>({
    totalStep: 4
  });
  return (
    <WizardFormProvider {...form}>
      <Card className="theme-wizard">
        <Card.Header className="bg-subtle pt-4 pb-2 border-b-0">
          <WizardNav />
        </Card.Header>
        <Card.Body className="pb-0">
          <div className="tab-content">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={cn('tab-pane', {
                  active: form.selectedStep === step
                })}
              >
                {step === 4 ? (
                  <WizardSuccessStep />
                ) : (
                  <WizardForm step={step}>
                    {step === 1 && <WizardAccountForm id="progress" />}
                    {step === 2 && <WizardPersonalForm />}
                    {step === 3 && <WizardBillingForm />}
                  </WizardForm>
                )}
              </div>
            ))}
          </div>
        </Card.Body>
        <Card.Footer className="border-t-0">
          <WizardFormFooter
            className={cn({ hidden: !form.getCanNextPage })}
          />
        </Card.Footer>
      </Card>
    </WizardFormProvider>
  );
};
`;

const withValidationExampleCode = `
import WizardAccountForm from 'components/forms/WizardAccountForm';
import WizardBillingForm from 'components/forms/WizardBillingForm';
import WizardPersonalForm from 'components/forms/WizardPersonalForm';
import WizardFormFooter from 'components/wizard/WizardFormFooter';
import WizardForm from 'components/wizard/WizardForm';
import WizardNav from 'components/wizard/WizardNav';
import WizardSuccessStep from 'components/wizard/WizardSuccessStep';
import useWizardForm from 'hooks/useWizardForm';
import WizardFormProvider from 'providers/WizardFormProvider';
import { Card, cn } from '@hummingbirdui/react';

const WithValidationExample = () => {
  // \`validation: true\` makes goToStep run checkValidity() on the step's form
  // and stamp it with \`was-validated\` instead of advancing when it fails.
  const form = useWizardForm<WizardFormData>({
    totalStep: 4,
    validation: true
  });
  return (
    <WizardFormProvider {...form}>
      <Card className="theme-wizard">
        <Card.Header className="bg-subtle pt-4 pb-2 border-b-0">
          <WizardNav />
        </Card.Header>
        <Card.Body className="pb-0">
          <div className="tab-content">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={cn('tab-pane', {
                  active: form.selectedStep === step
                })}
              >
                {step === 4 ? (
                  <WizardSuccessStep />
                ) : (
                  <WizardForm step={step}>
                    {step === 1 && <WizardAccountForm id="validation" />}
                    {step === 2 && <WizardPersonalForm />}
                    {step === 3 && <WizardBillingForm />}
                  </WizardForm>
                )}
              </div>
            ))}
          </div>
        </Card.Body>
        <Card.Footer className="border-t-0">
          <WizardFormFooter
            className={cn({ hidden: !form.getCanNextPage })}
          />
        </Card.Footer>
      </Card>
    </WizardFormProvider>
  );
};
`;

const WizardSteps = ({
  id,
  selectedStep
}: {
  id: string;
  selectedStep: number;
}) => (
  <div className="tab-content">
    {[1, 2, 3, 4].map(step => (
      <div
        key={step}
        className={cn('tab-pane', { active: selectedStep === step })}
      >
        {step === 4 ? (
          <WizardSuccessStep />
        ) : (
          <WizardForm step={step}>
            {step === 1 && <WizardAccountForm id={id} />}
            {step === 2 && <WizardPersonalForm />}
            {step === 3 && <WizardBillingForm />}
          </WizardForm>
        )}
      </div>
    ))}
  </div>
);

const ProgressTabExample = () => {
  const form = useWizardForm<WizardFormData>({
    totalStep: 4
  });
  return (
    <WizardFormProvider {...form}>
      <Card className="theme-wizard">
        <Card.Header className="bg-subtle pt-4 pb-2 border-b-0">
          <WizardNav />
        </Card.Header>
        <Card.Body className="pb-0">
          <WizardSteps id="progress" selectedStep={form.selectedStep} />
        </Card.Body>
        <Card.Footer className="border-t-0">
          <WizardFormFooter className={cn({ hidden: !form.getCanNextPage })} />
        </Card.Footer>
      </Card>
    </WizardFormProvider>
  );
};

const WithValidationExample = () => {
  const form = useWizardForm<WizardFormData>({
    totalStep: 4,
    validation: true
  });
  return (
    <WizardFormProvider {...form}>
      <Card className="theme-wizard">
        <Card.Header className="bg-subtle pt-4 pb-2 border-b-0">
          <WizardNav />
        </Card.Header>
        <Card.Body className="pb-0">
          <WizardSteps id="validation" selectedStep={form.selectedStep} />
        </Card.Body>
        <Card.Footer className="border-t-0">
          <WizardFormFooter className={cn({ hidden: !form.getCanNextPage })} />
        </Card.Footer>
      </Card>
    </WizardFormProvider>
  );
};

const WizardExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Wizard form"
        description="A form UI to enable users to achieve a goal through a series of steps."
      />
      <Row>
        <Col xs={12} xxl={6}>
          <PhoenixDocCard className="mb-4">
            <PhoenixDocCard.Header title="Progress Tab">
              <p className="mb-0">
                The wizard is assembled from hb-react <code>Card</code> parts:{' '}
                <code>useWizardForm</code> owns the step state,{' '}
                <code>WizardFormProvider</code> shares it, and each step is a{' '}
                <code>tab-pane</code> that becomes <code>active</code> when it
                is the selected one — so every step stays mounted and keeps what
                the user typed.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body hidePreview code={progressTabExampleCode}>
              <ProgressTabExample />
            </PhoenixDocCard.Body>
          </PhoenixDocCard>
        </Col>
        <Col xs={12} xxl={6}>
          <PhoenixDocCard className="mb-4">
            <PhoenixDocCard.Header title="With Validation">
              <p className="mb-0">
                Pass <code>validation: true</code> to <code>useWizardForm</code>{' '}
                and moving forward runs the browser’s own constraint validation
                on the current step’s <code>&lt;form&gt;</code>, marking it{' '}
                <code>was-validated</code> rather than advancing when a field
                fails.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body hidePreview code={withValidationExampleCode}>
              <WithValidationExample />
            </PhoenixDocCard.Body>
          </PhoenixDocCard>
        </Col>
      </Row>
    </div>
  );
};

export default WizardExample;
