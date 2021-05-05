import Layout from '../components/Layout'
import { CartStateProvider } from '../context/cartContext'
import { ProductsStateProvider } from '../context/productsContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <ProductsStateProvider>
      <CartStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartStateProvider>
    </ProductsStateProvider>
  )
}
