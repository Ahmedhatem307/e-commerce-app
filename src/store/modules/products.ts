
export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
}

const productsModule = {
  namespaced: true,
  state: (): ProductsState => ({
    products: [],
    loading: false,
    error: null,
  }),
  mutations: {
    setProducts(state: ProductsState, products: Product[]) {
      state.products = products;
    }
  },
  actions: {
    async fetchProducts({ commit }: any) {
      try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        commit('setProducts', data);
      }
      catch(error) {
        console.error(error);
      }
    },
  },
  getters: {
    
    },
  }

export default productsModule