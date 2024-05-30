import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#fff1e5">
      {/* Navigation Bar */}
      <Flex as="nav" bg="#fff1e5" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">More</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>

        {/* Top News Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Image src="https://via.placeholder.com/600x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md">News Headline 1</Heading>
              <Text mt={2}>Brief description of the news article...</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/600x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md">News Headline 2</Heading>
              <Text mt={2}>Brief description of the news article...</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/600x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md">News Headline 3</Heading>
              <Text mt={2}>Brief description of the news article...</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/600x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md">News Headline 4</Heading>
              <Text mt={2}>Brief description of the news article...</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Sidebar for Financial Data */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="xl" mb={4}>Market Updates</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">Market Data 1</Heading>
              <Text mt={2}>Details about market data...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">Market Data 2</Heading>
              <Text mt={2}>Details about market data...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">Market Data 3</Heading>
              <Text mt={2}>Details about market data...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="#fff1e5" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;