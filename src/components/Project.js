import styled from 'styled-components';
import styles from './Project.css';
import { useState } from 'react';

export function Project() {
  const data = ['All', 'Web', 'Android', 'ETC'];
  const [active, setActive] = useState(null);

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
      <ProjectList>
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
      </ProjectList>
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

const ProjectList = styled.section`
  padding: 40px 70px 40px 70px;
  display: block;
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
  padding: 5px;

  // 첫 번째 요소 제외하고 마진
  &:not(:first-of-type) {
    margin-left: 20px;
  }

  &:hover {
    color: black;
  }
`;
