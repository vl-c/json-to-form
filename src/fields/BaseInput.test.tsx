import * as React from 'react';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import BaseInput from './BaseInput';

function renderText() {
  return shallow(
    <BaseInput
      id={'base'}
      type={'text'}
      label={'BaseInput text'}
      value={'default value'}
    />
  );
}

function renderNumber() {
  return shallow(
    <BaseInput
      id={'base'}
      type={'number'}
      label={'BaseInput number'}
      value={1000}
    />
  );
}

it('BaseInput text shallow render', () => {
  const res = renderText();
  expect(shallowToJson(res)).toMatchSnapshot();
});

it('BaseInput number shallow render', () => {
  const res = renderNumber();
  expect(shallowToJson(res)).toMatchSnapshot();
});
