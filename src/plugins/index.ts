import vuetify from './vuetify'
import api from './axios'
import pinia from '../stores'
import router from '../router'

import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(pinia)
    .use(vuetify)
    .use(router)

  app.config.globalProperties.$axios = api
}
