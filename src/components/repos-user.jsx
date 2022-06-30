import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

export const ReposUser = ({ reposUser }) => (
  <Flex
    w={"100%"}
    maxH="520px"
    minH="520px"
    flexDirection={"column"}
    alignItems={"end"}
    p="40px">
    <Grid
      w="100%"
      templateColumns='repeat(2, 1fr)'
      gap={6} >
      {reposUser.map(repo => (
        <GridItem
          w='100%'
          p={'8px'}
          border={"1px"}
          borderRadius={"5px"}
          borderColor={"#7a828e"}
          key={repo.id}>
          <Text
            fontSize='12px'
            fontWeight='600'
            color='#71b7ff'>
            {repo.name}
          </Text>
          <Text fontSize='10px'>
            {repo.description}
          </Text>
          <Text fontSize='10px' color='green.100'>
            {repo.language}
          </Text>

        </GridItem>
      ))}
    </Grid>
  </Flex>
)
