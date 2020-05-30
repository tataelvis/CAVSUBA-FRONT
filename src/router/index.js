import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from '../store'

import {
  SignUpRoute,
  LoginRoute
} from '../views/auth/auth.routes'

import { Home, HomeUser } from '../views/home/home.routes'
import {
  CreatePartyRoute,
  EditPartyRoute,
  ValidatePartyRoute
} from '../views/parties/parties.routes'

import {
  ComListRoute,
  ComUploadRoute,
  ComVerifyRoute,
  VerifyRoute
} from '../views/com/com.routes';
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    Home,
    SignUpRoute,
    LoginRoute,
    HomeUser,
    CreatePartyRoute,
    EditPartyRoute,
    ValidatePartyRoute,
    ComListRoute,
    ComUploadRoute,
    ComVerifyRoute,
    VerifyRoute
  ]
})

router.beforeEach((to, _from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!store.state.auth.accessToken

  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }
  return next()
})

router.beforeResolve((to, _from, next) => {
  if (to.name) {
    NProgress.start()
  }
  return next()
})

router.afterEach((_to, _from) => {
  NProgress.done()
})

export default router
