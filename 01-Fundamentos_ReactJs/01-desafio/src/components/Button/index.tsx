import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: ReactNode
  danger: boolean
}
export default function Button({ title, icon, danger, ...props }: PropsButton) {
  return (
    <ButtonContainer {...props} danger={danger}>
      {icon}
      {title}
    </ButtonContainer>
  )
}
