import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"名人堂","description":"","frontmatter":{"title":"名人堂","article":false,"author":{"name":"CTMC Community"}},"headers":[],"relativePath":"ctmc/hall.md","filePath":"ctmc/hall.md"}');
const _sfc_main = { name: "ctmc/hall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="名人堂" tabindex="-1">名人堂 <a class="header-anchor" href="#名人堂" aria-label="Permalink to &quot;名人堂&quot;">​</a></h1><p>这里记录了 CTMC 中的一些<strong>名垂青史/臭名远扬</strong>的人。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ctmc/hall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hall as default
};
