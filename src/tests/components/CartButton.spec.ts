import { describe, it, expect, vi, beforeEach } from "vitest";
import CartButton from "../../components/cart/CartButton.vue";
import {mount} from '@vue/test-utils'
import {createPinia, setActivePinia} from 'pinia'



vi.mock('@/stores/cartItemsStore', () => {
  const items: any = []
  return {
    useCartItemStore: vi.fn(() => ({
      items,
      cartItems: items,
      itemCount: 0,
      totalPrice: 0,
      ADD_ITEM: vi.fn(),
      increaseQuantity: vi.fn(),
      decreaseQuantity: vi.fn(),
    })),
  }
})


describe("CartButton.vue", () =>{
beforeEach(() => {
    setActivePinia(createPinia());
  });


    // Test Case 1: Inetial render
    it("render CartButton but not CartSidebar", () => {
        const wrapper = mount(CartButton)
        expect(wrapper.find('.cartBtn').exists()).toBe(true)
        expect(wrapper.findComponent({name: 'CartSideBar'}).exists()).toBe(false)
    })

    //Test Case 2: Clicking the Cart button and rendering the SideCartbar
    it("render CartButton and CartSidebar", async() => {
        const wrapper = mount(CartButton, {
            global: {
                plugins: [createPinia()],
            },
        });

        await wrapper.find('.cartBtn').trigger('click')
        await wrapper.vm.$nextTick();
        expect(wrapper.findComponent({name: 'CartSidebar'}).exists()).toBe(true)
    })

    // Test Case 3: Toggling the CartSidebar on close emit
    it("hide CartSidebar when CartSidebar emit close", async() => {
        const wrapper = mount(CartButton, {
            global: {
                plugins: [createPinia()]
            }
        })

        await wrapper.find('.cartBtn').trigger('click')
        const sidebar = wrapper.findComponent({name: "CartSidebar"})
        await sidebar.vm.$emit('close')
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent({name:'CartSidebar'}).exists()).toBe(false)
    })
})