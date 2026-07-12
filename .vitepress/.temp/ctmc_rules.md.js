import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"服规与群规","description":"","frontmatter":{"title":"服规与群规","article":false,"author":{"name":"CTMC Community"}},"headers":[],"relativePath":"ctmc/rules.md","filePath":"ctmc/rules.md"}');
const _sfc_main = { name: "ctmc/rules.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="服规与群规" tabindex="-1">服规与群规 <a class="header-anchor" href="#服规与群规" aria-label="Permalink to &quot;服规与群规&quot;">​</a></h1><h2 id="前言-如何高效、稳妥、最小化地解决争端" tabindex="-1">前言 - 如何高效、稳妥、最小化地解决争端 <a class="header-anchor" href="#前言-如何高效、稳妥、最小化地解决争端" aria-label="Permalink to &quot;前言 - 如何高效、稳妥、最小化地解决争端&quot;">​</a></h2><p>CTMC 是一个和谐友爱的服务器，但有人在的地方就必然会出现争吵，这是无可避免的， 但很多时候，事情是可以稳妥解决的，因此便有了本指引，本指引旨在引导大家如何<strong>以最小代价解决纠纷</strong>。</p><ol><li>首先，出现问题请不要在大群直接<strong>开喷</strong>，大群是服务器玩家<strong>进行交流聊天的地方</strong>， 管理员有权维护环境，在大群开喷<strong>不会使问题解决，而是收获禁言+撤回……</strong></li><li>如果对方是<strong>人类</strong>（指<strong>可以正常交流</strong>，但其实大部分时候入服审核已经筛选掉了90%的非人类了）， 建议优先<strong>私聊</strong>，<strong>简洁明了</strong>地说明你的来意，若涉及<strong>组织</strong>间纠纷， 请优先<strong>联系组织领导者</strong>（可在<a href="/ctmc/orgs.html">服内组织列表</a>查询），理论上可以解决90%以上纠纷。</li><li>如果<strong>无法正常交流，或对协商结果不满意</strong>，可能需要申请<strong>常驻/社区管理组介入</strong> （请注意，管理组不会主动介入玩家纠纷，除非<strong>涉及违反服务器守则</strong>）。但是！在申请介入前，请务必了解： <ol><li>管理组介入处理结果<strong>将按照服务器守则执行</strong>（谁有问题逮谁），即使你是申请人， 如果你触犯守则，你也会被处罚。</li><li>若需管理组介入，并需要聊天记录等作为证据，请将大群内的<strong>Creeper ᴮᴼᵀ</strong>或<strong>常驻管理组任何一人</strong>以及相关人员拉入<strong>单独小群</strong>， 我们将<strong>仅采取小群内聊天记录为证据</strong>，其余皆不受理！</li></ol></li><li>最后的最后，你服只是一个供大家茶余饭后聊天交友打发时间的娱乐性生存服， 大家能相聚于此已经难能可贵，还请珍惜这段时光，而不是在争执与吵闹中愤愤离去。 如果是这样，那还不如去睡觉来得舒服对吧？</li></ol><blockquote><p>感谢隔壁腐竹 Lao_direct 提供此段文本，非常有意义 ——Astral✦Flare</p></blockquote><h2 id="社区公约" tabindex="-1">社区公约 <a class="header-anchor" href="#社区公约" aria-label="Permalink to &quot;社区公约&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>规章内容最终解释权归<strong>常驻/社区管理组</strong>所有，若发生<strong>以下条目</strong>未提及问题，以管理组判决为准。</p><p>如有异议，请联系<strong>常驻/社区管理组</strong>成员复核。</p><p>同样适用于服务器守则。</p></div><p>这些是在游戏内/在大群中/在审核群中必须遵守的交流规定，判定形式不限。</p><p>以下行为将视情况进行处罚（右侧徽标中是三个级别的处罚条件与内容，<strong>严重以致引起社区强烈异议的可能重罚</strong>）：</p><ol><li>刷屏，5分钟内超过60条者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "info",
    text: "前 3 次 | 禁言 10m"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "warning",
    text: "4~5 次 | 禁言 1h"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: ">5 次 | 禁言 1+d"
  }, null, _parent));
  _push(`</li><li>在群内宣传其他服务器者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "info",
    text: "第 1 次 | 撤回并警告"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "warning",
    text: "第 2 次 | 禁言 1h"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: ">2 次 | 禁言 7+d"
  }, null, _parent));
  _push(`</li><li>在群内打盈利性广告者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "info",
    text: "第 1 次 | 撤回并警告"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "warning",
    text: "第 2 次 | 禁言 1d"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: ">2 次 | 禁言 7+d"
  }, null, _parent));
  _push(`</li><li>发送<strong>违反中华人民共和国法律法规言论/媒体/文件、谈论政治敏感话题</strong>者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "info",
    text: "第 1 次 | 撤回并警告"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "warning",
    text: "第 2 次 | 禁言 7+d"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: ">2 次 | 踢出群聊 & 永久封禁 & 移交公安处理"
  }, null, _parent));
  _push(`</li><li>发送侮辱性言论、人身攻击者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "info",
    text: "第 1 次 | 禁言 1h"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "warning",
    text: "第 2 次 | 禁言 1d"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: ">2 次 | 禁言 7+d"
  }, null, _parent));
  _push(`</li><li>发送令人生理不适的内容（色情擦边/恶俗烂梗/骚扰等） `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "info",
    text: "第 1 次 | 禁言 12h"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "warning",
    text: "第 2 次 | 禁言 7d"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: ">2 次 | 禁言 7+d"
  }, null, _parent));
  _push(`</li><li>发送<strong>服务器指令/软硬件操作/模组配置等虚假不实信息</strong>误导新玩家者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "info",
    text: "第 1 次 | 撤回并警告"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "warning",
    text: "第 2 次 | 禁言 1h"
  }, null, _parent));
  _push(` `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: ">2 次 | 禁言 1+d"
  }, null, _parent));
  _push(`</li></ol><h2 id="服内规定" tabindex="-1">服内规定 <a class="header-anchor" href="#服内规定" aria-label="Permalink to &quot;服内规定&quot;">​</a></h2><p>这些是在服务器内游玩时需要注意的事项。</p><p>以下行为将视情况进行处罚（右侧徽标中是处罚内容，<strong>严重以致引起社区强烈异议的可能重罚</strong>，得到当事人谅解可减轻处罚）：</p><ol><li><p>使用任何<strong>外挂类软件</strong>（包括但不限于<strong>仅开启合法功能的挂端</strong>/飞行/加速/矿透/自动挖矿）、教唆他人作弊者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "踢出群聊 & 永久封禁"
  }, null, _parent));
  _push(`</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>CTMC 对外挂零容忍，一经发现即<strong>永久封禁</strong>。</p><p>下述挂端功能可选择<strong>合法模组</strong>代替，而不是<strong>使用挂端：</strong></p><ul><li>自动演奏：<a href="https://modrinth.com/mod/disc-jockey" target="_blank" rel="noreferrer">Disc Jockey</a></li><li>自动钓鱼&amp;种地&amp;...: <a href="https://modrinth.com/mod/autoharvest" target="_blank" rel="noreferrer">自动收获-重制 | AutoHarvest-RE</a></li><li>快速建造&amp;人造空置域：<a href="https://bilibili.com/video/BV1q44y1T7hE" target="_blank" rel="noreferrer">投影打印机（宅咸鱼二改版）此模组不在 CF/MR 下载源，请点击此处下载</a></li></ul><p>下述功能即使在<strong>合法模组</strong>（如<strong>Tweakeroo</strong>等）内也是<strong>禁止</strong>的：</p><ul><li>飞行加速</li><li>矿物定位</li></ul><p><strong>通过查种定位矿物也是不被允许的！</strong></p></div></li><li><p>进行<strong>非自愿PVP</strong>、在玩家聚集地内<strong>放置</strong>/使用任何<strong>大规模杀伤性武器</strong>导致矛盾冲突者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "封禁 1+d & 对受害者进行赔偿"
  }, null, _parent));
  _push(`</p></li><li><p>在服务器内建造陷阱/卡服机等<strong>影响他人游玩体验</strong>者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "封禁 7+d & 管理组回档相关区域"
  }, null, _parent));
  _push(`</p></li><li><p>偷盗/破坏/杀死交易所村民等者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "封禁 7+d & 对受害者进行赔偿"
  }, null, _parent));
  _push(`</p><p>未知所有者的机器/资源未经<strong>常驻/社区管理组</strong>允许不得拿取。</p><p><strong>服务器内装有 CoreProtect 插件监控一切操作记录，切勿抱有侥幸心理！</strong></p></li><li><p>在他人领地内张贴任何自己的<strong>宣传品</strong>、传播具有<strong>恶俗/黄暴等不良性质或收款码</strong>的地图画/书者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "封禁 3+d & 销毁具有不良性质的传播物"
  }, null, _parent));
  _push(`</p></li><li><p>玩家间使用<strong>现实货币</strong>交易者 `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "danger",
    text: "踢出群聊 & 永久封禁"
  }, null, _parent));
  _push(`</p></li></ol><h2 id="管理组规章" tabindex="-1">管理组规章 <a class="header-anchor" href="#管理组规章" aria-label="Permalink to &quot;管理组规章&quot;">​</a></h2><p>常驻/社区管理组仅拥有<strong>处理上述违规所需的必要权限</strong>，包括：</p><ul><li>处罚</li><li>Co 日志查询 &amp; 回档</li><li>群内管理</li><li>飞行</li><li>隐身</li></ul><p>此类权限仅限于<strong>处理违规时</strong>使用，若发现<strong>滥权/不作为</strong>行为，请联系<strong>常驻管理组</strong>举报。</p><details class="details custom-block"><summary>常驻管理组名单</summary><p>此处展示的账号ID仅为拥有管理组权限的ID。</p><ul><li>Astral✦Flare // 星焰 <code>AstralFlare-owo</code></li><li>小阚 LittleKan <code>littlekan123</code></li><li>Creep <code>Creeper_Z404</code></li><li>小文 <code>Xiaowen_mc</code></li></ul></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ctmc/rules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rules as default
};
