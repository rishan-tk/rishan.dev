import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-953bf9af.mjs';
import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './paths.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';

const _sfc_main$1 = defineComponent({
  name: "Content"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}> About Me Brief Intro What I&#39;m doing </div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contents/AM/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "AboutMe",
  head: {
    title: "About Me",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UtilsNavBar = __nuxt_component_0;
  const _component_ContentsAMContent = __nuxt_component_1;
  const _component_UtilsFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_UtilsNavBar, null, null, _parent));
  _push(`<div class="container flex flex-col flex-wrap px-4 py-16 mx-auto">`);
  _push(ssrRenderComponent(_component_ContentsAMContent, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_UtilsFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aboutme.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutme = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutme as default };
//# sourceMappingURL=aboutme-c3ccb912.mjs.map
