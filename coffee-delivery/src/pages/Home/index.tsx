import { Banner } from './components/Banner'
import { OurCoffees } from './components/OurCoffees'
import { HomePageContainer } from './styles'

export function HomePage() {
  return (
    <HomePageContainer>
      <Banner />
      <OurCoffees />
    </HomePageContainer>
  )
}
