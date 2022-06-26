import styled from 'styled-components';

export function Modal() {
  const clickHanlder = () => {
    document.getElementById('modal').style.opacity = 0;
    document.getElementById('modal').style.transform = 'scale(0.9)';
    document.getElementById('modal').style.zIndex = 0;
  };
  return (
    <MyModal id="modal">
      <XButton onClick={clickHanlder}>&times;</XButton>
      <img src="image/portfolio.png"></img>
      <div>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </div>
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
  //   display: none;
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
    font-size: 39px;
    margin: 0;
  }

  & > img {
    width: 80%;
    margin: 0 auto;
    display: block;
  }
`;
