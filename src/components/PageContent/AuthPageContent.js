import styled from "styled-components";

const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 1.75rem;
  font-weight: bold;
`;

function AuthPageContent({ heading, inputs, buttons }) {
  return (
    <>
      <Heading>{heading}</Heading>
      {inputs}
      {buttons}
    </>
  );
}

export default AuthPageContent;
