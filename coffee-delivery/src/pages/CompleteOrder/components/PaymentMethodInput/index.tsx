import { PaymentMethodInputContainer, ContentContainer } from './styles'

import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type PaymentMethodInputPorps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputPorps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})
