import * as React from 'react';

export interface BaseInputProps {
  id: string;
  type: string;
  label?: string;
  value?: any;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

const BaseInput = (props: BaseInputProps): JSX.Element => {
  const { id, type, label, value, readonly, disabled } = props;

  return (
    <div className="input-block">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="input-field"
        type={type}
        id={id}
        name={id}
        readOnly={readonly}
        disabled={disabled}
        defaultValue={value}
      />
    </div>
  );
};

export default BaseInput;
