import ProductItem from './ProductItem'
import Pagination from './Pagination'
import styled from 'styled-components'

export default function ProductList({ products }) {
  return (
    <div>
      <StyledProductList>
        {products.map((product) => {
          return <ProductItem key={product.id} item={product} />
        })}
      </StyledProductList>
      <Pagination />
    </div>
  )
}

const StyledProductList = styled.div`
  grid-area: list;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
`
