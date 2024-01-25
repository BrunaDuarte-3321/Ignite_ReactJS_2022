import ReactDOM from 'react-dom'; // Ensure correct import statement
import Button from '../Button';
import { FooterModal, ModalContainer, Overlay } from './styles';

interface Props {
  danger?: boolean;
}

export const Modal = ({ danger = false }: Props) => {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    throw new Error('Modal root element not found in the document');
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer danger={danger}>
        <h1>Titulo Modal</h1>
        <p>Corpo Modal</p>
        <FooterModal>
          <button className="cancel-button">Cancelar</button>
          <Button danger={danger} type="button" title="Deletar" />
        </FooterModal>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
