import { PARTIES_MUTATIONS } from '../../mutations.type';

export default {

  [PARTIES_MUTATIONS.send_api_req](state, action) {
    state.awaitingResponse = true;
    state.action = action;
    state.resultErrorCode = 0;
    state.resultMsg = '';
  },

  [PARTIES_MUTATIONS.api_error](state, error) {
    state.awaitingResponse = false;
    state.resultErrorCode = error.errorCode;
    state.resultMsg = 'error';
  },

  [PARTIES_MUTATIONS.api_success](state) {
    state.awaitingResponse = false;
    state.resultMsg = 'success';
    state.resultErrorCode = 0;
  },

  [PARTIES_MUTATIONS.clear_msg](state) {
    state.resultMsg = '';
    state.resultErrorCode = 0;
  },
};
