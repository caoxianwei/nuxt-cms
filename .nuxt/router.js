import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3dcb7480 = () => import('../pages/user.vue' /* webpackChunkName: "pages/user" */).then(m => m.default || m)
const _0dbe7bc6 = () => import('../pages/sign-up.vue' /* webpackChunkName: "pages/sign-up" */).then(m => m.default || m)
const _5b31b374 = () => import('../pages/sign-reset.vue' /* webpackChunkName: "pages/sign-reset" */).then(m => m.default || m)
const _c257e7a6 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _0dafb560 = () => import('../pages/sign-in.vue' /* webpackChunkName: "pages/sign-in" */).then(m => m.default || m)
const _1127d9fe = () => import('../pages/admin/contact/index.vue' /* webpackChunkName: "pages/admin/contact/index" */).then(m => m.default || m)
const _648ed6a6 = () => import('../pages/admin/users/index.vue' /* webpackChunkName: "pages/admin/users/index" */).then(m => m.default || m)
const _7a5210c6 = () => import('../pages/admin/logos/index.vue' /* webpackChunkName: "pages/admin/logos/index" */).then(m => m.default || m)
const _ae6b9a96 = () => import('../pages/admin/articles/index.vue' /* webpackChunkName: "pages/admin/articles/index" */).then(m => m.default || m)
const _2c6162cc = () => import('../pages/admin/articles/editor.vue' /* webpackChunkName: "pages/admin/articles/editor" */).then(m => m.default || m)
const _494332a9 = () => import('../pages/admin/logos/editor.vue' /* webpackChunkName: "pages/admin/logos/editor" */).then(m => m.default || m)
const _b2c1ae6e = () => import('../pages/admin/users/editor.vue' /* webpackChunkName: "pages/admin/users/editor" */).then(m => m.default || m)
const _2f5dbb98 = () => import('../pages/detail/article/_id.vue' /* webpackChunkName: "pages/detail/article/_id" */).then(m => m.default || m)
const _0070392d = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/user",
			component: _3dcb7480,
			name: "user"
		},
		{
			path: "/sign-up",
			component: _0dbe7bc6,
			name: "sign-up"
		},
		{
			path: "/sign-reset",
			component: _5b31b374,
			name: "sign-reset"
		},
		{
			path: "/admin",
			component: _c257e7a6,
			name: "admin"
		},
		{
			path: "/sign-in",
			component: _0dafb560,
			name: "sign-in"
		},
		{
			path: "/admin/contact",
			component: _1127d9fe,
			name: "admin-contact"
		},
		{
			path: "/admin/users",
			component: _648ed6a6,
			name: "admin-users"
		},
		{
			path: "/admin/logos",
			component: _7a5210c6,
			name: "admin-logos"
		},
		{
			path: "/admin/articles",
			component: _ae6b9a96,
			name: "admin-articles"
		},
		{
			path: "/admin/articles/editor",
			component: _2c6162cc,
			name: "admin-articles-editor"
		},
		{
			path: "/admin/logos/editor",
			component: _494332a9,
			name: "admin-logos-editor"
		},
		{
			path: "/admin/users/editor",
			component: _b2c1ae6e,
			name: "admin-users-editor"
		},
		{
			path: "/detail/article/:id?",
			component: _2f5dbb98,
			name: "detail-article-id"
		},
		{
			path: "/",
			component: _0070392d,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
