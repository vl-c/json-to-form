import * as React from 'react';

export interface RadioButtonsProps {
  id: string;
  label?: string;
  items: {
    value: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
  }[];
}

const RadioButtons = ({ id, label, items }: RadioButtonsProps): JSX.Element => (
  <div className="input-block">
    <span className="input-label">{label}</span>
    <div className="input-radio">
      {items &&
        items.map(({ value, label, checked, disabled }) => (
          <label key={value}>
            <input
              type="radio"
              name={id}
              value={value}
              disabled={Boolean(disabled)}
              defaultChecked={Boolean(checked)}
            />
            {label}
          </label>
        ))}
    </div>
  </div>
);

export default RadioButtons;
