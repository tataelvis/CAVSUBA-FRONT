import ApiService from '../api/api.service'

import {
  LOGIN_ENDPOINT,
  USER_ENDPOINT
} from '../api/api.routes'

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

const USERS = [
  {
    username: 'user123',
    password: '123456789',
    role: 'secretary'
  },
  {
    username: 'admin',
    password: '123456789',
    role: 'admin',
  }
];




const UserService = {
  async register(user) {
    const requestData = {
      method: 'post',
      url: USER_ENDPOINT,
      data: user
    }
    try {
      const response = await ApiService.customRequest(requestData)
      return response.data
    } catch (e) {
      throw new AuthenticationError(e.response.data.code, e.response.data.message)
    }
  },

  async getUserById(id) {
    const requestData = {
      method: 'get',
      url: `${USER_ENDPOINT}/${id}`
    };
    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (e) {
      throw new AuthenticationError(e.response.data.code, e.response.data.message);
    }
  },

  async login(username, password) {

    try {
      return USERS.find(user=> (user.username === username && user.password === password));
    } catch (error) {
      if (error) {
        throw new AuthenticationError(400,
          'login-failed')
      } else {
        throw new AuthenticationError(500, 'Network error')
      }
    }
  },

  logout() {
    ApiService.removeHeader()
    // ApiService.unmount401Interceptor()
  }
}

export default UserService

export {
  UserService,
  AuthenticationError
}
