import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import type { Product } from "../../types/product";
import ProductCard from "../../components/ProductCard.vue";
import { useRouter } from 'vue-router';
import { useCartItemStore } from "../../stores/cartItemsStore";
import { useProductStore } from "../../stores/productStore";
import { createPinia } from "pinia";

const addToCartMock = vi.fn();
const goToProudctDetailmock = vi.fn();
const selectProductMock = vi.fn();

vi.mock("../../stores/cartItemsStore", () => ({
  useCartItemStore: vi.fn(),
}));
vi.mock("../../stores/productStore", () => ({
  useProductStore: vi.fn(),
}));

vi.mock('vue-router', () => ({
  useRouter: vi.fn(),
}));


const mockItem: Product = {
  id: 1,
  title: "item 1",
  price: 22,
  description: "item 1 description",
  category: "clothing",
  image: "test1.jpg",
  rating: { rate: 4.5, count: 3 },
};

describe("ProductCard.vue", () => {
beforeEach(() => {
    vi.clearAllMocks();

    (useCartItemStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      ADD_ITEM: addToCartMock,
    });

    (useProductStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      goToProductDetail: goToProudctDetailmock,
      selectProduct: selectProductMock,
    });
  });

  //Test Case 1: trigger the router one time and go to ProductDetail when an image is clicked
  it("Clicking the image triggers router", async () => {
    const mockPush = vi.fn();

    (useRouter as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      push: mockPush,
    });

    const wrapper = mount(ProductCard, {
      props: {
        product: mockItem,
      },
      global:{
        plugins: [createPinia()],
      }
    });

    const productImage = wrapper.find(".productCard__image");
    await productImage.trigger("click");

    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith({
      name: "ProductDetail",
      params: { id: mockItem.id },
    });
  });

  //Test Case 2: Render a products informaiton
  it("Render Product's information", () => {
    const wrapper = mount(ProductCard, {
      props: { product: mockItem },
      global: {plugins: [createPinia()]}
    });

    expect(wrapper.text()).toContain(mockItem.title);
    expect(wrapper.text()).toContain(mockItem.category);
    expect(wrapper.find("img").attributes("src")).toBe(mockItem.image);
    expect(wrapper.text()).toContain(mockItem.price);
    expect(wrapper.text()).toContain(mockItem.rating.count);
    expect(wrapper.text()).toContain(mockItem.rating.rate);
  });

  // Test Case 3: Trigger ADD_ITEM function when clicking the add to cart button
  it("Clicking add to cart button", async () => {

    const wrapper = mount(ProductCard, {
      props: {
        product: mockItem,
      },
      global: {
        plugins: [createPinia()],
      },
    });
    await wrapper.find(".productCard__addItem--btn").trigger("click");
    expect(addToCartMock).toHaveBeenCalledWith(mockItem);
  });
});
