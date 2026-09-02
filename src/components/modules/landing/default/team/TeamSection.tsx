import {
  faFacebook,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bg21 from 'assets/img/bg/bg-21.png';
import bgLeft17 from 'assets/img/bg/bg-left-17.png';
import bgRight17 from 'assets/img/bg/bg-right-17.png';
import { teamMembers } from 'data/landing/default-landing-data';

/** `+Teams` / `+Team` in landing-1/Team.pug */
const TeamSection = () => (
  <section id="team">
    <div
      className="bg-holder bg-auto! bg-position-[left_center]! z-2!"
      style={{ backgroundImage: `url(${bgLeft17})` }}
    />
    <div
      className="bg-holder bg-auto! bg-position-[right_center]! z-2!"
      style={{ backgroundImage: `url(${bgRight17})` }}
    />
    <div className="absolute top-0 end-0 start-0">
      <svg
        className="w-full text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1920 368"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-emphasis-bg"
          d="M1920 0.44L0 367.74V0H1920V0.44Z"
        />
      </svg>
    </div>
    <div className="absolute bottom-0 end-0 start-0">
      <svg
        className="text-white w-full"
        viewBox="0 0 1920 368"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-emphasis-bg"
          d="M0 368L1920 0.730011L1920 368L0 368Z"
        />
      </svg>
    </div>
    <div className="container-small relative py-1 lg:px-12 2xl:px-4 z-10">
      <div className="mb-6 text-center sm:text-start">
        <h4 className="text-primary font-extrabold mb-4">Team</h4>
        <h2>Our small team behind our success</h2>
      </div>
      <p className="md:columns-2 text-center sm:text-start">
        We have a small but strong development team to follow up on the
        development process. Reach out to us for further information. The team
        is ready to answer all your questions within minutes. The efficient team
        is always at your beck and call.
      </p>
      <div className="row items-center lg:ps-20 lg:pe-16">
        {teamMembers.map(member => (
          <div className="sm:col-6 md:col-4 lg:col-3" key={member.id}>
            <div className="text-center mt-8 relative">
              <div className="team-avatar-container inline-block relative">
                <div
                  className="bg-holder bg-contain!"
                  style={{ backgroundImage: `url(${bg21})` }}
                />
                <img
                  className="rounded-md mb-4 me-auto relative"
                  src={member.image}
                  alt="..."
                />
              </div>
              <h4>{member.name}</h4>
              <h6 className="mb-4 font-semibold">{member.designation}</h6>
              <a href="#!">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-primary me-4"
                />
              </a>
              <a href="#!">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-primary me-4"
                />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-primary" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
