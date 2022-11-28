import { HeaderContainer, HeaderContent, Logo, Navigation } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

import logoImg from '../../assets/images/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logoImg} alt="" />
        </Logo>
        <Navigation>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button type="button">Nova transação</button>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  )
}
