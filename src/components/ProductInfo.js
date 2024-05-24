import React from 'react';
import styled from 'styled-components';

const ProductInfoContainer = styled.section`
  padding: 40px;
  text-align: center;
`;

const ProductTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`;

const ProductInfo = () => (
  <ProductInfoContainer>
    <ProductTitle>Why Choose AquaPure?</ProductTitle>
    <ProductDescription>
      AquaPure water bottles are made from sustainable materials, feature advanced filtration technology, and are designed for durability and style. Stay hydrated while reducing your environmental impact.
    </ProductDescription>
  </ProductInfoContainer>
);

export default ProductInfo;
