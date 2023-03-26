import { Header } from '../../components/Header'
import { FormCreateTask } from '../components/FormCreateTask'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <FormCreateTask />
    </HomeContainer>
  )
}
