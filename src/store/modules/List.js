import axios from 'axios'

const Best = {
  state: {
    total: null, // Best 총 개수
    best: null,
  },
  getters: {
    best: (state) => {
      return state.best
    }
  },
  mutations: {
    getBest(state, best) { state.best = best; }
  },
  actions: {
    getBest: (context) => {
      axios.get('static/test.json').then(res => {
        context.commit('getBest', res.data)
      })
    }
  }
}

export default Best