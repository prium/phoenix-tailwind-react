import React from 'react';
import { Form } from 'react-bootstrap';

const SocialSettingsSideBar = () => {
  return (
    <>
      <div className="border-bottom border-light border-dashed pb-3 mb-4">
        <h5 className="text-default mb-3">
          Who will be able to see your profile?
        </h5>
        <Form.Check type="radio" id="onlyMe">
          <Form.Check.Input
            type="radio"
            name="profiileVisibility"
            value="option1"
            defaultChecked
          />
          <Form.Check.Label htmlFor="onlyMe" className="text-base">
            Only me
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="radio" id="myFollowers">
          <Form.Check.Input
            type="radio"
            name="profiileVisibility"
            value="option2"
          />
          <Form.Check.Label htmlFor="myFollowers" className="text-base">
            My followers
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="radio" id="everyone">
          <Form.Check.Input
            type="radio"
            name="profiileVisibility"
            value="option3"
          />
          <Form.Check.Label htmlFor="everyone" className="text-base">
            Everyone
          </Form.Check.Label>
        </Form.Check>
      </div>
      <div className="border-bottom border-light border-dashed pb-3 mb-4">
        <h5 className="text-default mb-3">Who can tag you?</h5>
        <Form.Check type="radio" id="tagGroupMembers">
          <Form.Check.Input
            type="radio"
            name="tagGroupMembers"
            value="option1"
          />
          <Form.Check.Label htmlFor="tagGroupMembers" className="text-base">
            Group Members
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="radio" id="tagEveryone">
          <Form.Check.Input
            type="radio"
            name="tagGroupMembers"
            value="option2"
            defaultChecked
          />
          <Form.Check.Label htmlFor="tagEveryone" className="text-base">
            Everyone
          </Form.Check.Label>
        </Form.Check>
      </div>
      <div className="border-bottom border-light border-dashed pb-3 mb-4">
        <Form.Check type="checkbox" id="showEmail">
          <Form.Check.Input
            type="checkbox"
            name="showEmail"
            value="option1"
            defaultChecked
          />
          <Form.Check.Label htmlFor="showEmail" className="text-base">
            Allow users to see my email
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="checkbox" id="showExperiences">
          <Form.Check.Input
            type="checkbox"
            name="showExperiences"
            value="option2"
          />
          <Form.Check.Label htmlFor="showExperiences" className="text-base">
            Allow users to see my experiences
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="checkbox" id="showFollowers">
          <Form.Check.Input
            type="checkbox"
            name="showFollowers"
            value="option3"
          />
          <Form.Check.Label htmlFor="showFollowers" className="text-base">
            Allow users to see my followers
          </Form.Check.Label>
        </Form.Check>
      </div>
      <div className="mb-4">
        <Form.Check type="checkbox" id="showPhone" className="form-switch">
          <Form.Check.Input
            type="checkbox"
            name="showPhone"
            value="option2"
            defaultChecked
          />
          <Form.Check.Label htmlFor="showPhone" className="text-base">
            See my your phone number
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="checkbox" id="permitFollow" className="form-switch">
          <Form.Check.Input
            defaultChecked
            type="checkbox"
            name="permitFollow"
            value="option3"
          />
          <Form.Check.Label htmlFor="permitFollow" className="text-base">
            Permit users to follow you.
          </Form.Check.Label>
        </Form.Check>
      </div>
    </>
  );
};

export default SocialSettingsSideBar;
