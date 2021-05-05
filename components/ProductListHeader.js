import styled from 'styled-components'
import { useProducts } from '../context/productsContext'
import IconButton from './IconButton'

export default function ProductListHeader() {
  const { sortAlphabetically, sortByPrice, toggleOrder } = useProducts()

  const handleChange = (option) => {
    if (option === 'alphabetically') {
      sortAlphabetically()
    } else {
      sortByPrice()
    }
  }

  return (
    <StyledDiv>
      <h3>
        Photography / <span className="heading__subtitle">Premium Photos</span>
      </h3>
      <div className="heading__filters">
        <IconButton
          onClick={toggleOrder}
          ariaLabel="Ascending/descending order"
        >
          <img src="/static/order.svg" alt="" width={20} height={20} />
        </IconButton>
        <label htmlFor="filter-select">Sort by</label>
        <select
          name="filters"
          id="filter-select"
          defaultValue="price"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  .heading__subtitle {
    font-weight: normal;
    color: var(--lightGrey);
  }

  .heading__filters {
    display: flex;
  }

  label {
    color: var(--lightGrey);
    width: 10ch;
  }

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
    background: white url('/static/arrow.svg') no-repeat;
    background-position: right 5px top 50%;
  }
`
