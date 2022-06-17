import styled from 'styled-components';

export function Home() {
  return (
    <Main>
      <div>
        <h1>Kim Hye Ryeong</h1>
        <p>안녕하세요. 웹 개발자를 꿈꾸는 김혜령이라고 합니다.</p>
        <p>내용내용 내용내용 내용내용 내용내용 내용내용. </p>
        <p>내용내용 내용내용 내용내용 내용내용 내용내용. </p>
      </div>
      <img src='image/image.jpeg'></img>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    margin-right: 160px;
  }

  div h1 {
    margin: 0;
    font-size: 4.5rem;
  }

  div p {
    margin: 10px 0;
    font-size: 1.1rem;
  }
`;
