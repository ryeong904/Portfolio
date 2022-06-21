import styled from 'styled-components';

export function Home() {
  return (
    <Main>
      <img src="image/image.PNG" alt="character_image"></img>
      <div>
        <h1>안녕하세요!</h1>
        <p>웹 풀스택 개발자 김혜령입니다.</p>
        <p>Node.js를 이용한 서버 개발에 관심이 많습니다.</p>
        <p>현재는 React를 사용해 여러 작업물을 만들고 있습니다.</p>
      </div>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  display: flex;
  min-height: 600px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  div {
    margin-right: 160px;
    margin-left: 50px;
  }

  div h1 {
    margin: 0;
    font-size: 4.5rem;
  }

  div p {
    margin: 10px 0;
    font-size: 1.3rem;
    color: #333333;
    // color: white;
  }

  div p:first-of-type {
    margin-top: 20px;
  }

  img {
    border-radius: 50%;
    width: 26em;
    margin-left: 100px;
  }
`;
