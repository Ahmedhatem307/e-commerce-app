import { describe, it, expect, vi } from "vitest";
import CartButton from "../../components/CartButton.vue";
import {mount} from '@vue/test-utils'
import {createStore} from 'vuex'

const cartModule = {
    namespaced: true,
    state: () => ({
        items: []
    }),
    getters: {
        itemCount: () => 0
    },
    actions: {
        toggleCart: vi.fn()
    }
}

const store = createStore({
    modules: {
        cart: cartModule
    }
})

describe("CartButton.vue", () =>{
    // Test Case 1: Inetial render
    it("render CartButton but not CartSidebar", () => {
        const wrappper = mount(CartButton)
        expect(wrappper.find('.cartBtn').exists()).toBe(true)
        expect(wrappper.findComponent({name: 'CartSideBar'}).exists()).toBe(false)
    })

    //Test Case 2: Clicking the Cart button and rendering the SideCartbar
    it("render CartButton and CartSidebar", async() => {
        const wrappper = mount(CartButton, {
            global: {
                plugins: [store]
            }
        })
        await wrappper.find('.cartBtn').trigger('click')
        expect(wrappper.findComponent({name: 'CartSidebar'}).exists()).toBe(true)
    })

    // Test Case 3: Toggling the CartSidebar on close emit
    it("hide CartSidebar when CartSidebar emit close", async() => {
        const wrappper = mount(CartButton, {
            global: {
                plugins: [store]
            }
        })

        await wrappper.find('.cartBtn').trigger('click')
        const sidebar = wrappper.findComponent({name: "CartSidebar"})
        await sidebar.vm.$emit('close')
        await wrappper.vm.$nextTick()

        expect(wrappper.findComponent({name:'CartSidebar'}).exists()).toBe(false)
    })
})