import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SortDropdown from "../../components/SortDropdown.vue";

describe("SortDropdown.vue", () => {
  //Test Case 1: render the list and button in the DOM
  it("Render the list", () => {
    const wrapper = mount(SortDropdown);

    expect(wrapper.find("#sort"));
    expect(wrapper.find("button"));
  });
  //Test Case 2: Checking the default value
  it("Default value", () => {
    const wrapper = mount(SortDropdown);
    const selected = wrapper.find("#sort");
    expect((selected.element as HTMLSelectElement).value).toBe("default");
  });
//Test Case 3: Render all sorting options in the drop down list testing it's value
  it("Render all sorting options", () => {
    const wrapper = mount(SortDropdown);
    const options = wrapper.findAll("option");
    expect(options.length).toBe(7);
    const expectedOptions = [
      "Default",
      "Name (A-Z)",
      "Name (Z-A)",
      "Price: low to high",
      "Price: high to low",
      "Rating: high to low",
      "Rating: low to high",
    ];
    options.forEach((options, index) => {
      expect(options.text()).toBe(expectedOptions[index]);
    });
  });
  //Test Case 4: Test the change in value when selecting a different option
  it("change selection", async () => {
    const wrapper = mount(SortDropdown);
    const selectedOption = wrapper.find("select");
    await selectedOption.setValue("nameAsc");
    expect((selectedOption.element as HTMLSelectElement).value).toBe("nameAsc");
  });
//Test Case 5: Emit the correct sorting values after it's selection
  it("emit sort with correct value when clicking button", async () => {
    const wrapper = mount(SortDropdown);
    await wrapper.find("select").setValue("ratingDesc");
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().sort).toBeTruthy();
    expect(wrapper.emitted().sort?.[0]).toEqual(["ratingDesc"]);
  });
});
