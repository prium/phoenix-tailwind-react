import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
() => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
  return (
    <>
      {colors.map(color => (
        <Alert key={color} variant="subtle" color={color}>
          This is a {color} alert—check it out!
        </Alert>
      ))}
    </>
  );
}
`;

const outlineCode = `
() => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
  return (
    <>
      {colors.map(color => (
        <Alert key={color} variant="outline" color={color}>
          This is a {color} alert—check it out!
        </Alert>
      ))}
    </>
  );
}
`;

const phoenixAlertCode = `
<>
  <Alert variant={null} color={null} className="alert-phoenix-primary">
    This is a primary alert—check it out!
  </Alert>
  <Alert variant={null} color={null} className="alert-phoenix-secondary">
    This is a secondary alert—check it out!
  </Alert>
  <Alert variant={null} color={null} className="alert-phoenix-success">
    This is a success alert—check it out!
  </Alert>
  <Alert variant={null} color={null} className="alert-phoenix-danger">
    This is a danger alert—check it out!
  </Alert>
  <Alert variant={null} color={null} className="alert-phoenix-warning">
    This is a warning alert—check it out!
  </Alert>
  <Alert variant={null} color={null} className="alert-phoenix-info">
    This is an info alert—check it out!
  </Alert>
</>
`;

const solidAlertCode = `
() => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
  return (
    <>
      {colors.map(color => (
        <Alert key={color} color={color}>
          This is a {color} alert—check it out!
        </Alert>
      ))}
    </>
  );
}
`;

const withIconCode = `
<>
  <Alert variant="outline" color="warning">
    <Alert.Icon>
      <FontAwesomeIcon icon={faCircleInfo} className="text-warning text-2xl" />
    </Alert.Icon>
    <p className="mb-0 flex-1">A simple warning alert—check it out!</p>
    <CloseButton />
  </Alert>

  <Alert variant="outline" color="success">
    <Alert.Icon>
      <FontAwesomeIcon icon={faCircleCheck} className="text-success text-2xl" />
    </Alert.Icon>
    <p className="mb-0 flex-1">A simple success alert—check it out!</p>
    <CloseButton />
  </Alert>

  <Alert variant="outline" color="danger">
    <Alert.Icon>
      <FontAwesomeIcon icon={faCircleXmark} className="text-danger text-2xl" />
    </Alert.Icon>
    <p className="mb-0 flex-1">A simple danger alert—check it out!</p>
    <CloseButton />
  </Alert>
</>
`;

const additionalContentCode = `
<Alert variant="subtle" color="success">
  <div>
    <h4 className="alert-heading font-semibold">Well done!</h4>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is
      going to run a bit longer so that you can see how spacing within an alert works
      with this kind of content.
    </p>
    <hr className="bg-highlight" />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
  </div>
</Alert>
`;

const dismissCode = `
() => {
  const [show, setShow] = useState(true);

  if (!show) {
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }

  return (
    <Alert variant="subtle" color="warning" className="mb-0">
      <p className="mb-0 flex-1">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </p>
      <CloseButton className="ms-auto" onClick={() => setShow(false)} />
    </Alert>
  );
}
`;

const AlertsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Alert"
        description="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
        link={{
          text: 'Alert on hb-react',
          url: 'https://react.hbui.dev/docs/components/alert'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Alert Subtle">
            <p className="mb-0">
              <code>variant</code> picks the visual style — <code>filled</code>{' '}
              (the default), <code>subtle</code> or <code>outline</code> — and{' '}
              <code>color</code> carries the intent.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Outline"
            description="The outline variant keeps the alert transparent and states the intent with its border and text colour alone."
          />
          <PhoenixDocCard.Body code={outlineCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Alerts">
            <p className="mb-0">
              The phoenix soft alert is a skin of this theme rather than an
              hb-react <code>variant</code>, so it is applied through{' '}
              <code>className</code>. Pass <code>variant={'{null}'}</code> and{' '}
              <code>color={'{null}'}</code> so <code>Alert</code> emits nothing
              but its base class and leaves the <code>alert-phoenix-*</code>{' '}
              skin in charge.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={phoenixAlertCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Solid Alerts"
            description="filled is the default variant, so a colour on its own is enough for a solid alert."
          />
          <PhoenixDocCard.Body code={solidAlertCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Alerts with icon">
            <p className="mb-0">
              <code>Alert.Icon</code> holds a leading icon. Pair it with a{' '}
              <code>CloseButton</code> and the alert reads as a full banner.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={withIconCode}
            scope={{
              FontAwesomeIcon,
              faCircleInfo,
              faCircleCheck,
              faCircleXmark
            }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Additional content"
            description="Alerts can contain whatever content you like. The alert itself is a flex row, so wrap stacked content in a single element."
          />
          <PhoenixDocCard.Body code={additionalContentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dismissing">
            <p className="mb-0">
              <code>Alert</code> has no dismiss behaviour of its own: render a{' '}
              <code>CloseButton</code> inside it and drop the alert from your
              own state when it fires.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dismissCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default AlertsExample;
