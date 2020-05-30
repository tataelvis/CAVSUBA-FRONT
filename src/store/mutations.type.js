
export const AUTHENTICATION_MUTATIONS = {
  sign_up_req: 'signUpRequest',
  login_req: 'loginRequest',
  login_success: 'loginSuccess',
  authentication_error: 'authenticationError',
  logout_success: 'logoutSuccess',
  sign_up_success: 'signUpSuccess',
  clear_msg: 'clearMsg',
  set_user: 'setUser',
  set_user_new_profile_image: 'setNewProfileImage',
  send_mail_req: 'sendEmailRequest',
  send_email_success: 'sendEmailSuccess',
  reset_state: 'resetState',
};

export const PROFILE_MUTATIONS = {
  edit_profile_success: 'edit_success',
  request_profile_edit: 'requestProfileEdit',
  edit_profile_failure: 'editProfileFailure',
  set_user_delivery_address: 'setUserDeliveryAddress',
  set_user: 'setUser',
  reset_state: 'resetState',
  set_user_new_profile_image: 'setUserNewProfileImage',
};

export const PARTIES_MUTATIONS = {
  send_api_req: 'sendApiReq',
  api_success: 'apiSuccess',
  api_error: 'apiError',
  clear_msg: 'clearMsg'
}
