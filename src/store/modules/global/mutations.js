import { GLOBAL_MUTATIONS } from '../../mutations.type';

export default {
  [GLOBAL_MUTATIONS.set_notification_component](state, _component) {
    if (!state.NotificationComponent) {
      // state.NotificationComponent = component;
    }
  },
};
