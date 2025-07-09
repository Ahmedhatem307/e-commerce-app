import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HamburgerMenu from "../../components/layout/HamburgerMenu.vue";

describe("HamburgerMenu.vue", () => {
  it("emits toggle event on click", async () => {
    const wrapper = mount(HamburgerMenu);
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("toggle");
  });
});
