import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faBloggerB } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faUser,
  faFileLines,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <HeaderWrapper>
      <div id="navigation">
        <div>
          <img id="profile" src="image/khr.jpg"></img>
        </div>
        <h1 id="name">HR Kim</h1>
        <hr style={{ width: 200, margin: '10px auto' }}></hr>
        <IconList>
          <a href="https://github.com/ryeong904" target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} size="xl" color="#749f82" />
          </a>
          <a href="https://velog.io/@fud904" target="_blank">
            <FontAwesomeIcon icon={faBloggerB} size="xl" color="#749f82" />
          </a>
          <a href="mailto:ryeong3725@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="xl" color="#749f82" />
          </a>
        </IconList>
        <hr style={{ width: 200, margin: '10px auto' }}></hr>
        <MenuWrapper>
          <li>
            <Link to="/">
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                style={{ marginLeft: 10, marginRight: 15 }}
              ></FontAwesomeIcon>
              <span>About Me</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FontAwesomeIcon
                icon={faKeyboard}
                size="1x"
                style={{ marginRight: 14 }}
              ></FontAwesomeIcon>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <a href="pdf/resume.pdf" target="_blank">
              <FontAwesomeIcon
                icon={faFileLines}
                size="1x"
                style={{ marginLeft: 4, marginRight: 16 }}
              ></FontAwesomeIcon>
              <span>Resume</span>
            </a>
          </li>
        </MenuWrapper>
      </div>
    </HeaderWrapper>
  );
}

// 나중에 햄버거 메뉴 도전하기...
const NavBar = styled.nav`
  display: flex;
  width: 100%;

  h1 {
    display: none;
  }

  #menu {
    display: none;
    padding: 4px;

    // 배치
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
    z-index: 1;

    // 테두리
    width: 40px;
    border: 2px solid #e3e3e3;

    &:hover {
      transition: all 0.1s;
      cursor: pointer;
      color: white;
      border: 2px solid;
    }
  }

  // 반응형 조절. 패드 & 스마트폰 크기일 경우 위로 가게함
  @media all and (max-width: 976px) {
    #menu {
      display: block;
    }
    h1 {
      display: block;
      position: absolute;
      font-size: 2em;
      width: 100%;
      top: 1.2rem;
    }
  }
  @media all and (max-width: 500px) {
  }
`;

// 카테고리 메뉴 컴포넌트
const MenuWrapper = styled.ul`
  margin-top: 5px;
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  // 디테일한 부분 스타일링
  li {
    font-size: 18px;
    font-weight: 800;
    margin-top: 10px;
    padding: 5px;

    // 왼쪽 정렬
    text-align: left;

    // hover시 변화
    a {
      svg {
        margin: 0;
      }
      color: white;
      text-decoration: none;
    }
    a:hover {
      transition: all 0.2s;
      color: #334735;
    }

    span {
    }
  }
`;
// 헤더 테두리. 배경색 설정, 왼쪽에 고정
const HeaderWrapper = styled.header`
  background-color: #749f82;

  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  color: white;
  text-align: center;

  display: flex;
  flex-direction: column;
  margin: auto 0;
  justify-content: center;

  // 헤더 프로필 이미지 조절
  #profile {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  #name {
    margin: 12px 0;
  }

  // 반응형 조절. 패드 & 스마트폰 크기일 경우 위로 가게함

  @media all and (max-width: 976px) {
    position: relative;
    width: 100%;
    height: 300px;

    #profile {
      display: none;
    }

    #name {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }

  @media all and (max-width: 500px) {
  }
`;

// 프로필 아이콘 스타일
const IconList = styled.div`
  margin: 10px;
  a {
    width: 100px;
    margin: 10px;
  }
  a:hover {
    svg {
      transition: all 0.2s;
      color: #374d3e;
    }
  }

  // 뒤에 하얀 배경 효과
  svg {
    border-radius: 50%;
    padding: 5px 6px;
    background: white;
  }
`;
