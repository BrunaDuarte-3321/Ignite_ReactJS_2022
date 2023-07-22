import styled from 'styled-components'

export const InputContainer = styled.input`
  color: ${({ theme }) => theme.colors['base-gray-100']};
  padding: 1rem;
  background: ${({ theme }) => theme.colors['base-gray-500']};
  border-radius: 8px;
  width: 39.875rem;
  height: 3.25rem;

  &:default {
    color: ${({ theme }) => theme.colors['base-gray-300']};
  }

  @media (max-width: 768px) {
    max-width: 25rem;
  }
  @media (max-width: 425px) {
    width: auto;
  }
`
