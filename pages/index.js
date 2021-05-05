import styled from 'styled-components'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import Filters from '../components/Filters'
import { useProducts } from '../context/productsContext'
import ProductListHeader from '../components/ProductListHeader'

export default function Homepage() {
  const { products, currentPage } = useProducts()

  const featuredItem = products.filter((p) => p.featured === true)

  return (
    <main>
      {featuredItem && <Featured item={featuredItem[0]} />}
      <StyledDiv>
        <ProductListHeader />
        <Filters />
        <ProductList products={currentPage} />
      </StyledDiv>
    </main>
  )
}

const StyledDiv = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
    'header header'
    'filters list';
  grid-template-columns: 20vw 1fr;
  gap: 20px;
  padding-bottom: 4rem;
`
