import * as React from 'react';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import RadioButtons from './RadioButtons';

const items = [
  {
    value: 'mail',
    label: 'mail',
  },
  {
    value: 'phone',
    label: 'phone',
  },
];

function renderRadioButtons() {
  return shallow(
    <RadioButtons id={'test'} label={'RadioButtons'} items={items} />
  );
}

it('RadioButtons shallow render', () => {
  const res = renderRadioButtons();
  expect(shallowToJson(res)).toMatchSnapshot();
});
