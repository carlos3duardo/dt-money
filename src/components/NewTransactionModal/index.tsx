import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

const newTransactionSchema = z.object({
    description: z.string(),
    value: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
    const { control, register, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionSchema)
    });

    async function handleNewTransactionSubmit(data: NewTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content onPointerDownOutside={(event) => event.preventDefault()}>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton><X size={24} /></CloseButton>

                <form onSubmit={handleSubmit(handleNewTransactionSubmit)}>
                    <input type="text" placeholder="Descrição" required {...register('description')} />
                    <input type="number" placeholder="Valor" required {...register('value', { valueAsNumber: true })} />
                    <input type="text" placeholder="Categoria" required {...register('category')} />

                    <Controller control={control} name="type" render={({field}) => {
                        return (
                            <TransactionType onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton variant="income" value="income"><ArrowCircleUp size={24} />Entrada</TransactionTypeButton>
                                <TransactionTypeButton variant="outcome" value="outcome"><ArrowCircleDown size={24} />Saída</TransactionTypeButton>
                            </TransactionType>
                        )
                    }} />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}