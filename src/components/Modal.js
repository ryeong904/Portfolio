import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function modalOff() {
  document.getElementById('modal').style.opacity = 0;
  document.getElementById('modal').style.transform = 'scale(0.9)';
  document.getElementById('modal').style.zIndex = 0;
}

export function Modal({ props }) {
  const clickHanlder = () => {
    modalOff();
  };

  function list(array) {
    return array.map((e) => <li key={e}>{e}</li>);
  }
  return (
    <MyModal id="modal">
      <XButton onClick={clickHanlder}>&times;</XButton>
      <img src={props.url}></img>
      <TitleAndIcon>
        <h2>{props.title}</h2>
        <a href={props.github} target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" color="#1f1f1f" />
        </a>
      </TitleAndIcon>
      <h3>{props.subject}</h3>
      <hr></hr>
      <ul className="skill">{list(props.skills)}</ul>
      <h4>개발 기간 : {props.date}</h4>
      <h4>담당 : {props.detail.role}</h4>
      {props.detail.work ? (
        <ul className="work">주요 개발{list(props.detail.work)}</ul>
      ) : (
        ''
      )}
      <h4>프로젝트 설명</h4>

      <p className="description">{list(props.detail.description)}</p>
    </MyModal>
  );
}

const TitleAndIcon = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 40px;
    margin: 10px 20px 10px 0;
  }
  a:hover {
    opacity: 0.8;
  }
`;
const XButton = styled.span`
  position: absolute;
  right: 15px;
  top: 5px;
  font-size: 40px;
  color: gray;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const MyModal = styled.div`
  padding: 30px;
  width: 700px;
  height: 70%;
  background-color: white;
  position: absolute;
  top: 17%;
  overflow: auto;
  transition: all 0.4s;
  transform: scale(0.9);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  opacity: 0;

  h3 {
    margin: 10px 0;
    color: #545454;
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1.1rem;
    margin: 20px 0;
  }

  ul {
    padding: 0;
    margin: 10px 0;
    list-style: none;
    display: flex;
    vertical-align: center;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .description > li {
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
    list-style: none;
  }

  .skill > li {
    border: 1px solid #333333;
    color: #333333;
    padding: 6px 8px;
    border-radius: 10rem;
  }

  .work {
    display: block;
    list-style: disc;
  }

  .work > li {
    margin-left: 30px;
    margin-top: 10px;
  }

  ul > li {
    margin: 0 3px;
  }

  & > img {
    width: 80%;
    margin: 20px auto;
    display: block;
  }
`;
