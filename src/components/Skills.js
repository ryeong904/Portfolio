import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const list = (array) => {
  return array.map((data) => <p key={data}>{data}</p>);
};

export function Skills() {
  const frontArray = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React'];
  const backArray = ['Node.js', 'Express.js', 'PHP', 'FastAPI'];
  const dbArray = ['MySQL', 'MongoDB'];
  const mobileArray = ['Java', 'Android'];
  const vcsArray = ['GitHub', 'GitLab'];

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ryeong904/repos')
      .then((res) => res.json())
      .then(async (datas) => {
        const d = await getLanguageList(datas);
        setData(d);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
    const sortedList = [];

    for (let key in result) {
      sortedList.push([key, result[key]]);
    }

    sortedList.sort(function (a, b) {
      return b[1] - a[1];
    });
    return sortedList;
  }

  const options = {
    reponsive: false,
  };
  const a = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Main>
      <h1>SKILLS</h1>
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
            <h2>DB</h2>
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
        <Doughnut
          data={a}
          width="300px"
          height="300px"
          display="inline"
          options={{ maintainAspectRatio: false, responsive: false }}
        />
      </section>
    </Main>
  );
}

const Content = styled.div`
  border-bottom: 1px solid #333333;
  display: flex;
  width: 80%;
  flex-direction: column;

  &:last-of-type {
    border-bottom: none;
  }
  div {
    // width: 75%;
    min-width: 75px;
    // background-color: white;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  div p {
    font-size: 1.1rem;
    font-weight: 400;
    background-color: #ededed;
    margin: 0px 10px 10px 0px;
    padding: 5px;
    border-radius: 5%;
  }

  h2 {
    font-weight: 500;
    font-size: 1.4rem;
    margin: 10px 0;
    // color: #333333;
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
  // background-color: rgb(255, 255, 255);
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

  h1 {
    font-size: 2.7rem;
    font-weight: 700;
    margin-bottom: 25px;
    color: white;
    text-shadow: 3px 3px 1px black;
  }

  section > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 50%;
  }

  section {
    // width: 490px;
    width: 50%;
    background-color: rgb(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  section > canvas {
    // margin-right: 20px;
  }
`;
