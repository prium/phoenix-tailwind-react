import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { WizardNav } from 'data/wizard/wizard';
import { useWizardFormContext } from 'providers/WizardFormProvider';

/**
 * gold `+WizardHeader` (theme-wizard vertical-at-xl nav,
 * mixins/travel-agency/{add-room,add-property}/…Wizard.pug)
 */
const WizardSideNav = ({ navItems }: { navItems: WizardNav[] }) => {
  const { selectedStep, totalStep, goToStep } = useWizardFormContext();

  return (
    <div className="scrollbar mb-6">
      <ul className="nav justify-between flex-nowrap nav-wizard nav-wizard-vertical-xl">
        {navItems.map((item, index) => {
          const step = index + 1;
          const isLast = index === navItems.length - 1;
          return (
            <li className="nav-item" key={index}>
              <a
                role="button"
                className={cn('nav-link py-0 xl:py-4', {
                  active: selectedStep === step,
                  done: selectedStep > step && step !== totalStep,
                  complete: selectedStep > step && step !== totalStep - 1
                })}
                onClick={() => goToStep(step)}
              >
                <div className="text-center inline-block xl:flex items-center gap-4">
                  <span className="nav-item-circle-parent">
                    <span className="nav-item-circle">
                      {isLast ? (
                        <FontAwesomeIcon icon={faCheck} />
                      ) : (
                        <>
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="nav-item-icon"
                          />
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="check-icon"
                          />
                        </>
                      )}
                    </span>
                  </span>
                  <span className="nav-item-title text-md xl:text-base">
                    {item.label}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WizardSideNav;
