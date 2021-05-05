import styled from 'styled-components'
import { useProducts } from '../context/productsContext'

export default function Pagination() {
  const {
    changePage,
    pageCount,
    setSelectedPage,
    nextPage,
    prevPage,
    selectedPage,
  } = useProducts()
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  const handleClick = (e) => {
    const page = Number(e.target.value)
    changePage(page - 1)
    setSelectedPage(page - 1)
  }

  return (
    <StyledList>
      {selectedPage !== 0 && (
        <li>
          <button onClick={prevPage}>&lt;</button>
        </li>
      )}

      {pages.map((page) => {
        return (
          <li key={page}>
            <button value={page} onClick={handleClick}>
              {page}
            </button>
          </li>
        )
      })}

      {selectedPage !== pageCount - 1 && (
        <li>
          <button onClick={nextPage}>&gt;</button>
        </li>
      )}
    </StyledList>
  )
}

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 4rem;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
  }
`
