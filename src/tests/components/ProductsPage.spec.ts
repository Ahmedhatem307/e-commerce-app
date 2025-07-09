import { shallowMount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ProductsPage from "../../views/ProductsPage.vue";
import { createPinia, setActivePinia } from "pinia";

vi.mock("../../stores/productStore", () => ({
  useProductStore: vi.fn(),
}));

import { useProductStore } from "../../stores/productStore";

describe("ProductsPage.vue", () => {
  let fetchProductsMock: ReturnType<typeof vi.fn>;

  const mockState = {
    products: [
      { id: 1, title: "B Product", price: 30, rating: { rate: 4.2 } },
      { id: 2, title: "A Product", price: 20, rating: { rate: 4.8 } },
    ],
    loading: false,
    error: null,
  };
  beforeEach(() => {
    setActivePinia(createPinia());

    fetchProductsMock = vi.fn();

    (useProductStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      ...mockState,
      fetchProducts: fetchProductsMock,
    });
  });

  it("renders the title", () => {
    const wrapper = shallowMount(ProductsPage, {
      global: {
        plugins: [createPinia()],
      },
    });

    expect(wrapper.text()).toContain("Products Page");
  });

  it("calls fetchProducts on mount", () => {
    shallowMount(ProductsPage, {
      global: {
        plugins: [createPinia()],
      },
    });

    expect(fetchProductsMock).toHaveBeenCalled();
  });

  it("sorts by name ascending", async () => {
    const wrapper = shallowMount(ProductsPage, {
      global: {
        plugins: [createPinia()],
      },
    });

    wrapper.vm.handleSort("nameAsc");
    await wrapper.vm.$nextTick();

    const sorted = wrapper.vm.sortedProducts;
    expect(sorted[0].title).toBe("A Product");
    expect(sorted[1].title).toBe("B Product");
  });

  it("sorts by price descending", async () => {
    const wrapper = shallowMount(ProductsPage, {
      global: {
        plugins: [createPinia()],
      },
    });

    wrapper.vm.handleSort("priceDesc");
    await wrapper.vm.$nextTick();

    const sorted = wrapper.vm.sortedProducts;
    expect(sorted[0].price).toBe(30);
    expect(sorted[1].price).toBe(20);
  });

  it("returns products unchanged when sort is default", () => {
    const wrapper = shallowMount(ProductsPage, {
      global: {
        plugins: [createPinia()],
      },
    });

    const sorted = wrapper.vm.sortedProducts;
    expect(sorted).toEqual(mockState.products);
  });
});
