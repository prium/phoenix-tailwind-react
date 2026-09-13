import bg32 from 'assets/img/bg/bg-32.png';
import avatarPlaceholder from 'assets/img/team/avatar.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import Avatar, { Size } from 'components/base/Avatar';
import Button from 'components/base/Button';
import FeatherIcon from 'feather-icons-react';
import { Member } from 'data/users';
import {
  faChevronRight,
  faCircle,
  faEllipsis,
  faEnvelope,
  faMessage,
  faPhone,
  faUserPlus,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

interface AvatarDropdownInterface {
  user: Member;
  size: Size;
  className?: string;
  dropdownClass?: string;
}

/** `+AvatarDropdownMenu` in mixins/common/Avatar.pug (content is portaled). */
const AvatarDropdown = ({
  user,
  size,
  className,
  dropdownClass
}: AvatarDropdownInterface) => {
  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <a
          href="#!"
          role="button"
          className={cn('inline-block', dropdownClass)}
          onClick={e => e.preventDefault()}
        >
          {/* gold: `avatar: ''` renders initials, `team/avatar.webp` a marked placeholder */}
          {user.avatar ? (
            <Avatar
              src={user.avatar}
              placeholder={user.avatar === avatarPlaceholder}
              size={size}
              className={className}
            />
          ) : (
            <Avatar variant="name" size={size} className={className}>
              {user.name.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </a>
      </Dropdown.Trigger>

      <Dropdown.Content className="avatar-dropdown-menu p-0 overflow-hidden rounded-md w-80">
        <div className="relative">
          <div
            className="bg-holder -z-1!"
            style={{
              backgroundImage: `url(${bg32})`,
              backgroundSize: 'auto'
            }}
          />
          <div className="p-4">
            <div className="text-end">
              <button type="button" className="btn p-0 me-2">
                <FontAwesomeIcon icon={faUserPlus} className="text-white" />
              </button>
              <button type="button" className="btn p-0">
                <FontAwesomeIcon icon={faEllipsis} className="text-white" />
              </button>
            </div>
            <div className="text-center">
              <Avatar
                src={user.avatar}
                size="2xl"
                status="online"
                className="rounded-none w-12 h-12 relative me-2 sm:me-0 xl:me-2 mb-2"
                imageClassName="border border-subtle-subtle"
              />
              <h6 className="text-white">{user.name}</h6>
              <p className="text-light/50 font-semibold text-sm mb-2">
                @{user.username}
              </p>
              <div className="flex flex-center mb-4">
                <h6 className="text-white mb-0">
                  {user.connections}{' '}
                  <span className="font-normal text-light/75">connections</span>
                </h6>
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-subtle mx-1"
                  transform="shrink-10 up-2"
                />
                <h6 className="text-white mb-0">
                  {user.mutual}{' '}
                  <span className="font-normal text-light/75">mutual</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-soft">
          <div className="p-4 border-b border-subtle">
            <div className="flex justify-between">
              <div className="flex">
                <Button
                  variant="phoenix-secondary"
                  className="btn-square w-9.5 h-9.5 me-2"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="btn-square w-9.5 h-9.5 me-2"
                >
                  <FontAwesomeIcon icon={faMessage} />
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="btn-square w-9.5 h-9.5 me-2"
                >
                  <FontAwesomeIcon icon={faVideo} />
                </Button>
              </div>
              <Button
                variant="phoenix-primary"
                startIcon={
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                }
              >
                Send Email
              </Button>
            </div>
          </div>
          <ul className="nav flex flex-col py-4 border-b">
            <li className="nav-item">
              <a href="#!" className="nav-link px-4 flex flex-between-center">
                <FeatherIcon
                  icon="clipboard"
                  size={16}
                  className="me-2 text-default inline-block"
                />
                <span className="text-highlight flex-1 text-md font-normal">
                  Assigned Projects
                </span>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link px-4 flex flex-between-center">
                <FeatherIcon
                  icon="pie-chart"
                  size={16}
                  className="me-2 text-default"
                />
                <span className="text-highlight flex-1 text-md font-normal">
                  View activity
                </span>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 flex justify-between">
          <a href="#!" className="btn btn-link p-0 no-underline">
            Details
          </a>
          <a href="#!" className="btn btn-link p-0 no-underline text-danger">
            Unassign
          </a>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default AvatarDropdown;
