import styled from 'styled-components'
import Button from './Button'
import { useCart } from '../context/cartContext'
import { formatSize } from '../utils/common'

export default function Featured({ item }) {
  const { addToCart } = useCart()
  return (
    <StyledArticle>
      <div className="featured__header">
        <h2>{item?.name}</h2>
        <Button onClick={() => addToCart(item)}>Add to cart</Button>
      </div>
      <div className="featured__figure">
        <img
          src={item?.image?.src}
          alt={item?.image?.alt}
          width={450}
          height={380}
        />
        <span className="featured__flag">Photo of the day</span>
      </div>
      <div className="featured__subheader">
        <div className="featured__info">
          <p className="featured__name">About {item?.name}</p>
          <p className="featured__category">{item?.category}</p>
          <p className="featured__description">{item?.details?.description}</p>
        </div>
        <div className="featured__details">
          <p className="featured__related">People also buy</p>
          <div></div>
          <p className="featured__details__title">Details</p>
          <p className="featured__details__dimensions">
            Size: {item?.details?.dimensions?.width} x{' '}
            {item?.details?.dimensions?.height} pixels
          </p>
          <p className="featured__details__size">
            Size: {formatSize(item?.details?.size)}
          </p>
        </div>
      </div>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  border-bottom: 4px solid var(--divider);
  margin-bottom: 3rem;

  .featured__header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .featured__figure {
    width: 100%;
    height: 380px;
    position: relative;
  }
  .featured__figure img {
    min-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .featured__flag {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    font-size: 0.9rem;
    padding: 0.7rem 1rem;
    font-weight: 500;
  }
  .featured__subheader {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 3rem 0;
  }
  .featured__info {
    width: 50ch;
  }

  .featured__name {
    font-weight: 600;
  }

  .featured__category {
    color: var(--darkGrey);
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 0.6rem;
  }

  .featured__description {
    color: var(--darkGrey);
    font-size: 0.9rem;
  }

  .featured__details {
    text-align: end;
  }

  .featured__related {
    font-weight: 600;
  }

  .featured__details__title {
    font-weight: 600;
  }
`
