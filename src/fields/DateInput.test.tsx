import * as React from 'react';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import DateInput from './DateInput';

function renderDateInput() {
  return shallow(
    <DateInput id={'test'} label={'DateInput'} value={new Date()} />
  );
}

it('DateInput shallow render', () => {
  const res = renderDateInput();
  expect(shallowToJson(res)).toMatchSnapshot();
});
