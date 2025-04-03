import vuetify from './vuetify'
import api from './axios'
import pinia from '../stores'
import router from '../router'

import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)

  app.config.globalProperties.$axios = api
}
