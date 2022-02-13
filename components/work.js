import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Link, Text, Badge, Heading, Image, useColorModeValue } from '@chakra-ui/react';

export const Title = ({ children }) => (
  <Box>
    <NextLink href={'/works'}>
      <Link fontWeight={'bold'} color={useColorModeValue('#202023', '#dcdbd7')}>
        Works
      </Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display={'inline-block'} as={'h3'} fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />;

export const Meta = ({ children }) => (
  <Badge bg={useColorModeValue('#1a202c', '#ffc7c7')} color={useColorModeValue('#dcdbd7', '#202023')} mr={2}>
    {children}
  </Badge>
);

export const WorkMeta = ({ children }) => (
  <Badge
    bg={useColorModeValue('#1a202c', '#ffc7c7')}
    color={useColorModeValue('#dcdbd7', '#202023')}
    mr={2}
    textAlign={'center'}
    w={'50%'}
    justifySelf={'center'}
  >
    {children}
  </Badge>
);

export const WorkLink = ({ children }) => (
  <Link target={'_blank'} fontWeight={'bold'} color={useColorModeValue('#202023', '#dcdbd7')}>
    {children}
  </Link>
);
