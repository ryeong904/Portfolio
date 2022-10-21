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
      <div>
        <img src="image/khr.jpg"></img>
      </div>
      <h1 style={{ margin: '12px 0' }}>HR Kim</h1>
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
              style={{ marginLeft: 2, marginRight: 15 }}
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
              style={{ marginLeft: 4, marginRight: 18 }}
            ></FontAwesomeIcon>
            <span>Resume</span>
          </a>
        </li>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

// 카테고리 메뉴 컴포넌트
const MenuWrapper = styled.ul`
  margin-top: 5px;
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;

  // 카테고리 메뉴들 가운데로
  margin: 0 auto;

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

  h1 {
  }

  // 헤더 프로필 이미지 조절
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
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

// export function HeaderTag() {
//   return (
//     <Header>
//       <Wrapper>
//         <Nav>
//           <ul>
// <li>
//   <Link to="/">Home</Link>
// </li>
// <li>
//   <Link to="/about">About</Link>
// </li>
// <li>
//   <Link to="/skills">Skills</Link>
// </li>
// <li>
//   <Link to="/projects">Projects</Link>
// </li>
//           </ul>
//         </Nav>
//       </Wrapper>
//     </Header>
//   );
// }

// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   width: 400px;
// `;

// const Header = styled.header`
//   position: fixed;
//   color: white;
//   width: 100%;
//   height: 70px;
//   display: flex;
//   justify-content: center;
//   & a {
//     text-decoration: none;
//   }
// `;

// const Nav = styled.nav`
//   ul {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     margin: 0;
//     padding: 0;
//     height: 100%;
//   }

//   ul li {
//     list-style-type: none;
//     text-shadow: 1px 1px 2px black;
//   }

//   ul li + li {
//     margin-left: 40px;
//   }

//   ul li a {
//     text-decoration: none;
//     font-size: 1.18rem;
//     font-weight: 700;
//     transition: all 0.3s;
//     color: white;
//   }

//   ul li a:hover {
//     color: #b0b0b0;
//   }
// `;
