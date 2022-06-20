import styled from 'styled-components';

export function DownButton() {
  return (
    <ScrollComponent>
      <div>
        <button>더 알아보기</button>
      </div>
    </ScrollComponent>
  );
}

const ScrollComponent = styled.div`
  div {
    width: 100%;
    text-align: center;
  }

  div button {
    width: 130px;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #000;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  div button:hover {
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
`;
