import { isValidToken } from './../../utils/jwt-utils';
import { setLoggedIn } from './actions';

export const manageToken = (store) => () => {

  const { token, isLoggedIn } = store.getState().auth;

  const tokenIsValid = isValidToken(token);
  
  if (tokenIsValid !== isLoggedIn) {
    token ? localStorage.setItem('token', token) : localStorage.removeItem('token');
    store.dispatch(setLoggedIn(tokenIsValid));
  }
}