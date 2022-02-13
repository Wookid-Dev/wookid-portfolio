import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? '#ffc7c7' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container display={'flex'} p={2} maxW={'container.md'} wrap={'wraps'} align={'center'} justify={'space-between'}>
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href={'/works'} path={path}>
            Works
          </LinkItem>

          <LinkItem
            target={'_blank'}
            href={'https://github.com/Wookid-Dev'}
            path={path}
            display={'inline-flex'}
            style={{ gap: 4 }}
            pl={2}
          >
            <Box display={'inline-flex'} alignItems={'center'}>
              Github <IoLogoGithub />
            </Box>
          </LinkItem>

          <LinkItem
            target={'_blank'}
            href={'https://linkedin.com/in/isaac-sanchez-sr'}
            path={path}
            display={'inline-flex'}
            style={{ gap: 4 }}
            pl={2}
          >
            <Box display={'inline-flex'} alignItems={'center'}>
              Linkedin <IoLogoLinkedin />
            </Box>
          </LinkItem>
        </Stack>

        <Box flex={1} align={'right'}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }} />
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon color={useColorModeValue('#ffc7c7', '#202023')} />}
              variant='outline'
              aria-label='Options'
              ml={2}
              bg={useColorModeValue('#202023', '#ffc7c7')}
            />
            <MenuList>
              <NextLink href={'/'} passHref>
                <MenuItem as={Link}>About</MenuItem>
              </NextLink>
              <NextLink href={'/works'} passHref>
                <MenuItem as={Link}>Works</MenuItem>
              </NextLink>
              <MenuItem as={Link} href={'https://github.com/Wookid-Dev'}>
                Github
              </MenuItem>
              <MenuItem as={Link} href={'https://linkedin.com/in/isaac-sanchez-sr'}>
                Linkedin
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
