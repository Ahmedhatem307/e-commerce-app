import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "../../components/Header.vue";
import PageLink from "../../components/PageLink.vue";

// Mocks for child components
vi.mock("@/components/HamburgerMenu.vue", () => ({
  default: {
    name: "HamburgerMenu",
    template:
      '<button class="hamburger-btn" @click="$emit(\'click\')">Menu</button>',
  },
}));

vi.mock("@/components/NavLogo.vue", () => ({
  default: { name: "NavLogo", template: "<div>Logo</div>" },
}));

vi.mock("@/components/CartButton.vue", () => ({
  default: { name: "CartButton", template: "<button>Cart</button>" },
}));

vi.mock("@/components/PageLink.vue", () => ({
  default: {
    name: "PageLink",
    props: ["to"],
    template: "<a><slot /></a>",
  },
}));

describe("Header.vue", () => {
  const wrapper = mount(Header);
  it("renders 2 PageLink components", () => {
    const links = wrapper.findAllComponents(PageLink);
    expect(links).toHaveLength(2);
  });

  it("renders child components", () => {
    expect(wrapper.findComponent({ name: "HamburgerMenu" }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: "NavLogo" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "CartButton" }).exists()).toBe(true);
  });

  it("menu is closed by default", () => {
    const links = wrapper.find(".navBar__links");
    expect(links.classes()).not.toContain("open");
  });

  it("toggles menu when HamburgerMenu is clicked", async () => {
    await wrapper.vm.toggleMenu();
    await wrapper.vm.$nextTick();

    const links = wrapper.find(".navBar__links");
    expect(links.classes()).toContain("open");
  });
});
