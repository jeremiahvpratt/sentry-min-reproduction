# sentry-min-repro
This is a failed attempt to create a minimum reproduction of the bug documented in [this issue](https://github.com/getsentry/sentry-javascript/issues/8143)

## Installation steps
1. Clone this repository
2. Run "npm install"
3. Run "npm run dev"
4. Navigate to localhost:8080

## Reproduction steps
1. Create default Vue 3 project with vue-cli "vue create my-project"
2. Set up webpack by copying "build" and "config" directories
3. Set up main.js to initialize vue-router, sentry, and vuetify
4. Create a basic component rendered by router-view that uses a vuetify component