import React, { ReactNode } from 'react';
import { Form } from 'react-bootstrap';

export interface CheckboxItemProps {
  type?: 'checkbox' | 'radio';
  name: string;
  label: string | ReactNode;
  value: string | number;
}

const CheckboxItem = ({
  type = 'checkbox',
  name,
  label,
  value
}: CheckboxItemProps) => {
  return (
    <Form.Check
      type={type}
      id={String(value)}
      className="mb-0 flex items-center gap-2"
    >
      <Form.Check.Input
        type={type}
        value={value}
        name={name}
        className="mt-0"
      />
      <Form.Check.Label className="block leading-sm text-base text-default font-normal mb-0">
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

export default CheckboxItem;
