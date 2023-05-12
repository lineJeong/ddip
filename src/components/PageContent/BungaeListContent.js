import styled from "styled-components";

const StyledBungaeListContent = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;

    @media only screen and (max-width: 1254px) {
      max-width: 895px;
    }
    @media only screen and (max-width: 949px) {
      max-width: 590px;
    }
    @media only screen and (max-width: 644px) {
      max-width: 285px;
    }
  }
`;

function BungaeListContent({ children }) {
  return (
    <StyledBungaeListContent>
      <ul>{children}</ul>
    </StyledBungaeListContent>
  );
}

export default BungaeListContent;
