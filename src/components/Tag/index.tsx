import React from 'react';
import { Container, Span } from './styles';

type TagProps = {
  name: string;
};
const Tag = ({ name }: TagProps) => {
  return (
    <Container>
      <Span>{name}</Span>
    </Container>
  );
};

export default Tag;
