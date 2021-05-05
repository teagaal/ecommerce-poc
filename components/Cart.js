import { useCart } from '../context/cartContext'
import IconButton from '../components/IconButton'
import styled from 'styled-components'

export default function Cart() {
  const { cartOpen, closeCart, cartProducts, clearCart } = useCart()
  return (
    <StyledDiv open={cartOpen}>
      <div className="cart__close">
        <IconButton onClick={closeCart} ariaLabel="Close cart">
          <img src="/static/close.svg" alt="" width={20} height={20} />
        </IconButton>
      </div>
      {cartProducts.length > 0
        ? cartProducts.map((product) => {
            return (
              <article key={product.id} className="cart-item__wrapper">
                <div className="cart-item__info">
                  <p className="cart-item__name">{product.name}</p>
                  <p className="cart-item__price">${product.price}</p>
                </div>
                <div className="cart-item__figure">
                  <img
                    className="cart-item__image"
                    src={product.image.src}
                    alt=""
                  />
                </div>
              </article>
            )
          })
        : null}

      <button onClick={clearCart} className="cart__clear">
        Clear
      </button>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 15vw;
  position: absolute;
  right: calc(0px + 5%);
  top: calc(0px + 7%);
  border: 3px solid var(--divider);
  z-index: 1;
  padding: 0.2rem 0.4rem;
  background-color: white;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: all 0.35s ease;

  .cart-close {
    align-self: flex-end;
  }

  .cart-item__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--divider);
  }

  .cart-item__info {
    display: flex;
    flex-direction: column;
  }

  .cart-item__name {
    font-weight: 600;
  }

  .cart-item__price {
    color: var(--darkGrey);
  }

  .cart-item__figure {
    width: 100px;
  }

  .cart-item__image {
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }

  .cart__clear {
    background-color: white;
    border: 2px solid var(--black);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
  }
`
