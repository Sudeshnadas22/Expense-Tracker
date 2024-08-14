import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function ExpenseView({type, data}){
    return (
    <Box flex={1} w="full" height={'full'} bg={"#16074b"} mr={"4"} mb={"10"} mt={"10"} p={"5"} pb={"4"} border={"1px solid"} borderColor={'#cfdae2'} borderRadius={'12'}>

        <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Heading size={'md'} color={'red.700'}>
                {type === "income" ? "Income" : "Expense"}
            </Heading>
        </Flex>
        {
            data.map(item=> 
            <>
            <Flex bg={type === 'expense'? 'red.50': 'blue.50'}
            mt={4} justifyContent={"space-between"} alignItems={'center'} border={'2px solid'} borderColor={type === 'expense'? 'red.100': 'blue.100'} p={'4'} borderRadius={'8'}>

           <Flex alignItems={'center'} justifyContent={'center'}>
            <Text ml='3' fontWeight="bold" color="black">{item.description}</Text>
           </Flex>
           <Text>${item.amount}</Text>
            </Flex>

           </> 
        )}
    </Box>
    )
}