import { Box, Button, Flex, Heading, Text, Menu, MenuButton, MenuList, MenuItem, VStack, Input, useBreakpointValue, FormControl, FormLabel, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaChevronDown, FaCreditCard, FaLock, FaUserCircle, FaEnvelope, FaPlus } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const MembershipTier = ({ title, description, price }) => (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading fontSize="xl" mb={4}>
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Text fontWeight="bold" mb={4}>
        {price}
      </Text>
      <Button colorScheme="teal" variant="solid">
        Join Now
      </Button>
    </Box>
  );

  return (
    <Flex direction="column" align="center" m={5}>
      <Box as="header" width="full" p={4}>
        <Flex align="center" justify="space-between">
          <Heading as="h1" size="lg">
            Kendall Haught
          </Heading>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>About Kendall</MenuItem>
              <MenuItem>Membership Information</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Sign Up</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      <Flex direction="column" align="center" mt={10}>
        <Box bg="purple.600" w="full" p={10} color="white" textAlign="center">
          <Heading size="2xl" mb={3}>
            Unlock Your Potential with Kendall
          </Heading>
          <Text fontSize="xl" mb={5}>
            Explore the exclusive content and services.
          </Text>
          <Button rightIcon={<FaPlus />}>Explore Memberships</Button>
        </Box>

        <VStack spacing={4} align="stretch" mt={10}>
          <MembershipTier title="Bronze Tier" description="Access to basic content and community." price="$9.99/month" />
          <MembershipTier title="Silver Tier" description="Everything in Bronze plus exclusive materials." price="$19.99/month" />
          <MembershipTier title="Gold Tier" description="All benefits including personal sessions." price="$29.99/month" />
        </VStack>
      </Flex>

      {/* Sign Up Section: This would typically be on another page but is included here for demonstration */}
      <Flex as="section" direction="column" align="center" width="full" p={10} mt={10}>
        <Heading size="xl" mb={6}>
          Sign Up
        </Heading>
        <Box width={isMobile ? "full" : "md"}>
          <FormControl mb={4}>
            <FormLabel>Email Address</FormLabel>
            <InputGroup>
              <Input type="email" placeholder="Enter your email" />
              <InputRightElement children={<FaEnvelope />} />
            </InputGroup>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type="password" placeholder="Enter password" />
              <InputRightElement children={<FaLock />} />
            </InputGroup>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Credit Card Information</FormLabel>
            <InputGroup>
              <Input placeholder="Card Number" />
              <InputRightElement children={<FaCreditCard />} />
            </InputGroup>
          </FormControl>
          <Button leftIcon={<FaUserCircle />} colorScheme="teal" width="full" mt={4}>
            Create Account
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;
