import { Box, Container, Heading, Button, VStack } from '@chakra-ui/react'

function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8}>
          <Heading>StarterNode Dashboard</Heading>
          <Button colorScheme="brand" size="lg">
            New Payment
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default App