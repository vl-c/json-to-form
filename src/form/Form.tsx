import * as React from 'react';
import BaseInput, { BaseInputProps } from '../fields/BaseInput';
import TextArea, { TextAreaProps } from '../fields/TextArea';
import CheckboxInput, { CheckboxInputProps } from '../fields/CheckboxInput';
import RadioButtons, { RadioButtonsProps } from '../fields/RadioButtons';
import DateInput, { DateInputProps } from '../fields/DateInput';

export interface FormSchema {
  header?: string;
  buttons?: {
    id: string;
    type: 'button' | 'reset' | 'submit';
    value: string;
  }[];
  items?: (
    | BaseInputProps
    | (TextAreaProps & { type: string })
    | (CheckboxInputProps & { type: string })
    | (RadioButtonsProps & { type: string })
    | (DateInputProps & { type: string })
  )[];
}
interface FormProps {
  formSchema: FormSchema | null;
  submitHandler?: (res: { [key: string]: FormDataEntryValue }) => void;
}

const Form = ({ formSchema, submitHandler }: FormProps): JSX.Element => {
  const { header, items, buttons } = formSchema || {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // just example
    const res: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => (res[key] = value));
    if (submitHandler) {
      submitHandler(res);
    } else {
      console.log(res);
    }
  };

  const renderButtons = ({
    id,
    type,
    value,
  }: {
    id: string;
    type: string;
    value: string;
  }) => <input key={id} type={type} value={value} />;

  const renderField = (item: {
    id: string;
    type: string;
  }): JSX.Element | null => {
    switch (item.type) {
      case 'text':
      case 'number':
        return <BaseInput key={item.id} {...(item as BaseInputProps)} />;
      case 'textarea':
        return <TextArea key={item.id} {...(item as TextAreaProps)} />;
      case 'checkbox':
        return (
          <CheckboxInput key={item.id} {...(item as CheckboxInputProps)} />
        );
      case 'radio':
        return (
          <RadioButtons
            key={item.id}
            {...((item as unknown) as RadioButtonsProps)}
          />
        );
      case 'date':
        return <DateInput key={item.id} {...(item as DateInputProps)} />;
      default:
        return null;
    }
  };

  return (
    <>
      {header && <h2>{header}</h2>}
      <form onSubmit={handleSubmit}>
        {items && items.map(renderField)}
        <div className="input-buttons">
          {buttons && buttons.map(renderButtons)}
        </div>
      </form>
    </>
  );
};
export default Form;
