import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <InputContainer {...props} ref={ref} />
  },
)

Input.displayName = 'Input'
