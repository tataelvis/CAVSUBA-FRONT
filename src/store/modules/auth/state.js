
const initialState = {
  authenticating: false,
  authenticationAction: null,
  accessToken: null,
  refreshToken: null,
  authenticationErrorCode: 0,
  authenticationMsg: '',
  authenticationMsgType: '',
  user: null
}

const state = { ...initialState }

export default state

export { initialState, state }
