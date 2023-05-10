import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

function AuthPageLayout({ heading, input, button }) {
  return (
    <>
      <h1>{heading}</h1>
      <InputContainer>{input}</InputContainer>
      {button}
    </>
  );
}

export default AuthPageLayout;
