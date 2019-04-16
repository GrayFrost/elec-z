import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage/HomePage';
import FilePage from '@/pages/FilePage/FilePage';
import PlayPage from '@/pages/PlayPage/PlayPage';
import ChatPage from '@/pages/ChatPage/ChatPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/file',
      name: 'file-page',
      component: FilePage
    },
    {
      path: '/play',
      name: 'play-page',
      component: PlayPage
    },
    {
      path: '/chat',
      name: 'chat-page',
      component: ChatPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
