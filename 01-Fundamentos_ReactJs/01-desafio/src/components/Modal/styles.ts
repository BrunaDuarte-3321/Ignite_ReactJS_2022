import styled from "styled-components";

export const Overlay = styled.div`
background: rgba(0,0,0,0.6);
backdrop-filter: blur(4px);
position: absolute;
width: 100%;
height: 100vh;
left: 0;
top: 0;

display: flex;
align-items: center;
justify-content: center;
`

interface Props {
  danger: boolean
}

export const ModalContainer = styled.div<Props>`
width: 100%;
max-width: 450px;

background: #fff;
border-radius: 4px;
padding: 24px;
box-shadow: 0px 4px 10px rgba(0,0,0,0.4);

h1 {
  font-size: 22px;
  color: ${({theme, danger}) => (
    danger ? theme.colors.danger : theme.colors["base-gray-700"]
  )};
}

p {
  margin-top: 8px;
}

`

export const FooterModal = styled.footer`
  margin-top: 32px;
  display: flex;
  align-content: center;
  justify-content: flex-end;

  .cancel-button{
    background: transparent;
    border: none;
    font-size: 1rem;
    margin-right: 0.5rem;
    color: green;
    cursor: pointer;
  }
`