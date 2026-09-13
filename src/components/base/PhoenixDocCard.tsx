import { PropsWithChildren, useEffect, useState } from 'react';
import { Card, Col, Collapsible, Row, cn } from '@hummingbirdui/react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatherIcon from 'feather-icons-react';
import { LiveEditor, LiveError, LivePreview } from 'react-live';
import { snakeCase } from 'helpers/utils';
import { Link } from 'react-router';
import PhoenixDocProvider, {
  usePhoenixDocContext
} from 'providers/PhoenixDocProvider';
import PhoenixLiveProvider, {
  PhoenixLiveProviderProps
} from 'components/docs/PhoenixLiveProvider';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

interface PhoenixDocCardProps {
  className?: string;
  noProvider?: boolean;
}

interface PhoenixDocCardHeaderProps {
  title?: string;
  id?: string;
  className?: string;
  description?: string;
  alignItems?: string;
  noPreview?: boolean;
}
interface PhoenixDocCardBodyProps extends PhoenixLiveProviderProps {
  hidePreview?: boolean;
  className?: string;
  transformCode?: (code: string) => string | Promise<string>;
}

/** Gold `+ComponentCard` (`../phoenix-tailwind/src/pug/mixins/common/Card.pug`). */
const PhoenixDocCard = ({
  children,
  className,
  noProvider
}: PropsWithChildren<PhoenixDocCardProps>) => {
  return (
    <Card className={cn(className, 'shadow-none border border-default')}>
      {noProvider ? (
        children
      ) : (
        <PhoenixDocProvider>{children}</PhoenixDocProvider>
      )}
    </Card>
  );
};

const PhoenixDocCardHeader = ({
  title,
  description,
  id,
  noPreview,
  alignItems,
  children,
  className
}: PropsWithChildren<PhoenixDocCardHeaderProps>) => {
  const [showToast, setShowToast] = useState(false);
  const { open, setOpen, showPreviewBtn, setShowPreviewBtn, textToCopy } =
    usePhoenixDocContext();

  const headerId = id ? id : title && snakeCase(title);

  const handleCopyCode = async () => {
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setShowToast(true);
    }
  };

  useEffect(() => {
    setShowPreviewBtn(!noPreview);
  }, [noPreview]);

  // the gold aligns the row to the end only when the card carries a description
  const align = alignItems ?? (children || description ? 'end' : 'center');

  return (
    <Card.Header
      className={cn(
        className,
        'p-6 border-b bg-default rounded-t-md hover-actions-trigger'
      )}
      id={headerId}
    >
      <Row className={cn('g-4 justify-between', `items-${align}`)}>
        <Col xs={12} md>
          {title && (
            <h4
              className={cn('text-default whitespace-nowrap', {
                'mb-0': !children && !description,
                'mb-2': children || description
              })}
            >
              {title}
              <Link to={`#${headerId}`} className="opacity-0 hover-show ps-2">
                #
              </Link>
            </h4>
          )}
          {description && <p className="mb-0 text-muted">{description}</p>}
          {children}
        </Col>
        {showPreviewBtn && (
          <Col md="auto">
            <nav className="nav justify-end doc-tab-nav items-center">
              <Button
                variant="link"
                size="sm"
                className="px-2 text-default copy-code-btn me-2"
                onClick={handleCopyCode}
              >
                <FontAwesomeIcon icon={faCopy} className="me-1" />
                Copy Code
              </Button>
              <Button
                variant="phoenix-primary"
                className="whitespace-nowrap"
                size="sm"
                style={{ width: 135 }}
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <>
                    <FeatherIcon icon="eye" className="me-2" size={16} />
                    Preview
                  </>
                ) : (
                  <>
                    <FeatherIcon icon="code" className="me-2" size={16} />
                    View Code
                  </>
                )}
              </Button>
            </nav>
          </Col>
        )}
      </Row>

      {/* gold `+CopyNotificationToast`, which lives once per doc layout there;
          here each card owns its own so the copy button stays self-contained */}
      {showToast && (
        <CopyNotificationToast onDone={() => setShowToast(false)} />
      )}
    </Card.Header>
  );
};

const CopyNotificationToast = ({ onDone }: { onDone: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onDone, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="fixed bottom-0 end-0 p-4 z-1050">
      <div
        className="toast show items-center text-white bg-dark border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="flex" data-hb-theme="dark">
          <div className="toast-body p-4">
            <span className="font-black">
              <code className="text-soft">
                Code has been copied to clipboard.
              </code>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhoenixDocCardBody = ({
  code,
  scope,
  noInline,
  hidePreview,
  children,
  className,
  transformCode
}: PropsWithChildren<PhoenixDocCardBodyProps>) => {
  const { open, setOpen, showPreviewBtn, setTextToCopy } =
    usePhoenixDocContext();

  useEffect(() => {
    if (code) {
      setTextToCopy(code);
    }
  }, []);
  return (
    <Card.Body className={cn(className, 'p-0')}>
      {code && (
        <PhoenixLiveProvider
          transformCode={transformCode}
          code={code}
          scope={scope}
          noInline={noInline}
        >
          {code && !showPreviewBtn ? (
            <LiveEditor />
          ) : (
            <>
              <Collapsible open={open} onOpenChange={setOpen}>
                <Collapsible.Content className="code-collapse">
                  <LiveEditor />
                </Collapsible.Content>
              </Collapsible>
              {!hidePreview && (
                <>
                  {/* outside the collapse: an example that fails to compile has
                      to be visible without opening the code panel, and
                      `tools/verify/docs.mjs` gates on this attribute */}
                  <LiveError
                    data-live-error
                    className="px-6 pt-6 mb-0 text-danger whitespace-pre-wrap"
                  />
                  <div className="p-6">
                    <LivePreview />
                  </div>
                </>
              )}
            </>
          )}
        </PhoenixLiveProvider>
      )}

      {children && <div className="p-6">{children}</div>}
    </Card.Body>
  );
};

PhoenixDocCardHeader.componentName = 'PhoenixDocCardHeader';
PhoenixDocCard.Header = PhoenixDocCardHeader;
PhoenixDocCard.Body = PhoenixDocCardBody;

export default PhoenixDocCard;
