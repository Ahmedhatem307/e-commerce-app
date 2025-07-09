import { describe, it, expect, vi, beforeEach } from "vitest";
import CartSidebar from "../../components/CartSidebar.vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

const increaseQuantityMock = vi.fn();
const decreaseQuantityMock = vi.fn();
const useCartItemStoreMock = vi.fn();

vi.mock("../../stores/cartItemsStore", () => ({
  useCartItemStore: () => useCartItemStoreMock(),
}));

describe("CartSidebar.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());

    useCartItemStoreMock.mockReturnValue({
      itemCount: 0,
      cartItems: [],
      totalPrice: 0,
      increaseQuantity: increaseQuantityMock,
      decreaseQuantity: decreaseQuantityMock,
    });
  });

  //Test Case 1: Render a message when Cart is empty
  it("Display a message when cart is empty", () => {
    useCartItemStoreMock.mockReturnValue({
      itemCount: 0,
      cartItems: [],
      totalPrice: 0,
      increaseQuantity: increaseQuantityMock,
      decreaseQuantity: decreaseQuantityMock,
    });

    const wrapper = mount(CartSidebar, {
      global: { plugins: [createPinia()] },
    });
    const emptyMessage = wrapper.find('[data-testid="empty-cart"]');
    expect(emptyMessage.text()).toContain(
      "Your cart is empty. Try to add stuff"
    );
  });

  //Test Case 2: Render items in the cart when items exist
  it("Display products when they are added to the cart", () => {
    useCartItemStoreMock.mockReturnValue({
      cartItems: [
        { id: 1, title: "item 1", price: 22, image: "test.jpg", quantity: 2 },
      ],
      itemCount: 2,
      totalPrice: 44,
      increaseQuantity: increaseQuantityMock,
      decreaseQuantity: decreaseQuantityMock,
    });

    const wrapper = mount(CartSidebar, {
      global: { plugins: [createPinia()] },
    });

    const productDiv = wrapper.find(".cart");
    expect(productDiv.exists()).toBe(true);
    expect(productDiv.text()).toContain("item 1");
  });

  // Test Case 3: Trigger increaseQuantity function when clicking the + button
  it("Clicking + button triggers increaseQuantity", async () => {
    useCartItemStoreMock.mockReturnValue({
      cartItems: [
        { id: 1, title: "item 1", price: 22, image: "test.jpg", quantity: 1 },
      ],
      itemCount: 1,
      totalPrice: 22,
      increaseQuantity: increaseQuantityMock,
      decreaseQuantity: decreaseQuantityMock,
    });

    const wrapper = mount(CartSidebar, {
      global: { plugins: [createPinia()] },
    });

    const plusButton = wrapper.find('[data-testid="increaseQuantity-btn"]');
    await plusButton.trigger("click");

    expect(increaseQuantityMock).toHaveBeenCalledWith(1);
  });

  // Test Case 4: Trigger decreaseQuantity function when clicking the - button
  it("Clicking - button triggers decreaseQuantity", async () => {
    useCartItemStoreMock.mockReturnValue({
      cartItems: [
        { id: 1, title: "item 1", price: 22, image: "test.jpg", quantity: 2 },
      ],
      itemCount: 2,
      totalPrice: 44,
      increaseQuantity: increaseQuantityMock,
      decreaseQuantity: decreaseQuantityMock,
    });
    const wrapper = mount(CartSidebar, {
      global: { plugins: [createPinia()] },
    });

    const plusButton = wrapper.find('[data-testid="decreaseQuantity-btn"]');
    await plusButton.trigger("click");

    expect(decreaseQuantityMock).toHaveBeenCalledWith(1);
  });

  //Test Case 5: Render Correct totalPrice and itemCount
  it("Show corerect totalPrice and itemCount", () => {
    useCartItemStoreMock.mockReturnValue({
      cartItems: [
        { id: 1, title: "item 1", price: 22, image: "test.jpg", quantity: 2 },
        { id: 2, title: "item 2", price: 30, image: "test.jpg", quantity: 4 },
      ],
      itemCount: 6,
      totalPrice: 164,
      increaseQuantity: increaseQuantityMock,
      decreaseQuantity: decreaseQuantityMock,
    });

    const wrapper = mount(CartSidebar, {
      global: { plugins: [createPinia()] },
    });

    const cartFooter = wrapper.find(".cart__footer").text();
    expect(cartFooter).toContain("Number of Items: 6");
    expect(cartFooter).toContain("Total Price: 164 $");
  });
});
