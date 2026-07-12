import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"主页","description":"","frontmatter":{"layout":"home","teekHome":true,"vpHome":false,"title":"主页","banner":{"name":"深板岩酱 Deepslate","bgStyle":"fullImg","imgSrc":"/wallpaper.png","descStyle":"types","description":["一块板岩是平凡而脆弱的，但它的每一片岩层都有自己的故事。"],"switchShuffle":true,"typesInTime":100,"typesOutTime":50,"typesNextTime":1000},"friendLink":{"enabled":true,"list":[{"name":"CrystaRin 镜雨亭","link":"https://crystal.stellalyr.ink/","avatar":"https://crystal.stellalyr.ink/assets/perlica_avatar.png","desc":"我们不是理想的陈述者，而是理想的践行者。"},{"name":"KitraMGP 的遐想空间","link":"https://blog.kitramgp.cn/","avatar":"https://blog.kitramgp.cn/img/kitra1.jpg","desc":"这里记录了 Kitra 在计算机技术上的胡思乱想，分享编程实践、技术笔记和校园生活，写给同时热爱技术的你。"}]},"article":false},"headers":[],"relativePath":"blog/index.md","filePath":"blog/index.md"}');
const _sfc_main = { name: "blog/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
