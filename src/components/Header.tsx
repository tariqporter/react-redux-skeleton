import * as React from 'react';
import { connect } from 'react-redux';
import { FxChild, FxCol, FxRow } from './Fx';
import './Header.css';
import { toggleAnonymousAction } from '../actions';

export const Header = (props: any) => {
  const { channel, user, isAnonymous } = props;
  const { toggleAnonymous } = props;
  const marginRight = { right: 1 };

  return (
    <FxRow className="chat-header">
      <FxChild margin={marginRight} className="chat-header--logo">
        <i className="fas fa-comment-alt" />
      </FxChild>
      <FxCol margin={marginRight}>
        <div className="chat-header--main">CHRISTIE'S CHAT</div>
        <div className="chat-header--main-small">A Global Conversation</div>
      </FxCol>
      <div>
        <div className="chat-header--channel-title">{channel.ChannelName}</div>
      </div>
      <FxRow end={true} center={true}>
        {!isAnonymous && (
          <FxRow center={true} margin={marginRight}>
            <FxChild margin={marginRight} className="chat-header--profile-image">
              <img src={user.UserGuid} />
            </FxChild>
            <div className="chat-header--name">{user.FirstName}</div>
          </FxRow>
        )}
        <div>
          <button className="btn-default btn-none chat-header--anon" onClick={toggleAnonymous}>
            <i className={'fas ' + (isAnonymous ? 'fa-eye-slash' : 'fa-eye')} />
          </button>
        </div>
      </FxRow>
    </FxRow>
  );
}

const mapStateToProps = (state: any) => ({
  channel: state.channel,
  user: state.user,
  isAnonymous: state.isAnonymous
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleAnonymous: () => dispatch(toggleAnonymousAction(ownProps.isAnonymous))
})

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
