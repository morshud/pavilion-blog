/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
import axios from 'axios'
export default {
  state: {
    blogs: [],
    userDetails: '',
    category: [],
    tag: [],
    modalData: {}
  },
  getters: {
    BLOGS: state => {
      return state.blogs
    },
    CATEGORY: state => {
      return state.category
    },
    TAG: state => {
      return state.tag
    },
    USER_DETAILS: state => {
      return state.userDetails
    }
  },
  mutations: {
    SET_BLOGS: (state, payload) => {
      state.blogs = payload
    },
    SET_CATEGORY: (state, payload) => {
      state.category = payload
    },
    SET_TAG: (state, payload) => {
      state.tag = payload
    },
    SET_USER_DETAILS: (state, payload) => {
      state.userDetails = payload
    },
    setModalData: (state, payload) => {
      state.modalData = payload
    }
  },
  actions: {
    GET_BLOGS: async ({ commit }) => {
      const { data } = await axios.get('blog/all/')
      commit('SET_BLOGS', data.data)
    },
    GET_CATEGORY: async ({ commit }) => {
      const { data } = await axios.get('category/all/')
      commit('SET_CATEGORY', data.data)
    },
    GET_TAG: async ({ commit }) => {
      const { data } = await axios.get('tag/all/')
      commit('SET_TAG', data.data)
    },
    GET_USER: async ({ commit }) => {
      let user = JSON.parse(localStorage.getItem('user'))
      console.log(user.id)
      commit('SET_USER_DETAILS', user)
    },
    LOGOUT: ({ commit }) => {
      localStorage.removeItem('user')
      localStorage.removeItem('AccessToken')
      this.$router.push({ name: 'Login' })
    },
    openModal (context, data) {
      context.commit('setModalData', data.data)
    },
    CREATE_BLOG: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post('blog/create/', payload)
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
    CREATE_POST: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post('post/create/', payload)
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
    CREATE_CATEGORY: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post('category/create/', payload)
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
    CREATE_TAG: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post('tag/create/', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
