import { Box, Flex, VStack, Button } from "@chakra-ui/react";
import { Header } from "./header";
import { PersonalInfo } from "./personal-info";
import { ReposUser } from "./repos-user";

export const Main = ({
  handleChange,
  getUser,
  fetching,
  userInfo,
  nickName,
  handleEnter,
  reposUser,
  setPage
}) => {
  return (
    <Box w="100vw" h="100vh" bg="#0a0c10" p="32px">
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        paddingX={{ base: "10vw" }}
        color="white"
        w="100%"
        h="100%"
      >
        <VStack w="100%" spacing="16px">
          <Header
            nickName={nickName}
            handleChange={handleChange}
            getUser={getUser}
            fetching={fetching}
            handleEnter={handleEnter}
          />
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            w="100%"
            paddingY="32px"
          >
            {!!userInfo && <PersonalInfo userInfo={userInfo} />}
            {!!userInfo && reposUser.length > 0 && <ReposUser
              display='flex'
              flexDirection={"column"}
              reposUser={reposUser}
            />}
          </Flex>
          {reposUser.length === 10 && <Button
            flex="columns"
            fontSize={"10px"}
            w={"6%"}
            h={"24px"}
            bg={"#525964"}
            _hover={{ color: 'black', bg: 'gray.200' }}
            onClick={setPage}
          >next</Button>}
        </VStack>
      </Flex>
    </Box>
  )
}

