import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "../../components/common/Footer.vue";

//All test casees are for static content since there are no props, interactivity or dynamic rendering

describe("Footer.vue", () => {
  const wrapper = mount(Footer);

  it("renders all section titles", () => {
    const titles = wrapper.findAll(".container__column--title");
    const expected = ["Navigate", "Collection", "Categories"];
    expected.forEach((title) =>
      expect(titles.map((t) => t.text())).toContain(title)
    );
  });

  it("renders 12 navigation items", () => {
    const items = wrapper.findAll(".container__list--item");
    expect(items).toHaveLength(12);
  });

  it("renders address lines", () => {
    const addresses = wrapper.findAll(".container__address");
    expect(addresses[0].text()).toContain("399 Crownfield Road");
    expect(addresses[1].text()).toContain("Phoenix, Arizona 85012");
  });

  it("renders email link", () => {
    const email = wrapper.find(".container__email");
    expect(email.exists()).toBe(true);
    expect(email.text()).toBe("example@gmail.com");
  });

  it("renders phone number", () => {
    const phone = wrapper.find(".container__phone");
    expect(phone.text()).toBe("+602-926-5809");
  });

  it("renders 3 social media icons", () => {
    const icons = wrapper.findAll(".container__social--icon");
    expect(icons).toHaveLength(3);
    expect(icons[0].attributes("alt")).toBe("1");
    expect(icons[1].attributes("alt")).toBe("2");
    expect(icons[2].attributes("alt")).toBe("3");
  });

  it("renders copyright", () => {
    expect(wrapper.text()).toContain("Copyrights © All Rights Reserved 2020");
  });
});
