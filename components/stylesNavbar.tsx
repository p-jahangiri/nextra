import styled from "styled-components";

export const Images = styled.img`
  margin-top: 100px;
  width: 48rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const AppNavbar = styled.div`
  padding: 0px 96px;
  height: 53px;
  width: 100%;
  position: static;
  color: inherit;
  direction: rtl;
  @media (max-width: 768px) {
    padding: 0px 0px;
  }
`;

export const ContainerNavbar = styled.div({
  marginTop: "-6px",
});
export const Menu = styled.div`
  align-items: center;
  flex-grow: 1;
  margin-right: 50px;
  @media (max-width: 768px) {
  }
`;
export const MenuItems = styled.button`
  cursor: pointer;
  margin: 0px 7px;
  background: transparent;
  border: none;
  color:#9b9b9b;
  & :hover {color: #706d6d},
`;
export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
export const Register = styled.button`
  width: 63px;
  font-size: 14px;
  color: #5e5b5b;
  border: none;
  background: transparent;
`;
export const Hr = styled.hr`
  height: 30px;
  margin-right: 10px;
`;
export const ButtonLogin = styled.button`
  margin-right: 20px;
  background: #1d5aff;
  color: white;
  border-radius: 25px;
  font-size: 14px;
  width: 70px;
  height: 31px;
  transition: 0.3s;
  border: none;
  & :hover {
    background: white;
    color: #9b9b9b;
    box-shadow: 1px 1px 5px blue;
    & :after {
      content: "";
      width: 0px;
      height: 1px;
      color: red;
      background: red;
    }
  }
`;
