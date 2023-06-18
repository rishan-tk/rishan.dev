import { b as buildAssetsURL } from './paths.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';

const _imports_0 = "" + buildAssetsURL("logo-ts.a3807325.png");
const _sfc_main$1 = {
  name: "NavBar"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "NavBar",
    class: "container w-full bg-dark-nav flex items-center justify-between flex-wrap"
  }, _attrs))}><div id="logo" class="flex"><img${ssrRenderAttr("src", _imports_0)}></div><div id="linksContainer" class="flex"><div class="linksPadding"></div><div id="navLinks"><ul class="flex-grow flex text-gray-200"><li class="flex-grow w-1/4">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex-grow w-1/4">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex-grow w-1/4">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex-grow w-1/4">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/aboutme" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Me`);
      } else {
        return [
          createTextVNode("About Me")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="linksPadding"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utils/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Footer"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    id: "Footer",
    class: "border-t border-gray-200 bg-dark-nav"
  }, _attrs))}><div class="container flex flex-col flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap"><div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"><a class="flex items-center justify-center text-4xl font-bold text-blue-700 md:justify-start">Logo</a><p class="mt-2 text-sm text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at sequi cum, impedit fuga in placeat illo eum minima possimus est perferendis distinctio explicabo eos natus consequuntur blanditiis odio optio? </p></div><div class="justify-between w-full mt-4 text-center lg:flex"><div class="w-full px-4 lg:w-1/2 md:w-1/2"><h2 class="mb-2 font-bold tracking-widest text-gray-900">Useful Links</h2><li>Linked In</li></div><div class="w-full px-4 lg:w-1/2 md:w-1/2"><h2 class="mb-2 font-bold tracking-widest text-gray-900">Contact Form</h2></div></div></div><div class="flex justify-center"><p class="text-base text-gray-400">All rights reserved by @ Rishan Thirukumar 2021</p></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utils/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Footer-953bf9af.mjs.map
