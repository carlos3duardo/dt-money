import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme.gray900};
  padding: 2.5rem 0 7.5rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.figure`
  display: block;
  width: 173px;
  height: 42px;

  img {
    display: block;
    width: inherit;
    height: inherit;
  }
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  button {
    height: 50px;
    border: 0;
    background-color: ${props => props.theme.green500};
    color: ${props => props.theme.white};

    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => props.theme.green700};
    }
  }
`