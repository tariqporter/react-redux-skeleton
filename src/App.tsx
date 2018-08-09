import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { FxRow } from './components/Fx';
import { HeaderContainer } from './components/Header';
import { MainCommentContainer } from './components/MainComment';
import { CommentsContainer } from './components/Comments';
import CssBaseline from '@material-ui/core/CssBaseline';

export const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <FxRow>
          <HeaderContainer />
        </FxRow>
        <FxRow>
          <MainCommentContainer />
        </FxRow>
        <FxRow>
          <CommentsContainer />
        </FxRow>
      </div>
    </React.Fragment>
  );
}
