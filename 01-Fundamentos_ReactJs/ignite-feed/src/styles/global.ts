import { createGlobalStyle } from 'styled-components'

export const StyleGlobal = createGlobalStyle`

:focus{
  outline: transparent;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['green-500']};
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: ${({ theme }) => theme.colors['gray-900']};
  color:${({ theme }) => theme.colors['gray-300']};
  -webkit-font-smoothing:antialiased;
  /*-webkit-font-smoothing: antialiased; == padronização das fontes,
    para ficar mais detalhadas */
}

body, input, text, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

.container{
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}

@media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
