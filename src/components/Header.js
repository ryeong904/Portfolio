import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function HeaderTag() {
  return (
    <Header>
      <Wrapper>
        {/* <Logo href='/'>HR's</Logo> */}
        <Nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/skills'>Skills</Link>
            </li>
            <li>
              <Link to='/project'>Project</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Header>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

const Logo = styled.a`
  justify-self: start;
  font-size: 2rem;
  font-weight: 400;
  // margin-left: 120px;
  margin-right: 500px;
  color: white;
`;

const Header = styled.header`
  // border-bottom: 1px solid black;
  position: fixed;
  // background-color: white;
  color: white;
  width: 100%;
  height: 70px;
  // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  // opacity: 1;
  & a {
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  margin-right: 70px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  ul li {
    float: left;
    list-style-type: none;
    text-align: center;
    text-shadow: 1px 1px 2px black;
  }

  ul li:not(:first-of-type) {
    margin-left: 40px;
  }

  ul li a {
    text-decoration: none;
    font-size: 17px;
    font-weight: 700;
    transition: all 0.3s;
    color: white;
  }

  ul li a:hover {
    color: #dae01f;
  }
`;
