import { SummaryBody, SummaryCard, SummaryContainer, SummaryHeader } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard variant="income">
                <SummaryHeader>
                    <span>Entradas</span>
                    <figure><ArrowCircleUp size={32} /></figure>
                </SummaryHeader>
                <SummaryBody>
                    <strong>R$</strong>
                    <strong>17.400,00</strong>
                </SummaryBody>
            </SummaryCard>

            <SummaryCard variant="outcome">
                <SummaryHeader>
                    <span>Saídas</span>
                    <figure><ArrowCircleDown size={32} /></figure>
                </SummaryHeader>
                <SummaryBody>
                    <strong>R$</strong>
                    <strong>17.400,00</strong>
                </SummaryBody>
            </SummaryCard>

            <SummaryCard variant="total">
                <SummaryHeader>
                    <span>Total</span>
                    <CurrencyDollar size={32} />
                </SummaryHeader>
                <SummaryBody>
                    <strong>R$</strong>
                    <strong>17.400,00</strong>
                </SummaryBody>

            </SummaryCard>
        </SummaryContainer>
    )
}