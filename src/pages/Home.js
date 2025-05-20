// Home.js
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../assets/images/مفتول.jpg';
import image2 from '../assets/images/مقلوبة.jpg';
import image3 from '../assets/images/مسخن.png';
import image4 from '../assets/images/قراص-زعتر.jpg';
import headerImage from '../assets/images/food.jpg'; 

const Main = styled.main``;

const HomeImage = styled.div`
  height: 600px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$img});
`;

const SpecialText = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
  color: #6b8e23;
`;

const CardsSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  gap: 1.5rem;
`;

const Card = styled.div`
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 0 15px #6b8e23;
  overflow: hidden;
  text-align: center;
  background: white;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  p {
    padding: 0.8rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const RecipeSection = styled.section`
  background-color: #fff8f0;
  padding: 2rem;
  margin: 3rem auto;
  max-width: 800px;
  border-radius: 15px;
  box-shadow: 0 0 10px #6b8e23;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
    color:#6b8e23;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin: 1rem 0;
  }

  p {
    font-size: 1.1rem;
    text-align: right;
    direction: rtl;
    line-height: 1.8;
    padding: 1rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    background-color: #6b8e23;
    color:;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color:rgb(76, 103, 22);
    }
  }
`;

function Home() {
  const [showRecipe, setShowRecipe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRecipe(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Main>
<HomeImage $img={headerImage} />
      <SpecialText>🌿🍽️جرب ألذ المأكولات الفلسطينية</SpecialText>

      <CardsSection>
        <Card>
          <img src={image1} alt="مفتول" />
          <p>حباته من إيد ستك… وطعمه من روح بلادك</p>
        </Card>
        <Card>
          <img src={image2} alt="مقلوبة فلسطينية" />
          <p>! كل شي بيتغير لما تنقلب الطنجرة</p>
        </Card>
        <Card>
          <img src={image3} alt="مسخن" />
          <p>ريحة السماق وزيت الزيتون… بتحكيلك قصة بلادنا</p>
        </Card>
      </CardsSection>

      {showRecipe && (
        <RecipeSection>
          <h1>✨ وصفة من قلب التراث</h1>
          <img src={image4} alt="قراص زعتر" />
          <p>
            <strong>: المكونات</strong><br />
            3 أكواب طحين، 1 ملعقة كبيرة خميرة، نصف ملعقة صغيرة ملح، 2 ملعقة زيت زيتون، كوب ماء دافئ للعجن،
            2 كوب زعتر أخضر مفروم، نصف كوب زيت زيتون، 2 ملعقة كبيرة سمسم
            <br /><br />
            <strong>: طريقة التحضير</strong><br />
            - تُمزج المكونات وتُعجن حتى تصبح طرية، ثم تُترك لتختمر<br />
            - يُخلط الزعتر مع زيت الزيتون والسمسم<br />
            - تُفرد العجينة وتُحشى بالخليط وتُشكل أقراص<br />
            - تُخبز في الطابون لمدة 10–20 دقيقة
          </p>
          <a href="/services">
            <button>للمزيد من الوصفات</button>
          </a>
        </RecipeSection>
      )}
    </Main>
  );
}

export default Home;
