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
  color:rgb(13, 96, 13);
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

const OrderedList = styled.ol`
  margin-left: 20px;
`;

const Link = styled.a`
  color: rgb(13, 96, 13);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ReturnPolicy = () => {
  return (
    <Section>
      <Title>سياسة الإرجاع للأطعمة</Title>
      <Paragraph>نحن نحرص على تقديم أطعمة طازجة وصحية، لذا نرجو منك قراءة سياسة الإرجاع التالية بعناية</Paragraph>

      <Subtitle>📌 لا يمكن إرجاع الطعام بعد استلامه</Subtitle>
      <Paragraph>بسبب طبيعة الأطعمة، لا يمكننا قبول إرجاع أي طلب بعد استلامه من قبل العميل</Paragraph>

      <Subtitle>📌 حالات يمكن فيها التعويض أو الاستبدال</Subtitle>
      <List>
        <li>وصول الطلب بشكل غير صحيح (مثلاً: طلبتِ مسخن ولكن وصلكِ منسف)</li>
        <li>تلف أو فساد الطعام عند الاستلام (يجب التبليغ فورًا خلال 30 دقيقة من الاستلام)</li>
        <li>وجود نقص في الطلب مقارنة بالفاتورة</li>
      </List>

      <Subtitle>📌 كيفية تقديم شكوى</Subtitle>
      <Paragraph>إذا واجهتِ مشكلة في الطلب، يمكنكِ التواصل معنا خلال 30 دقيقة من استلام الطعام عبر</Paragraph>
      <OrderedList>
        <li>
          إرسال بريد إلكتروني إلى:{' '}
          <Link href="mailto:samaa@example.com">samaa@example.com</Link>
        </li>
        <li>إرفاق صورة للطلب والفاتورة</li>
        <li>شرح المشكلة بالتفصيل</li>
      </OrderedList>

      <Subtitle>📌 متى يتم استرداد المبلغ؟</Subtitle>
      <Paragraph>إذا تم تأكيد المشكلة، سيتم تعويضكِ بواحدة من الطرق التالية</Paragraph>
      <List>
        <li>إعادة إرسال الطلب مجددًا مجانًا</li>
        <li>تعويض مالي يُضاف إلى حسابك لاستخدامه في طلب جديد</li>
        <li>استرداد المبلغ كاملًا في الحالات القصوى</li>
      </List>

      <Subtitle>📌 التواصل معنا</Subtitle>
      <Paragraph>
        إذا كان لديكِ أي استفسارات، يُرجى التواصل عبر البريد الإلكتروني:{' '}
        <Link href="mailto:samaa@example.com">samaa@example.com</Link>
      </Paragraph>
    </Section>
  );
};

export default ReturnPolicy;
