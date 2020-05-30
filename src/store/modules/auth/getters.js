
export default {
  loggedIn: state => !!state.accessToken,

  authenticationErrorCode: state => state.authenticationErrorCode,

  authenticating: state => state.authenticating,

  authenticationAction: state => state.authenticationAction,

  authenticationMsg: state => state.authenticationMsg,

  authenticationMsgType: state => state.authenticationMsgType,

  refreshToken: state => state.refreshToken,

  user: state => state.user
}
