import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Title } from './Title';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const list = (array) => {
  return array.map((data) => <p key={data}>{data}</p>);
};

function sortFunc(array) {
  const sortedList = [];

  for (let key in array) {
    sortedList.push([key, array[key]]);
  }

  sortedList.sort(function (a, b) {
    return b[1] - a[1];
  });
  return sortedList;
}

async function getLanguageList(array) {
  const newList = array.map((data) => data.languages_url);
  const result = {};

  for (let i = 0; i < newList.length; i++) {
    const res = await fetch(newList[i]);
    const temp = await res.json();

    const arr = Object.keys(temp);
    arr.forEach((data) => {
      if (result.hasOwnProperty(data)) {
        const sum = result[data] + temp[data];
        result[data] = sum;
      } else {
        result[data] = temp[data];
      }
    });
  }
  return sortFunc(result);
}

export function Skills() {
  const frontArray = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React'];
  const backArray = ['Node.js', 'Express.js', 'PHP', 'FastAPI'];
  const dbArray = ['MySQL', 'MongoDB'];
  const mobileArray = ['Java', 'Android'];
  const vcsArray = ['Git', 'GitHub', 'GitLab'];

  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: 'Gihub Data',
        data: [],
        backgroundColor: [
          'rgb(255, 99, 132, 0.9)',
          'rgb(255, 205, 86,0.9)',
          'rgb(255, 159, 64,0.9)',
          'rgb(75, 192, 192,0.9)',
          'rgb(48, 161, 237,0.9)',
        ],
        hoverOffset: 4,
      },
    ],
  });
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/ryeong904/repos')
      .then((res) => res.json())
      .then(async (datas) => {
        console.log(datas);
        const result = await getLanguageList(datas);
        const temp = result.slice(0, 5);
        const labels = temp.map((e) => e[0]);
        const statistics = temp.map((e) => {
          return e[1];
        });

        setChartData((current) => {
          const newObj = { ...current };
          newObj.labels = labels;
          newObj.datasets[0].data = statistics;
          setFlag(true);
          return newObj;
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#262626',
          font: {
            size: 12,
            weight: 600,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: false,
  };

  return (
    <Main>
      <Title title={'Skills'} />
      <section>
        <div>
          <Content>
            <h2>Backend</h2>
            <li>
              <b>PHP, Node.js, FastAPI</b>를 활용하여 서버 개발을 할 수
              있습니다.
            </li>
            <li>
              <b>REST API</b>를 제작하고 <b>OAuth</b>를 사용해 소셜 로그인을
              구현할 수 있습니다.
            </li>
            <li>
              <b>JWT</b>을 사용해 로그인 기능을 구현할 수 있습니다.
            </li>
          </Content>
          <Content>
            <h2>Database</h2>
            <li>
              <b>SQL, NoSQL</b>를 사용하여 프로젝트DB를 구축할 수 있습니다.
            </li>
            <li>
              <b>ODM, ORM</b>을 활용해 데이터베이스를 관리할 수 있습니다.
            </li>
            <li>유연한 쿼리문 작성으로 데이터를 관리할 수 있습니다.</li>
          </Content>
          <Content>
            <h2>Infra</h2>
            <li>
              <b>Docker</b>를 활용하여 웹사이트를 배포할 수 있습니다.
            </li>
            <li>
              <b>AWS S3</b>를 사용해 객체를 저장할 수 있고, 이를 활용할 수
              있습니다.
            </li>
          </Content>
        </div>
      </section>
    </Main>
  );
}

const Content = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: flex-start;

  li {
    font-size: 1rem;
    font-weight: 400;
    color: black;
    // background-color: rgb(255, 255, 255, 0.8);
    margin: 7px 0px 7px 0px;
  }

  h2 {
    font-weight: 600;
    font-size: 1.3rem;
    margin: 10px 0;
    text-shadow: 1px 1px 2px #a1a1a1;
    display: flex;
  }

  @media all and (max-width: 500px) {
    li {
      font-size: 0.95rem;
    }
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transition: all 0.3s;
  animation: background 0.5s;

  @keyframes background {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  section > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    overflow: auto;
  }

  section {
    width: 800px;
    height: 70%;
    background-color: rgb(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    @media all and (max-width: 850px) {
      width: 600px;
      height: 50%;
    }
    @media all and (max-width: 500px) {
      width: 300px;
      height: 70%;
      padding: 30px 0;
    }
  }

  section > canvas {
    margin-right: 20px;
  }

  section > div > h2 {
    font-weight: 400;
    font-size: 1.3rem;
    margin: 10px 0;
    text-shadow: 1px 1px 2px #a1a1a1;
  }
`;
