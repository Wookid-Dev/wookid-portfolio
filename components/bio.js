import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

export const DoubleBioYear = styled.span`
  display: grid;
  width: min-content;
`;

export const DoubleYearSection = styled(Box)`
  display: grid;
  grid-auto-flow: column;
`;

export const BioHeading = ({ children }) => (
  <Heading as={'h3'} variant={'section-title'} textDecorationColor={useColorModeValue('#202023', '#dcdbd7')}>
    {children}
  </Heading>
);
