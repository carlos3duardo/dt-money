import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

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

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`

type TransactionTypeButtonProps = {
    variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background-color: ${props => props.theme.gray700};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;

    border: 0;
    color: ${props => props.theme.gray300};

    transition: background-color 0.2s;

    svg {
        color: ${props => props.variant === 'income' ? props.theme.green300 : props.theme.red300};
    }

    &:hover {
        background-color: ${props => props.theme.gray600};
    }

    &[data-state="checked"] {
        color: ${props => props.theme.white};
        background-color: ${props => props.variant === 'income' ? props.theme.green500 : props.theme.red500};

        svg {
            color: ${props => props.theme.white};
        }
    }
`