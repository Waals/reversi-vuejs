import Vue from 'vue'
import Router from 'vue-router'
import Game from 'components/Game'
import Menu from 'components/Menu'
import { UNSTARTED, STARTED, FINISHED } from '../constants/GameStates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        [UNSTARTED]: Menu,
        [STARTED]: Game,
        [FINISHED]: Game
      }
    }
  ]
})
