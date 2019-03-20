import React from 'react';
import renderer from 'react-test-renderer';
import Enter from '../Enter';

describe('Enter testing', () => {
  const props = {
    'testState': 'test',
    received: [],
    entered: '',
    firstname: '',
    lastname: '',
  };

  test('not entered', () => {
    // mount(<Enter props={props} />);
    const tree = renderer
      .create(<Enter props={props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
