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
            <h2>Frontend</h2>
            <div>{list(frontArray)}</div>
          </Content>
          <Content>
            <h2>Backend</h2>
            <div>{list(backArray)}</div>
          </Content>
          <Content>
            <h2>Database</h2>
            <div>{list(dbArray)}</div>
          </Content>
          <Content>
            <h2>Mobile</h2>
            <div>{list(mobileArray)}</div>
          </Content>
          <Content>
            <h2>Version Control System</h2>
            <div>{list(vcsArray)}</div>
          </Content>
        </div>
        <div>
          <h2>Programming Language</h2>
          {flag ? (
            <Doughnut
              data={chartData}
              width="300px"
              height="300px"
              options={options}
            />
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </section>
    </Main>
  );
}

const Content = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;

  &:last-of-type {
    border-bottom: none;
  }
  div {
    min-width: 75px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
  }

  div p {
    font-size: 0.95rem;
    font-weight: 400;
    color: black;
    background-color: rgb(255, 255, 255, 0.8);
    margin: 0px 10px 10px 0px;
    padding: 5px 12px;
    border-radius: 25rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  h2 {
    font-weight: 400;
    font-size: 1.3rem;
    margin: 10px 0;
    text-shadow: 1px 1px 2px #a1a1a1;
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
    width: 45%;
  }

  section {
    width: 800px;
    height: 70%;
    background-color: rgb(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    @media all and (max-width: 850px) {
      width: 600px;
    }
    @media all and (max-width: 500px) {
      width: 400px;
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
