import { TitleText } from '../../../../components/Typography'
import { CoffeesCard } from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        <CoffeesCard />
        <CoffeesCard />
        <CoffeesCard />
        <CoffeesCard />
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
