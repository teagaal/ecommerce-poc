import styled from 'styled-components'
import { useProducts } from '../context/productsContext'

export default function Filters() {
  const { filterByCategories, filters } = useProducts()

  return (
    <StyledDiv>
      <ul className="filters__category">
        <span>category</span>
        {filters.map((c) => {
          return (
            <li key={c}>
              <label htmlFor={c}>
                <input
                  type="checkbox"
                  id={c}
                  value={c}
                  onChange={(e) => filterByCategories(e.target.value)}
                />
                <span>{c}</span>
              </label>
            </li>
          )
        })}
      </ul>
      <ul className="filters__price">
        <span>Price range</span>
        <li>
          <label htmlFor="price1">
            <input type="checkbox" id="price1" />
            <span>Less than $20</span>
          </label>
        </li>
        <li>
          <label htmlFor="price2">
            <input type="checkbox" id="price2" />
            <span>$20 - $100</span>
          </label>
        </li>
        <li>
          <label htmlFor="price3">
            <input type="checkbox" id="price3" />
            <span>$100 - $200</span>
          </label>
        </li>
        <li>
          <label htmlFor="price4">
            <input type="checkbox" id="price4" />
            <span>More than $200</span>
          </label>
        </li>
      </ul>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  grid-area: filters;
  margin: 0 3rem 0 0;
  > ul {
    list-style-type: none;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  > ul > span {
    font-weight: 600;
    text-transform: capitalize;
  }

  > ul:not(:last-child) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #c2c2c2;
  }

  li span {
    text-transform: capitalize;
  }
`
