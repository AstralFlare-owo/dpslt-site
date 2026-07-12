// .vitepress/theme/index.ts
import { nextTick, onMounted, watch } from "vue";
import { useData } from "vitepress";
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import 'vitepress-theme-teek/theme-chalk/tk-blockquote.css'
import 'vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css'
import 'vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css'
import 'vitepress-theme-teek/theme-chalk/tk-index-rainbow.css'
import 'vitepress-theme-teek/theme-chalk/tk-nav.css'
import 'vitepress-theme-teek/theme-chalk/tk-nav-blur.css'
import 'vitepress-theme-teek/theme-chalk/tk-sidebar.css'
// import 'vitepress-theme-teek/theme-chalk/tk-container-fluid.css'
import 'vitepress-theme-teek/theme-chalk/tk-container.css'
import 'vitepress-theme-teek/theme-chalk/tk-mark.css'
import 'vitepress-theme-teek/theme-chalk/tk-aside.css'
import './style/catppuccin.css'

const giscusTheme = (isDark: boolean) => isDark ? 'catppuccin_macchiato' : 'catppuccin_latte';

function syncGiscusTheme(isDark: boolean) {
  const frame = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');

  frame?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: giscusTheme(isDark) } } },
    'https://giscus.app',
  );
}

export default {
  extends: Teek,
  setup() {
    const { isDark } = useData();

    onMounted(() => {
      watch(
        isDark,
        async value => {
          await nextTick();
          syncGiscusTheme(value);
        },
        { immediate: true },
      );
    });
  },
};
