import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn, Input, Select, Textarea } from '@hummingbirdui/react';
import PhoenixFloatingLabel from 'components/base/PhoenixFloatingLabel';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { useState } from 'react';
import WizardPager from './WizardPager';

const shareableLink = 'https://themewagon.com/phoenix';

/**
 * Step 5 — board access (`form.kanban-radio-collapse` radio + collapse rows).
 * Gold: `Step5` in `../phoenix-tailwind/src/pug/mixins/kanban/KanbanWizardForm.pug`.
 */
const AccessForm = () => {
  const { formRefs, selectedStep, goToStep } = useWizardFormContext();
  const [accessType, setAccessType] = useState('type1');
  const [copied, setCopied] = useState(false);

  const handleCopyShareableLink = async () => {
    await navigator.clipboard.writeText(shareableLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <p className="mb-7">
        Add <strong className="font-extrabold">Members</strong> or{' '}
        <strong className="font-extrabold">Guests</strong> to your Kanban board.
        They can add, edit, or move tasks in your board. Tasks can also be
        assigned to them.
        <br />
        <a className="mb-6" href="#!">
          Learn more
        </a>
      </p>
      <form
        className="kanban-radio-collapse"
        id="createBoardForm5"
        data-wizard-form="5"
        noValidate
        ref={el => {
          formRefs.current[4] = el;
        }}
        onSubmit={e => e.preventDefault()}
      >
        <div className="mb-7 form-check flex-wrap">
          <input
            className="form-check-input"
            type="radio"
            checked={accessType === 'type1'}
            name="accessType"
            value="type1"
            id="accessType1"
            onChange={() => setAccessType('type1')}
          />
          <label className="form-check-label" htmlFor="accessType1">
            Anyone with shareable link can access
          </label>
          <div
            className={cn('collapse accordion-collapse w-full ps-6', {
              show: accessType === 'type1'
            })}
            id="collapseOne"
            role="tabpanel"
            aria-labelledby="accessType1"
          >
            <div className="row g-4 mt-2">
              <div className="md:col-9">
                <PhoenixFloatingLabel
                  label="SHAREABLE LINK"
                  htmlFor="invite-link"
                  endComponent={
                    <button
                      className="btn btn-link absolute top-1/2 end-0 top-1/2 -translate-y-1/2 text-soft/75"
                      id="dataCopy"
                      type="button"
                      title={copied ? 'Copied' : 'click to copy'}
                      onClick={handleCopyShareableLink}
                    >
                      <span className="fa-regular fa-paste fa-lg" />
                    </button>
                  }
                >
                  <Input
                    id="invite-link"
                    type="text"
                    name="shareableLink"
                    defaultValue={shareableLink}
                    placeholder="Shareable link"
                  />
                </PhoenixFloatingLabel>
              </div>
              <div className="md:col-3">
                <PhoenixFloatingLabel label="ADD AS" htmlFor="guestSelect">
                  <Select id="guestSelect" name="role" defaultValue="guest">
                    <option value="guest">Guest</option>
                    <option value="member">Member</option>
                  </Select>
                </PhoenixFloatingLabel>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 form-check flex-wrap">
          <input
            className="form-check-input"
            type="radio"
            value="type2"
            checked={accessType === 'type2'}
            name="accessType"
            id="accessType2"
            onChange={() => setAccessType('type2')}
          />
          <label className="form-check-label" htmlFor="accessType2">
            Only invited people can access
          </label>
          <div
            className={cn('collapse accordion-collapse w-full ps-6', {
              show: accessType === 'type2'
            })}
            id="collapseTwo"
            role="tabpanel"
            aria-labelledby="accessType2"
          >
            <div className="row g-4 mt-2">
              <div className="md:col-9">
                <PhoenixFloatingLabel
                  label="ADD PEOPLE (ID OR EMAIL)"
                  htmlFor="floatingEventInput"
                >
                  <Input
                    id="floatingEventInput"
                    type="text"
                    name="user"
                    placeholder="Event title"
                  />
                </PhoenixFloatingLabel>
              </div>
              <div className="md:col-3">
                <PhoenixFloatingLabel label="ADD AS" htmlFor="memberSelect">
                  <Select id="memberSelect" defaultValue="member">
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                    <option value="developer">Developer</option>
                  </Select>
                </PhoenixFloatingLabel>
              </div>
              <div className="md:col-12">
                <PhoenixFloatingLabel
                  label="ADD A MESSAGE (OPTIONAL)"
                  htmlFor="create-board-wizard-message"
                >
                  <Textarea
                    className="h-32!"
                    placeholder="Leave a ME here"
                    name="message"
                    id="create-board-wizard-message"
                  />
                </PhoenixFloatingLabel>
                <div className="grid mt-4">
                  <button className="btn btn-outline-primary" type="button">
                    Invite
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      transform="shrink-3"
                      className="ms-2"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-0 mt-1">
          <WizardPager
            nextLabel="Submit"
            onPrev={() => goToStep(selectedStep - 1)}
            prevButtonProps={{ 'data-board-prev-btn': '' }}
          />
        </div>
      </form>
    </>
  );
};

export default AccessForm;
