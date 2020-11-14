import { EndPoints } from '../api';
/* LOGIN */
export const UserLogin = EndPoints('/users/login/', 'post');
/* SIGNUP */
export const UserSingUp = EndPoints('/users/signup/', 'post');
/* USER-REQUEST */
export const UserRequest = EndPoints('/users/', 'get');
