import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { totalExpense, setTotalExpense, totalIncome, setTotalIncome, allTransactions } = useContext(GlobalContext)

    useEffect(() => {
        let income = 0;
        let expense = 0;

        allTransactions.forEach(item => {
            item.type === 'income' ? income = income + parseFloat(item.amount) : expense = expense + parseFloat(item.amount)
        })

        setTotalExpense(expense)
        setTotalIncome(income)

    }, [allTransactions])

    return (
        <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
                <Heading color={'white'} textDecoration={'underline'} display={["block", "block", "block", "block"]}>
                    Expense Tracker
                </Heading>
                <Flex alignItems={'center'}>
                    <Button onClick={onOpen} bg={'#718799'}
                        color={'#0c2a42'}
                        ml={'4'}>
                        Add New Transaction
                    </Button>
                </Flex>
            </Flex>

            <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} />
            <Flex w="full" alignItems={"flex-start"} justifyContent={"space-evenly"} flexDirection={["column", "column", "column", "row", "row"]}>
                <ExpenseView
                data={allTransactions.filter((item)=> item.type === 'expense')}
                type={'expense'}
                />
                <ExpenseView
               data={allTransactions.filter((item)=> item.type === 'income')}
                type={'income'}
                />
            </Flex >

        </Flex >
    );

}