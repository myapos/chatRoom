import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import configureStore from '../../store/store';
import App from '../App';
import initialState from '../../store/initialState';

jest.setTimeout(10000);
// https://github.com/facebook/jest/issues/1456
describe('App testing', () => {
  test('not entered', async () => {
    // mount(<Enter props={props} />);
    const tree = await renderer
      .create(<Provider store={configureStore(initialState)}>
        <App />
      </Provider>)
      .toJSON();

    await expect(tree).toMatchSnapshot();
    // done();
  });
});
