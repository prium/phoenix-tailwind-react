import {
  Col,
  FloatingLabel,
  Input,
  Row,
  Select,
  Textarea
} from '@hummingbirdui/react';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';

const tagOptions = [
  { value: 'Biology', label: 'Biology' },
  { value: 'Brainlessness', label: 'Brainlessness' },
  { value: 'Jerry', label: 'Jerry' },
  { value: 'Neurology', label: 'Neurology' },
  { value: 'Not_the_mouse', label: 'Not_the_mouse' },
  { value: 'Rick', label: 'Rick' },
  { value: 'Stupidity', label: 'Stupidity' }
];

const FloatingDatePicker = ({
  id,
  label,
  placeholder
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <DatePicker
    hideIcon
    render={(_, ref) => (
      <div className="input-group-icon">
        <UilCalendarAlt
          fill="currentColor"
          size={16}
          className="text-subtle form-control-icon-start text-base"
        />
        <div className="form-floating">
          <Input
            type="text"
            className="datetimepicker"
            placeholder={placeholder}
            ref={ref}
            id={id}
          />
          <label className="form-label" htmlFor={id}>
            {label}
          </label>
        </div>
      </div>
    )}
  />
);

const CreateNew = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-6">Create a project</h2>
      <Row>
        <Col xl={9}>
          <form className="row g-4 mb-10">
            <Col sm={6} md={8}>
              <FloatingLabel htmlFor="floatingInputGrid" label="Project title">
                <Input
                  type="text"
                  id="floatingInputGrid"
                  placeholder="Project title"
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel
                htmlFor="floatingSelectTask"
                label="Default task view"
              >
                <Select id="floatingSelectTask" defaultValue="">
                  <option value="">Select task view</option>
                  <option value="1">technical</option>
                  <option value="2">external</option>
                  <option value="3">organizational</option>
                </Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel
                htmlFor="floatingSelectPrivacy"
                label="Project privacy"
              >
                <Select id="floatingSelectPrivacy" defaultValue="">
                  <option value="">Select privacy</option>
                  <option value="1">Data Privacy One</option>
                  <option value="2">Data Privacy Two</option>
                  <option value="3">Data Privacy Three</option>
                </Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel htmlFor="floatingSelectTeam" label="Team">
                <Select id="floatingSelectTeam" defaultValue="">
                  <option value="">Select team</option>
                  <option value="1">Team One</option>
                  <option value="2">Team Two</option>
                  <option value="3">Team Three</option>
                </Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel htmlFor="floatingSelectAssignees" label="People">
                <Select id="floatingSelectAssignees" defaultValue="">
                  <option value="">Select assignees</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel htmlFor="floatingSelectAdmin" label="Project Lead">
                <Select id="floatingSelectAdmin" defaultValue="">
                  <option value="">Select admin</option>
                  <option value="1">Data Privacy One</option>
                  <option value="2">Data Privacy Two</option>
                  <option value="3">Data Privacy Three</option>
                </Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingDatePicker
                id="floatingInputStartDate"
                label="Start date"
                placeholder="end date"
              />
            </Col>
            <Col sm={6} md={4}>
              <FloatingDatePicker
                id="floatingInputDeadline"
                label="Deadline"
                placeholder="deadline"
              />
            </Col>
            <Col xs={12} className="gy-10">
              <FloatingLabel
                htmlFor="floatingProjectOverview"
                label="project overview"
              >
                <Textarea
                  id="floatingProjectOverview"
                  className="h-25!"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Col>
            <Col md={6} className="gy-10">
              <FloatingLabel htmlFor="floatingSelectClient" label="client">
                <Select id="floatingSelectClient" defaultValue="">
                  <option value="">Select client</option>
                  <option value="1">Client One</option>
                  <option value="2">Client Two</option>
                  <option value="3">Client Three</option>
                </Select>
              </FloatingLabel>
            </Col>
            <Col md={6} className="md:gy-10">
              <FloatingLabel htmlFor="floatingInputBudget" label="Budget">
                <Input
                  type="text"
                  id="floatingInputBudget"
                  placeholder="Budget"
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} className="gy-10">
              <div className="form-floating form-floating-advance-select">
                <ReactSelect
                  isMulti
                  inputId="organizerMultiple"
                  placeholder=""
                  options={tagOptions}
                  defaultValue={[tagOptions[6]]}
                />
                <label htmlFor="organizerMultiple">Add tags</label>
              </div>
            </Col>
            <Col xs={12} className="gy-10">
              <Row className="g-4 justify-end">
                <Col xs="auto">
                  <Button variant="phoenix-primary" className="px-8">
                    Cancel
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="primary" className="px-8 sm:px-30">
                    Create Project
                  </Button>
                </Col>
              </Row>
            </Col>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default CreateNew;
