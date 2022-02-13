import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-30deg);
  }
`;

const Logo = () => {
  const penguinImg = `/images/dan.png`;
  return (
    <Link href={'/'}>
      <Box display={'grid'}>
        <LogoBox>
          <Image src={penguinImg} width={40} height={40} alt={'Logo'}></Image>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c'
            fontWeight={'bold'}
            ml={3}
          >
            Isaac Sanchez
          </Text>
        </LogoBox>
      </Box>
    </Link>
  );
};

export default Logo;
