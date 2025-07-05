import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PageLink from "../../components/PageLink.vue";
import { createRouter, createMemoryHistory } from "vue-router";

describe("PageLink.vue", () => {
  const routes = [
    { path: "/test", component: { template: "<div>Test</div>" } },
  ];
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

  it("render slot content", () => {
    const wrapper = mount(PageLink, {
      global: { plugins: [router] },
      props: { to: "/test" },
      slots: { default: "Slot Test" },
    });
    expect(wrapper.text()).toContain("Slot Test");
  });

  it("has correct 'to' prop on router-link", () => {
    const wrapper = mount(PageLink, {
      global: { plugins: [router] },
      props: { to: "/test" },
      slots: { default: "Link" },
    });
    const link = wrapper.find("a");
    expect(link.classes()).toContain("pageLink");
  });
});
