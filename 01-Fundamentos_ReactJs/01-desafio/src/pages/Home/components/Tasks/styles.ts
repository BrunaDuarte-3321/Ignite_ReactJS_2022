import styled from 'styled-components'
export const TasksContainer = styled.section`
  width: 100%;
  margin-bottom: 1rem;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: ${({ theme }) => theme.colors['base-gray-500']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`
/* interface colorCheck {
  variant: 'base-gray-100' | 'blue'
} */
export const BoxTaskContainer = styled.div`
  margin-top: 1.12rem;
  margin-left: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors['blue-dark']};
    }
  }
  .finished {
    svg {
      cursor: pointer;
      border: none;
      background: ${({ theme }) => theme.colors['purple-dark']};
      border-radius: 999px;
      color: ${({ theme }) => theme.colors['base-gray-100']};
      transition: 0.2s;
      &:hover {
        background: ${({ theme }) => theme.colors.purple};
      }
    }
  }
`

export const ContentContainer = styled.div``
export const TrashContainer = styled.div`
  margin-top: 1.12rem;
  margin-right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  svg {
    cursor: pointer;
    transition: 0.2s;
    color: ${({ theme }) => theme.colors['base-gray-300']};

    &:hover {
      color: ${({ theme }) => theme.colors.danger};
    }
  }
  &:hover {
    background: ${({ theme }) => theme.colors['base-gray-400']};
    border-radius: 4px;
  }
`
