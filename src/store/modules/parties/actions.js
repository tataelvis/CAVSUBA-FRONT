import router from '@/router'
import { PartyService } from '../../../services/common/parties.service'
import { PARTIES_ACTIONS, GLOBAL_ACTIONS } from '../../actions.type'
import { PARTIES_MUTATIONS } from '../../mutations.type'


export default {

  async [PARTIES_ACTIONS.add_party] ({ commit }, party) {
    commit(PARTIES_MUTATIONS.send_api_req, 'add-party')
    try {
      const data = await PartyService.addParty(party)
      commit(PARTIES_MUTATIONS.api_success)
      router.push({ name: 'home-user' })
      return data
    } catch (e) {
      commit(PARTIES_MUTATIONS.api_error,
        { errorCode: e.errorCode, errorMessage: e.message })
      return false
    }
  },

  async [PARTIES_ACTIONS.update_party] ({ commit }, party) {
    commit(PARTIES_MUTATIONS.send_api_req, 'update-party')
    try {
      const data = await PartyService.updateParty(party)
      commit(PARTIES_MUTATIONS.api_success)
      router.push({ name: 'home-user' })
      return data
    } catch (e) {
      commit(PARTIES_MUTATIONS.api_error,
        { errorCode: e.errorCode, errorMessage: e.message })
      return false
    }
  },

  async [PARTIES_ACTIONS.get_parties] ({ commit }, order) {
    commit(PARTIES_MUTATIONS.send_api_req, 'get-parties')
    try {
      const data = await PartyService.getParties(order)
      commit(PARTIES_MUTATIONS.api_success)
      return data
    } catch (e) {
      commit(PARTIES_MUTATIONS.api_error,
        { errorCode: e.errorCode, errorMessage: e.message })
      return false
    }
  },
  async [PARTIES_ACTIONS.get_party_by_id] ({ commit }, partyId) {
    commit(PARTIES_MUTATIONS.send_api_req, 'get-party-by-id')
    try {
      const data = await PartyService.getPartyById(partyId)
      commit(PARTIES_MUTATIONS.api_success)
      return data
    } catch (e) {
      commit(PARTIES_MUTATIONS.api_error,
        { errorCode: e.errorCode, errorMessage: e.message })
      return false
    }
  },
  async [PARTIES_ACTIONS.validate_party] ({ commit }, { validation, logo }) {
    commit(PARTIES_MUTATIONS.send_api_req, 'validate-party')
    try {
      const data = await PartyService.validate(validation, logo)
      commit(PARTIES_MUTATIONS.api_success)
      return data
    } catch (e) {
      commit(PARTIES_MUTATIONS.api_error,
        { errorCode: e.errorCode, errorMessage: e.message })
      return false
    }
  }
}
