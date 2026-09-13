import { Dropdown } from '@hummingbirdui/react';

const ActionDropdownItems = () => {
  return (
    <>
      <Dropdown.Item>View</Dropdown.Item>
      <Dropdown.Item>Export</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item className="text-danger">Remove</Dropdown.Item>
    </>
  );
};

export default ActionDropdownItems;
