import React from 'react';
import { mount } from 'enzyme';
import Demo from './grouping-with-ui';

describe('MUI: grouping by drag\'n\'drop', () => {
  it('should work', () => {
    mount(<Demo />);
  });
});
