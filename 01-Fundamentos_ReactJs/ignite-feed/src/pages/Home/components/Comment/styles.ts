/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const CommentContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`
export const CommentImage = styled.div`
  display: flex;
  img {
    width: 3rem;
    height: 3rem;
  }
`
export const CommentBox = styled.div`
  flex: 1;
  footer {
    margin-top: 1rem;

    button {
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors['gray-400']};

      display: flex;
      align-items: center;
      border-radius: 2px;
      cursor: pointer;
      transition: color 0.2s;
      &:hover {
        color: ${({ theme }) => theme.colors['green-500']};
      }

    svg {
      margin-right: 0.5rem;
    }

    span::before {
      content: "•";
      padding: 0 0.25rem;
      border-radius: 2px;
    }
  }
}
`

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;

    svg {
      color: ${({ theme }) => theme.colors['gray-400']};
      cursor: pointer;
      transition: color 0.2s;
      &:hover {
        color: ${({ theme }) => theme.colors['red-500']};
      }
    }
  }
  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['gray-100']};
      line-height: 1.6;
      font-weight: 700;
    }
    time {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors['gray-400']};
      line-height: 1.6;
    }
  }
`
export const CommentContent = styled.div`
  background: ${({ theme }) => theme.colors['gray-700']};
  border-radius: 8px;
  padding: 1rem;

  > p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors['gray-300']};
    line-height: 1.6;
    font-size: 0.75rem;
  }
`
