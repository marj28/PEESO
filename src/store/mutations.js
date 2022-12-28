export const set = property => (state, payload) => (state[property] = payload)

export const toggle = property => state => (state[property] = !state[property])

export default {
  setDrawer: set('drawer'),
  setResponsive: set('responsive'),
  setLoggedIn: set('is_logged'),
  setAlert: set('show_alert'),
  setAlertColor: set('alert_color'),
  setAlertText: set('alert_text')
}
