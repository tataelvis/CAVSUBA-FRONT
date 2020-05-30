import Vue from 'vue';
import { SnotifyPosition } from 'vue-snotify';
import { GLOBAL_ACTIONS } from '../../actions.type';
import { GLOBAL_MUTATIONS } from '../../mutations.type';

export default {
  async [GLOBAL_ACTIONS.set_notification_component]({ commit }, component) {
    commit(GLOBAL_MUTATIONS.set_notification_component, component);
  },
  async [GLOBAL_ACTIONS.notify_success]({ _state }, message) {
    Vue.$snotify.success(message, 'Succès', {
      showProgressBar: false,
      closeOnClick: false,
      position: SnotifyPosition.rightTop,
      timeout: 4000,
      pauseOnHover: true,
    });
  },
  async [GLOBAL_ACTIONS.notify_error]({ _state }, message) {
    Vue.$snotify.error(message, 'Erreur', {
      showProgressBar: false,
      closeOnClick: false,
      position: SnotifyPosition.rightTop,
      timeout: 4000,
      pauseOnHover: true,
    });
  },
};
