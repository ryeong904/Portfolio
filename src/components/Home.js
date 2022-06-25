import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faBloggerB } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Home() {
  return (
    <Main>
      <Content>
        <h1>Kim Hye Ryeong</h1>
        <p>Hi, I'm a Full Stack Web Developer.</p>
      </Content>
      <Icons>
        <a href="https://github.com/ryeong904" target="_blank">
          <FontAwesomeIcon icon={faGithubAlt} size="2x" color="#1f1f1f" />
        </a>
        <a href="https://velog.io/@fud904" target="_blank">
          <FontAwesomeIcon icon={faBloggerB} size="2x" color="#1f1f1f" />
        </a>
        <a href="mailto:ryeong3725@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="#1f1f1f" />
        </a>
      </Icons>
    </Main>
  );
}

const Icons = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  a:hover {
    svg {
      transition: all 0.2s;
      color: black;
    }
  }

  svg {
    border-radius: 50%;
    padding: 5px 6px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
