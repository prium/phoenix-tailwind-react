import Badge from 'components/base/Badge';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { projectTags } from 'data/project-management/projectDetailsData';
import { members } from 'data/users';

/** `+MembersTags` in mixins/project-management/ProjectDetails.pug */
const TeamMembers = () => {
  return (
    <>
      <h4 className="text-emphasis mb-6">Team members</h4>
      <div className="flex mb-14">
        {members.slice(0, 5).map(member => (
          <AvatarDropdown
            key={member.id}
            user={member}
            size="xl"
            className="me-1"
            dropdownClass="dropdown-caret-none outline-none"
          />
        ))}
      </div>
      <h4 className="text-emphasis mb-7">Tags</h4>
      {projectTags.map(tag => (
        <Badge variant="tag" className="me-2 mb-2" key={tag}>
          {tag}
        </Badge>
      ))}
    </>
  );
};

export default TeamMembers;
