import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { IChannel, IUser } from '../App';
import { HeaderContainer } from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
