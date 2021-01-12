import { getApiClient } from '../apiUtil';

export default () => ({
  register: (name, surname, email, password) => 
     getApiClient().post(`/signup`, { 
       name: name, 
       surname: surname, 
       email: email, 
       password: password
     }),  
  login: (email, password) => 
    getApiClient().post(`/login`, { 
      email: email, 
      password: password,
      authentication: 'session'
     }),
});