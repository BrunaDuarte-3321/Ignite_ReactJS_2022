import styled from 'styled-components'

export const WriteAtPostContainer = styled.div`
  background: ${({ theme }) => theme.colors['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  h1 {
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    p {
      font-size: 1.25rem;
    }
  }
`
