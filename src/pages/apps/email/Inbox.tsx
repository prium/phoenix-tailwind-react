import EmailRow from 'components/modules/email/EmailRow';
import InboxToolbar from 'components/modules/email/InboxToolbar';
import { emails } from 'data/email';
import EmailLayout from 'layouts/EmailLayout';
import BulkSelectProvider from 'providers/BulkSelectProvider';

const Inbox = () => {
  return (
    <EmailLayout page="inbox">
      <div className="lg:col">
        <div className="lg:px-1">
          <BulkSelectProvider data={emails}>
            <InboxToolbar inbox />
            {emails.map((email, index) => (
              <EmailRow
                email={email}
                index={index}
                isLast={index === emails.length - 1}
                key={email.id}
              />
            ))}
          </BulkSelectProvider>
        </div>
      </div>
    </EmailLayout>
  );
};

export default Inbox;
