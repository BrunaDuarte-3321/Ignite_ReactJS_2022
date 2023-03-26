import styled from 'styled-components'

export const PostContainer = styled.article`
  grid-column: 2;
  grid-row: 1 / span;
  background: ${({ theme }) => theme.colors['gray-800']};
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1 / span;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 3rem;
    height: 3rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const PostContent = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors['gray-300']};
  margin-top: 1.5rem;
  > div {
    p {
      display: flex;
      gap: 1rem;
    }
  }

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors['green-500']};
    transition: color 0.02;

    &:hover {
      color: ${({ theme }) => theme.colors['green-300']};
    }
  }
`
export const PostForm = styled.form`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors['gray-600']};
  margin-top: 1.5rem;
  padding-top: 1.5rem;

  h3 {
    font-weight: 700;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    height: 6rem;
    background: ${({ theme }) => theme.colors['gray-900']};
    border: 0;
    resize: none;
    border-radius: 8px;
    padding: 1rem;
    color: ${({ theme }) => theme.colors['gray-100']};
  }

  footer {
    visibility: hidden;
    max-height: 0;
    button {
      padding: 1rem 1.5rem;
      background: ${({ theme }) => theme.colors['green-500']};
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      transition: background-color 0.2s;
      line-height: 1.4;

      &:hover {
        background: ${({ theme }) => theme.colors['green-300']};
      }
    }
  }
  &:focus-within footer {
    visibility: visible;
    max-height: none;
  }
`
