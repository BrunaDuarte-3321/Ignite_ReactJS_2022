import styled from 'styled-components'

export const NewPostContainer = styled.div`
  width: 90%;
  max-width: 70rem;
  margin: 0 auto;

  background: ${({ theme }) => theme.colors['gray-700']};
  margin-top: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
`

export const NewPostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 80%;
    gap: 1rem;
    display: grid;
    grid-template-areas:
      'name name  profileGit'
      'role role  date'
      'post post   post'
      'button button button';

    input {
      border-radius: 8px;
      height: 3rem;
      padding: 1rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0 1rem 0;
      button {
        padding: 1rem 4rem;
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

    textarea {
      background: ${({ theme }) => theme.colors['gray-900']};
      padding: 1rem;
      border: 0;
      resize: none;
      border-radius: 8px;
      color: ${({ theme }) => theme.colors['gray-100']};
    }
    .name {
      grid-area: name;
    }
    .profileGit {
      grid-area: profileGit;
    }
    .role {
      grid-area: role;
    }
    .date {
      grid-area: date;
    }
    .post {
      grid-area: post;
    }
    .button {
      grid-area: button;
    }

    @media (max-width: 768px) {
      grid-template-areas:
        'name'
        'profileGit'
        'role'
        'date'
        'post'
        'button';
    }
  }
`
