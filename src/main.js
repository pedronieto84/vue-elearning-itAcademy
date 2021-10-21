import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/a11y-dark.css";
import javascript from 'highlight.js/lib/languages/javascript.js';
import VueSnip from 'vue-snip'

hljs.registerLanguage('javascript', javascript);

createApp(App).use(store).use(router).use(hljsVuePlugin).use(VueSnip).mount('#app');