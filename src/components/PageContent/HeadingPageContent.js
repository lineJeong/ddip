import styled from "styled-components";

const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 1.75rem;
  font-weight: bold;
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
