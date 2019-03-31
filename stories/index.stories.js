import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Enter from '../src/client/components/Enter';
import Display from '../src/client/components/Display';
import Button from '../src/client/components/Button';

import configureStore from '../src/client/store/store';
import initialState from '../src/client/store/initialState';

import '../src/client/css/css.styl';
import '../src/client/css/fontawesome-free-5.7.2-web/css/all.css';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Enter', module).add('login screen', () => (
  <Provider store={configureStore(initialState)}>
    <Enter />
  </Provider>
));

storiesOf('Display', module).add('Display area', () => (
  <Provider store={configureStore(initialState)}>
    <Display />
  </Provider>
));
