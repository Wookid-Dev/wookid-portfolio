import NextLink from 'next/link';

import { Box, Button, Container, Flex, Heading, Image, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear, DoubleBioYear, DoubleYearSection, BioHeading } from '../components/bio';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius={'lg'}
          color={useColorModeValue('#dcdbd7', '#202023')}
          bg={useColorModeValue('#1a202c', '#ffc7c7')}
          p={3}
          align={'center'}
          mb={6}
        >
          Hi, I'm a NodeJS developper, on my way to become a fullstack developer!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant={'page-title'}>
              Isaac Sanchez
            </Heading>
            <p>Mechanical Engineer | Self-taught JS developper </p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
            <Image
              borderColor={useColorModeValue('#1a202c', '#ffc7c7')}
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src={'/Images/dan.png'}
              alt='Profile Picture'
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <BioHeading>Work</BioHeading>
          <Paragraph>
            I'm a Mechanical Engineer turned JS developper based in Mexico. I'm a self taught developper so, by any
            means I'm a master at it, still/always learning and passionate about it. I enjoy solving all kinds of
            problems and meeting new people from different cultures. I can speak Spanish, French, English and basic
            Portuguese.
          </Paragraph>
          <Box align={'center'} my={4}>
            <NextLink href='/works'>
              <Button
                rightIcon={<ChevronRightIcon />}
                color={useColorModeValue('#dcdbd7', '#202023')}
                bg={useColorModeValue('#1a202c', '#ffc7c7')}
              >
                Works
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <BioHeading>Bio/Experience</BioHeading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Mexico City.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Finished the Bachelor of Science in Mechanical Engineering in Metropolitan Autonomous University (UAM)
          </BioSection>
          <DoubleYearSection>
            <DoubleBioYear>
              <BioYear>2020 to 2022</BioYear>
            </DoubleBioYear>
            Worked at SIRSCOM/Click-Sale as a NodeJS Developper.
            <br />
            -First year: Developped an API for an e-commerce using scrappers and consuming private/third party API's.
            Learned express, MongoDB and also a bit of React.
            <br />
            -Second year: Worked with a Shoppify Experts agency. I maintained different e-commerce's (from working on
            new features to working with a designer to fully reworking a theme).
          </DoubleYearSection>
        </Section>

        <Section delay={0.3}>
          <BioHeading>I ♥</BioHeading>
          <Paragraph>Art, learning new stuff, working out, playing videogames, hanging out with friends.</Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
