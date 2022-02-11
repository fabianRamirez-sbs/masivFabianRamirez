// import restApi from '@/store/utils/restApi.js'

const getters = {
}
const actions = {
  GET_comic ({
    commit
  }, dataId) {
    const corsAnywhere = 'https://corsanywhere.herokuapp.com/'
    const yourUrl = `https://xkcd.com/${dataId}/info.0.json`

    fetch(corsAnywhere + yourUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    })
      .then((response) => response.json())
      .then((data) => {
        commit({
          type: 'SET_comic',
          data: data
        })
      })
      .catch((err) => console.log(err))
  },

  POST_ratings ({
    commit
  }, data) {
    commit({
      type: 'SET_ratings',
      data: data
    })
  }
}
const mutations = {
  SET_comic (state, comicData) {
    state.comic = comicData.data
  },
  SET_ratings (state, comicData) {
    state.ratingsList.push(comicData.data)
  }
}

export default {
  namespaced: true,
  dynamic: true,
  state () {
    return {
      comic: [],
      ratingsList: []
    }
  },
  getters,
  actions,
  mutations
}
