import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"新玩家指南","description":"","frontmatter":{"title":"新玩家指南","article":false,"author":{"name":"CTMC Community"}},"headers":[],"relativePath":"ctmc/newbie.md","filePath":"ctmc/newbie.md"}');
const _sfc_main = { name: "ctmc/newbie.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="新玩家指南" tabindex="-1">新玩家指南 <a class="header-anchor" href="#新玩家指南" aria-label="Permalink to &quot;新玩家指南&quot;">​</a></h1><p>跃跃欲试了吗？别着急！加入 CTMC 之前，请阅读以下内容：</p><h2 id="进服" tabindex="-1">进服 <a class="header-anchor" href="#进服" aria-label="Permalink to &quot;进服&quot;">​</a></h2><ol><li><strong>审核：</strong> 请加入审核群 <a href="https://qm.qq.com/q/ciSFu7iZgc" target="_blank" rel="noreferrer">884605462</a>，填写问卷并等待通过， 随后审核组会私信您发送入群验证码，凭此加入大群 <a href="https://qm.qq.com/q/rv8cfXGUdW" target="_blank" rel="noreferrer">136211613</a>。</li><li><strong>进服：</strong> 审核通过后，我们会将您在问卷中填写的ID加入服务器白名单， 您可使用您的客户端登录填写的账号直接进入服务器。</li></ol><p>服务器IP：<code>ct.aflare.top</code> (BE <code>be.ct.aflare.top:12788</code>，无法解析地址的 JE 玩家也可使用此地址)</p><h2 id="共识" tabindex="-1">共识 <a class="header-anchor" href="#共识" aria-label="Permalink to &quot;共识&quot;">​</a></h2><p>禁止向新玩家提供中后期资源，不要破坏新玩家开荒体验。</p><p>新玩家应在服务器内游玩一段时间再考虑加入玩家聚落一类组织。新人扎堆建立的组织除外。</p><h2 id="有关飞行" tabindex="-1">有关飞行 <a class="header-anchor" href="#有关飞行" aria-label="Permalink to &quot;有关飞行&quot;">​</a></h2><p>服务器会在法定节假日为全体玩家开启飞行权限，可使用 <code>/fly</code> 指令开关，其余时间禁用。</p><p>如果你在非法定节假日看到有在天上飞的并且头上没有管理标识的，那你大概率是碰上挂哥了……<strong>记得截图证据并向常驻/社区管理组举报。</strong></p><h2 id="死亡掉落" tabindex="-1">死亡掉落 <a class="header-anchor" href="#死亡掉落" aria-label="Permalink to &quot;死亡掉落&quot;">​</a></h2><p>服务器内所有人死亡掉落，若担心无法寻回掉落物，建议安装 Xaero&#39;s Minimap 模组，死亡点记录功能默认开启， 可据此找到死亡点。若您实在跑不回去，可以把死亡点发到公屏，可能会有巨佬援助……</p><h2 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h2><p>记得看服务器守则……<a href="/ctmc/rules.html">传送门</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ctmc/newbie.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newbie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newbie as default
};
