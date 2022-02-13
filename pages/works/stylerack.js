import { Badge, Box, Container, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta, WorkLink } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title={'Cocotli'}>
      <Container>
        <Title>
          Cocotli <Meta> 2021 </Meta>
        </Title>
        <Paragraph>A e-commerce website focused on the distribution of fashion product.</Paragraph>
        <Paragraph>
          I developped some badges for products as well as the main page carousell, I was also given some mockups to
          work at some design issues of the store.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta> Website </Meta>
            <WorkLink href={'https://thestylerack.com.mx/'}>
              https://thestylerack.com.mx/
              <ExternalLinkIcon mx={'2px'} />
            </WorkLink>
          </ListItem>

          <ListItem>
            <Meta> Platform </Meta>
            <span>Shopify</span>
          </ListItem>

          <ListItem>
            <Meta>Language</Meta>
            <span>Liquid, JavaScript. </span>
          </ListItem>
        </List>

        <SimpleGrid columns={1}>
          <WorkImage src={`/Images/Works/TSR_1.png`} width={40} height={40} alt={'The-Style-Rack'}></WorkImage>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
