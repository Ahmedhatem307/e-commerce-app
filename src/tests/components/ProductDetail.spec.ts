import { describe, it, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import ProductDetail from "../../views/ProductDetail.vue";


const mockProduct = {
  id: 1,
  title: "Test Product",
  category: "Test Category",
  rating: { rate: 4.5, count: 10 },
  image: "https://example.com/image.png",
  description: "Test Description",
  price: 99.99,
};

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(mockProduct),
  } as Response)
);

const $route = {
    params: {
        id: 1,
    }
}

describe("ProductDetail.vue", () => {
  it("fetches and displays product details", async () => {
    const wrapper = mount(ProductDetail, {
        global: {
            mocks: {$route},
        }
    });
    console.log(wrapper.html());
    await flushPromises(); // Wait for the async created() hook to resolve
    
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products/1");
    expect(wrapper.text()).toContain("Test Product");
    expect(wrapper.text()).toContain("Test Category");
    expect(wrapper.text()).toContain("4.5 out of 5 stars");
    expect(wrapper.text()).toContain("10 reviews");
    expect(wrapper.text()).toContain("Test Description");
    expect(wrapper.text()).toContain("99.99 $");
  });

  it('renders product image correctly', async () => {
  const wrapper = mount(ProductDetail, {
        global: {
            mocks: {$route},
        }
    });
  await flushPromises();
  const img = wrapper.find('.productCard__image');
  console.log(img.html());
  expect(img.attributes('src')).toBe('https://example.com/image.png');
});
});
