import styled from 'styled-components';

export const TagSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    font-size: 15px;
    color: #828282;
    font-weight: 600;
    padding: 1px;

    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
`;
