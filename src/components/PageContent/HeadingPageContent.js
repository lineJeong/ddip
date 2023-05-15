import styled from "styled-components";

const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

function HeadingPageContent({ heading, children }) {
  return (
    <>
      <Heading>{heading}</Heading>
      {children}
    </>
  );
}

export default HeadingPageContent;
