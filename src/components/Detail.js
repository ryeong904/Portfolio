import styled from 'styled-components';
import { TagSection } from './TagSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const data = [
  {
    imageUrl: 'image/togefit.PNG',
    projectName: 'Togefit',
    subName: 'togefit',
    intro: '운동, 식단과 관련된 정보를 공유할 수 있는 웹 커뮤니티 사이트',
    tags: ['TypeScript', 'Node.js', 'Docker', 'AWS S3', 'Jest'],
    category: 'Web',
    github: 'https://github.com/ryeong904/TogeFit',
  },
  {
    imageUrl: 'image/spring-logo.PNG',
    projectName: 'Togefit Migration',
    subName: 'togefit-spring',
    intro: '토게핏 서버를 스프링으로 재구축한 프로젝트',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    category: 'Web',
    github: 'https://github.com/ryeong904/Togefit-Server-For-Spring',
  },
  {
    imageUrl: 'image/logo.png',
    projectName: 'Collectors',
    subName: 'collectors',
    intro: '초능력 판매 웹 쇼핑몰',
    tags: ['JavaScript', 'Node.js', 'JWT', 'MongoDB'],
    category: 'Web',
    github: 'https://github.com/Elice-Team-20/Collectors',
  },
  {
    imageUrl: 'image/android.png',
    projectName: '여행사진을 부탁해!',
    subName: 'photoApp',
    intro: '여행사진 관리 앱',
    tags: ['Java', 'Android', 'Keras'],
    category: 'App',
    github: 'https://github.com/graduateUiv/photoApp',
  },
  {
    imageUrl: 'image/diary.PNG',
    projectName: '하루기록 다이어리',
    subName: 'diary',
    intro: '달력/리스트 형태로 일기를 작성할 수 있는 웹사이트',
    tags: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP'],
    category: 'Web',
    github: 'https://github.com/ryeong904/Web-Programming',
  },
  {
    imageUrl: 'image/Grafana_logo.PNG',
    projectName: '그라파나 대시보드',
    subName: 'dashboard',
    intro: '한국천문연구원 인턴십 - 연구원 대시보드 따라서 제작하기',
    tags: ['Python', 'SQLAlchemy', 'FastAPI', 'Grafana'],
    category: 'ETC',
    github: 'https://github.com/ryeong904/2020-internship',
  },
  {
    imageUrl: 'image/portfolio.png',
    projectName: '포트폴리오 웹사이트',
    subName: 'portfolio',
    intro: '리액트로 제작한 포트폴리오',
    tags: ['React', 'Styled-Component'],
    category: 'Web',
    github: 'https://github.com/ryeong904/Portfolio',
  },
];

export function Detail() {
  const temp = [
    'java',
    'node',
    'node',
    'node',
    'node',
    'node',
    'node',
    'node',
    'node',
  ];
  return (
    <Container>
      <Overview>
        <h1>Project Name: [Togefit]</h1>
        <p>
          프로젝트 설명란: 운동, 식단과 관련된 정보를 공유할 수 있는 웹 커뮤니티
          사이트
        </p>
      </Overview>
      <Main>
        <ProjectInfo>
          <div className="gif-section">
            <img src="../image/togefit.gif"></img>
          </div>
          <div className="information">
            <a href="#" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                color="#1f1f1f"
                style={{ marginBottom: 15 }}
              />
            </a>
            <br></br>
            <h3>Overview</h3>
            <p>
              운동과 식단에는 관심이 많지만, 정보를 얻기가 힘든 경우가 많습니다.
              따라서 관련된 정보를 쉽게 공유하고 기록하며 동기부여가 되는 웹
              사이트를 제작하였습니다.
            </p>
            <h3>Develop Period</h3>
            <p>2022.07.04 ~ 2022.07.24</p>
            <h3>Role</h3>
            <p>Backend</p>
            <h3>Skills</h3>
            <TagSection>
              {temp.map((item) => {
                return (
                  <span
                    style={{
                      marginTop: 5,
                      fontSize: 16,
                      color: '#4f4f4f',
                      fontWeight: 400,
                    }}
                    key={item}
                  >
                    #{item}
                  </span>
                );
              })}
            </TagSection>
          </div>
        </ProjectInfo>
        <Information>
          <h2>Information</h2>
          <li>
            운동과 식단 등 건강 관리에 관련된 정보들을 공유할 수 있는 커뮤니티
            사이트입니다.
          </li>
          <li>
            운동과 식단 등 건강 관리에 관련된 정보들을 공유할 수 있는 커뮤니티
            사이트입니다.
          </li>
          <li>
            운동과 식단 등 건강 관리에 관련된 정보들을 공유할 수 있는 커뮤니티
            사이트입니다.
          </li>

          <h2>More</h2>
          <details>
            <summary>느낀점 & 배운점</summary>
            <h3>ddd</h3>
            <p>이렇게 추가 설명이 보여집니다.</p>

            <p>이렇게 추가 설명이 보여집니다.</p>
            <p>이렇게 추가 설명이 보여집니다.</p>
            <p>이렇게 추가 설명이 보여집니다.</p>
            <p>이렇게 추가 설명이 보여집니다.</p>
          </details>
        </Information>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 1fr;
  margin-left: 300px;
  height: 100vh;

  @media all and (max-width: 976px) {
    margin-left: 0;
  }
`;

const Overview = styled.section`
  padding: 40px 70px 40px 70px;
  background-color: #f5f5f5;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 35px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #4f4f4f;
    padding: 2px;
  }
`;

const Main = styled.section`
  width: 60%;
  margin: auto;
  padding: 40px 50px;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  @media all and (max-width: 1300px) {
    & {
      padding: 30px;
    }
  }
`;

const ProjectInfo = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  // margin: auto;
  // padding: 20px;

  display: grid;
  grid-template-columns: 0.7fr 1fr;

  h3 {
    display: inline;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
  }

  .gif-section {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-left: 20px;

    img {
      margin: auto;
      width: 100%;
    }
  }

  .information {
    padding: 30px;
    text-align: left;

    p {
      margin: 10px 0;
      color: #4f4f4f;
      font-size: 17px;
    }

    a:hover {
      opacity: 0.8;
    }
  }

  @media all and (max-width: 1300px) {
    & {
      width: 100%;
    }
  }
`;

const Information = styled.div`
  h2 {
    margin: 20px 0;
    font-size: 30px;
  }

  li {
    margin: 10px 0;
    font-size: 17px;
  }
`;
