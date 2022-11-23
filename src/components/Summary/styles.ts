import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'income' | 'outcome' | 'total';
}


export const SummaryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    line-height: 160%;
    color: ${props => props.theme.gray300};
  }
`

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.variant === 'total' ? props.theme.green700 : props.theme.gray600 };
  border-radius: 6px;
  padding: 2rem;

  ${SummaryHeader} {
    svg {
      color: ${props => props.variant === 'income' ? props.theme.green300
        : props.variant === 'outcome' ? props.theme.red300
        : props.theme.white }
    }
  }

`


export const SummaryBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  color: ${props => props.theme.white};
  font-size: 2rem;
`