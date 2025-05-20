import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import img1 from '../assets/images/مسخن.png';
import img2 from '../assets/images/مقلوبة.jpg';
import img3 from '../assets/images/مفتول.jpg';
import img4 from '../assets/images/القدرة.jpg';
import img5 from '../assets/images/منسف.png';
import img6 from '../assets/images/دوالي.png';

import img7 from '../assets/images/قراص-زعتر.jpg';
import img8 from '../assets/images/كعك-القدس.jpg';
import img9 from '../assets/images/فلافل.jpg';
import img10 from '../assets/images/حمص.jpg';
import img11 from '../assets/images/منقوشة.jpg';
import img12 from '../assets/images/طابون.png';

import img13 from '../assets/images/كنافة.jpg';
import img14 from '../assets/images/تمرية.png';
import img15 from '../assets/images/هريسة.png';
import img16 from '../assets/images/معمول.png';
import img17 from '../assets/images/كعك.png';
import img18 from '../assets/images/قطايق.jpg';

const Album = () => {
  const [meals, setMeals] = useState({
    main: [],
    sides: [],
    sweets: [],
  });

  useEffect(() => {
    setMeals({
      main: [
        { img: img1, name: 'المسخن' },
        { img: img2, name: 'المقلوبة' },
        { img: img3, name: 'المفتول' },
        { img: img4, name: 'القدرة' },
        { img: img5, name: 'المنسف' },
        { img: img6, name: 'الدوالي' },
      ],
      sides: [
        { img: img7, name: 'قراص الزعتر' },
        { img: img8, name: 'كعك القدس' },
        { img: img9, name: 'فلافل' },
        { img: img10, name: 'حمص' },
        { img: img11, name: 'منقوشة' },
        { img: img12, name: 'خبز الطابون' },
      ],
      sweets: [
        { img: img13, name: 'كنافة نابلسية' },
        { img: img14, name: 'تمرية' },
        { img: img15, name: 'هريسة' },
        { img: img16, name: 'معمول' },
        { img: img17, name: 'كعك العيد' },
        { img: img18, name: 'قطايف' },
      ],
    });
  }, []);

  const renderSection = (title, items) => (
    <>
      <SectionTitle>{title}</SectionTitle>
      <Gallery>
        {items.map((item, index) => (
          <Figure key={index}>
            <img src={item.img} alt={item.name} />
            <figcaption>{item.name}</figcaption>
          </Figure>
        ))}
      </Gallery>
      <Separator />
    </>
  );

  return (
    <Container>
      {renderSection('الأطباق الرئيسية', meals.main)}
      {renderSection('المقبلات والمخبوزات', meals.sides)}
      {renderSection('الحلويات الفلسطينية', meals.sweets)}
    </Container>
  );
};

export default Album;


const Container = styled.div`
  padding: 40px 20px;
  font-family: 'Cairo', sans-serif;
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 32px;
  margin: 40px 0 20px;
  color: rgb(21, 89, 52);;
`;

const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Figure = styled.figure`
  width: 180px;
  border-radius: 12px;
  overflow: hidden;
  background-color: rgb(233, 240, 232);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }

  figcaption {
    padding: 10px;
    font-size: 18px;
    color: #333;
  }
`;

const Separator = styled.hr`
  margin: 40px auto;
  width: 60%;
  border: none;
  border-top: 2px dashed rgb(21, 89, 52);;
`;

