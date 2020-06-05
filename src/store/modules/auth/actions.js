import { UserService } from '../../../services/common/user.service'
import { AUTHENTICATION_ACTIONS } from '../../actions.type'
import { AUTHENTICATION_MUTATIONS } from '../../mutations.type'
import router from '../../../router'

export default {
  async [AUTHENTICATION_ACTIONS.register] ({ commit, dispatch }, user) {
    commit(AUTHENTICATION_MUTATIONS.sign_up_req)
    try {
      await UserService.register(user)
      commit(AUTHENTICATION_MUTATIONS.sign_up_success, 'sign-up-success')
      router.push({ name: 'login' })
    } catch (error) {
      console.log(error)
      commit(AUTHENTICATION_MUTATIONS.authentication_error,
        { errorCode: error.errorCode, errorMessage: error.message })
      return false
    }
  },

  async [AUTHENTICATION_ACTIONS.login] ({ commit, dispatch }, { username, password }) {
    commit(AUTHENTICATION_MUTATIONS.login_req)
    try {
      const user = await UserService.login(username, password);
      if (user) {
      const token = '48799552287885kijjj875';
      commit(AUTHENTICATION_MUTATIONS.login_success, { token, user })
      if(user.role === 'admin') {
        router.push('/com-list');
      } else {
        router.push('/com-upload')
      }
      return user;
      } else {
        return 'authentication-failed';
      }
    } catch (e) {
      commit(AUTHENTICATION_MUTATIONS.authentication_error,
        { errorCode: e.errorCode, errorMessage: e.message })
      return 'authentication-failed'
    }
  },

  [AUTHENTICATION_ACTIONS.logout] ({ commit }) {
    UserService.logout()
    commit(AUTHENTICATION_MUTATIONS.reset_state)
    // commit(`profile/${PROFILE_MUTATIONS.reset_state}`, null, { root: true })
    router.push('/login')
  },

  [AUTHENTICATION_ACTIONS.clear_msg] ({ commit }) {
    commit(AUTHENTICATION_MUTATIONS.clear_msg)
  }
}
