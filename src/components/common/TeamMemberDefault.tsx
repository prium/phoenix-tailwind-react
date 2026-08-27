import { TeamMember } from 'data/users';
import bg21 from 'assets/img/bg/bg-21.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const TeamMemberDefault = ({ member }: { member: TeamMember }) => {
  return (
    <div className="text-center mt-8 relative">
      <div className="team-avatar-container inline-block relative">
        <div
          className="bg-holder"
          style={{
            backgroundImage: `url(${bg21})`,
            backgroundSize: 'contain'
          }}
        />

        <img
          className="img-fluid rounded-md mb-4 relative"
          src={member.image}
          alt={member.name}
        />
      </div>
      <h4>{member.name}</h4>
      <h6 className="mb-4 font-semibold">{member.designation}</h6>
      <div>
        <a href="#!" className="text-primary me-4">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#!" className="text-primary me-4">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#!" className="text-primary">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberDefault;
