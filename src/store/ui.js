export default {
  state: {
    notification: {
      display: false,
      text: '',
      timeout: 3000,
      alertClass: 'success'
    }
  },
  getters: {
    NOTIFICATION: state => {
      return state.notification
    }
  },
  muttations: {
    SET_NOTIFICATION: (state, { display, text, alertClass }) => {
      state.notification.display = display
      state.notification.text = text
      state.notification.alertClass = alertClass
    }
  },
  actions: {}
}
