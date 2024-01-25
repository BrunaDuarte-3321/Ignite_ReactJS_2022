import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button'
import { FooterModal, ModalContainer, Overlay } from './styles'

interface Props {
  danger?: boolean
  title: string
  children: ReactNode
  cancelLabel?: string
  confirmLabel?: string
  deleteTask?: () => void
  closedModal: () => void
}

export const Modal = ({ closedModal, deleteTask, cancelLabel, confirmLabel, children ,title ,danger = false }: Props) => {

  const handleCLoseModal = () => {

  }
  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) {
    throw new Error('Modal root element not found in the document')
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer danger={danger}>
        <h1>{title}</h1>
        <div className='modal-body'>
        {children}
        </div>
        <FooterModal>
          <button className="cancel-button" onClick={closedModal}>{cancelLabel}</button>
          <Button danger={danger} type="button" title={confirmLabel!} onClick={deleteTask}  />
        </FooterModal>
      </ModalContainer>
    </Overlay>,
    modalRoot
  )
}
