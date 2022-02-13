import { Badge, Box, Container, Link, List, ListItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta, WorkMeta, WorkLink } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title={'Cocotli'}>
      <Container>
        <Title>
          Cocotli <Meta> 2021 </Meta>
        </Title>
        <Paragraph>
          A e-commerce website focused on the distribution of healty/self-care products. (From oils, flours, pastas to
          shampoos) .
        </Paragraph>
        <Paragraph>
          We worked with a designer to fully rework the website since the old one was outdated and wasn't working
          correctly.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <WorkLink href={'https://cocotli.com/'}>
              https://cocotli.com
              <ExternalLinkIcon mx={'2px'} />
            </WorkLink>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Shopify</span>
          </ListItem>

          <ListItem>
            <Meta>Language</Meta>
            <span>Liquid, JavaScript. </span>
          </ListItem>

          <ListItem>
            <Meta>Framework</Meta>
            <span>React.</span>
          </ListItem>
        </List>

        <SimpleGrid columns={1} gap={4}>
          <WorkMeta>Before</WorkMeta>
          <WorkImage src={`/Images/Works/Cocotli_1.png`} width={40} height={40} alt={'Logo'}></WorkImage>
          <WorkImage src={`/Images/Works/Cocotli_3.png`} width={40} height={40} alt={'Logo'}></WorkImage>
          <WorkImage src={`/Images/Works/Cocotli_4.png`} width={40} height={40} alt={'Logo'}></WorkImage>
          <WorkMeta>After</WorkMeta>
          <WorkImage src={`/Images/Works/Cocotli_1N.png`} width={40} height={40} alt={'Logo'}></WorkImage>
          <WorkImage src={`/Images/Works/Cocotli_3N.png`} width={40} height={40} alt={'Logo'}></WorkImage>
          <WorkImage src={`/Images/Works/Cocotli_4N.png`} width={40} height={40} alt={'Logo'}></WorkImage>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
