import * as React from 'react';
import { connect } from 'react-redux';
import { FxChild, FxCol, FxRow } from './Fx';
import './Comments.css';
import { deletePostAction } from '../actions';
import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';

export const Comments = (props: any) => {
  const { comments, classes } = props;
  const { deletePost } = props;

  return (
    <FxCol className="">
      {comments.map((x: any) => (
        <FxChild key={x.id}>
          <div>
            <div>{x.text}</div>
            <Button variant="fab" mini color="secondary" onClick={deletePost.bind(null, x.id)}>
              <Close />
            </Button>
          </div>
        </FxChild>
      ))}
    </FxCol>
  );
}

const mapStateToProps = (state: any, ownProps: any) => ({
  comments: state.comments
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  deletePost: (id: any) => dispatch(deletePostAction(id))
});

export const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);
