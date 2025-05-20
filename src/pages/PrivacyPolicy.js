import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  direction: rtl;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  color: rgb(13, 96, 13);
  margin-bottom: 15px;
`;

const Subtitle = styled.h2`
  color: rgb(13, 96, 13);
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

const List = styled.ul`
  margin-left: 20px;
  list-style-type: disc;
`;

const Link = styled.a`
  color:rgb(13, 96, 13);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = () => {
  return (
    <Section>
      <Title>سياسة الخصوصية</Title>
      <Paragraph>
        نحن في <strong>مطبخ بلادنا</strong> نهتم بخصوصية زوار موقعنا، ونحرص على حماية بياناتهم الشخصية
      </Paragraph>

      <Subtitle>المعلومات التي نجمعها</Subtitle>
      <Paragraph>قد نقوم بجمع بعض المعلومات عند استخدامك لموقعنا، مثل</Paragraph>
      <List>
        <li>معلومات شخصية تقدمها عند الاشتراك في النشرة البريدية أو التواصل معنا</li>
        <li>ملفات تعريف الارتباط (Cookies) لتحسين تجربتك</li>
        <li>بيانات حول كيفية استخدامك لموقعنا</li>
      </List>

      <Subtitle>كيفية استخدام المعلومات</Subtitle>
      <Paragraph>نستخدم البيانات التي نجمعها من أجل</Paragraph>
      <List>
        <li>تحسين تجربة المستخدم على موقعنا</li>
        <li>الرد على استفساراتك والتواصل معك</li>
        <li>تحليل أداء الموقع وتقديم محتوى يناسب اهتماماتك</li>
      </List>

      <Subtitle>حماية المعلومات</Subtitle>
      <Paragraph>
        نحن نلتزم بحماية بياناتك الشخصية وعدم مشاركتها مع أطراف خارجية دون إذنك، إلا في الحالات القانونية الضرورية
      </Paragraph>

      <Subtitle>سياسة ملفات تعريف الارتباط</Subtitle>
      <Paragraph>
        يستخدم موقعنا ملفات تعريف الارتباط (Cookies) لتحسين خدماتنا. يمكنك ضبط إعدادات المتصفح لتعطيلها إذا رغبت في ذلك
      </Paragraph>

      <Subtitle>التعديلات على سياسة الخصوصية</Subtitle>
      <Paragraph>
        قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات هنا، لذا ننصح بزيارة الصفحة بشكل دوري
      </Paragraph>

      <Subtitle>كيفية التواصل معنا</Subtitle>
      <Paragraph>
        إذا كان لديك أي استفسارات حول سياسة الخصوصية، يمكنك التواصل معنا عبر صفحة{' '}
        <Link href="/contact-us">اتصل بنا</Link>.
      </Paragraph>
    </Section>
  );
};

export default PrivacyPolicy;
