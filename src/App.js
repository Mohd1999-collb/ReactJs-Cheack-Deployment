import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Section from "./component/Section";
import "./style/style.css";

const App = () => {
  const arr = [
    {
      title: "Skills",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quae libero deleniti eligendi earum aspernatur? Quibusdam, laudantium enim dicta et harum omnis non mollitia incidunt doloribus cumque beatae exercitationem distinctioLorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quae libero deleniti eligendi earum aspernatur? Quibusdam, laudantium enim dicta et harum omnis non mollitia incidunt doloribus cumque beatae exercitationem distinctio",
    },
    {
      title: "Experience",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quae libero deleniti eligendi earum aspernatur? Quibusdam, laudantium enim dicta et harum omnis non mollitia incidunt doloribus cumque beatae exercitationem distinctioLorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quae libero deleniti eligendi earum aspernatur? Quibusdam, laudantium enim dicta et harum omnis non mollitia incidunt doloribus cumque beatae exercitationem distinctio",
    },
    {
      title: "Education",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quae libero deleniti eligendi earum aspernatur? Quibusdam, laudantium enim dicta et harum omnis non mollitia incidunt doloribus cumque beatae exercitationem distinctioLorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quae libero deleniti eligendi earum aspernatur? Quibusdam, laudantium enim dicta et harum omnis non mollitia incidunt doloribus cumque beatae exercitationem distinctio",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      {arr.map((item, index) => {
        return <Section title={item.title} des={item.des} />;
      })}
      {/* <h1>Hello World</h1>
      <h1>Mohd Talib</h1> */}
    </>
  );
};

export default App;


// git remote add origin https://github.com/Mohd1999-collb/ReactJs-Cheack-Deployment.git
// git branch -M main
// git push -u origin main