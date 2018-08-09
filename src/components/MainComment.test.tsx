import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainCommentContainer } from './MainComment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainCommentContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
