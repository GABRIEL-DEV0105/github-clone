import { Button, Heading, HStack, Input, VStack } from "@chakra-ui/react";

export const Header = ({
  handleChange,
  getUser,
  fetching,
  nickName,
  handleEnter
}) => (
  <VStack spacing="16px">
    <Heading>Buscar User Github</Heading>
    <HStack>
      <Input
        value={nickName}
        placeholder="User name"
        w="300px"
        onChange={handleChange}
        onKeyDown={handleEnter} />
      <Button
        color="white"
        loadingText="searching"
        colorScheme="teal"
        variant="outline"
        onClick={getUser}
        isLoading={fetching}
        _hover={{ color: 'black', bg: 'gray.100' }}
      >search</Button>
    </HStack>
  </VStack>
);

