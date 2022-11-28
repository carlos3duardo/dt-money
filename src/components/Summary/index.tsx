import { SummaryBody, SummaryCard, SummaryContainer, SummaryHeader } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.incomes += transaction.value
        } else {
            acc.outcomes += transaction.value
        }

        acc.total = acc.incomes - acc.outcomes;

        return acc;
    }, {
        incomes: 0,
        outcomes: 0,
        total: 0
    })

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