import styled from 'styled-components';

export function Footer() {
  return (
    <Background>
      <p>©2022. Kim HyeRyeong.</p>
    </Background>
  );
}

const Background = styled.div`
  text-align: center;
  p {
    position: absolute;
    bottom: 0;
    font-size: 0.9rem;
    text-align: center;
    margin: 0 auto;
    color: gray;
  }
  @media all and (max-width: 850px) {
    p {
      display: none;
    }
  }
`;
