import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import type { Product } from "../../types/product";
import ProductCard from "../../components/ProductCard.vue";

const addToCartMock = vi.fn();
const goToProudctDetailmock = vi.fn();

type ProductsState = {
  products: Product[];
};
function createMockStore() {
  {
    return createStore({
      modules: {
        cartItems: {
          namespaced: true,
          state: () => ({
            items: [],
          }),
          mutations: {
            ADD_ITEM: addToCartMock,
          },
        },
        products: {
          namespaced: true,
          state: (): ProductsState => ({
            products: [],
          }),
          mutations: {
            goToProductDetail: goToProudctDetailmock,
            selectProduct: vi.fn(),
          },
        },
      },
    });
  }
}

const mockPush = vi.fn();

const mockRouter = {
  push: mockPush,
};

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
  //Test Case 1: trigger the router one time and go to ProductDetail when an image is clicked
  it("Clicking the image triggers router", async () => {
    const store = createMockStore();

    const wrapper = mount(ProductCard, {
      props: {
        product: mockItem,
      },
      global: {
        plugins: [store],
        mocks: {
          $router: mockRouter,
        },
      },
    });

    const productImage = wrapper.find(".productCard__image");
    await productImage.trigger("click");

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith({
      name: "ProductDetail",
      params: { id: mockItem.id },
    });
  });

  //Test Case 2: Render a products informaiton
  it("Render Product's information", () => {
    const wrapper = mount(ProductCard, {
      props: { product: mockItem },
    });

    expect(wrapper.text()).toContain(mockItem.title);
    expect(wrapper.text()).toContain(mockItem.category);
    expect(wrapper.find("img").attributes("src")).toBe(mockItem.image);
  });

  // Test Case 3: Trigger ADD_ITEM function when clicking the add to cart button
  it("Clicking add to cart button", async () => {
    const store = createMockStore();

    const wrapper = mount(ProductCard, {
      props: {
        product: mockItem,
      },
      global: {
        plugins: [store],
      },
    });
    await wrapper.find(".productCard__addItem--btn").trigger("click");
    expect(addToCartMock).toHaveBeenCalledWith(expect.anything(), mockItem);
  });
});
