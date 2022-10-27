import styled from 'styled-components';
import { TagSection } from './TagSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const data = [
  {
    imageUrl: '../image/togefit.gif',
    projectName: 'Togefit',
    subName: 'togefit',
    intro: '운동, 식단과 관련된 정보를 공유할 수 있는 웹 커뮤니티 사이트',
    github: 'https://github.com/ryeong904/TogeFit',
    overview:
      '운동과 식단에는 관심이 많지만, 정보를 얻기가 힘든 경우가 많습니다. 따라서 관련된 정보를 쉽게 공유하고 기록하며 동기부여가 되는 웹 사이트를 제작하였습니다.',
    period: '2022.07.04 ~ 2022.07.24',
    role: 'Backend',
    tags: ['TypeScript', 'Node.js', 'Docker', 'AWS S3', 'Jest'],
    part: [
      '서버 프로젝트 세팅(TypeScript, MongoDB Atlas, Express.js)',
      'JWT를 이용한 로그인/로그아웃 API 구현',
      '운동리스트, 개인 루틴 CRUD API 구현',
      'AWS S3 연동 및 사용: 인스턴스 버킷에 저장한 후 url로 이미지 사용',
      'Jest Framework를 통한 기능별 2~3개의 테스트코드 작성',
      'Docker로 컨테이너화 후 vm서버에 배포',
    ],
  },
  {
    imageUrl: '../image/spring-logo.png',
    projectName: 'Togefit Refactoring',
    subName: 'togefit-spring',
    intro: '토게핏 서버를 스프링으로 재구축한 프로젝트',
    github: 'https://github.com/ryeong904/Togefit-Server-For-Spring',
    overview:
      'Java와 Spring Boot 공부 겸 기존에 작성했던 코드 개선을 위해 제작한 프로젝트',
    period: '2022.08.11 ~ 2022.08.22',
    role: 'Backend',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    part: [
      'Togefit API 모두 REST API로 개발',
      '인터셉터를 사용해 middleware 처리',
      'Join을 통한 MySQL에 데이터 저장',
      'Pageable 객체를 사용한 페이지네이션 개발',
    ],
  },
  {
    imageUrl: '../image/collectors.gif',
    projectName: 'Togefit Refactoring',
    subName: 'collectors',
    intro: '초능력 판매 웹 쇼핑몰',
    github: 'https://github.com/Elice-Team-20/Collectors',
    overview:
      '수많은 사람들의 상상을 실현시켜줄 수 있는 쇼핑몰, Collector’s에 방문해보세요!',
    period: '2022.05.23 ~ 2022.06.03',
    role: 'Backend',
    tags: ['JavaScript', 'Node.js', 'Express.js', 'JWT', 'MongoDB'],
    part: [
      '유저, 상품 관련 API 개발',
      'JWT를 이용한 보안성을 높인 로그인 API 개발',
      '관리자 전용 미들웨어 구현',
      'VM을 사용한 배포',
    ],
  },
  {
    imageUrl: '../image/android.png',
    projectName: 'Togefit Refactoring',
    subName: 'photoApp',
    intro: '여행사진 관리 앱',
    github: 'https://github.com/graduateUiv/photoApp',
    overview:
      '여행사진이 많이 쌓였을 때 정리하기가 쉽지 않습니다. 이를 해결하기 위해 사용자에게 여행 사진을 받아와 먼저 위치별로 분류하고, 이후 인물/배경/음식 카테고리에 따라 분류하는 어플을 제작하였습니다.',
    period: '2021.03.01 ~ 2021.11.28',
    role: '전체적인 앱 개발 및 조장',
    tags: ['Java', 'Android', 'Keras', 'Tensorflow-Lite'],
    part: [
      'Firebase API를 이용한 인물 분류',
      '사진앱에 필요한 기능 개발 - 사진 넘기기, 폴더 구현, 폴더 삭제 및 수정 등',
      '.h5 모델을 tensorflow lite로 변환 후 적용',
    ],
  },
  {
    imageUrl: '../image/diary.gif',
    projectName: '하루기록 다이어리',
    subName: 'diary',
    intro: '달력/리스트 형태로 일기를 작성할 수 있는 웹사이트',
    github: 'https://github.com/ryeong904/Web-Programming',
    overview:
      '일기는 하루를 정리하는 효과와 감정 해소, 말 못할 일을 적음으로써 고해성사를 한 것 같은 효과도 있습니다. 일기장을 웹 브라우저로 그대로 옮겨 편하게 작성하기위해 개발하게 되었습니다.',
    period: '2021.10.01 ~ 2021.12.21',
    role: 'Full-Stack',
    tags: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP'],
    part: [
      '회원가입 및 로그인 기능 구현',
      '일기와 관련된 CRUD 기능 개발, 이모티콘을 사용한 Search 기능 구현',
      '이모티콘을 통해 일기의 날씨와 기분을 표현하도록 구현',
      '일정 조건을 만족시 뱃지를 획득하는 기능 개발',
    ],
  },
  {
    imageUrl: '../image/dashboard.gif',
    projectName: '그라파나 대시보드',
    subName: 'dashboard',
    intro: '한국천문연구원 인턴십 - 연구원 대시보드 따라서 제작하기',
    github: 'https://github.com/ryeong904/2020-internship',
    overview:
      '연구원에서 제공하는 대시보드를 따라 기능을 개발하고, Grafana에서 제공하는 패널을 사용해 기능을 추가한 대시보드 구현하였습니다.',
    period: '2021.01.03 ~ 2021.02.17',
    role: 'Full-Stack',
    tags: ['Python', 'SQLAlchemy', 'FastAPI', 'Grafana', 'MySQL'],
    part: [
      '멀티 스레딩 프로그래밍 방식을 사용한 실시간 Fake Data 생성 프로그램 개발',
      'SQLAlchemy - Python의 ORM을 사용한 Database 관리',
      'FastAPI - Python의 웹 프레임워크를 사용하여 이미지 데이터를 가져오는 API 개발',
      'Grafana를 사용한 다양한 데이터 처리 - 알람, 그래프로 데이터 표현, 분당 데이터 표현 등',
    ],
  },
  {
    imageUrl: '../image/portfolio.png',
    projectName: '포트폴리오 웹사이트',
    subName: 'portfolio',
    intro: '리액트로 제작한 포트폴리오',
    github: 'https://github.com/ryeong904/Portfolio',
    overview:
      '컴포넌트를 사용해 코드의 재사용성을 높인 포트폴리오 개발과 Hooks를 사용한 상태관리로 포트폴리오 웹사이트를 개발하였습니다.',
    period: '2022.06 ~ 계속 업데이트 중',
    role: 'Frontend',
    tags: ['React', 'Styled-Component'],
    part: ['상태 관리를 통한 웹 페이지의 변화', '코드의 컴포넌트화'],
  },
];

