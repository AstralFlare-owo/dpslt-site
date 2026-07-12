import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"公告","description":"","frontmatter":{"title":"公告","article":false,"author":{"name":"CTMC Community"}},"headers":[],"relativePath":"ctmc/announce/announcements.md","filePath":"ctmc/announce/announcements.md"}');
const _sfc_main = { name: "ctmc/announce/announcements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="公告" tabindex="-1">公告 <a class="header-anchor" href="#公告" aria-label="Permalink to &quot;公告&quot;">​</a></h1><p>这里是 CTMC 的公告板。</p><p>重大事项会在这里展示，公告保留至少 7 天。</p><h2 id="_2025-10-25-ctmc-wiki-上线" tabindex="-1">2025-10-25 // CTMC Wiki 上线 <a class="header-anchor" href="#_2025-10-25-ctmc-wiki-上线" aria-label="Permalink to &quot;2025-10-25 // CTMC Wiki 上线&quot;">​</a></h2><p>经过几天的努力，苦逼 AF 终于把文档站部署了起来。</p><p><a href="https://docs.aflare.top/ctmc" target="_blank" rel="noreferrer">CTMC Wiki</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ctmc/announce/announcements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const announcements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  announcements as default
};
