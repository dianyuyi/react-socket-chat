import styled from "@emotion/styled";

export const JoinContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: auto;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

export const JoinInnerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  margin: auto;
  background: #f6f6f6;
  border: 1px solid #eee;

  input {
    width: 100%;
    margin: 0.5rem;
    outline: none;
    padding: 0.25rem 0.5rem;
  }
`;

export const JoinTitle = styled.h1`
  font-size: 1.5rem;
  padding: 1rem;
  margin: auto;
`;
