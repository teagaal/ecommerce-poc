import styled from 'styled-components'
import { useCart } from '../context/cartContext'

export default function ProductItem({ item }) {
  const { addToCart } = useCart()
  return (
    <StyledArticle>
      <div className="article__figure">
        <div className="article__figure__wrapper">
          <img src={item.image.src} alt={item.image.alt} />
        </div>
        {item.bestseller && (
          <span className="article__image-bestseller">Best Seller</span>
        )}
        <button onClick={() => addToCart(item)} className="article__CTA">
          Add to cart
        </button>
      </div>
      <span className="article__category">{item.category}</span>
      <span className="article__name">{item.name}</span>
      <span className="article__price">${item.price}</span>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;

  .article__figure {
    position: relative;
    &:hover button {
      transform-origin: 0% 100%;
      transform: scaleY(1);
    }
  }

  .article__figure__wrapper {
    height: calc(260px + 5vw);
    overflow: hidden;
  }

  img {
    max-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .article__image-bestseller {
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }

  .article__CTA {
    position: absolute;
    bottom: 0;
    background-color: var(--black);
    color: white;
    border: none;
    text-transform: uppercase;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 500;
    transform-origin: 0% 100%;
    transform: scaleY(0);
    transition: transform 0.35s ease;
    cursor: pointer;
  }

  .article__category {
    text-transform: capitalize;
    color: var(--darkGrey);
    font-size: 0.9rem;
  }

  .article__name {
    font-weight: 700;
    font-size: 1.2rem;
  }

  .article__price {
    color: var(--darkGrey);
    font-size: 1.2rem;
  }
`
