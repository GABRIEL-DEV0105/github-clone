import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";
import { GoLocation } from "react-icons/go";

export const PersonalInfo = ({ userInfo }) => (
  <VStack spacing="16px" w={{ base: "100%", md: "40%" }} paddingX="32px">
    <Box w="100%" maxW="253px">
      <Image
        borderRadius="100%"
        src={userInfo.avatar_url}
      />
    </Box>

    <Flex flexDir="column" w="100%" alignItems="flex-start">
      <Heading fontSize="32px">{userInfo.name}</Heading>
      <Text fontSize="20px" color="gray.600">{userInfo.login}</Text>
    </Flex>

    <HStack w="100%">
      <Flex color="gray.500">
        <MdPerson />
      </Flex>
      <Text fontWeight="bold">{userInfo.followers}</Text>
      <Text color="gray.500">followers</Text>
      <Text color="gray.500">·</Text>
      <Text fontWeight="bold">{userInfo.following}</Text>
      <Text color="gray.500">following</Text>
    </HStack>

    <HStack w="100%">
      <Flex color="gray.500">
        <GoLocation />
      </Flex>
      <Text>{userInfo.location === null ? 'unknown' : userInfo.location}
      </Text>
    </HStack>
  </VStack>
);
