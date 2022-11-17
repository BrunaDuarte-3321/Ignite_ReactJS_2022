import { IconWrapper, QuantityInputContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface QuantityinputProps {
  size?: 'small' | 'medium'
}
export function QuantityInput({ size = 'medium' }: QuantityinputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus weight="fill" size={22} />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus weight="fill" size={22} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
