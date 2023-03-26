import logo from '../../assets/igniteLogo.svg'
import { PlusCircle } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderContent>
        <div onClick={() => navigate('/')}>
          <img src={logo} alt="" />
          <strong>Ignite Feed</strong>
        </div>
        <button onClick={() => navigate('/newpost')}>
          <PlusCircle />
          Criar Post
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
