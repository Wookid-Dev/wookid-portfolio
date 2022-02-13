import { Box, Button, Container, Divider, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  const pupImg = `/images/hershey pup.png`;
  return (
    <Container>
      <Heading as={'h1'} align={'center'}>
        Not Found
      </Heading>
      <Text align={'center'}> The page you are looking for does not exist. </Text>
      <Image align={'center'} src={pupImg} width={400} height={400} alt={'Logo'}></Image>
      <Divider my={6} />
      <Box my={6} align={'center'}>
        <NextLink href={'/'}>
          <Button color={useColorModeValue('#dcdbd7', '#202023')} bg={useColorModeValue('#1a202c', '#ffc7c7')}>
            Return home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
