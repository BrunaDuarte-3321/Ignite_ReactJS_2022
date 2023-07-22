import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon: ReactNode
}
export default function Button({ title, icon, ...props }: PropsButton) {
  return (
    <ButtonContainer {...props}>
      {icon}
      {title}
    </ButtonContainer>
  )
}
