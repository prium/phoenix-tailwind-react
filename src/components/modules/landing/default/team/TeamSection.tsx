import TeamMemberDefault from 'components/common/TeamMemberDefault';
import { defaultTeamMembers } from 'data/users';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bgLeft17 from 'assets/img/bg/bg-left-17.png';
import bgRight17 from 'assets/img/bg/bg-right-17.png';

const TeamSection = () => {
  return (
    <section id="team">
      <div
        className="absolute h-70 w-full bg-default"
        style={{ transform: 'skew(0,-10deg)', top: '10%' }}
      />
      <div
        className="bg-holder z-2"
        style={{
          backgroundImage: `url(${bgLeft17})`,
          backgroundSize: 'auto',
          backgroundPosition: 'left center'
        }}
      />
      <div
        className="bg-holder z-2"
        style={{
          backgroundImage: `url(${bgRight17})`,
          backgroundSize: 'auto',
          backgroundPosition: 'right center'
        }}
      />

      <div
        className="container-small relative py-1 lg:px-12 2xl:px-4"
        style={{ zIndex: 10 }}
      >
        <Row>
          <Col xs={12} className="mb-6 text-center sm:text-start">
            <h4 className="text-primary font-black mb-4">Team</h4>
            <h2>Our small team behind our success</h2>
          </Col>
          <Col md={6} className="text-center sm:text-start">
            <p>
              We have a small but strong development team to follow up on the
              development process. Reach out to us for further information.
            </p>
          </Col>
          <Col md={6} className="text-center sm:text-start">
            <p>
              The team is ready to answer all your questions within minutes. The
              efficient team is always at your beck and call.
            </p>
          </Col>
        </Row>
        <Row className="items-center lg:ps-20 lg:pe-16">
          {defaultTeamMembers.map(member => (
            <Col key={member.name} sm={6} md={4} lg={3}>
              <TeamMemberDefault member={member} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TeamSection;
