import React from 'react';
import styled from 'styled-components';

function AboutUs() {
  return (
    <Container>
      <Title>من نحن</Title>
      <Paragraph>
        نحن عشاق المطبخ الفلسطيني، نهدف إلى حفظ تراث الأكلات التقليدية ونقلها إلى العالم بأفضل صورة.
        موقعنا يضم وصفات أصيلة وقصصًا عن ثقافة الطعام الفلسطيني.
      </Paragraph>
      <Values>
        <Value>
          <h3>رسالتنا</h3>
          <p>الحفاظ على التراث الفلسطيني من خلال الطعام.</p>
        </Value>
        <Value>
          <h3>رؤيتنا</h3>
          <p>أن نكون المرجع الأول لكل محبي المطبخ الفلسطيني.</p>
        </Value>
        <Value>
          <h3>قيمنا</h3>
          <p>الأصالة، الجودة، والتواصل مع المجتمع.</p>
        </Value>
      </Values>
    </Container>
  );
}

export default AboutUs;


const Container = styled.div`
  padding: 40px 20px;
  text-align: center;
  font-family: 'Cairo', sans-serif;
`;



const Title = styled.h1`
  font-size: 36px;
  color:rgb(21, 89, 52);
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #333;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Value = styled.div`
  background-color:rgb(233, 240, 232);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  flex: 1;
  max-width: 300px;
  margin: 0 auto;

  h3 {
    color:rgb(21, 89, 52);
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    color:rgb(114, 176, 124);
    font-size: 18px;
  }
`;
