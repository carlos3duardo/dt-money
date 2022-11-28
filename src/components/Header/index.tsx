import { HeaderContainer, HeaderContent, Logo, Navigation } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

import logoImg from '../../assets/images/logo.svg'
import { useState } from 'react'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logoImg} alt="" />
        </Logo>
        <Navigation>
          <Dialog.Root open={isModalOpen}>
            <Dialog.Trigger asChild onClick={() => setIsModalOpen(true)}>
              <button type="button">Nova transação</button>
            </Dialog.Trigger>

            <NewTransactionModal closeModal={() => handleCloseModal()} />
          </Dialog.Root>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  )
}
