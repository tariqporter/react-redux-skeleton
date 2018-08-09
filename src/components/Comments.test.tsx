import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CommentsContainer } from './Comments';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentsContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
