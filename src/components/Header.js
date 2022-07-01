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
              <Link to="/about">About</Link>
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
  justify-content: center;
  width: 400px;
`;

const Header = styled.header`
  position: fixed;
  color: white;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  & a {
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  ul li {
    list-style-type: none;
    text-shadow: 1px 1px 2px black;
  }

  ul li + li {
    margin-left: 40px;
  }

  ul li a {
    text-decoration: none;
    font-size: 1.18rem;
    font-weight: 700;
    transition: all 0.3s;
    color: white;
  }

  ul li a:hover {
    color: #b0b0b0;
  }
`;
