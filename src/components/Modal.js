import styled from 'styled-components';

export function Modal({ props }) {
  const clickHanlder = () => {
    document.getElementById('modal').style.opacity = 0;
    document.getElementById('modal').style.transform = 'scale(0.9)';
    document.getElementById('modal').style.zIndex = 0;
  };

  function list(array) {
    return array.map((e) => <li key={e}>{e}</li>);
  }
  return (
    <MyModal id="modal">
      <XButton onClick={clickHanlder}>&times;</XButton>
      <img src={props.url}></img>
      <h2>{props.title}</h2>
      <h3>{props.subject}</h3>
      <hr></hr>
      <ul className="skill">{list(props.skills)}</ul>
      {props.detail.work ? (
        <ul className="work">주요 개발{list(props.detail.work)}</ul>
      ) : (
        ''
      )}
      <p>{props.detail.description}</p>
    </MyModal>
  );
}

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

  h2 {
    font-size: 40px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 10px 0;
    color: #545454;
    font-size: 1.2rem;
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
