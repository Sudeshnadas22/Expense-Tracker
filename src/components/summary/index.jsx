import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import TransactionForm from "../add-transaction";
import TransactionChartSummary from "../chart";

export default function Summary({onClose, isOpen, totalExpense, totalIncome}) {
    return (
        <Box
            p="5"
            mt={10}
            border={'2px solid'}
            borderColor={"whitesmoke"}
            overflow={'hidden'}
            borderRadius={'10px'}
            background={'#d8c4eb'}
            display={'flex'}
        >
            <Flex
                w='full'
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={{
                    base: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row'
                }}
            >
                <Flex
                    flex={1}
                    w={'full'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    ml={2}
                    mr={2}
                >
                    <Heading size={'md'} mb={4} color={'white.700'}>
                        Balance is ${totalIncome - totalExpense}
                    </Heading>
                    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray'} m={3}
                    w='full'
                    h='200px'
                    border={'1px solid'}
                    borderRadius={'25px'}
                    borderColor={'gray.100'}>
                        <Flex flexDirection={'column'}>
                            <Heading color={'#114281'}>${totalIncome}</Heading>
                            <Text color={'#092952'}>Total Income</Text>

                            <Heading color={'#114281'}>${totalExpense}</Heading>
                            <Text color={'#092952'}>Total Expense</Text>
                        </Flex>
                    </Flex> 
                </Flex>

                <Box flex={1} mt={'10'} ml={'5'} mr={'5'} width={'300px'} height={'300px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>

                        <TransactionChartSummary expense={totalExpense} income={totalIncome}/>

                </Box>
            </Flex>
            <TransactionForm onClose={onClose} isOpen={isOpen}/>
        </Box>
    );
}
