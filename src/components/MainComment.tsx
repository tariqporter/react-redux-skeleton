import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { FxChild, FxCol, FxRow } from './Fx';
import './MainComment.css';
import { addPostAction, onChangeAction } from '../actions';
import { TextField, withStyles } from '@material-ui/core';

const styles = {
  root: {
  }
};

export const MainComment = (props: any) => {
  const { isAnonymous, commentPlaceholder, classes, mainComment } = props;
  const { addPost, onChange } = props;
  const marginRight = { right: 1 };

  const handleChange = (e: any) => {
    onChange(e.target.name, e.target.value);
  };

  const onEnterPress = (e: any) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      addPost(mainComment);
      e.target.value = '';
      handleChange(e);
    }
  }

  return (
    <FxChild center={true} className="main-comment">
      <TextField
        placeholder={commentPlaceholder}
        multiline
        className={classes.textField}
        margin="normal"
        fullWidth
        name="mainComment"
        onChange={handleChange}
        value={mainComment}
        onKeyDown={onEnterPress}
      />
    </FxChild>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  const firstName = state.user.FirstName;
  return {
    mainComment: state.mainComment,
    firstName,
    isAnonymous: state.isAnonymous,
    commentPlaceholder: state.isAnonymous ? `Anonymous, what's on your mind?` : `${firstName}, what's on your mind?`
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addPost: (comment: string) => dispatch(addPostAction(comment)),
  onChange: (name: string, value: string) => dispatch(onChangeAction(name, value))
})

export const MainCommentContainer = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainComment));
