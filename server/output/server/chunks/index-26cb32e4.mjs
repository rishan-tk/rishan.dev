import { b as buildAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-953bf9af.mjs';
import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _imports_0 = "" + buildAssetsURL("rishandev-logos_white2.0a29b766.png");
const _sfc_main$1 = {
  name: "Home"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${ssrRenderAttrs(mergeProps({ src: _imports_0 }, _attrs))}>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contents/H/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "IndexPage",
  head: {
    title: "Home",
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
  const _component_ContentsHHome = __nuxt_component_1;
  const _component_UtilsFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_UtilsNavBar, null, null, _parent));
  _push(`<div class="container flex flex-col flex-wrap px-4 py-52 mx-auto">`);
  _push(ssrRenderComponent(_component_ContentsHHome, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_UtilsFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-26cb32e4.mjs.map
