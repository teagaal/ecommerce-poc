import styled from 'styled-components'

export default function Cart({ onClick, ariaLabel, children }) {
  return (
    <StyledButton onClick={onClick} aria-label={ariaLabel}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: white;
  border: none;
  cursor: pointer;
  padding: 0;
`
