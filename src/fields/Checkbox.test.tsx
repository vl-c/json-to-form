import * as React from 'react';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CheckboxInput from './CheckboxInput';

function renderCheckboxInput() {
  return shallow(
    <CheckboxInput id={'test'} label={'CheckboxInput'} value={true} />
  );
}

it('CheckboxInput shallow render', () => {
  const res = renderCheckboxInput();
  expect(shallowToJson(res)).toMatchSnapshot();
});
