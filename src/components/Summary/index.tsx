import { SummaryBody, SummaryCard, SummaryContainer, SummaryHeader } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard variant="income">
                <SummaryHeader>
                    <span>Entradas</span>
                    <figure><ArrowCircleUp size={32} /></figure>
                </SummaryHeader>
                <SummaryBody>
                    <strong>{priceFormatter.format(summary.incomes)}</strong>
                </SummaryBody>
            </SummaryCard>

            <SummaryCard variant="outcome">
                <SummaryHeader>
                    <span>Saídas</span>
                    <figure><ArrowCircleDown size={32} /></figure>
                </SummaryHeader>
                <SummaryBody>
                    <strong>{priceFormatter.format(summary.outcomes)}</strong>
                </SummaryBody>
            </SummaryCard>

            <SummaryCard variant="total">
                <SummaryHeader>
                    <span>Total</span>
                    <CurrencyDollar size={32} />
                </SummaryHeader>
                <SummaryBody>
                    <strong>{priceFormatter.format(summary.total)}</strong>
                </SummaryBody>

            </SummaryCard>
        </SummaryContainer>
    )
}