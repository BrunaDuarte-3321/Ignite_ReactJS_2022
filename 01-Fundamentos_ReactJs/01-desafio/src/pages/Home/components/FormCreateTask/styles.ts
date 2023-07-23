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
