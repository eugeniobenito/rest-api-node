import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Box,
  Flex,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { getRandomString } from "../utils/randomAvatar";

export const UserCard = ({ user }) => {
  console.log(user);
  return (
    <>
      <Card maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src={getRandomString()} />

              <Box>
                <Heading size="sm">{user.name}</Heading>
                <Text>{user.age}</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            <strong>Email: </strong> {user.email} <br />
            <strong>Categoría: </strong> {user.category}
          </Text>
        </CardBody>
      </Card>
    </>
  );
};
