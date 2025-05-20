import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import imgMusakhan from '../assets/images/مسخن.png';
import imgMansaf from '../assets/images/منسف.png';
import imgMaqlouba from '../assets/images/مقلوبة.jpg';

const Section = styled.section`
  direction: rtl;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #faf9f6;
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
  strong {
    color: #557a1f;
  }
`;

const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const BlogPost = styled.article`
  background: white;
  box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  max-width: 320px;
  flex: 1 1 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 1rem;
  }

  h2 {
    color: #4a6b1a;
    margin-bottom: 0.5rem;
  }

  p {
    flex-grow: 1;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #555;
  }

  a {
    text-decoration: none;
    color: #6b8e23;
    font-weight: bold;
    border: 1px solid #6b8e23;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #6b8e23;
      color: white;
    }
  }
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const blogData = [
      {
        id: 1,
        title: 'تاريخ المسخن الفلسطيني',
        content:
          'المسخن هو أحد أشهر الأطباق الفلسطينية التقليدية، يتميز بنكهات زيت الزيتون والسماق والبصل المشوي',
        img: imgMusakhan,
        link: 'https://mawdoo3.com/%D8%B9%D9%85%D9%84_%D8%A7%D9%84%D9%85%D8%B3%D8%AE%D9%86_%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A',
      },
      {
        id: 2,
        title: 'المنسف: طبق الفخر الأردني والفلسطيني',
        content:
          'يعد المنسف أحد أقدم الأطباق العربية المعروفة، ويعتمد على لبن الجميد واللحم والأرز',
        img: imgMansaf,
        link: 'https://cookpad.com/ps/search/%D8%A7%D9%84%D9%85%D9%86%D8%B3%D9%81%20%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A',
      },
      {
        id: 3,
        title: 'سر نجاح المقلوبة الفلسطينية',
        content:
          'المقلوبة ليست مجرد طبق، بل هي فن في الطهي، تعلمي كيف تعدينها بأفضل طريقة',
        img: imgMaqlouba,
        link: 'https://mawdoo3.com/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%A7%D9%84%D9%85%D9%82%D9%84%D9%88%D8%A8%D8%A9_%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D8%A9',
      },
    ];

    setTimeout(() => {
      setPosts(blogData);
    }, 500);
  }, []);

  return (
    <Section>
      <Title>المدونة</Title>
      <Description>
        مرحبًا بكم في مدونة <strong>مطبخ بلادنا</strong>، حيث نشارككم أطيب الوصفات والأسرار حول الأكلات الفلسطينية
      </Description>

      <BlogContainer>
        {posts.map((post) => (
          <BlogPost key={post.id}>
            <img src={post.img} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              اقرأ المزيد
            </a>
          </BlogPost>
        ))}
      </BlogContainer>
    </Section>
  );
};

export default Blog;
