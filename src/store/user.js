import axios from 'axios'
export default {
  state: {
    user: {}
  },
  getters: {
    USER: state => {
      return state.user
    }
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload
    }
  },
  actions: {
    LOGIN: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post('user/auth/', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true)
              localStorage.setItem('AccessToken', data.data.access)
              localStorage.setItem('user', JSON.stringify(data.data.user))
              localStorage.setItem('ReadToken', '97db18c9ec234b06876a57322ab607d9')
              commit('SET_USER', data.data.user)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    SIGNUP: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post('company/create/', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    REFRESH_TOKEN: () => {
      return new Promise((resolve, reject) => {
        axios
          .post('user/refresh/')
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
