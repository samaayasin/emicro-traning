import React from "react";
import styled from "styled-components";

const Section = styled.section`
  direction: rtl;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  color:rgb(18, 103, 33);
  margin-bottom: 15px;
`;

const Subtitle = styled.h2`
  color: rgb(18, 103, 33);
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

const Link = styled.a`
  color:rgb(18, 103, 33);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Terms = () => {
  return (
    <Section>
      <Title>الشروط والأحكام</Title>
      <Paragraph>
        مرحبًا بكم في موقع "مطبخ بلادنا". يُرجى قراءة هذه الشروط بعناية قبل استخدام الموقع
      </Paragraph>

      <Subtitle>📌 استخدام الموقع</Subtitle>
      <Paragraph>
        باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق، يُرجى عدم استخدام الموقع
      </Paragraph>

      <Subtitle>📌 حقوق الملكية الفكرية</Subtitle>
      <Paragraph>
        جميع المحتويات الموجودة على الموقع، بما في ذلك النصوص والصور والفيديوهات، محمية بحقوق النشر. لا يجوز نسخها أو إعادة نشرها دون إذن
      </Paragraph>

      <Subtitle>📌 المحتوى والمساهمات</Subtitle>
      <Paragraph>
        يمكن للمستخدمين إرسال تعليقات أو وصفات، ولكن يجب أن تكون قانونية ولا تنتهك حقوق الآخرين
      </Paragraph>

      <Subtitle>📌 الخصوصية</Subtitle>
      <Paragraph>
        نحن نحترم خصوصيتك. لن نقوم بمشاركة بياناتك الشخصية مع أي طرف ثالث دون إذنك
      </Paragraph>

      <Subtitle>📌 التعديلات على الشروط</Subtitle>
      <Paragraph>
        نحتفظ بالحق في تعديل هذه الشروط في أي وقت. يُرجى مراجعة هذه الصفحة بانتظام
      </Paragraph>

      <Subtitle>📌 التواصل</Subtitle>
      <Paragraph>
        إذا كان لديك أي استفسارات، يُرجى التواصل معنا عبر البريد الإلكتروني:{" "}
        <Link href="mailto:samaa@example.com">samaa@example.com</Link>
      </Paragraph>
    </Section>
  );
};

export default Terms;
