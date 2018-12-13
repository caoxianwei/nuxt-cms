import Vue from 'vue'


import '../scss/main.scss'


let layouts = {

  "_admin": () => import('../layouts/admin.vue'  /* webpackChunkName: "layouts/admin" */).then(m => m.default || m),

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m),

  "_login": () => import('../layouts/login.vue'  /* webpackChunkName: "layouts/login" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"NUXT-CMS","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, viewport-fit=cover"},{"name":"renderer","content":"webkit"},{"name":"author","content":"paddy"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"black"},{"hid":"description","name":"description","content":""},{"hid":"keywords","name":"keywords","content":""},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"nuxt-cms"},{"hid":"theme-color","name":"theme-color","content":"#618cb9"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"nuxt-cms"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"nuxt-cms"},{"hid":"og:description","name":"og:description","property":"og:description","content":"A pwa program"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"apple-touch-icon","href":"\u002Ficon.png"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.7fa629a9.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.9igd2VBMkQv.png"}],"script":[{"src":"\u002Fcnzz.js"},{"src":"\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.3.1\u002Fjquery.min.js"},{"src":"\u002Fgt.js"}],"style":[],"htmlAttrs":{"lang":"en"}},
  render(h, props) {
    
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  methods: {
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    
  }
}

