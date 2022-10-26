import styled from 'styled-components';
import styles from './Project.css';
import { useState } from 'react';

const projectPreviewData = [
  {
    imageUrl: 'image/togefit.PNG',
    projectName: 'Togefit',
    intro: '운동, 식단과 관련된 정보를 공유할 수 있는 웹 커뮤니티 사이트',
    tags: ['TypeScript', 'Node.js', 'Docker', 'AWS S3', 'Jest'],
    category: 'Web',
  },
  {
    imageUrl: 'image/collectors.PNG',
    projectName: 'Collectors',
    intro: '초능력 판매 웹 쇼핑몰',
    tags: ['JavaScript', 'Node.js', 'JWT', 'MongoDB'],
    category: 'Web',
  },
  {
    imageUrl: 'image/android.png',
    projectName: '여행사진을 부탁해!',
    intro: '여행사진 관리 앱',
    tags: ['Java', 'Android', 'Keras'],
    category: 'App',
  },
  {
    imageUrl: 'image/diary.PNG',
    projectName: '하루기록 다이어리',
    intro: '달력/리스트 형태로 일기를 작성할 수 있는 웹사이트',
    tags: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP'],
    category: 'Web',
  },
  {
    imageUrl: 'image/Grafana_logo.PNG',
    projectName: '그라파나 대시보드',
    intro: '한국천문연구원 인턴십 - 연구원 대시보드 따라서 제작하기',
    tags: ['Python', 'SQLAlchemy', 'FastAPI', 'Grafana'],
    category: 'ETC',
  },
  {
    imageUrl: 'image/portfolio.png',
    projectName: '포트폴리오 웹사이트',
    intro: '리액트로 제작한 포트폴리오',
    tags: ['React', 'Styled-Component'],
    category: 'ETC',
  },
];

export function Project() {
  const data = ['All', 'Web', 'App', 'ETC'];
  const [active, setActive] = useState(0);

  const toggleActive = (e) => {
    setActive(e.target.value);
  };

  return (
    <Container>
      <Info>
        <h1>Projects</h1>
        <p>
          학부생 시절과 부트 캠프, 개인적으로 공부하며 제작한 프로젝트를
          확인하실 수 있습니다.
        </p>
      </Info>
      <Main>
        <CategoryList>
          {data.map((item, i) => {
            return (
              <Category
                key={i}
                value={i}
                onClick={toggleActive}
                className={i == active ? 'active' : 'non-active'}
              >
                {item}
              </Category>
            );
          })}
        </CategoryList>
        <ProjectList>
          {projectPreviewData.map((item) => {
            return (
              <PrjoectBox>
                <div
                  className="image-section"
                  style={
                    item.projectName == 'Collectors'
                      ? { backgroundColor: '#333333' }
                      : { backgroundColor: 'white' }
                  }
                >
                  <img src={item.imageUrl}></img>
                </div>
                <div className="prev">
                  <h4>{item.projectName}</h4>
                  <p>{item.intro}</p>
                  <div className="tag-section">
                    {item.tags.map((item) => {
                      return <span key={item}>#{item}</span>;
                    })}
                  </div>
                </div>
              </PrjoectBox>
            );
          })}
        </ProjectList>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 1fr;
  margin-left: 300px;
  height: 100vh;

  // 반응형 조절. 패드 & 스마트폰 크기일 경우 가운데로
  @media all and (max-width: 976px) {
    margin-left: 0;
  }
`;

const Info = styled.section`
  padding: 40px 70px 40px 70px;
  background-color: #f5f5f5;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 35px;
    margin-bottom: 20px;
  }

  p {
    color: #4f4f4f;
    padding: 2px;
  }
`;

const Main = styled.section`
  padding: 40px 70px 40px 70px;
  display: block;

  @media all and (max-width: 1300px) {
    & {
      padding: 30px;
    }
  }
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
`;

const Category = styled.li`
  list-style: none;
  float: left;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  padding: 3px;

  // 첫 번째 요소 제외하고 마진
  &:not(:first-of-type) {
    margin-left: 20px;
  }

  &:hover {
    color: black;
  }
`;

const ProjectList = styled.div`
  height: 100%;
  padding: 30px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PrjoectBox = styled.div`
  width: 48%;
  height: 230px;

  background-color: #f5f5f5;

  display: grid;
  grid-template-columns: 0.8fr 1fr;

  margin-top: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    filter: brightness(85%);
  }

  .image-section {
    background-color: white;

    margin: auto;
    height: 100%;
    width: 100%;

    display: flex;
    align-content: center;
    justify-content: center;

    object-fit: cover;

    img {
      background-color: white;
      width: 65%;
      height: 130px;
      margin: auto;
    }
  }

  .prev {
    padding: 18px 15px 0px 15px;
    text-align: left;

    h4 {
      display: inline;

      // font관련
      font-size: 25px;
      font-weight: 600;

      border-bottom: 3px solid #b5b5b5;
    }

    p {
      margin: 20px 0;
    }

    .tag-section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      span {
        font-size: 15px;
        color: #828282;
        font-weight: 600;
        padding: 1px;

        &:not(:last-of-type) {
          margin-right: 5px;
        }
      }
    }
  }

  @media all and (max-width: 1200px) {
    & {
      height: 450px;
      grid-template-columns: unset;
      grid-template-rows: 250px 200px;
    }

    .image-section {
      object-fit: cover;

      img {
        background-color: #f5f5f5;
        width: 100%;
        height: 300px;
      }
    }
  }

  @media all and (max-width: 976px) {
    & {
      grid-template-rows: 200px 200px;
    }
  }

  @media all and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;
