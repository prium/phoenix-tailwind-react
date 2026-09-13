import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Toaster } from '@hummingbirdui/react';

const exampleCode = `
<Button
  variant="outline"
  onClick={() =>
    toast('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: { label: 'Undo', onClick: () => console.log('Undo') }
    })
  }
>
  Show Toast
</Button>
`;

const placementCode = `
() => {
  const positions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right'
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {positions.map(position => (
        <Button
          key={position}
          variant="outline"
          onClick={() => toast('Event has been created', { position })}
        >
          {position}
        </Button>
      ))}
    </div>
  );
}`;

const typesCode = `
() => {
  const promise = () =>
    new Promise(resolve => setTimeout(() => resolve({ name: 'Event' }), 2000));

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast.success('Event has been created')}>
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info('Be at the area 10 minutes before the event time')}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning('Event start time cannot be earlier than 8am')}
      >
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error('Event has not been created')}>
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.message('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm'
          })
        }
      >
        Message
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(promise, {
            loading: 'Loading...',
            success: data => \`\${data.name} has been added\`,
            error: 'Error'
          })
        }
      >
        Promise
      </Button>
    </div>
  );
}`;

const stackingCode = `
<Button
  variant="outline"
  onClick={() => {
    toast('See? Just like this.');
    toast('Heads up, toasts will stack automatically');
    toast('The oldest one leaves once the stack is full');
  }}
>
  Show three toasts
</Button>
`;

const dismissibleCode = `
<div className="flex flex-wrap gap-2">
  <Button
    variant="outline"
    onClick={() =>
      toast('Woohoo, you are reading this text in a toast!', {
        closeButton: true
      })
    }
  >
    With close button
  </Button>
  <Button
    variant="outline"
    onClick={() =>
      toast.custom(t => (
        <div className="toast show">
          <div className="toast-header">
            <strong className="me-auto">Hummingbird</strong>
            <small>just now</small>
            <CloseButton onClick={() => toast.dismiss(t)} />
          </div>
          <div className="toast-body">
            A fully custom toast, dismissed by its own button.
          </div>
        </div>
      ))
    }
  >
    Custom content
  </Button>
  <Button variant="outline" onClick={() => toast.dismiss()}>
    Dismiss all
  </Button>
</div>
`;

const autoHideCode = `
<div className="flex flex-wrap gap-2">
  <Button
    variant="outline"
    onClick={() => toast('I disappear after 1 second', { duration: 1000 })}
  >
    Short
  </Button>
  <Button
    variant="outline"
    onClick={() => toast('I disappear after 10 seconds', { duration: 10000 })}
  >
    Long
  </Button>
  <Button
    variant="outline"
    onClick={() =>
      toast('I stay until you dismiss me', {
        duration: Infinity,
        closeButton: true
      })
    }
  >
    Never
  </Button>
</div>
`;

const ToastsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Toasts"
        description="Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."
        link={{
          text: 'Toast on Hummingbird',
          url: 'https://react.hbui.dev/docs/components/toast'
        }}
      />

      {/* The examples below fire toasts imperatively, so the page mounts the
          single Toaster they all render into. Sonner wraps it in a bare
          `<section>`, which the theme's reboot pads by `--spacing(10)`; the
          wrapper zeroes that so the mount point takes no layout space. */}
      <div className="[&>section]:p-0">
        <Toaster />
      </div>

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic Example">
            <p className="mb-0">
              Render one <code>&lt;Toaster /&gt;</code> at the app root — this
              page mounts it for you — then fire toasts from anywhere with the{' '}
              <code>toast()</code> function. Every call accepts options such as{' '}
              <code>description</code>, <code>action</code>,{' '}
              <code>duration</code> and <code>position</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Placement">
            <p className="mb-0">
              Place a toast with the <code>position</code> option, or set a
              default for all of them with <code>position</code> on the{' '}
              <code>Toaster</code>. The bottom right is the default; the top
              right is often used for notifications, as is the top center.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={placementCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Types">
            <p className="mb-0">
              <code>toast.success</code>, <code>toast.info</code>,{' '}
              <code>toast.warning</code> and <code>toast.error</code> render
              typed toasts with a matching icon, <code>toast.message</code> adds
              a supporting description, and <code>toast.promise</code> tracks a
              promise through its loading, success and error states.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={typesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Stacking"
            description="When you have multiple toasts they stack automatically. The Toaster's visibleToasts prop caps how many are on screen at once, and expand shows the stack unfolded by default."
          />
          <PhoenixDocCard.Body code={stackingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dismissible">
            <p className="mb-0">
              The <code>closeButton</code> option adds a close control to a
              toast, and <code>toast.dismiss(id)</code> removes one by id —
              without an id it clears them all. <code>toast.custom</code>{' '}
              renders fully custom JSX while the <code>Toaster</code> keeps
              handling stacking, timing and dismissal.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dismissibleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Autohide">
            <p className="mb-0">
              A toast hides itself after four seconds. Pass{' '}
              <code>duration</code> in milliseconds to change that, or{' '}
              <code>Infinity</code> to keep it up until it is dismissed.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={autoHideCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ToastsExample;
