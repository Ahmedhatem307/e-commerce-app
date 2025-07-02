import { describe, it, expect, vi } from "vitest";
import CartSidebar from "../../components/CartSidebar.vue";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import type { CartItem } from "../../types/CartItem";

const increaseQuantityMock = vi.fn();
const decreaseQuantityMock = vi.fn();

function createMockStore({
  itemCount = 0,
  items = [],
  totalPrice = 0,
}: {
  itemCount: number;
  items: CartItem[];
  totalPrice: number;
}) {
  return createStore({
    modules: {
      cartItems: {
        namespaced: true,
        state: () => ({}),
        getters: {
          itemCount: () => itemCount,
          cartItems: () => items,
          totalPrice: () => totalPrice,
        },
        mutations: {
          increaseQuantity: increaseQuantityMock,
          decreaseQuantity: decreaseQuantityMock,
        },
      },
    },
  });
}

describe("CartSidebar.vue", () => {
  //Test Case 1: Render a message when Cart is empty
  it("Display a message when cart is empty", () => {
    const store = createMockStore({ itemCount: 0, items: [], totalPrice: 0 });
    const wrapper = mount(CartSidebar, {
      global: { plugins: [store] },
    });
    const emptyMessage = wrapper.find('[data-testid="empty-cart"]');
    expect(emptyMessage.text()).toContain(
      "Your cart is empty. Try to add stuff"
    );
  });

  //Test Case 2: Render items in the cart when items exist
  it("Display products when they are added to the cart", () => {
    const mockItems: CartItem[] = [
      { id: 1, title: "item 1", price: 22, image: "test.jpg", quantity: 2 },
      { id: 2, title: "item 2", price: 30, image: "test.jpg", quantity: 4 },
    ];
    const store = createMockStore({
      itemCount: 6,
      items: mockItems,
      totalPrice: 164,
    });
    const wrapper = mount(CartSidebar, {
      global: { plugins: [store] },
    });
    const productDiv = wrapper.find(".cart");
    expect(productDiv.exists()).toBe(true);
    expect(productDiv.text()).toContain("item 1");
  });

  // Test Case 3: Trigger increaseQuantity function when clicking the + button
  it("Clicking + button triggers increaseQuantity", async () => {
    const mockItems: CartItem[] = [
      { id: 1, title: "item 1", price: 22, image: "test.jpg", quantity: 1 },
    ];
    const store = createMockStore({
      itemCount: 1,
      items: mockItems,
      totalPrice: 22,
    });
    const wrapper = mount(CartSidebar, {
      global: { plugins: [store] },
    });

    const plusButton = wrapper.find('[data-testid="increaseQuantity-btn"]');
    await plusButton.trigger("click");
    expect(increaseQuantityMock).toHaveBeenCalledWith(expect.any(Object), 1);
  });

  // Test Case 4: Trigger decreaseQuantity function when clicking the - button
  it("Clicking - button triggers decreaseQuantity", async () => {
    const mockItems: CartItem[] = [
      { id: 1, title: "item 1", price: 22, image: "test.jpg", quantity: 2 },
    ];
    const store = createMockStore({
      itemCount: 2,
      items: mockItems,
      totalPrice: 44,
    });
    const wrapper = mount(CartSidebar, {
      global: { plugins: [store] },
    });

    const plusButton = wrapper.find('[data-testid="decreaseQuantity-btn"]');
    await plusButton.trigger("click");
    expect(decreaseQuantityMock).toHaveBeenCalledWith(expect.any(Object), 1);
  });

  //Test Case 5: Render Correct totalPrice and itemCount
  it("Show corerect totalPrice and itemCount", () => {
    const mockTotalPrice = 164;
    const mockCount = 6;

    const mockItems: CartItem[] = [
      { id: 1, title: "item 1", price: 22, image: "test.jpg", quantity: 2 },
      { id: 2, title: "item 2", price: 30, image: "test.jpg", quantity: 4 },
    ];

    const store = createMockStore({
      itemCount: mockCount,
      items: mockItems,
      totalPrice: mockTotalPrice,
    });

    const wrapper = mount(CartSidebar, {
      global: { plugins: [store] },
    });

    const cartFooter = wrapper.find(".cart__footer").text();
    expect(cartFooter).toContain("Number of Items: 6");
    expect(cartFooter).toContain("Total Price: 164 $");
  });
});
