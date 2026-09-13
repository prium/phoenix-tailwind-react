import { Select } from '@hummingbirdui/react';
import { UilBellSchool, UilTagAlt } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';

const tagOptions = [
  {
    value: 'massachusetts_institute_of_technology',
    label: 'Massachusetts Institute of Technology'
  },
  { value: 'university_of_chicago', label: 'University of Chicago' },
  { value: 'gsas_open_labs_at_harvard', label: 'GSAS Open Labs At Harvard' },
  {
    value: 'california_institute_of_technology',
    label: 'California Institute of Technology'
  }
];

/** `+OthersInformation` in mixins/project-management/ToDoList.pug */
const OthersInformation = ({
  menuPlacement = 'auto'
}: {
  menuPlacement?: 'auto' | 'top' | 'bottom';
}) => (
  <>
    <h5 className="text-highlight mb-2">Status</h5>
    <Select
      className="mb-6"
      aria-label="Default select example"
      defaultValue=""
    >
      <option value="">Select</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Select>

    <h5 className="text-highlight mb-2">Due Date</h5>
    <DatePicker wrapperClassName="mb-6" placeholder="Set the due date" />

    <h5 className="text-highlight mb-2">Reminder</h5>
    <DatePicker
      wrapperClassName="mb-6"
      placeholder="Reminder"
      options={{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }}
      icon={
        <UilBellSchool
          fill="currentColor"
          className="flatpickr-icon text-subtle"
          size={16}
        />
      }
    />

    <h5 className="text-highlight mb-2">Tag</h5>
    <ReactSelect
      menuPlacement={menuPlacement}
      options={tagOptions}
      className="mb-10"
      isMulti
      placeholder="Select organizer..."
      icon={
        <UilTagAlt
          fill="currentColor"
          className="choices-icon text-subtle top-13/50"
          size={16}
        />
      }
    />
    <div className="text-end mb-16">
      <Button variant="phoenix-danger">Delete Task</Button>
    </div>
  </>
);

export default OthersInformation;
