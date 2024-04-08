import React from "react";
import { Box, Heading, Text, Stack, Flex, Button, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaCode, FaGlobe, FaMobile, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg="gray.800" color="white">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Soft-Tech
        </Heading>
        <Stack direction="row" spacing={4}>
          <Button colorScheme="teal" variant="ghost">
            Services
          </Button>
          <Button colorScheme="teal" variant="ghost">
            About
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Contact
          </Button>
        </Stack>
      </Flex>

      {/* Hero */}
      <Box textAlign="center" py={20}>
        <Heading as="h2" size="2xl" mb={6}>
          Software Solutions for Your Business
        </Heading>
        <Text fontSize="xl" maxW="3xl" mx="auto">
          We develop custom ERP systems, websites, web applications, and mobile apps to help businesses streamline their operations and reach their goals.
        </Text>
        <Button colorScheme="teal" size="lg" mt={8}>
          Get Started
        </Button>
      </Box>

      {/* Services */}
      <Grid templateColumns="repeat(2, 1fr)" gap={8} p={10}>
        <GridItem>
          <Icon as={FaCode} boxSize={12} color="teal.500" mb={4} />
          <Heading as="h3" size="lg" mb={4}>
            Custom Software Development
          </Heading>
          <Text>We build tailored software solutions to meet your specific business requirements.</Text>
        </GridItem>
        <GridItem>
          <Icon as={FaGlobe} boxSize={12} color="teal.500" mb={4} />
          <Heading as="h3" size="lg" mb={4}>
            Web Development
          </Heading>
          <Text>From simple websites to complex web applications, we've got you covered.</Text>
        </GridItem>
        <GridItem>
          <Icon as={FaMobile} boxSize={12} color="teal.500" mb={4} />
          <Heading as="h3" size="lg" mb={4}>
            Mobile App Development
          </Heading>
          <Text>We create engaging and user-friendly mobile apps for iOS and Android platforms.</Text>
        </GridItem>
        <GridItem>
          <Icon as={FaCode} boxSize={12} color="teal.500" mb={4} />
          <Heading as="h3" size="lg" mb={4}>
            ERP Systems
          </Heading>
          <Text>Streamline your business processes with our robust ERP solutions.</Text>
        </GridItem>
      </Grid>

      {/* About */}
      <Box bg="gray.100" py={20}>
        <Stack spacing={8} direction="row" justify="center" align="center">
          <Box maxW="sm">
            <Heading as="h2" size="xl" mb={4}>
              About Soft-Tech
            </Heading>
            <Text fontSize="lg">We are a team of experienced software developers passionate about creating innovative solutions for businesses. With our expertise in various technologies, we deliver high-quality software that drives growth and efficiency.</Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwwfHx8fDE3MTI2MTAyODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Software development team" boxSize="sm" objectFit="cover" rounded="md" />
        </Stack>
      </Box>

      {/* Contact */}
      <Box py={20}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Get in Touch
        </Heading>
        <Stack spacing={8} direction="row" justify="center">
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" size="lg" variant="outline">
            Email Us
          </Button>
          <Button colorScheme="teal" size="lg">
            Request a Quote
          </Button>
        </Stack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={8} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Soft-Tech. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
