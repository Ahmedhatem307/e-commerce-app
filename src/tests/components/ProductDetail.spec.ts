import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import ProductDetail from "../../views/ProductDetail.vue";
import { useRoute } from "vue-router";


const mockProduct = {
  id: 1,
  title: "Test Product",
  category: "Test Category",
  rating: { rate: 4.5, count: 10 },
  image: "https://example.com/image.png",
  description: "Test Description",
  price: 99.99,
};



vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}));

describe("ProductDetail.vue", () => {

  beforeEach(() => {
    // Reset mocks
    vi.resetAllMocks();

    //  Mock fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockProduct),
      } as Response)
    );

    (useRoute as ReturnType<typeof vi.fn>).mockReturnValue({
      params: { id: "1" },
    });
  });
  it("fetches and displays product details", async () => {
    const wrapper = mount(ProductDetail);
    await flushPromises();
    
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products/1");
    expect(wrapper.text()).toContain("Test Product");
    expect(wrapper.text()).toContain("Test Category");
    expect(wrapper.text()).toContain("4.5 out of 5 stars");
    expect(wrapper.text()).toContain("10 reviews");
    expect(wrapper.text()).toContain("Test Description");
    expect(wrapper.text()).toContain("99.99 $");
  });

  it('renders product image correctly', async () => {
  const wrapper = mount(ProductDetail);
  await flushPromises();
  const img = wrapper.find('.productCard__image');
  expect(img.attributes('src')).toBe('https://example.com/image.png');
});
});
