import {
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'
import tradicional from '../../../../assets/tradicional.png'
import { RegularText, TitleText } from '../../../../components/Typography'

export function CoffeesCard() {
  return (
    <CoffeeCardContainer>
      <img src={tradicional} alt="" />
      <Tags>
        <span>Tradicional </span>
        <span>com leite </span>
      </Tags>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
