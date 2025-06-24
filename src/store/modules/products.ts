
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
    },
    setLoading(state: ProductsState, loading: boolean) {
      state.loading = loading;
    },
    setError(state: ProductsState, error: string | null){
      state.error = error;
    }
  },
  actions: {
    async fetchProducts({ commit }: any) {
      commit('setLoading', true);
      try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        commit('setProducts', data);
        commit('setLoading', false);
      }
      catch(error) {
        commit('setError', 'Failed to load');
        commit('setLoading', false);
      }
    },
  },
  getters: {
    
    },
  }

export default productsModule