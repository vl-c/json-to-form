import * as React from 'react';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Form from './Form';

const formSchema = {
  items: [
    {
      label: 'count',
      type: 'number',
      id: 'first',
    },
    {
      label: 'DATE',
      type: 'date',
      id: 'datefield',
      value: '2021-04-08T23:35:58.282Z',
    },
    {
      label: 'name',
      value: 'hello',
      type: 'text',
      id: 'second',
    },
    {
      label: 'textarea',
      value: 'many text',
      type: 'textarea',
      id: 'third',
    },
    {
      label: 'checkbox',
      value: true,
      type: 'checkbox',
      id: 'cb',
    },
    {
      id: 'typeOfContact',
      type: 'radio',
      items: [
        { value: 'mail', label: 'mail' },
        { value: 'phone', label: 'phone' },
      ],
    },
  ],
};

function renderForm() {
  return shallow(<Form formSchema={formSchema} />);
}

it('Form shallow render', () => {
  const res = renderForm();
  expect(shallowToJson(res)).toMatchSnapshot();
});
