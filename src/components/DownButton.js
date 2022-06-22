import styled from 'styled-components';

export function DownButton() {
  return (
    <ScrollComponent>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '#skills';
          }}
        >
          더 알아보기
        </button>
      </div>
    </ScrollComponent>
  );
}

const ScrollComponent = styled.div`
  background-color: white;
  width: 75%;
  margin: 0 auto;
  div {
    width: 100%;
    text-align: center;
  }

  div button {
    width: 130px;
    height: 40px;
    padding: 10px 25px;
    border: 1px solid #333333;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  div button:hover {
    color: white;
    background-color: black;
  }
`;
