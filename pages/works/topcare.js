import { Badge, Box, Container, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta, WorkLink } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title={'Top-Care'}>
      <Container>
        <Title>
          Top Care Store <Meta> 2021 </Meta>
        </Title>
        <Paragraph>
          A e-commerce focused in the distribution of skin-care, cancer and post-surgery recovery products.
        </Paragraph>
        <Paragraph>
          I worked on a tag system to filter the products, also developped a whole section only for doctors. (Currently
          not accessible).
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta> Website </Meta>
            <WorkLink href={'https://www.topcarestore.com/'}>
              https://www.topcarestore.com/
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

        <SimpleGrid gap={4}>
          <WorkImage src={`/Images/Works/TC_1.png`} width={40} height={40} alt={'Top-care-1'}></WorkImage>
          <WorkImage src={`/Images/Works/TC_2.png`} width={40} height={40} alt={'Top-care-2'}></WorkImage>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Work;
