import { Container,Flex,Box } from '@chakra-ui/react';
import './App.css';
import Main from './components/main'

function App() {
  return (
    <Container bg={'#15447f'} maxW={'Container.3xl'} height={'auto'} p={'0'}>
      <Flex height={'full'} >
        <Box height={'full'} flex={5} w={['20%', '30%', '20%', '50%', '60%']}>
          <Main/>
        </Box>
      </Flex>

    </Container>
  )
}

export default App;