const getExtensionOfFileName = (filename) => {
  const fileLength = filename.length;
  const lastDot = filename.lastIndexOf('.');
  const fileExt = filename.substring(lastDot, fileLength).toLowerCase();
  return fileExt;
};

export function Detail() {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const handleHistory = () => {
    navigate(-1);
  };

  const informationList = (name) => {
    return data.map((item, idx) => {
      if (name == item.subName) {
        return (
          <Container key={idx}>
            <Overview>
              <h1>Project Name: {item.projectName}</h1>
              <p>{item.intro}</p>
            </Overview>
            <Main>
              <ProjectInfo>
                <div className="gif-section">
                  <img
                    src={item.imageUrl}
                    style={
                      getExtensionOfFileName(item.imageUrl) == '.gif'
                        ? { width: '100%' }
                        : { width: '60%' }
                    }
                  ></img>
                </div>
                <div className="information">
                  <a href={item.github} target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      color="#1f1f1f"
                      style={{ marginBottom: 15 }}
                    />
                  </a>
                  <br></br>
                  <h3>Overview</h3>
                  <p>{item.overview}</p>
                  <h3>Develop Period</h3>
                  <p>{item.period}</p>
                  <h3>Role</h3>
                  <p>{item.role}</p>
                  <h3>Skills</h3>
                  <TagSection>
                    {item.tags.map((item) => {
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
                <h2>Develop Part</h2>
                {item.part.map((list, idx) => {
                  return <li key={idx}>{list}</li>;
                })}
              </Information>
            </Main>
          </Container>
        );
      }
    });
  };

  return (
    <Wrapper>
      {informationList(projectName)}

      <span className="btn">
        <FontAwesomeIcon
          onClick={() => {
            handleHistory();
          }}
          icon={faCircleLeft}
          size="3x"
          color="#749f82"
          style={{ position: 'fixed', bottom: 20, right: 20 }}
        />
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .btn {
    svg {
      position: fixed;
      bottom: 20;
      right: 20;
    }

    svg:hover {
      cursor: pointer;
    }
  }
`;

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
  width: 75%;
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

  display: grid;
  grid-template-columns: 0.7fr 1fr;

  h3 {
    display: inline;
    font-size: 20px;
    font-weight: 600;
  }

  .gif-section {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-left: 20px;

    img {
      margin: auto;
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
    border-left: 4px solid #749f82;
    padding-left: 10px;
  }

  li {
    margin: 10px 0;
    font-size: 18px;
  }
`;

const navigateButton = styled.span`
  svg:hover {
    cursor: pointer;
  }
`;
