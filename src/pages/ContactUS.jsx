import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  direction: rtl;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  background-color: rgb(243, 249, 242);
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  color: #6b8e23;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: #557a1f;
  }

  input,
  textarea {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1.5px solid #6b8e23;
    border-radius: 5px;
    resize: vertical;
    font-family: inherit;
    &:focus {
      outline: none;
      border-color: #4a6b1a;
      box-shadow: 0 0 5px #4a6b1a;
    }
  }

  button {
    background-color: #6b8e23;
    color: white;
    border: none;
    padding: 0.8rem;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4a6b1a;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  background: #e8f0d9;
  padding: 1rem;
  border-radius: 8px;
  color: #4a6b1a;

  h2 {
    margin-bottom: 0.7rem;
    text-align: center;
  }

  p {
    margin: 0.3rem 0;
    font-size: 1rem;
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subj: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('تم إرسال الرسالة بنجاح!');
    setFormData({ name: '', email: '', subj: '', message: '' });
  };

  return (
    <Section>
      <Title>اتصل بنا</Title>
      <Description>إذا كان لديك أي استفسار أو اقتراح، لا تتردد في التواصل معنا عبر النموذج التالي</Description>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">:الاسم الكامل</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">الايميل:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subj">الموضوع:</label>
        <input
          type="text"
          id="subj"
          name="subj"
          value={formData.subj}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">الرسالة:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">إرسال</button>
      </Form>

      <ContactInfo>
        <h2>معلومات التواصل</h2>
        <p>📞 الهاتف: 025963777</p>
        <p>📧 البريد الإلكتروني: aklatna@gmail.com</p>
        <p>📍 العنوان: فلسطين، نابلس</p>
      </ContactInfo>
    </Section>
  );
};

export default ContactUs;
