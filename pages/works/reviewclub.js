import { Badge, Box, Container, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta, WorkLink } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title={'Review-Club'}>
      <Container>
        <Title>
          Review-Club <Meta> 2021 </Meta>
        </Title>
        <Paragraph>
          A E-commerce like website focused in product reviews while still offering them in different conditions.
        </Paragraph>
        <Paragraph>I developped some minor design issues and the drawer in the mobile version of the page.</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <WorkLink href={'https://shop.reviewclub.com/'}>
              https://shop.reviewclub.com/
              <ExternalLinkIcon mx={'2px'} />
            </WorkLink>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Shopify</span>
          </ListItem>

          <ListItem>
            <Meta>Language</Meta>
            <span>Liquid, JavaScript.</span>
          </ListItem>

          <ListItem>
            <Meta>Framework</Meta>
            <span>Vue.</span>
          </ListItem>
        </List>

        <SimpleGrid columns={1}>
          <WorkImage src={`/Images/Works/RC_1.png`} width={40} height={40} alt={'Review-club1'}></WorkImage>
          <WorkImage src={`/Images/Works/RC_2.png`} width={40} height={40} alt={'Review-club2'}></WorkImage>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
