import styled from "@emotion/styled";

const Footer = () => {
  return (
    <StyledFooter>
      <a href="http://github.com/hanyunseong" target="_blank" rel="noreferrer">
        Github
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.5rem 0;

  display: flex;
  justify-content: center;
`;

export default Footer;
