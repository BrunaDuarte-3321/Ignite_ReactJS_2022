import styled, { css } from 'styled-components'

interface Props {
  danger: boolean
}
export const ButtonContainer = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['base-gray-100']};
  width: 5.625rem;
  height: 3.25rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors['blue-dark']};
  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.blue};
  }

  ${({theme, danger }) => danger && css`
    background: ${theme.colors.danger};
    &:focus{
      outline: transparent;
      box-shadow: 0 0 0  2px ${({ theme }) => theme.colors['danger-dark']};
    }

    &:hover {
      background: ${theme.colors['danger-light']};
    }

    &:active {
      background: ${({theme}) =>theme.colors['danger-dark']};
    }
  `}
`
