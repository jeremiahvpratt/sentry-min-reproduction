import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import HomePage from './components/HomePage.vue';

import * as Sentry from '@sentry/vue';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage,
  }],
  mode: 'history',
});

Sentry.init({
  app,
  dsn: 'insert_dsn_here',
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ['hirefly.com', /^\//],
    }),
  ],

  environment: process.env.NODE_ENV,

  trackComponents: true,
});

const vuetify = createVuetify({
  components,
  directives,
});

app.use(router);
app.use(vuetify);
app.mount('#app')
