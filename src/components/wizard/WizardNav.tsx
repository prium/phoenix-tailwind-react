import {
  faCheck,
  faFileAlt,
  faLock,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import WizardNavItem from './WizardNavItem';

/** gold `+WizardHeader` in mixins/wizard/WizardHeader.pug */
const WizardNav = () => {
  return (
    <ul className="nav justify-between nav-wizard nav-wizard-success">
      <WizardNavItem icon={faLock} step={1} label="Account" />
      <WizardNavItem icon={faUser} step={2} label="Personal" />
      <WizardNavItem icon={faFileAlt} step={3} label="Billing" />
      <WizardNavItem icon={faCheck} step={4} label="Done" />
    </ul>
  );
};

export default WizardNav;
