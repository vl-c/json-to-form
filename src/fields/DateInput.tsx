import * as React from 'react';

export interface DateInputProps {
  id: string;
  label?: string;
  value?: Date;
}

const DateInput = (props: DateInputProps): JSX.Element => {
  const { id, label, value = new Date() } = props;
  // better use datepickers and moment/another date libs
  // without timezone, just for example
  const dateValue = value.toISOString().split('T')[0];

  return (
    <div className="input-block">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="input-field date-field"
        id={id}
        name={id}
        type="date"
        defaultValue={dateValue}
      />
    </div>
  );
};

export default DateInput;
