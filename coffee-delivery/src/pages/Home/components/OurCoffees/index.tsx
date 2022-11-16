import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data'
import { CoffeesCard } from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeesCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
