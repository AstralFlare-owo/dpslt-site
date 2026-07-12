import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"处罚公示","description":"","frontmatter":{"title":"处罚公示","article":false,"author":{"name":"CTMC Community"}},"headers":[],"relativePath":"ctmc/announce/punishments.md","filePath":"ctmc/announce/punishments.md"}');
const _sfc_main = { name: "ctmc/announce/punishments.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="处罚公示" tabindex="-1">处罚公示 <a class="header-anchor" href="#处罚公示" aria-label="Permalink to &quot;处罚公示&quot;">​</a></h1><p>这里是 CTMC 处罚玩家的公示清单。</p><p>若您的处罚已经结束，可以联系管理组从公示中清除。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ctmc/announce/punishments.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const punishments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  punishments as default
};
