import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAt, faCircle } from '@fortawesome/free-solid-svg-icons';

export function Home() {
  return (
    <Main id='home'>
      <Content>
        <h1>Kim Hye Ryeong</h1>
        <p>Hi, I'm a Full Stack Web Developer.</p>
      </Content>
      <Icons>
        <a href='https://github.com/ryeong904' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='2x' color='white' />
        </a>
        <a href='mailto:ryeong3725@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} size='2x' color='white' />
        </a>
      </Icons>
    </Main>
  );
}

const Icons = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  opacity: 1;

  a:hover {
    opacity: 0.8;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    animation: fadeInUp 1s;
    font-size: 1.2rem;
    text-shadow: 1px 1px 2px black;
  }

  h1 {
    font-size: 6em;
    margin-bottom: 10px;
    // opacity: 0.8;
    border-bottom: 2px solid white;
    padding-bottom: 10px;
    text-shadow: 4px 3px 0 #28282b;
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
`;
const Main = styled.div`
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Main = styled.div`
//   width: 75%;
//   height: 100%;
//   // display: flex;
//   // min-height: 600px;
//   // flex-direction: row;
//   // justify-content: center;
//   // align-items: center;
//   // margin: 0 auto;
//   // color: #dbdbdb;
//   // color: #333333;
//   background-color: white;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

//   div {
//     margin-right: 160px;
//     margin-left: 50px;
//     vertical-ailgn: center;
//   }

//   div h1 {
//     margin: 0;
//     margin-top: 150px;
//     font-size: 4.5rem;
//     animation: fadeInUp 1s;
//   }

//   @keyframes fadeInUp {
//     0% {
//       opacity: 0;
//       transform: translate3d(0, 20%, 0);
//     }
//     to {
//       opacity: 1;
//       transform: translateZ(0);
//     }
//   }
//   div p {
//     margin: 10px 0;
//     font-size: 1.5rem;
//     font-weight: 500;
//     // color: #dbdbdb;
//     color: #333333;
//     // color: white;
//     animation: fadeInUp 1s;
//   }

//   div p:first-of-type {
//     margin-top: 20px;
//   }

//   img {
//     border-radius: 50%;
//     width: 26em;
//     margin-left: 100px;
//     animation: fadeInUp 1s;
//   }
// `;
