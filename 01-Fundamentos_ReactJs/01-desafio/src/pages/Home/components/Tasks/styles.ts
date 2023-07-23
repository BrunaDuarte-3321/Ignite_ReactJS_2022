import styled from 'styled-components'

export const TasksContainer = styled.section`
  width: 100%;
  min-height: 2.5rem;
  margin-bottom: 1rem;

  background: ${({ theme }) => theme.colors['base-gray-500']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  display: flex;

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

export const BoxTaskContainer = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 46rem;
  padding: 1rem;
`

export const HeaderTaskContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const HeaderIconEdit = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const HeaderTaskIconCircle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const TrashContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;

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
export const ContentContainer = styled.div`
  word-break: break-all;
  margin-right: 0.5rem;
  flex: 1;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-decoration-line: strikethrough;
`
