import { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Archivo";
  src: url("/static/Archivo-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
  html {
    --darkGrey: #656565;
    --lightGrey: #9B9B9B;
    --black: #000000;
    --divider: #E4E4E4;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
  }
  button {
    font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 90%;
  }
`

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <GlobalStyles />
      <Header />
      {children}
    </div>
  )
}
