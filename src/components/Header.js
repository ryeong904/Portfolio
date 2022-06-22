import styled from 'styled-components';

export function HeaderTag() {
  return (
    <Header>
      <Wrapper>
        <Logo href="/">HR's Portfolio</Logo>
        <Nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
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
  justify-content: center;
  align-items: center;
`;

const Logo = styled.a`
  justify-self: start;
  font-size: 2rem;
  font-weight: 700;
  // margin-left: 120px;
  margin-right: 500px;
`;

const Header = styled.header`
  // border-bottom: 1px solid black;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  opacity: 0.9;
  & a {
    color: black;
    // color: white;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  // margin-right: 120px;
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
  }

  ul li:not(:first-of-type) {
    margin-left: 40px;
  }

  ul li a {
    color: black;
    text-decoration: none;
    // font-weight: 600;
    font-size: 17px;
    // color: white;
    transition: all 0.3s;
  }

  ul li a:hover {
    opacity: 1;
  }
`;
