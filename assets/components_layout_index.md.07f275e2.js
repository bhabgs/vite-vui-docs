import{r as t,o as a,c as n,a as s,b as e,w as l,e as o,d as p}from"./app.f457163c.js";const u='{"title":"layout 容器布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法"},{"level":2,"title":"代码演示","slug":"代码演示"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"<vi-layout-sider />","slug":"vi-layout-sider"},{"level":3,"title":"<vi-layout-header />","slug":"vi-layout-header"},{"level":3,"title":"<vi-layout-footer />","slug":"vi-layout-footer"}],"relativePath":"components/layout/index.md","lastUpdated":1616467121994}',c={},i=o('<h1 id="layout-容器布局"><a class="header-anchor" href="#layout-容器布局" aria-hidden="true">#</a> layout 容器布局</h1><blockquote><p>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p><code>&lt;vi-layout &gt;</code>: 容器</p><p><code>&lt;vi-layout-header&gt;</code>：顶栏容器</p><p><code>&lt;vi-layout-sider&gt;</code>：侧边栏容器</p><p><code>&lt;vi-layout-main&gt;</code>：主要区域容器</p><p><code>&lt;vi-layout-footer&gt;</code>：底栏容器</p></blockquote><h2 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>',3),d=p("header"),r=p("sider"),h=p("main"),k=p("footer"),_=p("header"),g=p("main"),y=p("footer"),v=p("sider"),f=p("header"),T=p("main"),b=p("footer"),x=o('<h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><div class="language-tsx"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vi-layout</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vi-layout-header</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">header</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vi-layout-header</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vi-layout</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vi-layout-sider</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">sider</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vi-layout-sider</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vi-layout-main</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">main</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vi-layout-main</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vi-layout</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vi-layout-footer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">footer</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vi-layout-footer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vi-layout</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="vi-layout-sider"><a class="header-anchor" href="#vi-layout-sider" aria-hidden="true">#</a> <code>&lt;vi-layout-sider /&gt;</code></h3><blockquote><p>侧边组件</p></blockquote>',5),A=p("sider"),S=o('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th style="text-align:center;">可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td><code>&lt;vi-layout-sider /&gt;</code> 宽度控制</td><td>string</td><td style="text-align:center;">-</td><td>200px</td></tr></tbody></table><h3 id="vi-layout-header"><a class="header-anchor" href="#vi-layout-header" aria-hidden="true">#</a> <code>&lt;vi-layout-header /&gt;</code></h3><blockquote><p>头部组件</p></blockquote>',3),m=p("header"),P=o('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th style="text-align:center;">可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td><code>&lt;vi-layout-header /&gt;</code> 高度控制</td><td>string</td><td style="text-align:center;">-</td><td>64px</td></tr></tbody></table><h3 id="vi-layout-footer"><a class="header-anchor" href="#vi-layout-footer" aria-hidden="true">#</a> <code>&lt;vi-layout-footer /&gt;</code></h3><blockquote><p>底部组件</p></blockquote>',3),I=p("footer"),C=o('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th style="text-align:center;">可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td><code>&lt;vi-layout-footer /&gt;</code> 高度控制</td><td>string</td><td style="text-align:center;">-</td><td>64px</td></tr></tbody></table>',1);c.render=function(o,p,u,c,V,q){const E=t("vi-layout-header"),D=t("vi-layout-sider"),w=t("vi-layout-main"),N=t("vi-layout"),R=t("vi-layout-footer");return a(),n("div",null,[s("\n * @abstract: JianJie\n * @version: 0.0.1\n * @Author: bhabgs\n * @Date: 2021-03-01 10:05:45\n * @LastEditors: bhabgs\n * @LastEditTime: 2021-03-22 16:14:48\n"),i,e(N,{class:"default_vi"},{default:l((()=>[e(E,null,{default:l((()=>[d])),_:1}),e(N,null,{default:l((()=>[e(D,null,{default:l((()=>[r])),_:1}),e(w,null,{default:l((()=>[h])),_:1})])),_:1}),e(R,null,{default:l((()=>[k])),_:1})])),_:1}),e(N,{class:"default_vi"},{default:l((()=>[e(E,null,{default:l((()=>[_])),_:1}),e(w,null,{default:l((()=>[g])),_:1}),e(R,null,{default:l((()=>[y])),_:1})])),_:1}),e(N,{class:"default_vi"},{default:l((()=>[e(D,null,{default:l((()=>[v])),_:1}),e(N,null,{default:l((()=>[e(E,null,{default:l((()=>[f])),_:1}),e(w,null,{default:l((()=>[T])),_:1}),e(R,null,{default:l((()=>[b])),_:1})])),_:1})])),_:1}),x,e(N,{class:"default_vi"},{default:l((()=>[e(D,null,{default:l((()=>[A])),_:1})])),_:1}),S,e(E,null,{default:l((()=>[m])),_:1}),P,e(R,null,{default:l((()=>[I])),_:1}),C])};export default c;export{u as __pageData};