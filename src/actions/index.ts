
export const toggleAnonymousAction = (isAnonymous: boolean) => ({
  type: 'TOGGLE_ANONYMOUS',
  isAnonymous: !isAnonymous
});

export const addPostAction = (text: string) => ({
  type: 'ADD_POST',
  id: new Date(),
  text
});

export const deletePostAction = (id: any) => ({
  type: 'DELETE_POST',
  id
});

export const onChangeAction = (name: string, value: string) => ({
  type: 'ON_CHANGE',
  name,
  value
})