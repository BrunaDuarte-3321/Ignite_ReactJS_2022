import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    background: ${({ theme }) => theme.colors['gray-900']};
    color: ${({ theme }) => theme.colors['gray-300']}
  }

  :focus{
    outline:0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['green-500']}
  }
  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    font-size: 1rem;
  }
`
