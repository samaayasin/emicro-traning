import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const StyledFooter = styled.footer`
  background-color: #6b8e23;
  padding: 20px;
  text-align: center;
  font-family: 'Cairo', sans-serif;
  color: #333;
  border-top: 1px solid #ddd;
`;

const FooterText = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  margin: 10px 0;

  a {
    margin: 0 8px;
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 15px;

  p {
    margin-bottom: 8px;
    font-weight: bold;
  }

  a {
    margin: 0 10px;
    font-size: 20px;
    color: #555;

    &:hover {
      color: #007b5e;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterText>جميع الحقوق محفوظة &copy; 2025 نكهات فلسطينية | صنع بحب</FooterText>
      <FooterLinks>
        <Link to="/about">من نحن</Link> |  
        <Link to="/privacy">سياسة الخصوصية</Link> |  
        <Link to="/contact">اتصل بنا</Link> |  
        <Link to="/return">سياسة الإرجاع</Link> |  
        <Link to="/terms">الشروط والأحكام</Link> |  
        <Link to="/blog">المدونة</Link>
      </FooterLinks>
      <SocialIcons>
  <p>:تابعونا على</p>
  <FontAwesomeIcon icon={faFacebook} />
  <FontAwesomeIcon icon={faInstagram} />
  <FontAwesomeIcon icon={faYoutube} />
</SocialIcons>

    </StyledFooter>
  );
}

export default Footer;
