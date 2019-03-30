import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import configureStore from '../../store/store';
import App from '../App';
import initialState from '../../store/initialState';
import setLocalStorage from '../../utils/tests/setLocalStorage';

jest.setTimeout(10000);
// https://github.com/facebook/jest/issues/1456
describe('App testing', () => {
  beforeAll(() => {
    // mock - redefine localStorage for node environment
    // https://auth0.com/blog/testing-react-applications-with-jest/
    setLocalStorage();
  });

  test('not entered', async () => {
    // mount(<Enter props={props} />);
    const tree = await renderer
      .create(
        <Provider store={configureStore(initialState)}>
          <App />
        </Provider>
      )
      .toJSON();

    await expect(tree).toMatchSnapshot();
    // done();
  });
});
