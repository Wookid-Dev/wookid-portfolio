import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import cocotliThumb from '../public/Images/Works/thumbnailCocotli.png';
import reviewThumb from '../public/Images/Works/thumbnailRc.png';
import topCareThumb from '../public/Images/Works/thumbnailTopcare.png';
import styleRackThumb from '../public/Images/Works/thumbnailTsr.png';
import Layout from '../components/layouts/article';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4} mt={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id={'cocotli'} title={'Cocotli'} thumbnail={cocotliThumb}>
              A E-commerce focused in the distribution of healty products.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id={'reviewclub'} title={'Review Club'} thumbnail={reviewThumb}>
              A E-commerce like website focused in product reviews while still offering them in different conditions.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id={'topcare'} title={'Top Care'} thumbnail={topCareThumb}>
              A E-commerce focused in the distribution of products for skin care, cancer and post-surgery recovery.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id={'stylerack'} title={'The Style Rack'} thumbnail={styleRackThumb}>
              A E-commerce focused in the distribution of fashion products.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
