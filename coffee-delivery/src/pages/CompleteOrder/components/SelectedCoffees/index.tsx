import { TitleText } from '../../../../components/Typography'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionandos
      </TitleText>
      <DetailsContainer>
        <p>items</p>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
