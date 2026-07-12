import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/CreeperTown.DoNKVDdQ.png";
const __pageData = JSON.parse('{"title":"CTMC // 苦力怕镇生存服","description":"","frontmatter":{"title":"CTMC // 苦力怕镇生存服","article":false,"author":{"name":"CTMC Community"}},"headers":[],"relativePath":"ctmc/index.md","filePath":"ctmc/index.md"}');
const _sfc_main = { name: "ctmc/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ctmc-苦力怕镇生存服" tabindex="-1">CTMC // 苦力怕镇生存服 <a class="header-anchor" href="#ctmc-苦力怕镇生存服" aria-label="Permalink to &quot;CTMC // 苦力怕镇生存服&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="CTMC Logo"></p><div class="warning custom-block"><p class="custom-block-title">文档更新提示</p><p>此文档尚待重构……</p></div><h2 id="服务器介绍" tabindex="-1">服务器介绍 <a class="header-anchor" href="#服务器介绍" aria-label="Permalink to &quot;服务器介绍&quot;">​</a></h2><p>CTMC (CreeperTown Minecraft) 前身为 WeeAxe 创造服中的一块成员数十人的地皮，后演变为一个独立 Minecraft 服务器，目前已运营 2 年以上。</p><p>服务器采用 LeavesMC 1.21.4 生电核心（小版本：<code>git-b84ebcb</code>，构建编号：#82）， 支持从 1.7 到 1.21.8 的所有版本客户端。定位为 Vanilla+ 类生存服，以生存、养老、社交为主， 尽可能还原了原版 Minecraft 的机制特性。</p><p>现在就加入吧！我们由衷地希望 CTMC 可以成为各位玩家心中的一片乐土！</p><p>新玩家指南 <a href="/ctmc/newbie.html">传送门</a></p><h2 id="社区" tabindex="-1">社区 <a class="header-anchor" href="#社区" aria-label="Permalink to &quot;社区&quot;">​</a></h2><p>本服 QQ 群：</p><ul><li>审核群 <a href="https://qm.qq.com/q/ciSFu7iZgc" target="_blank" rel="noreferrer">884605462</a></li><li>大群 <a href="https://qm.qq.com/q/rv8cfXGUdW" target="_blank" rel="noreferrer">136211613</a></li></ul><div class="warning custom-block"><p class="custom-block-title">关于审核机制</p><p>服务器启用白名单机制，通过审核后加入服务器是目前各大生存服的标准操作，这有助于我们建设更为和谐的玩家社区。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ctmc/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
