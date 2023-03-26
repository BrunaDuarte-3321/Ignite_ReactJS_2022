import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  background: ${({ theme }) => theme.colors['gray-800']};
  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 72px;
    object-fit: cover;
  }
`
export const SidebarProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors['gray-100']};
    line-height: 1.6;
  }

  span {
    color: ${({ theme }) => theme.colors['gray-400']};
    font-size: 0.875rem;
    line-height: 1.6;
  }

  > div {
    margin-top: -1.875rem;
    border: 4px solid ${({ theme }) => theme.colors['gray-800']};
    border-radius: 8px;
    outline: 2px solid ${({ theme }) => theme.colors['green-500']};

    img {
      width: calc(3rem + 12px);
      height: calc(3rem + 12px);
    }
  }

  footer {
    border-top: 1px solid ${({ theme }) => theme.colors['gray-600']};
    margin-top: 1.5rem;
    padding: 1.5rem 1rem 2rem;
    display: flex;
    align-items: center;

    a {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors['green-300']};
      border-radius: 8px;
      padding: 1rem 1.5rem 0.875rem;
      color: ${({ theme }) => theme.colors['green-300']};
      font-weight: 700;
      line-height: 19px;

      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.2s background-color 0.2s;

      &:hover {
        background: ${({ theme }) => theme.colors['green-500']};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
`
