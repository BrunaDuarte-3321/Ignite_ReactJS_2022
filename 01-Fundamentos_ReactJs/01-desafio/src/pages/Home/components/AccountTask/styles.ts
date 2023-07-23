import styled from 'styled-components'

type ColorsAccountTasks = {
  variant: 'blue' | 'purple'
}

export const HeaderTasksContainer = styled.header`
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

  span {
    background: ${({ theme }) => theme.colors['base-gray-400']};
    border-radius: 999px;
    color: ${({ theme }) => theme.colors['base-gray-200']};
    padding: 0.105rem 0.5rem;
  }
`
