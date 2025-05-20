import React, { useState } from "react";
import styled from "styled-components";

import imgMusakhan from "../assets/images/مسخن.png";
import imgMansaf from "../assets/images/منسف.png";
import imgMaftoul from "../assets/images/مفتول.jpg";
import imgMaqlouba from "../assets/images/مقلوبة.jpg";
import imgDawali from "../assets/images/دوالي.png";
import imgQudra from "../assets/images/القدرة.jpg";

import imgKunafa from "../assets/images/كنافة.jpg";
import imgTamriyeh from "../assets/images/تمرية.png";
import imgMamoul from "../assets/images/معمول.png";
import imgKaak from "../assets/images/كعك.png";
import imgHareeseh from "../assets/images/هريسة.png";
import imgQatayef from "../assets/images/قطايق.jpg";

const mainRecipes = [
  {
    name: "المسخن",
    img: imgMusakhan,
    ingredients: "دجاج، بصل، خبز طابون، زيت زيتون، سماق، فلفل أسود، ملح، لوز مقلي.",
    steps: "نقوم بتقطيع البصل وطهيه بزيت الزيتون حتى يذبل، نضيف السماق... "
  },
  {
    name: "المنسف",
    img: imgMansaf,
    ingredients: "لحم خروف، لبن جميد، أرز، خبز شراك، لوز وصنوبر، بهارات.",
    steps: "نذوب الجميد في الماء ونغليه، نطبخ اللحم في اللبن..."
  },
  {
    name: "مفتول",
    img: imgMaftoul,
    ingredients: "حبوب المفتول، مرق دجاج، حمص، بصل، زيت زيتون، بهارات.",
    steps: "نطهو البصل مع الدجاج والحمص ونحضر مرق غني..."
  },
  {
    name: "المقلوبة",
    img: imgMaqlouba,
    ingredients: "دجاج أو لحم، أرز، باذنجان، زهرة، بطاطا، بهارات مشكلة.",
    steps: "نقلي الخضار، نرتبها في قدر مع اللحم أو الدجاج..."
  },
  {
    name: "دوالي",
    img: imgDawali,
    ingredients: "ورق عنب، أرز، لحم مفروم، بصل، بهارات، زيت زيتون، ليمون.",
    steps: "نخلط الحشوة ونلف الورق، نرتبه في قدر مع شرائح البطاطا..."
  },
  {
    name: "القدرة",
    img: imgQudra,
    ingredients: "لحم، حمص، أرز، سمن بلدي، ثوم، بهارات القدرة.",
    steps: "نطهو اللحم، نقلب الأرز مع السمن..."
  }
];

const dessertRecipes = [
  {
    name: "كنافة",
    img: imgKunafa,
    ingredients: "عجينة كنافة، جبنة عكاوي، قطر، سمنة بلدية.",
    steps: "نضع الجبنة بين طبقات الكنافة ونسقيها بالقطر بعد الخبز."
  },
  {
    name: "تمرية",
    img: imgTamriyeh,
    ingredients: "بطاطا، جبنة تمرية، سمنة بلدية، قطر، بهارات.",
    steps: "نطهو البطاطا، نضع الجبنة بين طبقات التمرية، نسقيها بالقطر بعد الخبز."
  },
  {
    name: "معمول",
    img: imgMamoul,
    ingredients: "بطاطا، جبنة معمول، سمنة بلدية، قطر، بهارات.",
    steps: "نطهو البطاطا، نضع الجبنة بين طبقات المعمول، نسقيها بالقطر بعد الخبز."
  },
  {
    name: "كعك",
    img: imgKaak,
    ingredients: "بطاطا، جبنة كعك، سمنة بلدية، قطر، بهارات.",
    steps: "نطهو البطاطا، نضع الجبنة بين طبقات الكعك، نسقيها بالقطر بعد الخبز."
  },
  {
    name: "هريسة",
    img: imgHareeseh,
    ingredients: "بطاطا، جبنة هريسة، سمنة بلدية، قطر، بهارات.",
    steps: "نطهو البطاطا، نضع الجبنة بين طبقات الهريسة، نسقيها بالقطر بعد الخبز."
  },
  {
    name: "قطايق",
    img: imgQatayef,
    ingredients: "بطاطا، جبنة قطايق، سمنة بلدية، قطر، بهارات.",
    steps: "نطهو البطاطا، نضع الجبنة بين طبقات القطايق، نسقيها بالقطر بعد الخبز."
  }
];

const Section = styled.section`
  padding: 20px;
  margin-bottom: 40px;
  border-radius: 12px;
  background-color: ${({ isMain }) => (isMain ? "rgb(241, 244, 241)" : "white")};
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  text-align: center;
  color: #6b8e23;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 10px;
`;

const TabButton = styled.button`
  padding: 10px 18px;
  background-color: ${({ active }) => (active ? " #6b8e23;" : "rgb(120, 139, 81);")};
  color: ${({ active }) => (active ? "white" : "rgb(208, 218, 209)")};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color:rgb(128, 141, 103);
    color: white;
  }
`;

const TabContent = styled.div`
  text-align: center;

  h1 {
    font-size: 2.2rem;
    color: #6b8e23;
    margin-bottom: 15px;
  }

  img {
    width: 250px;
    height: 180px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgb(20, 129, 38);
    margin-bottom: 15px;
  }

  p.wasfa {
    font-size: 1.1rem;
    color: #6b8e23;
    line-height: 1.6;
    margin-bottom: 25px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const OrderButton = styled.button`
  background-color: #6b8e23;
  color: white;
  border: none;
  padding: 14px 40px;
  border-radius: 30px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color:rgb(108, 136, 51);
  }
`;

const RecipeTabs = ({ recipes, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = recipes[selectedIndex];

  return (
    <Section isMain={title === "الأكلات الرئيسية"}>
      <Title>{title}</Title>
      <TabsContainer>
        {recipes.map((recipe, index) => (
          <TabButton
            key={index}
            active={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          >
            {recipe.name}
          </TabButton>
        ))}
      </TabsContainer>

      <TabContent>
        <h1>{current.name}</h1>
        <img src={current.img} alt={current.name} />
        <p className="wasfa">
          المكونات: {current.ingredients}
          <br />
          <br />
          <br />
        </p>
        <p className="wasfa">
          طريقة التحضير: {current.steps}
          <br />
          <br />
          <br />
        </p>
      </TabContent>

      <OrderButton>اطلب الآن</OrderButton>
    </Section>
  );
};

const WasfatPage = () => {
  return (
    <>
      <RecipeTabs recipes={mainRecipes} title="الأكلات الرئيسية" />
      <RecipeTabs recipes={dessertRecipes} title="الحلويات" />
    </>
  );
};

export default WasfatPage;
