import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const MembershipDetails = () => {
  // We'll use useParams to extract the tier from the URL
  let { tier } = useParams();

  // For now, this component will just display the tier.
  // Further implementation needed based on the tier details.
  return (
    <Box p={5}>
      <Heading>{tier} Membership Details</Heading>
      <Text>More information about the {tier} membership will go here.</Text>
      <Button colorScheme="teal" mt={3}>
        Sign Up for {tier}
      </Button>
    </Box>
  );
};

export default MembershipDetails;
