import {AccountStatus, AppState, initialState} from '../contexts/GlobalContext';

export const setUser = (user: any) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};

export const setAccountStatus = (status: AccountStatus) => {
  return {
    type: 'SET_ACCOUNT_STATUS',
    payload: status,
  };
};

export const setAuth = (auth: typeof initialState.auth) => {
  return {
    type: 'SET_AUTH',
    payload: auth,
  };
};

export const changeUserName = (name: string) => {
  return {
    type: 'CHANGE_NAME',
    payload: name,
  };
};

export const getContact = (id: string) => {
  return {
    type: 'GET_CONTACT',
    payload: id,
  };
};

export const clearData = () => {
  return {
    type: 'CLEAR_DATA',
    payload: '',
  };
};
