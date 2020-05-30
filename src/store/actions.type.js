
export const AUTHENTICATION_ACTIONS = {
  register: 'register',
  login: 'login',
  logout: 'logout',
  clear_msg: 'clearMsg',
  send_email: 'sendEmail',
  reset_state: 'resetState',
};

export const PROFILE_ACTIONS = {
  edit_profile: 'editProfile',
  edit_profile_image: 'editProfileImage',
  clear_msg: 'clearMsg',
  update_password: 'updatePassword',
  reset_password: 'resetPassword',
  contact_admin: 'contactAdmin',
  add_delivery_address: 'addDeliveryAddress',
  reset_state: 'resetState',
};

export const PARTIES_ACTIONS = {
  add_party: 'add',
  update_party: 'update',
  get_party_by_id: 'getPartyById',
  get_parties: 'getParties',
  validate_party: 'validateParty'
}
