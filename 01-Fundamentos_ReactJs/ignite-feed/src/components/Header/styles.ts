import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.25rem;
  background: ${({ theme }) => theme.colors['gray-800']};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
  img {
    height: 2rem;
  }
  strong {
    font-size: 1.562rem;
    line-height: 160%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors['gray-100']};
    cursor: pointer;
    transition: color 0.2s;
    border-radius: 8px;
    padding: 0.5rem;
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors['green-300']};
    }
  }
`
