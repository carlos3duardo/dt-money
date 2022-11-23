import { HeaderContainer, HeaderContent, Logo, Navigation } from "./styles";

import logoImg from '../../assets/images/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo><img src={logoImg} alt="" /></Logo>
                <Navigation>
                    <button type="button">Nova transação</button>
                </Navigation>
            </HeaderContent>
        </HeaderContainer>
    )
}