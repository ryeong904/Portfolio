import styled from 'styled-components';

export function AboutMe() {
  return (
    <Container>
      <MySelf>
        <h1>Kim Hye Ryeong</h1>
        <h2>SW Engineer</h2>
        <p>안녕하세요, 저의 포트폴리오 사이트에 방문해주셔서 감사합니다 :)</p>
        <p>
          저는 Java와 JavaScript를 메인으로 웹 개발을 주로 하는 개발자
          <b style={{ color: '#749f82' }}> 김혜령 </b>입니다.
        </p>
        <p>
          <a href="https://velog.io/@fud904" target="_blank">
            블로그
          </a>
          와{' '}
          <a href="https://github.com/ryeong904" target="_blank">
            깃허브
          </a>
          도 열심히 운영하며 공부하고 있습니다.
        </p>
      </MySelf>
      <Skills>
        <h1>Skills</h1>
        <p style={{ color: '#4f4f4f', padding: '40px 0' }}>
          다음과 같은 기술 스택을 사용해 개발을 할 수 있습니다.
        </p>
        <div id="SkillContainer">
          <Skill>
            <img src="https://skillicons.dev/icons?i=java"></img>
            <img src="https://skillicons.dev/icons?i=spring"></img>
            <img src="https://skillicons.dev/icons?i=androidstudio"></img>
            <h3>Java, Spring, Android</h3>
            <p>
              Spring Boot을 이용한 서버 개발, Android 앱을 개발할 수 있습니다.
              학부 시절부터 지금까지 사용하고 있는 언어이며, Java의 각종 개념을
              숙지하고 있습니다.
            </p>
          </Skill>
          <Skill>
            <img src="https://skillicons.dev/icons?i=javascript"></img>
            <img src="https://skillicons.dev/icons?i=typescript"></img>
            <img src="https://skillicons.dev/icons?i=nodejs"></img>
            <img src="https://skillicons.dev/icons?i=react"></img>
            <h3>JS, TS, Node.js, React</h3>
            <p>
              Node.js를 사용해 2번의 팀 프로젝트 경험이 있습니다. 현재 보고
              계시는 포트폴리오 사이트는 React로 개발하였습니다. ECMA 문법에
              익숙하며 풀스택 개발이 가능합니다.
            </p>
          </Skill>
          <Skill>
            <img src="https://skillicons.dev/icons?i=mysql"></img>
            <img src="https://skillicons.dev/icons?i=mongodb"></img>
            <h3>MySQL, MongoDB</h3>
            <p>
              여러 프로젝트에 DB를 연동하여 사용할 수 있습니다. 특히 성능 개선
              쿼리에 관심이 많습니다. NoSQL, SQL의 장단점을 숙지하고 개발할 수
              있습니다.
            </p>
          </Skill>
          <Skill>
            <img src="https://skillicons.dev/icons?i=docker"></img>
            <img src="https://skillicons.dev/icons?i=aws"></img>
            <h3>Docker, AWS</h3>
            <p>
              Docker를 사용하여 쉬운 배포를 할 수 있습니다. AWS S3, EC2 등을
              사용하여 문제를 해결하였습니다.
            </p>
          </Skill>
        </div>
      </Skills>
    </Container>
  );
}

// 컨테이너 wrapper, grid -> 비율 맞춰서 배열
const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  margin-left: 300px;
  height: 100vh;
`;

const MySelf = styled.section`
  padding: 40px 70px;
  background-color: #f5f5f5;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  h2 {
    font-weight: 300;
    margin-bottom: 20px;
  }

  p {
    color: #4f4f4f;
    padding: 2px;
    a {
      color: #749f82;
      text-decoration: none;
    }
  }
`;

const Skills = styled.section`
  padding: 0px 70px;

  h1 {
    font-size: 30px;
    font-weight: 700;
    border-left: 4px solid #749f82;
    padding-left: 10px;
    margin-top: 60px;
  }

  #SkillContainer {
    display: flex;
    flex-direction: row;
  }
`;

const Skill = styled.div`
  margin-right: 20px;
  width: 250px;
  height: 250px;

  img {
    margin-right: 5px;
    width: 35px;
    height: 35px;
  }

  h3 {
    font-size: 17px;
    font-weight: 600;
    margin: 7px 0;
  }

  p {
    color: #4f4f4f;
    font-size: 15px;
  }
`;
