import { EndPoints } from '../api';
/* LOGIN */
export const UserLogin = EndPoints('/users/login/', 'POST');
/* SIGNUP */
export const UserSingUp = EndPoints('/users/signup/', 'POST');
/* USER-REQUEST */
export const UserRequest = EndPoints('/users/', 'GET');
