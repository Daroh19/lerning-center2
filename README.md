
This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
`[
### Compile and Minify for Production

```sh
npm run build
```
### Install dependencies for production

```sh
npm install primevue
npm install primeicons
npm install primeflex
npm install @primevue/themes
npm install axios
npm install vue-router@4
npm install vue-i18n@9
npm install pinia
npm install -g json-server@0.17.4
cd server
json-server --watch db.json --port 3400
```

###Structure

```sh
u4364u202317338/
├── server/
│   └── db.json
├── src/
│   ├── assets/
│   │   └── bbva-logo.svg
│   ├── registration/              ← dominio principal
│   │   ├── application/
│   │   │   └── registration.store.js  (si usas pinia, sino omitir)
│   │   ├── domain/
│   │   │   ├── branch.entity.js
│   │   │   └── attention.entity.js
│   │   ├── infrastructure/
│   │   │   ├── registration-api.js    ← base URL axios
│   │   │   ├── branch.assembler.js
│   │   │   ├── branch.service.js  (o branch-api.js)
│   │   │   ├── attention.assembler.js
│   │   │   └── attention.service.js
│   │   └── presentation/
│   │       ├── components/
│   │       │   └── branch-summary.component.vue
│   │       ├── views/
│   │       │   ├── home.component.vue
│   │       │   └── branch-attention-registry.component.vue
│   │       └── registration-routes.js
│   ├── shared/
│   │   ├── infrastructure/
│   │   │   ├── base-api.js
│   │   │   └── base-endpoint.js
│   │   └── presentation/
│   │       ├── components/
│   │       │   ├── app-header.component.vue
│   │       │   └── language-switcher.component.vue
│   │       └── views/
│   │           ├── home.component.vue  ← vista raíz
│   │           └── page-not-found.component.vue
│   ├── locales/
│   │   ├── en.json
│   │   └── es.json
│   ├── app.vue
│   ├── i18n.js
│   ├── main.js
│   └── router.js
├── .env.development
├── .env.production
├── README.md
├── index.html
├── package.json
└── vite.config.js
```
