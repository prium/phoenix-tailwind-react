/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Input } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import AuthLogoLink from 'components/common/AuthLogoLink';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Link } from 'react-router';
import { AuthLayout } from './SignInForm';

const totalInputLength = 6;

/** pug: pages/authentication/{simple,split,card}/2FA.pug */
const TwoFAForm = ({ layout }: { layout: AuthLayout }) => {
  const [otp, setOtp] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = e.target;

    if (value) {
      [...value].slice(0, totalInputLength).forEach((char, charIndex) => {
        if (inputRefs.current && inputRefs.current[index + charIndex]) {
          inputRefs.current[index + charIndex]!.value = char;
          inputRefs.current[index + charIndex + 1]?.focus();
        }
      });
    } else {
      inputRefs.current[index]!.value = '';
      inputRefs.current[index - 1]?.focus();
    }

    const updatedOtp = inputRefs.current.reduce(
      (acc, input) => acc + (input?.value || ''),
      ''
    );
    setOtp(updatedOtp);
  };

  const content = (
    <div className={layout === 'simple' ? 'text-center mb-10' : 'text-center'}>
      {layout === 'card' && <AuthLogoLink />}
      <h4 className="text-highlight">Enter the verification code</h4>
      <p className="text-subtle mb-0">
        An email containing a 6-digit verification code has been sent to the
        email address - exa*********.com{' '}
      </p>
      <p className="text-sm mb-8">
        {'Don’t have access? '}
        <Link to="#!">Use another method</Link>
      </p>
      <form className="verification-form" data-2fa-form="data-2fa-form">
        <div className="flex items-center gap-2 mb-4">
          {Array(totalInputLength)
            .fill('')
            .map((_, index) => (
              <React.Fragment key={index}>
                <Input
                  ref={(el: HTMLInputElement | null) => {
                    inputRefs.current[index] = el;
                  }}
                  className="px-2 text-center"
                  type="number"
                  // the gold's `twoFAVerificarionInit()` focuses the first box
                  // on window load
                  autoFocus={index === 0}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(e, index)
                  }
                />
                {index === 2 && <span>-</span>}
              </React.Fragment>
            ))}
        </div>
        <div className="form-check text-start mb-6">
          <input
            className="form-check-input"
            id="2fa-checkbox"
            type="checkbox"
          />
          <label className="font-medium" htmlFor="2fa-checkbox">
            Don’t ask again on this device
          </label>
        </div>
        <Button
          variant="primary"
          className="w-full mb-8"
          type="submit"
          disabled={otp.length < totalInputLength}
        >
          Verify
        </Button>
        <Link to="#!" className="text-md">
          Didn’t receive the code?{' '}
        </Link>
      </form>
    </div>
  );

  return layout === 'simple' ? (
    <div className="2xl:px-8">{content}</div>
  ) : (
    content
  );
};

export default TwoFAForm;
