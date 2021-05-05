import styled from 'styled-components'

export default function Button({ onClick, children }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: var(--black);
  color: white;
  border: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
`
