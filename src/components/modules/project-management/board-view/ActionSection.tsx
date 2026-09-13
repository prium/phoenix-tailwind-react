import {
  faAngleDown,
  faCheck,
  faEllipsisVertical,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dropdown, Row } from '@hummingbirdui/react';
import DatePicker from 'components/base/DatePicker';
import { actionItems, addToCardItems } from 'data/project-management/actions';

interface ActionItem {
  icon: Parameters<typeof FontAwesomeIcon>[0]['icon'];
  label: string;
}

/** `.dropdown-menu.px-2` list of `btn-sm btn-subtle-secondary` buttons */
const ActionButtonList = ({ items }: { items: ActionItem[] }) => (
  <>
    {items.map((item, index) => (
      <button
        type="button"
        key={item.label}
        className={`btn btn-sm btn-subtle-secondary rounded-md flex items-center justify-start w-full${
          index !== items.length - 1 ? ' mb-2' : ''
        }`}
      >
        <FontAwesomeIcon icon={item.icon} className="me-2" />
        {item.label}
      </button>
    ))}
  </>
);

/** Top action bar of `+ProjectsBoardViewModal` (ProjectDetailsModal.pug) */
const ActionSection = () => {
  return (
    <Row className="gx-0 gy-4 border-b px-8 lg:px-10 py-6 xl:p-0">
      <Col xs={12} xl={5} className="xl:border-e">
        <Row className="h-full items-center xl:px-10 justify-between xl:justify-start">
          <Col xs="auto">
            <p className="text-subtle text-sm font-semibold mb-0">Created</p>
            <p className="text-highlight text-md mb-0">Jan 3, 3:24 pm</p>
          </Col>
          <Col xs={7} lg={6}>
            <DatePicker
              placeholder="Set the due date"
              options={{
                defaultDate: 'Mar 1, 2022'
              }}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} xl={7}>
        <div className="xl:px-10 xl:py-6">
          <Row className="g-2 items-center">
            <Col xs={12} lg="auto" className="flex flex-1">
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <button
                    type="button"
                    className="hidden sm:flex btn btn-subtle-secondary dropdown-toggle dropdown-caret-none items-center me-2"
                  >
                    Add to card
                    <FontAwesomeIcon icon={faPlus} className="ms-2" />
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Trigger asChild>
                  <button
                    type="button"
                    className="sm:hidden btn btn-icon btn-icon-lg btn-subtle-secondary dropdown-toggle dropdown-caret-none flex items-center me-2"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Content align="end" className="px-2">
                  <ActionButtonList items={addToCardItems} />
                </Dropdown.Content>
              </Dropdown>
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <button
                    type="button"
                    className="btn btn-square btn-icon-lg bg-subtle text-emphasis hover:bg-muted rounded-md me-2"
                  >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Content align="end" className="px-2">
                  <ActionButtonList items={actionItems} />
                </Dropdown.Content>
              </Dropdown>
            </Col>
            <Col xs="auto" className="flex">
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <button
                    type="button"
                    className="btn btn-subtle-info dropdown-toggle dropdown-caret-none flex items-center me-2"
                  >
                    Review
                    <FontAwesomeIcon icon={faAngleDown} className="ms-2" />
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Content align="end" className="py-2">
                  <Dropdown.Item>View</Dropdown.Item>
                  <Dropdown.Item>Export</Dropdown.Item>
                  <Dropdown.Separator />
                  <Dropdown.Item className="text-danger">Remove</Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
              <div className="btn btn-subtle-secondary btn-square">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default ActionSection;
