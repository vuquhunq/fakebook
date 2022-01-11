import styled from "styled-components";

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  margin: 1rem 0;
`;
export const ArticleCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  padding: 12px 16px 10px 16px;
  border-radius: 0.5rem;
  background-color: rgb(36, 37, 38);
`;
export const CreateButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-align: left;
  border: none;
  outline: none;
  color: white;
  border-radius: 2rem;
  width: 100%;
  height: 40px;
  margin-left: 0.5rem;
  background-color: rgb(58, 59, 60);
  transition: background-color 0.2s;
  &:hover {
    background-color: rgb(78, 79, 80);
  }
`;
export const Button = styled.button`
  color: white;
  border-radius: 0.4rem;
  background: none;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: none;
  outline: none;
  margin: 0 0.2rem;
  font-weight: bolder;
  height: 36px;
  width: 100%;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgb(58, 59, 60);
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px rgb(58, 59, 60) solid;
`;
export const StaticFileWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  padding-top: 8px;
`;
