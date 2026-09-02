/* eslint-disable @typescript-eslint/no-non-null-assertion */
import classNames from 'classnames';
import Button from 'components/base/Button';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router';

const totalInputLength = 6;

const TwoFAForm = ({ layout }: { layout?: 'simple' | 'card' | 'split' }) => {
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

  return (
    <div>
      <div className={classNames({ '2xl:px-8': !(layout === 'split') })}>
        <div
          className={classNames('text-center', {
            'mb-10': !(layout === 'split')
          })}
        >
          <h4 className="text-highlight">Enter the verification code</h4>
          <p className="text-subtle mb-0">
            An email containing a 6-digit verification code has been sent to the
            email address - exa*********.com
          </p>
          <p className="text-sm mb-8">
            Don’t have access?
            <Link to="#!"> Use another method</Link>
          </p>
          <div className="verification-form">
            <div className="flex items-center gap-2 mb-4">
              {Array(totalInputLength)
                .fill('')
                .map((_, index) => (
                  <React.Fragment key={index}>
                    <Form.Control
                      ref={(el: HTMLInputElement) => {
                        inputRefs.current[index] = el;
                      }}
                      className="px-2 text-center"
                      type="number"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange(e, index)
                      }
                    />
                    {index === 2 && <span>-</span>}
                  </React.Fragment>
                ))}
            </div>
            <Form.Check type="checkbox" className="text-start mb-6">
              <Form.Check.Input
                type="checkbox"
                name="2fa-checkbox"
                id="2fa-checkbox"
              />
              <Form.Check.Label
                className="text-base font-medium"
                htmlFor="2fa-checkbox"
              >
                Don’t ask again on this device
              </Form.Check.Label>
            </Form.Check>
            <Button
              variant="primary"
              className="w-full mb-8"
              type="submit"
              disabled={otp.length < totalInputLength}
            >
              Verify
            </Button>
            <Link to="#!" className="text-md">
              Didn’t receive the code?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFAForm;
