import styled from 'styled-components'
import { useCart } from '../context/cartContext'

export default function Badge() {
  const { getCartQuantity } = useCart()
  const quantity = getCartQuantity()
  return (
    <>
      {quantity > 0 && (
        <StyledDiv>
          <span className="badge__number">{quantity}</span>
        </StyledDiv>
      )}
    </>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -4px;
  top: 30px;
  pointer-events: none;

  .badge__number {
    display: inline-block;
    min-width: 0.5rem;
    padding: 0.1rem 0.5rem;
    border-radius: 50%;
    font-size: 0.7rem;
    text-align: center;
    background: var(--black);
    color: white;
  }
`
