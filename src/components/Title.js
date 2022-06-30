import styled from 'styled-components';
export function Title({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
}

const StyledTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
  text-shadow: 3px 3px 1px black;
`;
