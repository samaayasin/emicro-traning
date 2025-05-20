import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mapImage from '../assets/images/فلسطين.png';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #6b8e23; 
  padding: 10px 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  flex-wrap: wrap;
  justify-content: center;
  direction: rtl;
  font-family: 'Cairo', sans-serif;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color:white;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 6px 12px;
  border-radius: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color:rgb(70, 101, 17); 
    color: #f0f5ea; 
  }
`;

const MapImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-left: 10px;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color:white;
  margin-left: 10px;
  user-select: none;
`;

function Navbar() {
  return (
    <Nav>
      <StyledLink to="/">الرئيسية</StyledLink>
      <StyledLink to="/about">من نحن</StyledLink>
      <StyledLink to="/contact">اتصل بنا</StyledLink>
      <StyledLink to="/services">الخدمات</StyledLink>
      <StyledLink to="/album">ألبوم الصور</StyledLink>
      <StyledLink to="/portfolio">بورتفوليو</StyledLink>

      <MapImage src={mapImage} alt="خريطة فلسطين" />
      <Title>مطبخ بلادنا</Title>
    </Nav>
  );
}

export default Navbar;
