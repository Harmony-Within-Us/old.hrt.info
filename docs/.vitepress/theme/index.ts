import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData } from 'vitepress'
import type { EnhanceAppContext } from 'vitepress'
import { watchEffect } from 'vue';
import './style/main.css'
import './style/vars.css'

const theme = {
  extends: DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    // components
    // app.component('Badge', Badge)

    // plugins
    // app.use(pinia);
  },
  setup() {
    const { lang } = useData()
    watchEffect(() => {
      if (typeof document !== 'undefined')
        document.cookie = `nf_lang=${lang.value}; expires=Sun, 1 Jan 2025 00:00:00 UTC; path=/`
    })
  },
};

export { theme as default };