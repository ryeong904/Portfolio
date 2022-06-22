import styled from 'styled-components';

export function Home() {
  return (
    <Main id="home" style={{ marginTop: -90, paddingTop: 90 }}>
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
  width: 75%;
  display: flex;
  min-height: 600px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  // color: #dbdbdb;
  color: #333333;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  div {
    margin-right: 160px;
    margin-left: 50px;
    vertical-ailgn: center;
  }

  div h1 {
    margin: 0;
    margin-top: 150px;
    font-size: 4.5rem;
    animation: fadeInUp 1s;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 20%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  div p {
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: 500;
    // color: #dbdbdb;
    color: #333333;
    // color: white;
    animation: fadeInUp 1s;
  }

  div p:first-of-type {
    margin-top: 20px;
  }

  img {
    border-radius: 50%;
    width: 26em;
    margin-left: 100px;
    animation: fadeInUp 1s;
  }
`;
