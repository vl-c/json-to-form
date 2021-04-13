import * as React from 'react';

export interface TextAreaProps {
  rows?: number;
  id: string;
  label?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

const TextArea = (props: TextAreaProps): JSX.Element => {
  const { id, rows, label, value, readonly, disabled } = props;

  return (
    <div className="input-block">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className="input-field"
        id={id}
        name={id}
        rows={rows}
        readOnly={readonly}
        disabled={disabled}
        defaultValue={value}
      />
    </div>
  );
};

export default TextArea;
