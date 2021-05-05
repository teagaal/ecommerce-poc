import { createContext, useContext, useState, useEffect } from 'react'
import { paginateData } from '../utils/common'

const LocalStateContext = createContext()
const LocalStateProvider = LocalStateContext.Provider

const PER_PAGE = 6

function ProductsStateProvider({ children }) {
  const [products, setProducts] = useState([])
  const [paginatedProducts, setPaginatedProducts] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const [selectedPage, setSelectedPage] = useState(0)
  const [filters, setFilters] = useState([])

  const fetchData = async () => {
    await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products.sort((a, b) => a.price - b.price))
        const categories = [...new Set(data.products.map((p) => p.category))]
        setFilters(categories)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      const productsCopy = [...products]
      const productPages = paginateData(productsCopy, PER_PAGE)
      setPaginatedProducts(productPages)
      setCurrentPage(productPages[0])
    }
  }, [products])

  function sortAlphabetically() {
    const orderedProducts = [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    setProducts(orderedProducts)
  }

  function sortByPrice() {
    const orderedProducts = [...products].sort((a, b) => a.price - b.price)
    setProducts(orderedProducts)
  }

  function toggleOrder() {
    const reverseProducts = [...products].reverse()
    setProducts(reverseProducts)
  }

  function changePage(value) {
    setCurrentPage(paginatedProducts[value])
  }

  function nextPage() {
    setCurrentPage(paginatedProducts[selectedPage + 1])
    setSelectedPage(selectedPage + 1)
  }

  function prevPage() {
    setCurrentPage(paginatedProducts[selectedPage - 1])
    setSelectedPage(selectedPage - 1)
  }

  const pageCount = Math.ceil(products.length / PER_PAGE)

  return (
    <LocalStateProvider
      value={{
        products,
        currentPage,
        pageCount,
        changePage,
        setSelectedPage,
        selectedPage,
        nextPage,
        prevPage,
        sortAlphabetically,
        sortByPrice,
        toggleOrder,
        filters,
      }}
    >
      {children}
    </LocalStateProvider>
  )
}

function useProducts() {
  const all = useContext(LocalStateContext)
  return all
}

export { ProductsStateProvider, useProducts }
