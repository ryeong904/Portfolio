import styled from 'styled-components';

export function DownButton() {
  return (
    <ScrollComponent>
      <div>
        <button>아래로 스크롤</button>
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
  }
`;
