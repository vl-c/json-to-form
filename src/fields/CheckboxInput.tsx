import * as React from 'react';

export interface CheckboxInputProps {
  id: string;
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
  value?: boolean;
}

const CheckboxInput = (props: CheckboxInputProps): JSX.Element => {
  const { id, label, value, readonly, disabled } = props;

  return (
    <div className="input-block">
      <input
        className="input-checkbox"
        id={id}
        name={id}
        type="checkbox"
        readOnly={readonly}
        disabled={disabled}
        defaultChecked={Boolean(value)}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default CheckboxInput;
