import { IconWrapper, QuantityInputContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface QuantityinputProps {
  size?: 'small' | 'medium'
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}
export function QuantityInput({
  size = 'medium',
  onDecrease,
  quantity,
  onIncrease,
}: QuantityinputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus weight="fill" size={22} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus weight="fill" size={22} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
