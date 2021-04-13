import * as React from 'react';

import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TextArea from './TextArea';

function renderTextArea() {
  return shallow(
    <TextArea
      id={'test'}
      label={'TextArea'}
      value={
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa eveniet id maxime nobis, tenetur.'
      }
    />
  );
}

it('TextArea shallow render', () => {
  const res = renderTextArea();
  expect(shallowToJson(res)).toMatchSnapshot();
});
