import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';

const AuthSocialButtons = ({ title }: { title: string }) => {
  return (
    <>
      <Button
        variant="phoenix-secondary"
        className="w-full mb-4"
        startIcon={
          <FontAwesomeIcon icon={faGoogle} className="text-danger me-2 text-md" />
        }
      >
        {title} with google
      </Button>
      <Button
        variant="phoenix-secondary"
        className="w-full"
        startIcon={
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-primary me-2 text-md"
          />
        }
      >
        {title} with facebook
      </Button>
    </>
  );
};

export default AuthSocialButtons;
