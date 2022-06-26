import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function HeaderTag() {
  return (
    <Header>
      <Wrapper>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
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

const Header = styled.header`
  position: fixed;
  color: white;
  width: 100%;
  height: 70px;

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
