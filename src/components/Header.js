import styled from 'styled-components';

const StyledHeader = styled.header`
  color:rgb(21, 89, 52); 
  text-align: center;
  padding: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Cairo', sans-serif;
`;

function Header() {
  return (
    <StyledHeader>
      الأكل تراث... وكل لقمة بتحكي حكايتنا
    </StyledHeader>
  );
}

export default Header;
