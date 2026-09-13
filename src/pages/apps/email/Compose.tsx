import ComposeCard from 'components/modules/email/ComposeCard';
import EmailLayout from 'layouts/EmailLayout';

/**
 * Gold `apps/email/compose.pug` + `mixin Compose`
 * (../phoenix-tailwind/src/pug/mixins/email/Compose.pug).
 */
const Compose = () => {
  return (
    <EmailLayout page="compose">
      <div className="col">
        <ComposeCard className="email-content" />
      </div>
    </EmailLayout>
  );
};

export default Compose;
