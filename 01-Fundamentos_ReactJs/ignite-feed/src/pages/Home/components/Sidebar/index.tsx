import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from '../../../../components/Avatar'
import { SidebarContainer, SidebarProfile } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <img
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <SidebarProfile>
        <div>
          <Avatar avatar="BrunaDuarte-3321" />
        </div>
        <strong>Bruna Duarte</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            <PencilSimpleLine size={20} weight="bold" />
            Editar seu Perfil
          </a>
        </footer>
      </SidebarProfile>
    </SidebarContainer>
  )
}
