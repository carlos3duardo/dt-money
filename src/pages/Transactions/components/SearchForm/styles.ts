import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;

        border: 0;
        border-radius: 6px;
        background-color: ${props => props.theme.gray900};
        color: ${props => props.theme.gray300};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme.gray500};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        padding: 1rem;
        background-color: transparent;

        border-radius: 6px;
        border: 1px solid ${props => props.theme.green300};
        color: ${props => props.theme.green300};
        font-weight: bold;

        &:hover {
            color: ${props => props.theme.white};
            border-color: ${props => props.theme.green500};
            background-color: ${props => props.theme.green500};

            transition: background-color 0.2s, border-color 0.2s, color 0.2s;
        }

    }
`