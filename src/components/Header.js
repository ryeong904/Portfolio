import styled from 'styled-components';

export function HeaderTag() {
  return (
    <Header>
      <Wrapper>
        <Logo href='#'>HR's portfolio</Logo>
        <Nav>
          <ul>
            <li>
              <a href='#'>About me</a>
            </li>
            <li>
              <a href='#'>Skills</a>
            </li>
            <li>
              <a href='#'>Project</a>
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
  // width: 1000px;
`;

const Logo = styled.a`
  justify-self: start;
  font-size: 2rem;
  font-weight: 700;
  border: 1px solid green;
  margin-right: auto;
`;

const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  border: 1px solid red;

  & a {
    color: black;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
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
  }

  ul li:not(:first-of-type) {
    margin-left: 30px;
  }

  ul li a {
    color: black;
    text-decoration: none;
  }
`;
