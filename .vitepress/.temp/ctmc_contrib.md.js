import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"贡献","description":"","frontmatter":{"title":"贡献","article":false,"author":{"name":"CTMC Community"},"appreciation":{"position":"aside-bottom","options":{"icon":"weChatPay","content":"<img src='/sponsor.png' style='border-radius:50%;'/>","title":"支持 CTMC 运营"}}},"headers":[],"relativePath":"ctmc/contrib.md","filePath":"ctmc/contrib.md"}`);
const _sfc_main = { name: "ctmc/contrib.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TkIcon = resolveComponent("TkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="贡献" tabindex="-1">贡献 <a class="header-anchor" href="#贡献" aria-label="Permalink to &quot;贡献&quot;">​</a></h1><h2 id="为此文档贡献内容" tabindex="-1">为此文档贡献内容 <a class="header-anchor" href="#为此文档贡献内容" aria-label="Permalink to &quot;为此文档贡献内容&quot;">​</a></h2><p>点击右上角 `);
  _push(ssrRenderComponent(_component_TkIcon, { icon: "mdi:github" }, null, _parent));
  _push(` 按钮跳转至我们的 Github 仓库，或者<a href="https://github.com/AstralFlare-owo/TZ-Site/fork" target="_blank" rel="noreferrer">传送门</a>直接跳转到 Fork 页面，</p><p>Fork 一下仓库，在 <code>/ctmc/</code> 目录下创建/修改内容，然后提交 Pull Requests，等待审核。提交 PR 时请务必允许维护者修改内容。</p><p>若创建了新的页面，请在 <code>/.vitepress/config.mts</code> 的 <code>defineConfig.themeConfig.sidebar</code> 中添加页面链接。</p><details class="details custom-block"><summary>新页面模板</summary><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-light-font-weight": "bold", "--shiki-dark": "#79B8FF", "--shiki-dark-font-weight": "bold" })}">---</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">title: 标题</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">article: false</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">author:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  name: CTMC Community</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-light-font-weight": "bold", "--shiki-dark": "#79B8FF", "--shiki-dark-font-weight": "bold" })}">---</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-light-font-weight": "bold", "--shiki-dark": "#79B8FF", "--shiki-dark-font-weight": "bold" })}"># 标题</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">正文</span></span></code></pre></div><p>请修改模板中的两处标题和你的正文内容。</p></details><details class="details custom-block"><summary>不会用 Github/Markdown 怎么办？</summary><p>STFW.</p><p>另外，你也可以把写好的文档（MD/Word/TXT）私发给常驻管理组，由常驻管理组代为上传。</p></details><h2 id="为服务器贡献资金" tabindex="-1">为服务器贡献资金 <a class="header-anchor" href="#为服务器贡献资金" aria-label="Permalink to &quot;为服务器贡献资金&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>CTMC 是公益服务器，从未以任何形式要求玩家支付费用！</p></div><p>若您愿意捐助服务器费用，您可以在爱发电进行赞助，或者使用下方收款码。</p><p>爱发电：<strong><a href="https://afdian.com/a/creepertown" target="_blank" rel="noreferrer">@creepertown</a></strong></p><p>赞助码：<strong>请查看右侧大纲栏下方</strong></p><h2 id="参与服务器建设" tabindex="-1">参与服务器建设 <a class="header-anchor" href="#参与服务器建设" aria-label="Permalink to &quot;参与服务器建设&quot;">​</a></h2><p>您可以选择加入社区管理组协助维护服务器秩序，或者加入技术组进行开发。</p><details class="details custom-block"><summary>社区管理组</summary><p>职责：</p><ul><li>在游戏内督察玩家行为，处理纠纷与作弊者。</li><li>辅助管理服务器内事务，如服务器活动等。</li><li>管理社区。</li></ul><p>加入社区管理组，请填写报名表单，我们会在审核后在月初时公布准社管和社管的名单，由社区投票决定成员。</p><p>表单还没放……</p></details><details class="details custom-block"><summary>技术组</summary><p>职责：</p><ul><li>开发&amp;维护服务器插件等。</li><li>及时处理技术性问题。</li></ul><p>加入技术组，请填写报名表单，我们会在审核后将您拉入技术组内群。</p><p>表单还没放……</p></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ctmc/contrib.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contrib = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contrib as default
};
