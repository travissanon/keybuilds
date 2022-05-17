import * as React from "react";
import completeBoards from "../../dummyData/complete-boards";
import styled from "styled-components";

const StyledRoot = styled.div``;

const StyledCompleteKeyboards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 960px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .CompleteKeyboards__item {
    padding: 10px;
  }
`;

export interface ICompleteKeyboardsProps {}

export default function CompleteKeyboards(props: ICompleteKeyboardsProps) {
  return (
    <StyledRoot>
      <StyledCompleteKeyboards>
        {completeBoards.map((board) => {
          return (
            <div className="CompleteKeyboards__item">
              <img src={board.image} />
              <h2>{board.name}</h2>
            </div>
          );
        })}
      </StyledCompleteKeyboards>
    </StyledRoot>
  );
}
