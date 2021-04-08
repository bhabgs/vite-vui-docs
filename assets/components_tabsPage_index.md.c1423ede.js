import{o as n,c as s,a,e as t}from"./app.731d88da.js";const p='{"title":"tabsPage","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用方法","slug":"使用方法"},{"level":2,"title":"mitt 与 tabsPage 通讯方式","slug":"mitt-与-tabspage-通讯方式"},{"level":2,"title":"其他方法","slug":"其他方法"}],"relativePath":"components/tabsPage/index.md","lastUpdated":1617866757635}',o={},e=t('<h1 id="tabspage"><a class="header-anchor" href="#tabspage" aria-hidden="true">#</a> tabsPage</h1><blockquote><p>该组件主要为了通用现有 ieam 项目的 tabs 页</p></blockquote><h2 id="使用方法"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><blockquote><p>使用该组件不需要传递任何数据 数据通信均采用内置 <code>mitt</code> 协议</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> mitt <span class="token operator">=</span> proxy<span class="token operator">!</span><span class="token punctuation">.</span>$mitt<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>viteTabsPage <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><blockquote><p>为了能在项目内的 vue 原型上使用 <code>$mitt</code>, 需要进行如下配置</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@vue/runtime-core&#39;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>\n    $mitt<span class="token operator">:</span> <span class="token keyword">typeof</span> Emitter<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="mitt-与-tabspage-通讯方式"><a class="header-anchor" href="#mitt-与-tabspage-通讯方式" aria-hidden="true">#</a> <code>mitt</code> 与 tabsPage 通讯方式</h2><ol><li><p><code>vite-tabspage-add</code> -&gt; 添加 page 页面</p><blockquote><p>使用时请注意打开的 page 参数要复合 tabsPage 组件要求</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> tabItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitevui/lib/types/tabsPage/tabsHooks&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">interface</span> <span class="token class-name">tabItem</span> <span class="token punctuation">{</span>\n  hasClosed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  props<span class="token operator">?</span><span class="token operator">:</span> baseObject<span class="token punctuation">;</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  component<span class="token operator">?</span><span class="token operator">:</span> Component<span class="token punctuation">;</span>\n  params<span class="token operator">?</span><span class="token operator">:</span> baseObject<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> addPage<span class="token operator">:</span> tabItem <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> tabItem<span class="token punctuation">;</span>\n\nmitt<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;vite-tabspage-add&#39;</span><span class="token punctuation">,</span> addPage<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><p><code>vite-tabspage-remove</code> -&gt; 删除某个或多个 page 页面</p><blockquote><p>当前页面调用该方法后如未传入 ids 那么默认关闭当前页面</p></blockquote><div class="language-ts"><pre><code>mitt<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;vite-tabspage-remove&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><blockquote><p>关闭指定页面或多个页面</p></blockquote><div class="language-ts"><pre><code>mitt<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;vite-tabspage-remove&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;pageid-1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pageid-2&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>ids<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><p><code>vite-tabspage-open</code> -&gt; 打开指定页面</p><div class="language-ts"><pre><code>mitt<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;vite-tabspage-open&#39;</span><span class="token punctuation">,</span> pageId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li><li><p><code>vite-tabspage-clear</code> -&gt; 清空 tabspage</p><div class="language-ts"><pre><code>mitt<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;vite-tabspage-clear&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li></ol><h2 id="其他方法"><a class="header-anchor" href="#其他方法" aria-hidden="true">#</a> 其他方法</h2><ol><li><p>获取 page 信息 <code>getTabCurrentDetail</code>;</p><blockquote><p>默认获取当前页面信息，传入 id 后可根据 page id 查询页面</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getTabCurrentDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitevui/lib/types/tabsPage/tabsHooks&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n     <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n       <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getTabCurrentDetail</span><span class="token punctuation">(</span>ids<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n     <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>获取当前页面数据<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li></ol>',11);o.render=function(t,p,o,c,l,u){return n(),s("div",null,[a("\n * @abstract: JianJie\n * @version: 0.0.1\n * @Author: bhabgs\n * @Date: 2021-04-08 13:25:10\n * @LastEditors: bhabgs\n * @LastEditTime: 2021-04-08 14:30:01\n"),e])};export default o;export{p as __pageData};
