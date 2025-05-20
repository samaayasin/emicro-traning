import React from 'react';
import styled from 'styled-components';

import مسخن from '../assets/images/مسخن.png';
import منسف from '../assets/images/منسف.png';
import مقلوبة from '../assets/images/مقلوبة.jpg';
import مفتول from '../assets/images/مفتول.jpg';

const Section = styled.section`
  direction: rtl;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #fefefe;
`;

const Title = styled.h1`
  text-align: center;
  color: #6b8e23;
  margin-bottom: 0.3rem;
`;

const Subtitle = styled.h2`
  color: #557a1f;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  font-size: 1.1rem;
`;

const AboutMe = styled.div`
  background-color:rgb(234, 236, 230);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  h2 {
    margin-bottom: 0.5rem;
    color: #4a6b1a;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  img {
    width: 150px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

const Videos = styled.div`
  display: flex;
  justify-content: center;
  iframe {
    width: 100%;
    max-width: 560px;
    height: 315px;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
  }
`;

const EmailLink = styled.a`
  color: #6b8e23;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Portfolio = () => {
  return (
    <Section>
      <Title>بورتفوليو</Title>
      <Paragraph>تعرفوا على تجربتي في تحضير الأكلات الفلسطينية التقليدية</Paragraph>

      <AboutMe>
        <h2>اسمي سماء</h2>
        <Paragraph>أنا عاشقة للمطبخ الفلسطيني وأحب مشاركة وصفاتي مع الجميع</Paragraph>
      </AboutMe>

      <Subtitle>📌 أطباق قمتُ بإعدادها</Subtitle>
      <Gallery>
        <img src={مسخن} alt="المسخن" />
        <img src={منسف} alt="المنسف" />
        <img src={مقلوبة} alt="المقلوبة" />
        <img src={مفتول} alt="مفتول" />
      </Gallery>

      <Subtitle>📹 فيديوهات قمتُ بمشاركتها</Subtitle>
      <Videos>
        <iframe
          src="https://www.youtube.com/embed/4I4WCj1KoSA"
          title="فيديو من اليوتيوب"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Videos>

      <Subtitle>📜 مشاركاتي وشهاداتي</Subtitle>
      <Paragraph>
        شاركتُ في العديد من الفعاليات التي تروج للمطبخ الفلسطيني وحصلتُ على شهادات تقدير
      </Paragraph>

      <Subtitle>📞 تواصل معي</Subtitle>
      <Paragraph>
        يمكنكم التواصل معي عبر البريد الإلكتروني:{' '}
        <EmailLink href="mailto:samaa@example.com">samaa@example.com</EmailLink>
      </Paragraph>
    </Section>
  );
};

export default Portfolio;
