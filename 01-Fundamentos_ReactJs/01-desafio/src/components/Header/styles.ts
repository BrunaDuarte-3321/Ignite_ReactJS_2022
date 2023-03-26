import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12.5rem;
  background: ${({ theme }) => theme.colors['base-gray-700']};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    width: 7.875rem;
    height: 3rem;
  }
`
