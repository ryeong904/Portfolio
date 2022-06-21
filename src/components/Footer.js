import styled from 'styled-components';

export function Footer() {
  return (
    <Background>
      <hr></hr>
      <h1>Footer</h1>
      <p>©2022 Kim HyeRyeong</p>
    </Background>
  );
}

const Background = styled.div`
  height: 200px;
  text-align: center;

  hr {
    width: 1000px;
  }

  p {
    font-size: 0.9rem;
    color: gray;
  }
`;
