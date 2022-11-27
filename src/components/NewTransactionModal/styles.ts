import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;

    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;

    background-color: ${props => props.theme.gray800};

    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border: 0;
            border-radius: 6px;
            background-color: ${props => props.theme.gray900};
            color: ${props => props.theme.gray300};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme.gray500};
            }
        }

        button[type="submit"] {
            height: 58px;
            border: 0;
            background-color: ${props => props.theme.green500};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 6px;
            margin-top: 1.5rem;

            cursor: pointer;

            transition: background-color 0.2s;

            &:hover {
                background-color: ${props => props.theme.green700};
            }
        }
    }
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background-color: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;

    line-height: 0;
    cursor: pointer;

    color: ${props => props.theme.gray500};
`