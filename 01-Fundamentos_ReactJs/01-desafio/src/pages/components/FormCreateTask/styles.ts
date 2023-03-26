import styled from 'styled-components'

export const FormCreateTaskContainer = styled.div`
  form {
    margin: -1.625rem auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 0.5rem;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 768px) {
      width: auto;
    }
  }

  input {
    color: ${({ theme }) => theme.colors['base-gray-100']};
    padding: 1rem;
    background: ${({ theme }) => theme.colors['base-gray-500']};
    border-radius: 8px;
    width: 39.875rem;
    height: 3.25rem;
    @media (max-width: 768px) {
      max-width: 25rem;
    }
    @media (max-width: 425px) {
      width: auto;
    }
  }
  input:default {
    color: ${({ theme }) => theme.colors['base-gray-300']};
  }

  button {
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
  }
`
type ColorsAccountTasks = {
  variant: 'blue' | 'purple'
}
export const AccountTasksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.06rem;
`

export const AccountContainer = styled.div<ColorsAccountTasks>`
  color: ${({ theme, variant }) => theme.colors[`${variant}`]};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  line-height: 1rem;
  margin-bottom: 1.75rem;

  p {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  span {
    background: ${({ theme }) => theme.colors['base-gray-400']};
    border-radius: 999px;
    color: ${({ theme }) => theme.colors['base-gray-200']};
    padding: 0.105rem 0.5rem;
  }
`
export const NoTaskContainer = styled.div`
  border-top: solid 1px ${({ theme }) => theme.colors['base-gray-400']};
  margin-top: 1.562rem;
  border-radius: 5px;

  display: flex;
  justify-content: center;
`

export const NoTaskContentContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors['base-gray-300']};
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 140%;
    font-weight: 700;
  }

  p + p {
    font-weight: normal;
  }

  svg {
    opacity: 0.2;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    p {
      text-align: center;
    }
  }
`
