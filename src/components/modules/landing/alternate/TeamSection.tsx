import bgLeft23 from 'assets/img/bg/bg-left-23.png';
import bgRight23 from 'assets/img/bg/bg-right-23.png';
import { team } from 'data/landing/alternate-landing-data';

/** `+Team` in landing-2/Team.pug */
const TeamSection = () => (
  <section className="alternate-landing-team" id="team">
    <div className="absolute w-full h-full left-0 right-0 top-0 bg-default dark:bg-subtle -skew-y-6 origin-right" />
    <div
      className="bg-holder bg-auto! bg-position-[left_center]! hidden xl:block"
      style={{ backgroundImage: `url(${bgLeft23})` }}
    />
    <div
      className="bg-holder bg-auto! bg-position-[right_center]! hidden xl:block"
      style={{ backgroundImage: `url(${bgRight23})` }}
    />
    <div className="text-center mb-20 relative">
      <h5 className="text-info mb-4">Team</h5>
      <h2 className="mb-2">
        Our small team behind <br className="sm:hidden" />
        our success
      </h2>
    </div>
    <div className="container-small relative">
      <div className="row justify-center">
        <div className="lg:col-8 xl:col-6">
          <div className="row gx-4 gy-10 justify-center">
            {team.map(member => (
              <div className="sm:col-6 md:col-4" key={member.id}>
                <div className="text-center">
                  {' '}
                  <img
                    className="w-70 sm:w-full rounded-2xl mb-4"
                    src={member.image}
                    alt=""
                  />
                  <h4>{member.name}</h4>
                  <h5 className="font-semibold">{member.designation}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
