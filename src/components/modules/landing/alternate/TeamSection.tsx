import bgLeft from 'assets/img/bg/bg-left-23.png';
import bgRight from 'assets/img/bg/bg-right-23.png';
import { team } from 'data/landing/alternate-landing-data';
import { Col, Row } from 'react-bootstrap';

const TeamSection = () => {
  return (
    <section className="alternate-landing-team" id="team">
      <div
        className="absolute w-full h-full start-0 end-0 top-0 bg-default dark__bg-gray-1000"
        style={{ transform: 'skewY(-6deg)', transformOrigin: 'right' }}
      />
      <div
        className="bg-holder hidden xl:block"
        style={{
          backgroundImage: `url(${bgLeft})`,
          backgroundSize: 'auto',
          backgroundPosition: 'left center'
        }}
      />
      <div
        className="bg-holder hidden xl:block"
        style={{
          backgroundImage: `url(${bgRight})`,
          backgroundSize: 'auto',
          backgroundPosition: 'right center'
        }}
      />
      <div className="container-small relative">
        <div className="text-center mb-20">
          <h5 className="text-info mb-4">Team</h5>
          <h2 className="mb-2">
            Our small team behind <br className="sm:hidden" /> our success
          </h2>
        </div>
        <Row className="justify-center">
          <Col lg={8} xl={6}>
            <Row className="gx-4 gy-10 justify-center">
              {team.map(member => (
                <Col key={member.id} sm={6} md={4}>
                  <div className="text-center">
                    <img
                      src={member.image}
                      alt=""
                      className="w-70 sm:w-full rounded-2xl mb-4"
                    />
                    <h4>{member.name}</h4>
                    <h5 className="font-semibold">{member.designation}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TeamSection;
