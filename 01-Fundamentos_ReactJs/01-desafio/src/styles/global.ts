import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }
  :focus{
  outline: transparent;
  box-shadow: 0 0 0  2px ${({ theme }) => theme.colors['purple-dark']};
}

body{
  background: ${({ theme }) => theme.colors['base-gray-600']};
  color: ${({ theme }) => theme.colors['base-gray-200']};
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xl};
}

.container {
  width: 46rem;
  display:  flex;
  flex-direction: column;
  margin:  0 auto;

  @media (max-width: 768px) {
    width: auto;
    padding: 1rem;
    }
}
.finishedTask{
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors['base-gray-300']};
}
`
