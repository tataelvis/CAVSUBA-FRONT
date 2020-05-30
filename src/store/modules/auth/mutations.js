import { AUTHENTICATION_MUTATIONS } from '../../mutations.type'
import { initialState } from './state'

export default {

  [AUTHENTICATION_MUTATIONS.sign_up_req] (state) {
    state.authenticating = true
    state.authenticationAction = 'register'
    state.authenticationErrorCode = 0
  },
  [AUTHENTICATION_MUTATIONS.login_req] (state) {
    state.authenticating = true
    state.authenticationAction = 'login'
    state.authenticationErrorCode = 0
  },

  [AUTHENTICATION_MUTATIONS.send_mail_req] (state) {
    state.authenticating = true
    state.authenticationAction = 'send-email'
    state.authenticationErrorCode = 0
  },

  [AUTHENTICATION_MUTATIONS.login_success] (state, data) {
    state.accessToken = data.token
    state.user = data.user
    state.authenticationMsg = 'login-success'
    state.authenticationMsgType = 'success'
    state.authenticating = false
  },

  [AUTHENTICATION_MUTATIONS.send_email_success] (state) {
    state.authenticationMsg = 'send-email-success'
    state.authenticationMsgType = 'success'
    state.authenticating = false
  },

  [AUTHENTICATION_MUTATIONS.authentication_error] (state, { errorCode, errorMessage }) {
    state.authenticating = false
    state.authenticationErrorCode = errorCode
    state.authenticationMsg = errorMessage
    state.authenticationMsgType = 'danger'
  },

  [AUTHENTICATION_MUTATIONS.logout_success] (state) {
    state.accessToken = ''
  },

  [AUTHENTICATION_MUTATIONS.sign_up_success] (state, msg) {
    state.authenticating = false
    state.authenticationMsg = msg
    state.authenticationMsgType = 'success'
  },

  [AUTHENTICATION_MUTATIONS.clear_msg] (state) {
    state.authenticationMsg = ''
    state.authenticationAction = null
    state.authenticationMsgType = ''
  },

  [AUTHENTICATION_MUTATIONS.reset_state] (state) {
    Object.assign(state, initialState)
  }
}
