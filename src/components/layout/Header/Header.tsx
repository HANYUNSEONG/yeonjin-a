import styled from "@emotion/styled";

const Header = () => {
  return (
    <StyledHeader>
      <h1>멋지다 연진아~</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;

  color: #333;

  h1 {
    font-size: 1.2rem;
  }
`;

export default Header;
