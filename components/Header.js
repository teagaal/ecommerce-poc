import styled from 'styled-components'
import IconButton from './IconButton'
import Badge from './Badge'
import Cart from './Cart'
import { useCart } from '../context/cartContext'

export default function Header() {
  const { toggleCart } = useCart()
  return (
    <StyledHeader>
      <div className="header__wrapper">
        <h1>Snapshot</h1>
        <IconButton onClick={toggleCart} ariaLabel="View cart">
          <img src="/static/cart.svg" alt="" height={38} width={38} />
        </IconButton>
        <Badge />
      </div>
      <Cart />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  border-bottom: 4px solid var(--divider);
  padding: 0.5rem 0;
  margin-bottom: 1rem;

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`
