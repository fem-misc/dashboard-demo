/* global Vue */

import femTable from 'el-data-table'
import femForm from '@femessage/el-form-renderer'
import axios from 'axios'

Vue.use(femTable)
Vue.use(femForm)
Vue.prototype.$axios = axios

new Docute({
  target: '#app',
  sourcePath: '/source',
  plugins: [docuteDemoCode()],
  sidebar: [
    {
      title: 'demo',
      links: [
        {
          title: 'expand',
          link: '/expand'
        }
      ]
    }
  ]
})
