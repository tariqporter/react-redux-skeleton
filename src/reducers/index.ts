const initialState = {
  mainComment: '',
  channel: {
    ChannelName: 'Test Channel'
  },
  user: {
    FirstName: 'Tariq',
    UserGuid: 'http://nyiissrv11p:9111/ChristiesChatImages/728a1cdd-105a-49c2-9b73-e2cecd06374c.jpg'
  },
  isAnonymous: false,
  comments: [] as any[]
};

export default (state = initialState, action: any) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'TOGGLE_ANONYMOUS':
      newState.isAnonymous = !newState.isAnonymous;
      return newState;
    case 'ADD_POST':
      newState.comments = [...newState.comments, {
        id: action.id,
        text: action.text
      }];
      return newState;
    case 'DELETE_POST':
      newState.comments = newState.comments.filter(x => x.id !== action.id);
      return newState;
    case 'ON_CHANGE':
      newState[action.name] = action.value
      return newState;
    default:
      return state;
  }
}