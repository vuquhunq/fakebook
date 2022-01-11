import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-center;
  align-items: center;
  background-color: rgb(36, 37, 38);
`;
export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CoverWrapper = styled.div`
  width: 940px;
  height: auto;
  @media (max-width: 940px) {
    width: 100%;
    height: auto;
  }
`;
export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: 50%;
  border-color: white;
  @media (max-width: 940px) {
    height: 128px;
  }
`;
export const AvatarImage = styled.img`
  width: 168px;
  height: 168px;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  padding: 0 20px;
  @media (max-width: 940px) {
    top: -40;
    padding: 0;
  }
`;
export const DetailWrapper = styled.div`
  display: flex;
  margin: 0 4rem;
  width: 940px;
  color: white;
  justify-content: space-between;
  padding: 0 40px;
  @media (max-width: 940px) {
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      }
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  & h1 {
    padding: 0 0.5rem;
    font-weight: bold;
    margin-bottom: 0;
  }
  & h5 {
    margin: 0;
    padding: 0 0.5rem;
  }
  @media (max-width: 940px) {
    text-align: center;
    margin-left: 0;
    & h1 {
      margin: 0;
      font-weight: bold;
    }
    & h5 {
      margin: 0;
      padding: 0 0.5rem;
    }
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const Button = styled.button`
  color: white;
  border-radius: .4rem;
  background-color: ${(props) =>
    props.primary ? "rgb(55,117,218);" : "rgb(58,59,60);"}
  padding: .5rem;
  font-size: .9rem;
  border: none;
  outline: none;
  margin: 0 .2rem;
  font-weight: bolder;
  height: 36px;
`;
export const DetailUserWrapper = styled.div`
  display: flex;
  flex-directon: row;
  justify-content: center;
  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  color: white;
`;