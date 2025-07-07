import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ContactUs from "../../views/ContactUs.vue";

describe("ContactUs.vue", () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    wrapper = mount(ContactUs);
  });

  it("renders heading and description", () => {
    expect(wrapper.find("h1").text()).toBe("Contact Page");
    expect(wrapper.find("p").text()).toContain("We're here to help");
  });

  it("renders all form inputs", () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find("textarea").exists()).toBe(true);
  });

  it("submit button is initially disabled", () => {
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.attributes("disabled")).toBeDefined();
  });

  it("allows typing in form inputs", async () => {
    const nameInput = wrapper.find('input[type="text"]');
    const emailInput = wrapper.find('input[type="email"]');
    const messageTextarea = wrapper.find("textarea");

    await nameInput.setValue("Ahmed Hatem");
    await emailInput.setValue("example@gmail.com");
    await messageTextarea.setValue("This is a test message.");

    expect((nameInput.element as HTMLInputElement).value).toBe("Ahmed Hatem");
    expect((emailInput.element as HTMLInputElement).value).toBe(
      "example@gmail.com"
    );
    expect((messageTextarea.element as HTMLTextAreaElement).value).toBe(
      "This is a test message."
    );
  });
});
