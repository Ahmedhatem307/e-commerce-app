import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeScreen from "../../components/HomeScreen.vue";

describe("HomeScreen.vue", () => {
  it("renders the welcome title", () => {
    const wrapper = mount(HomeScreen);
    expect(wrapper.find("h1").text()).toMatch(/Welcome to Our/i);
  });

  it("renders the description paragraph", () => {
    const wrapper = mount(HomeScreen);
    const paragraph = wrapper.find("p");
    expect(paragraph.exists()).toBe(true);
  });

  it("renders PageLink to /products", () => {
    const wrapper = mount(HomeScreen);
    const link = wrapper.findComponent({ name: "PageLink" });
    expect(link.exists()).toBe(true);
    expect(link.props("to")).toBe("/products");
  });
});
